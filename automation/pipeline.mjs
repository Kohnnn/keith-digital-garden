#!/usr/bin/env node

import { spawn } from "child_process"
import crypto from "crypto"
import fs from "fs/promises"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.resolve(__dirname, "..")

const PATHS = {
  sourcesInbox: path.join(__dirname, "sources", "inbox"),
  sourcesArchived: path.join(__dirname, "sources", "archived"),
  cacheDir: path.join(__dirname, "raw"),
  cacheHtml: path.join(__dirname, "raw", "html"),
  cacheText: path.join(__dirname, "raw", "text"),
  cacheNormalized: path.join(__dirname, "raw", "normalized"),
  cacheTranscripts: path.join(__dirname, "raw", "transcripts"),
  cacheWeekly: path.join(__dirname, "raw", "weekly"),
  outputPreflight: path.join(__dirname, "output", "preflight"),
  outputReports: path.join(__dirname, "output", "reports"),
  contentSandbox: path.join(REPO_ROOT, "content", "AI_Sandbox"),
  contentOut: path.join(REPO_ROOT, "content", "mark-memo"),
  contentNews: path.join(REPO_ROOT, "content", "mark-memo", "news")
}

const DEFAULT_CONFIG = {
  pplx: {
    apiKeyEnv: "PPLX_API_KEY",
    baseUrl: "https://api.perplexity.ai",
    model: "perplexity/sonar-pro"
  },
  brave: {
    apiKeyEnv: "BRAVE_API_KEY",
    baseUrl: "https://api.search.brave.com/res/v1"
  },
  serper: {
    apiKeyEnv: "SERPER_API_KEY",
    baseUrl: "https://google.serper.dev"
  },
  ytDlp: {
    jsRuntime: "node",
    sleepInterval: 5,
    maxSleepInterval: 10,
    sleepRequests: 3,
    cookiesFromBrowser: "",
    subLangs: "vi,en"
  },
  limits: {
    maxPosts: 100,
    maxYouTubeItems: 200,
    maxSubstackItems: 200
  },
  persona: {
    mix: ["analytical", "reflective", "warm"]
  }
}

const argv = process.argv.slice(2)
const command = argv[0]

const args = new Map()
for (let i = 1; i < argv.length; i += 2) {
  const key = argv[i]
  const value = argv[i + 1]
  if (key && key.startsWith("--")) {
    args.set(key.replace(/^--/, ""), value)
  }
}

const nowIso = () => new Date().toISOString()
const today = () => new Date().toISOString().slice(0, 10)

const ensureDir = async (dirPath) => {
  await fs.mkdir(dirPath, { recursive: true })
}

const fileExists = async (filePath) => {
  try {
    await fs.access(filePath)
    return true
  } catch {
    return false
  }
}

const parseEnvLine = (line) => {
  const trimmed = line.trim()
  if (!trimmed || trimmed.startsWith("#")) return null
  const cleaned = trimmed.replace(/,$/, "")
  let key = ""
  let value = ""

  if (cleaned.includes("=")) {
    const parts = cleaned.split(/=(.+)/)
    key = parts[0]
    value = parts[1] ?? ""
  } else if (cleaned.includes(":")) {
    const parts = cleaned.split(/:(.+)/)
    key = parts[0]
    value = parts[1] ?? ""
  } else {
    return null
  }

  key = key.trim().replace(/^['"]|['"]$/g, "")
  value = value.trim().replace(/^['"]|['"]$/g, "")

  return { key, value }
}

const applyEnvMapping = (key, value) => {
  const rawKey = key.trim()
  const upperKey = rawKey.toUpperCase().replace(/[^A-Z0-9_]/g, "")
  let envKey = ""

  if (upperKey.startsWith("PPLX") || upperKey.startsWith("BRAVE") || upperKey.startsWith("SERPER")) {
    envKey = upperKey
  } else if (rawKey === "apiKey" && value.startsWith("pplx-")) {
    envKey = "PPLX_API_KEY"
  } else if (rawKey === "baseUrl" && value.includes("perplexity")) {
    envKey = "PPLX_BASE_URL"
  } else if (rawKey === "model" && value.includes("perplexity")) {
    envKey = "PPLX_MODEL"
  } else if (rawKey.toLowerCase().includes("brave")) {
    envKey = "BRAVE_API_KEY"
  } else if (rawKey.toLowerCase().includes("serper")) {
    envKey = "SERPER_API_KEY"
  }

  if (!envKey) return
  if (!process.env[envKey]) {
    process.env[envKey] = value
  }
}

const loadDotEnv = async () => {
  const candidates = [path.join(REPO_ROOT, ".env"), path.join(__dirname, ".env")]

  for (const candidate of candidates) {
    if (!(await fileExists(candidate))) continue
    const content = await fs.readFile(candidate, "utf-8")
    const lines = content.split(/\r?\n/)
    for (const line of lines) {
      const parsed = parseEnvLine(line)
      if (!parsed) continue
      applyEnvMapping(parsed.key, parsed.value)
    }
  }
}

const sha1 = (input) => crypto.createHash("sha1").update(input).digest("hex")

const parsePersona = (value, fallback) => {
  if (!value) return fallback
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean)
}

const loadConfig = async () => {
  await loadDotEnv()
  const configPath = args.get("config") || path.join(__dirname, "config.json")
  let config = { ...DEFAULT_CONFIG }
  if (await fileExists(configPath)) {
    const raw = await fs.readFile(configPath, "utf-8")
    const parsed = JSON.parse(raw)
    config = {
      ...config,
      ...parsed,
      pplx: { ...config.pplx, ...parsed.pplx },
      brave: { ...config.brave, ...parsed.brave },
      serper: { ...config.serper, ...parsed.serper },
      ytDlp: { ...config.ytDlp, ...parsed.ytDlp },
      limits: { ...config.limits, ...parsed.limits },
      persona: { ...config.persona, ...parsed.persona }
    }
  }

  const personaOverride = parsePersona(args.get("persona"), config.persona.mix)
  config.persona.mix = personaOverride

  if (process.env.PPLX_BASE_URL) {
    config.pplx.baseUrl = process.env.PPLX_BASE_URL
  }
  if (process.env.PPLX_MODEL) {
    config.pplx.model = process.env.PPLX_MODEL
  }
  if (process.env.BRAVE_BASE_URL) {
    config.brave.baseUrl = process.env.BRAVE_BASE_URL
  }
  if (process.env.SERPER_BASE_URL) {
    config.serper.baseUrl = process.env.SERPER_BASE_URL
  }

  if (process.env.YT_DLP_COOKIES_FROM_BROWSER) {
    config.ytDlp.cookiesFromBrowser = process.env.YT_DLP_COOKIES_FROM_BROWSER
  }
  if (process.env.YT_DLP_SUB_LANGS) {
    config.ytDlp.subLangs = process.env.YT_DLP_SUB_LANGS
  }

  if (config.pplx.model.includes("/")) {
    config.pplx.model = config.pplx.model.split("/").pop() || config.pplx.model
  }

  return config
}

const getInputUrls = async () => {
  const urlArg = args.get("url")
  if (urlArg) return [urlArg]
  return await readUrlsFromInbox()
}

const readUrlsFromInbox = async () => {
  const files = await fs.readdir(PATHS.sourcesInbox)
  const urlSet = new Set()

  for (const file of files) {
    if (file.toLowerCase().includes("readme")) continue
    const ext = path.extname(file).toLowerCase()
    if (!ext || ext === ".txt" || ext === ".md") {
      const fullPath = path.join(PATHS.sourcesInbox, file)
      const content = await fs.readFile(fullPath, "utf-8")
      const lines = content.split(/\r?\n/)
      for (const line of lines) {
        const trimmed = line.trim()
        if (!trimmed || trimmed.startsWith("#")) continue
        if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
          urlSet.add(trimmed)
        }
      }
    }
  }

  return Array.from(urlSet)
}

const detectSourceType = (url) => {
  const lower = url.toLowerCase()
  if (lower.includes("youtube.com") || lower.includes("youtu.be")) return "youtube"
  if (lower.includes("substack.com")) return "substack"
  return "web"
}

const runCommand = (cmd, argsList) =>
  new Promise((resolve, reject) => {
    const child = spawn(cmd, argsList, { stdio: ["ignore", "pipe", "pipe"] })
    let stdout = ""
    let stderr = ""

    child.stdout.on("data", (data) => {
      stdout += data.toString()
    })

    child.stderr.on("data", (data) => {
      stderr += data.toString()
    })

    child.on("close", (code) => {
      if (code === 0) {
        resolve({ stdout, stderr })
      } else {
        reject(new Error(stderr || `Command failed: ${cmd}`))
      }
    })
  })

const buildYtDlpArgs = (config, argsList) => {
  const extra = []
  if (config.ytDlp?.jsRuntime) {
    extra.push("--js-runtimes", config.ytDlp.jsRuntime)
  }
  if (config.ytDlp?.sleepInterval) {
    extra.push("--sleep-interval", String(config.ytDlp.sleepInterval))
  }
  if (config.ytDlp?.maxSleepInterval) {
    extra.push("--max-sleep-interval", String(config.ytDlp.maxSleepInterval))
  }
  if (config.ytDlp?.sleepRequests) {
    extra.push("--sleep-requests", String(config.ytDlp.sleepRequests))
  }
  if (config.ytDlp?.cookiesFromBrowser) {
    extra.push("--cookies-from-browser", config.ytDlp.cookiesFromBrowser)
  }
  if (config.ytDlp?.subLangs) {
    extra.push("--sub-langs", config.ytDlp.subLangs)
  }
  return [...extra, ...argsList]
}

const runYtDlp = (config, argsList) => runCommand("yt-dlp", buildYtDlpArgs(config, argsList))

const writeTranscriptLog = async (line) => {
  const reportPath = path.join(PATHS.outputReports, `transcript-log-${today()}.md`)
  await ensureDir(PATHS.outputReports)
  await fs.appendFile(reportPath, `${line}\n`, "utf-8")
}

const fetchHtml = async (url) => {
  const response = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (compatible; QuartzBot/1.0)"
    }
  })
  if (!response.ok) {
    throw new Error(`Fetch failed: ${response.status} ${response.statusText}`)
  }
  return await response.text()
}

const extractMeta = (html, keys) => {
  for (const key of keys) {
    const pattern = new RegExp(
      `<meta[^>]+(?:property|name)=["']${key}["'][^>]+content=["']([^"']+)["'][^>]*>`,
      "i"
    )
    const match = html.match(pattern)
    if (match && match[1]) return match[1].trim()
  }
  return ""
}

const extractTitle = (html) => {
  const match = html.match(/<title>([^<]+)<\/title>/i)
  return match && match[1] ? match[1].trim() : ""
}

const stripHtml = (html) => {
  const noScript = html.replace(/<script[\s\S]*?<\/script>/gi, " ")
  const noStyle = noScript.replace(/<style[\s\S]*?<\/style>/gi, " ")
  const text = noStyle.replace(/<[^>]+>/g, " ")
  return text.replace(/\s+/g, " ").trim()
}

const truncateText = (text, maxLength) => {
  if (!text) return ""
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength)
}

const stripVttToText = (content) => {
  if (!content) return ""
  const lines = content.split(/\r?\n/)
  const cleaned = lines
    .map((line) => line.trim())
    .filter((line) => {
      if (!line) return false
      if (line === "WEBVTT") return false
      if (line.startsWith("NOTE")) return false
      if (line.startsWith("Kind:")) return false
      if (line.startsWith("Language:")) return false
      if (/^\d+$/.test(line)) return false
      if (/^\d{2}:\d{2}:\d{2}\.\d{3}\s+-->/.test(line)) return false
      return true
    })
    .map((line) => line.replace(/<[^>]+>/g, "").trim())
    .filter(Boolean)
  return cleaned.join(" ").replace(/\s+/g, " ").trim()
}

const STOPWORDS = new Set([
  "the",
  "and",
  "for",
  "that",
  "with",
  "this",
  "from",
  "have",
  "has",
  "are",
  "was",
  "were",
  "you",
  "your",
  "into",
  "about",
  "will",
  "just",
  "they",
  "them",
  "their",
  "its",
  "but",
  "not",
  "can",
  "could",
  "should",
  "would",
  "like",
  "more",
  "less",
  "than",
  "then",
  "when",
  "what",
  "who",
  "how",
  "why",
  "over",
  "under",
  "after",
  "before",
  "during",
  "still",
  "also",
  "here",
  "there",
  "today",
  "week",
  "market",
  "markets"
])

const extractTopTerms = (text, limit = 6) => {
  if (!text) return []
  const tokens = text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, " ")
    .split(/\s+/)
    .map((token) => token.trim())
    .filter((token) => token.length > 3 && !STOPWORDS.has(token))

  const freq = new Map()
  for (const token of tokens) {
    freq.set(token, (freq.get(token) || 0) + 1)
  }

  return Array.from(freq.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([token]) => token)
}

const extractSentences = (text, limit = 4) => {
  if (!text) return []
  const sentences = text
    .replace(/\s+/g, " ")
    .split(/(?<=[\.\!\?])\s+/)
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length > 40 && sentence.length < 220)

  const unique = []
  const seen = new Set()
  for (const sentence of sentences) {
    const key = sentence.toLowerCase()
    if (seen.has(key)) continue
    seen.add(key)
    unique.push(sentence)
    if (unique.length >= limit) break
  }

  return unique
}

const splitSentences = (text) => {
  if (!text) return []
  const normalized = text.replace(/\s+/g, " ")
  const parts = normalized.split(/(?<=[\.!\?])\s+/)
  if (parts.length > 1) return parts
  return normalized.split(/\s+-\s+|\s+\|\s+/)
}

const extractSentencesByKeywords = (text, keywords, limit = 4) => {
  if (!text) return []
  const lowerKeywords = keywords.map((keyword) => keyword.toLowerCase())
  const sentences = splitSentences(text)
  const hits = []
  const seen = new Set()
  for (const sentence of sentences) {
    const trimmed = sentence.trim()
    if (trimmed.length < 50 || trimmed.length > 240) continue
    const lower = trimmed.toLowerCase()
    if (!lowerKeywords.some((keyword) => lower.includes(keyword))) continue
    if (seen.has(lower)) continue
    seen.add(lower)
    hits.push(trimmed)
    if (hits.length >= limit) break
  }
  return hits
}

const extractNumericSentences = (text, limit = 3) => {
  if (!text) return []
  const sentences = splitSentences(text)
  const hits = []
  const seen = new Set()
  for (const sentence of sentences) {
    const trimmed = sentence.trim()
    if (trimmed.length < 40 || trimmed.length > 240) continue
    if (!/\d/.test(trimmed)) continue
    const lower = trimmed.toLowerCase()
    if (seen.has(lower)) continue
    seen.add(lower)
    hits.push(trimmed)
    if (hits.length >= limit) break
  }
  return hits
}

const AD_TERMS = [
  "discount",
  "subscribe",
  "sponsor",
  "promo",
  "affiliate",
  "last day",
  "sale",
  "coupon",
  "link",
  "discord",
  "code",
  "apex",
  "funded",
  "signup",
  "register",
  "đăng kí",
  "đăng ký",
  "tài khoản",
  "giveaway",
  "khuyến mãi",
  "mã giảm",
  "ưu đãi"
]

const isAdSentence = (sentence) => {
  const lower = sentence.toLowerCase()
  return AD_TERMS.some((term) => lower.includes(term))
}

const isRepetitive = (sentence) => {
  const tokens = sentence.toLowerCase().split(/\s+/).filter(Boolean)
  let repeats = 0
  for (let i = 1; i < tokens.length; i += 1) {
    if (tokens[i] === tokens[i - 1]) repeats += 1
  }
  return repeats >= 3
}

const cleanTranscript = (text) => {
  const sentences = splitSentences(text)
  const cleaned = []
  for (const sentence of sentences) {
    const trimmed = sentence.trim()
    if (trimmed.length < 40 || trimmed.length > 260) continue
    if (isAdSentence(trimmed)) continue
    if (isRepetitive(trimmed)) continue
    cleaned.push(trimmed)
  }
  return cleaned.join(" ")
}

const buildFocusedReportFromTranscripts = (
  weekMeta,
  focusText,
  macroText,
  focusTitles,
  macroTitles
) => {
  const cleanedFocus = cleanTranscript(focusText)
  const cleanedMacro = cleanTranscript(macroText)
  const titleText = (focusTitles || []).join(" ")
  const macroTitleText = (macroTitles || []).join(" ")
  const summarySource = cleanedFocus.length > 0 ? cleanedFocus : titleText
  const macroSource = cleanedMacro.length > 0 ? cleanedMacro : macroTitleText

  const signalMatches = (text, signals, limit = 4) => {
    const lower = text.toLowerCase()
    const bullets = []
    for (const signal of signals) {
      if (signal.keywords.some((keyword) => lower.includes(keyword))) {
        bullets.push(signal.bullet)
      }
      if (bullets.length >= limit) break
    }
    return bullets
  }

  const summarySignals = [
    { keywords: ["fomc", "fed", "lãi suất"], bullet: "Rates stayed the weekly ceiling; the Fed narrative still anchors risk." },
    { keywords: ["trái phiếu", "yield", "bond"], bullet: "Bond auctions/yields were the pressure point behind the tape." },
    { keywords: ["tín dụng", "credit"], bullet: "Consumer credit stress showed up beneath the surface." },
    { keywords: ["lạm phát", "cpi", "ppi", "inflation"], bullet: "Inflation stayed sticky; disinflation is uneven." },
    { keywords: ["việc làm", "jobs", "thất nghiệp"], bullet: "Labor data stayed mixed, keeping policy uncertainty high." },
    { keywords: ["tesla", "nvda", "nvidia", "apple", "meta"], bullet: "Mega‑cap leadership drove the tape more than breadth." },
    { keywords: ["trung quốc", "china"], bullet: "China headlines remained a macro overhang." },
    { keywords: ["vàng", "gold"], bullet: "Gold acted as a risk barometer, not a trend signal." },
    { keywords: ["khủng bố", "terror"], bullet: "Geopolitical risk premium briefly resurfaced — khá căng." }
  ]

  const ratesSignals = [
    { keywords: ["lãi suất", "rate", "fomc", "fed"], bullet: "Rate expectations still dominate risk appetite." },
    { keywords: ["trái phiếu", "yield", "bond"], bullet: "Bond tone stayed fragile, keeping equity risk capped." },
    { keywords: ["thanh khoản", "liquidity"], bullet: "Liquidity is the real throttle this week." },
    { keywords: ["tín dụng", "credit"], bullet: "Credit data hints at stress under the surface." }
  ]

  const equitySignals = [
    { keywords: ["chứng khoán", "cổ phiếu", "stock", "equity"], bullet: "Equities looked selective, not broad‑based." },
    { keywords: ["nvda", "nvidia", "tesla", "apple", "meta"], bullet: "Single‑name leadership mattered more than indices." },
    { keywords: ["earnings", "kết quả"], bullet: "Earnings tone still decides the next leg." }
  ]

  const commoditySignals = [
    { keywords: ["usd", "dollar", "dxy", "tỷ giá"], bullet: "USD direction set the macro mood." },
    { keywords: ["vàng", "gold"], bullet: "Gold tracked risk‑off chatter more than growth." },
    { keywords: ["dầu", "oil", "energy"], bullet: "Energy headlines kept volatility elevated." }
  ]

  const flowSignals = [
    { keywords: ["dòng tiền", "flow", "position"], bullet: "Flows felt tactical, not conviction." },
    { keywords: ["volatility", "vix"], bullet: "Volatility kept positioning cautious." },
    { keywords: ["options", "gamma"], bullet: "Options positioning continues to shape intraday moves." }
  ]

  const cryptoSignals = [
    { keywords: ["bitcoin", "btc"], bullet: "Bitcoin remained the macro pulse for crypto risk." },
    { keywords: ["eth", "ethereum"], bullet: "ETH sensitivity to liquidity stayed high." },
    { keywords: ["stablecoin"], bullet: "Stablecoin flow was a key liquidity barometer." },
    { keywords: ["dominance"], bullet: "BTC dominance framed the altcoin risk budget." },
    { keywords: ["hash", "on-chain"], bullet: "On‑chain activity signaled caution rather than breakout." }
  ]

  const overallSummary = signalMatches(summarySource, summarySignals, 4)
  const commentary = buildCommentaryFromSignals(`${titleText} ${summarySource}`)
  const ratesLiquidity = signalMatches(summarySource, ratesSignals, 3)
  const equities = signalMatches(summarySource, equitySignals, 3)
  const commoditiesFx = signalMatches(summarySource, commoditySignals, 3)
  const positioningFlow = signalMatches(summarySource, flowSignals, 3)
  const cryptoMacro = signalMatches(macroSource, cryptoSignals, 4)

  const outlook = buildOutlookFromTerms(extractTopTerms(macroSource, 5), "liquidity")
  const opener = overallSummary[0] || "Weekly tape notes, khá căng but still holding."

  return {
    opener,
    overallSummary,
    commentary,
    ratesLiquidity,
    equities,
    commoditiesFx,
    cryptoMacro,
    positioningFlow,
    outlook
  }
}

const titleToBullet = (title) => {
  if (!title) return ""
  return title.replace(/\s+/g, " ").trim()
}

const buildTitleBullets = (sources, limit = 5) => {
  if (!Array.isArray(sources)) return []
  return sources
    .map((source) => titleToBullet(source.title))
    .filter(Boolean)
    .slice(0, limit)
}

const buildCommentaryFromTerms = (terms) => {
  const filtered = (terms || []).filter(Boolean)
  if (filtered.length === 0) {
    return [
      "Flow feels tactical, not conviction.",
      "I’m watching liquidity and positioning more than narratives.",
      "Price action looks reactive, not trend‑confirming — khá căng." 
    ]
  }

  const head = filtered.slice(0, 3).join(", ")
  const tail = filtered.slice(3, 6).join(", ")

  return [
    `The week pivots around ${head}.`,
    `Pressure sits in ${tail || "liquidity, valuation, expectations"}.`,
    "Flow stays tactical; I don’t see long‑duration conviction yet."
  ]
}

const buildCommentaryFromSignals = (text) => {
  const lower = text.toLowerCase()
  const lines = []
  if (lower.includes("tesla")) {
    lines.push("Steve kept Tesla as a sentiment proxy; weakness there leaks into growth.")
  }
  if (lower.includes("nvda") || lower.includes("nvidia")) {
    lines.push("NVDA stayed the liquidity magnet; any stall there hits breadth fast.")
  }
  if (lower.includes("trung quốc") || lower.includes("china")) {
    lines.push("China headlines kept cross‑asset risk capped.")
  }
  if (lower.includes("khủng bố") || lower.includes("terror")) {
    lines.push("Geopolitical risk premium flashed early‑week, then faded.")
  }
  if (lower.includes("fomc") || lower.includes("fed")) {
    lines.push("FOMC tone remains the macro anchor; rate path still restrictive.")
  }
  if (lower.includes("tín dụng") || lower.includes("credit")) {
    lines.push("Credit stress is creeping into the conversation.")
  }
  if (lines.length === 0) {
    lines.push("Flow feels tactical, not conviction.")
  }
  return lines.slice(0, 3)
}

const buildNarrativeFromSignals = (text) => {
  const lower = text.toLowerCase()
  const sentences = []
  if (lower.includes("tesla") || lower.includes("nvda") || lower.includes("nvidia")) {
    sentences.push(
      "My read: leadership is narrow; when Tesla/NVDA wobble, momentum fades fast."
    )
  }
  if (lower.includes("trung quốc") || lower.includes("china")) {
    sentences.push("China headlines are a volatility tax, capping follow‑through.")
  }
  if (lower.includes("fomc") || lower.includes("fed") || lower.includes("lãi suất")) {
    sentences.push("Rates still set the ceiling; any repricing spills into risk assets.")
  }
  if (lower.includes("tín dụng") || lower.includes("credit")) {
    sentences.push("Credit stress is the slow leak I’m watching under the surface.")
  }
  if (sentences.length === 0) {
    sentences.push("My read: the tape feels tactical, not trend‑confirming.")
  }
  return sentences.slice(0, 3)
}

const buildOutlookFromTerms = (terms, fallbackTerm) => {
  const focus = terms && terms.length > 0 ? terms[0] : fallbackTerm
  return [
    `Next week, the focus stays on ${focus || "liquidity"}.`,
    "If the bounce fades, I’ll stay defensive rather than chase."
  ]
}

const ensureMinBullets = (lines, extras, min) => {
  const output = [...lines]
  for (const extra of extras) {
    if (output.length >= min) break
    output.push(extra)
  }
  return output
}

const parseDate = (value) => {
  if (!value) return null
  const date = new Date(value)
  return Number.isNaN(date.getTime()) ? null : date
}

const normalizeChannelKey = (value) => {
  if (!value) return ""
  return value.toLowerCase().replace(/[^a-z0-9@]/g, "")
}

const extractChannelHandle = (value) => {
  if (!value) return ""
  try {
    const url = new URL(value)
    const match = url.pathname.match(/@[^/]+/)
    if (match) return normalizeChannelKey(match[0])
  } catch {
    // ignore
  }
  return normalizeChannelKey(value)
}

const channelMatches = (record, channelArg) => {
  if (!channelArg) return false
  const argKey = extractChannelHandle(channelArg)
  const sourceUrl = record.meta?.sourceChannelUrl || ""
  const sourceKey = extractChannelHandle(sourceUrl)
  const authorKey = normalizeChannelKey(record.author || "")

  if (channelArg.startsWith("http")) {
    if (sourceUrl && sourceUrl === channelArg) return true
    if (sourceKey && argKey && sourceKey === argKey) return true
  }

  return !!(argKey && (authorKey.includes(argKey) || sourceKey.includes(argKey)))
}

const toIsoWeekKey = (date) => {
  const temp = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
  const day = temp.getUTCDay() || 7
  temp.setUTCDate(temp.getUTCDate() + 4 - day)
  const yearStart = new Date(Date.UTC(temp.getUTCFullYear(), 0, 1))
  const weekNo = Math.ceil(((temp - yearStart) / 86400000 + 1) / 7)
  const week = String(weekNo).padStart(2, "0")
  return `${temp.getUTCFullYear()}-W${week}`
}

const getIsoWeekRange = (date) => {
  const temp = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
  const day = temp.getUTCDay() || 7
  temp.setUTCDate(temp.getUTCDate() + 4 - day)
  const weekStart = new Date(temp)
  weekStart.setUTCDate(temp.getUTCDate() - 3)
  const weekEnd = new Date(weekStart)
  weekEnd.setUTCDate(weekStart.getUTCDate() + 6)
  return {
    start: weekStart.toISOString().slice(0, 10),
    end: weekEnd.toISOString().slice(0, 10)
  }
}

const parseSubstackFeed = (xml, limit) => {
  const items = []
  const itemRegex = /<item>([\s\S]*?)<\/item>/gi
  let match
  while ((match = itemRegex.exec(xml)) && items.length < limit) {
    const item = match[1]
    const linkMatch = item.match(/<link>([^<]+)<\/link>/i)
    if (linkMatch && linkMatch[1]) items.push(linkMatch[1].trim())
  }
  return items
}

const normalizeWebSource = async (url, id) => {
  const html = await fetchHtml(url)
  const title = extractMeta(html, ["og:title", "twitter:title"]) || extractTitle(html)
  const description = extractMeta(html, ["og:description", "description"]) || ""
  const ogImage = extractMeta(html, ["og:image", "twitter:image"]) || ""
  const publishedAt = extractMeta(html, ["article:published_time", "publish_date", "date"]) || ""

  const htmlPath = path.join(PATHS.cacheHtml, `${id}.html`)
  const textPath = path.join(PATHS.cacheText, `${id}.txt`)

  await fs.writeFile(htmlPath, html, "utf-8")
  await fs.writeFile(textPath, stripHtml(html), "utf-8")

  return {
    id,
    url,
    sourceType: "web",
    title,
    author: "",
    publishedAt: publishedAt ? publishedAt.slice(0, 10) : "",
    fetchedAt: nowIso(),
    ogImage,
    textPath,
    htmlPath,
    transcriptPath: "",
    meta: {
      siteName: extractMeta(html, ["og:site_name"]) || "",
      description,
      tags: []
    }
  }
}

const normalizeSubstackSource = async (url, id, config) => {
  const lower = url.toLowerCase()
  const host = new URL(url).origin
  if (lower.endsWith("/archive") || lower === host + "/") {
    const feedUrl = `${host}/feed`
    const xml = await fetchHtml(feedUrl)
    const links = parseSubstackFeed(xml, config.limits.maxSubstackItems)
    return links.map((link) => ({ url: link }))
  }

  return [
    {
      ...(await normalizeWebSource(url, id)),
      sourceType: "substack"
    }
  ]
}

const buildYouTubeRecord = (payload, yearFilter, sourceUrl) => {
  const url = payload.webpage_url || payload.original_url || payload.url
  if (!url) return null

  const publishedAt = payload.upload_date
    ? `${payload.upload_date.slice(0, 4)}-${payload.upload_date.slice(4, 6)}-${payload.upload_date.slice(6, 8)}`
    : ""

  if (yearFilter) {
    const yearValue = publishedAt ? Number(publishedAt.slice(0, 4)) : null
    if (!yearValue || yearValue !== Number(yearFilter)) {
      return null
    }
  }

  return {
    id: sha1(url),
    url,
    sourceType: "youtube",
    title: payload.title || "",
    author: payload.uploader || payload.channel || "",
    publishedAt,
    fetchedAt: nowIso(),
    ogImage: payload.thumbnail || "",
    textPath: "",
    htmlPath: "",
    transcriptPath: "",
    meta: {
      siteName: "YouTube",
      description: payload.description || "",
      tags: payload.tags || [],
      sourceChannelUrl: sourceUrl || ""
    }
  }
}

const normalizeYouTubeSource = async (
  url,
  config,
  yearFilter,
  dateAfter,
  dateBefore,
  playlistStart,
  playlistEnd,
  playlistReverse
) => {
  const args = ["--dump-json", "--skip-download"]
  if (dateAfter || dateBefore) {
    if (dateAfter) args.push("--dateafter", dateAfter)
    if (dateBefore) args.push("--datebefore", dateBefore)
  } else if (yearFilter) {
    args.push("--dateafter", `${yearFilter}0101`, "--datebefore", `${yearFilter}1231`)
  }
  if (playlistStart) args.push("--playlist-start", String(playlistStart))
  if (playlistEnd) args.push("--playlist-end", String(playlistEnd))
  if (playlistReverse) args.push("--playlist-reverse")
  args.push(url)

  const { stdout } = await runYtDlp(config, args)
  const lines = stdout.split(/\r?\n/).filter(Boolean)

  const records = []
  for (const line of lines) {
    try {
      const payload = JSON.parse(line)
      const record = buildYouTubeRecord(payload, yearFilter, url)
      if (record) records.push(record)
    } catch {
      // skip malformed lines
    }
  }

  return records.slice(0, config.limits.maxYouTubeItems)
}

const isPreferredTranscript = (fileName) => {
  return /\.vi(\.|-)/.test(fileName) || fileName.includes(".vi.vtt")
}

const findTranscriptPath = async (id) => {
  const files = await fs.readdir(PATHS.cacheTranscripts)
  const matches = files.filter((file) => file.startsWith(id) && file.endsWith(".vtt"))
  if (matches.length === 0) return ""

  const preferred = matches.find((file) => isPreferredTranscript(file))
  const selected = preferred || matches[0]
  return path.join(PATHS.cacheTranscripts, selected)
}

const ensureTranscript = async (config, record) => {
  if (record.sourceType !== "youtube") return record

  if (record.transcriptPath && (await fileExists(record.transcriptPath))) {
    const fileName = path.basename(record.transcriptPath)
    if (isPreferredTranscript(fileName)) return record
  }

  await ensureDir(PATHS.cacheTranscripts)

  const outputTemplate = path.join(PATHS.cacheTranscripts, `${record.id}.%(ext)s`)

  const args = [
    "--write-sub",
    "--write-auto-sub",
    "--skip-download",
    "--sub-format",
    "vtt",
    "-o",
    outputTemplate,
    record.url
  ]

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      await runYtDlp(config, args)
      break
    } catch (error) {
      await writeTranscriptLog(`fail: ${record.url} attempt ${attempt} ${error.message}`)
      if (attempt === 3) return record
      await sleep(4000 * attempt)
    }
  }

  const resolvedTranscript = await findTranscriptPath(record.id)
  if (resolvedTranscript) {
    record.transcriptPath = resolvedTranscript
    const textPath = path.join(PATHS.cacheTranscripts, `${record.id}.txt`)
    if (!(await fileExists(textPath))) {
      const vtt = await fs.readFile(resolvedTranscript, "utf-8")
      const text = stripVttToText(vtt)
      if (text) {
        await fs.writeFile(textPath, text, "utf-8")
        record.transcriptTextPath = textPath
      }
    } else {
      record.transcriptTextPath = textPath
    }
    const recordPath = path.join(PATHS.cacheNormalized, `${record.id}.json`)
    await fs.writeFile(recordPath, JSON.stringify(record, null, 2), "utf-8")
    await writeTranscriptLog(`ok: ${record.url} ${resolvedTranscript}`)
  }

  return record
}

const getTranscriptText = async (record) => {
  if (record.transcriptTextPath && (await fileExists(record.transcriptTextPath))) {
    return await fs.readFile(record.transcriptTextPath, "utf-8")
  }

  if (!record.transcriptPath || !(await fileExists(record.transcriptPath))) {
    return ""
  }

  const textPath = path.join(PATHS.cacheTranscripts, `${record.id}.txt`)
  if (await fileExists(textPath)) {
    const existing = await fs.readFile(textPath, "utf-8")
    return existing
  }

  const vtt = await fs.readFile(record.transcriptPath, "utf-8")
  const text = stripVttToText(vtt)

  if (text) {
    await fs.writeFile(textPath, text, "utf-8")
    record.transcriptTextPath = textPath
    const recordPath = path.join(PATHS.cacheNormalized, `${record.id}.json`)
    await fs.writeFile(recordPath, JSON.stringify(record, null, 2), "utf-8")
  }

  return text
}

const fetchYouTubeMetadata = async (url, id, yearFilter) => {
  const { stdout } = await runYtDlp(config, ["--dump-json", "--skip-download", url])
  const payload = JSON.parse(stdout)

  const publishedAt = payload.upload_date
    ? `${payload.upload_date.slice(0, 4)}-${payload.upload_date.slice(4, 6)}-${payload.upload_date.slice(6, 8)}`
    : ""

  if (yearFilter) {
    const yearValue = publishedAt ? Number(publishedAt.slice(0, 4)) : null
    if (!yearValue || yearValue !== Number(yearFilter)) {
      return null
    }
  }

  const transcriptPath = path.join(PATHS.cacheTranscripts, `${id}.vtt`)

  try {
    await runYtDlp(config, [
      "--write-sub",
      "--write-auto-sub",
      "--skip-download",
      "--sub-format",
      "vtt",
      "-o",
      transcriptPath.replace(/\.vtt$/, ".%(ext)s"),
      url
    ])
  } catch {
    // transcripts optional
  }

  const resolvedTranscript = await findTranscriptPath(id)

  return {
    id,
    url,
    sourceType: "youtube",
    title: payload.title || "",
    author: payload.uploader || payload.channel || "",
    publishedAt,
    fetchedAt: nowIso(),
    ogImage: payload.thumbnail || "",
    textPath: "",
    htmlPath: "",
    transcriptPath: resolvedTranscript,
    meta: {
      siteName: "YouTube",
      description: payload.description || "",
      tags: payload.tags || []
    }
  }
}

const normalizeSources = async (urls, config, options = {}) => {
  const types = options.types || null
  const yearFilter = options.year || null
  const dateAfter = options.dateAfter || null
  const dateBefore = options.dateBefore || null
  const playlistStart = options.playlistStart || null
  const playlistEnd = options.playlistEnd || null
  const playlistReverse = options.playlistReverse || false
  await ensureDir(PATHS.cacheHtml)
  await ensureDir(PATHS.cacheText)
  await ensureDir(PATHS.cacheNormalized)
  await ensureDir(PATHS.cacheTranscripts)

  const normalized = []

  for (const url of urls) {
    const sourceType = detectSourceType(url)
    if (types && !types.includes(sourceType)) {
      continue
    }
    const id = sha1(url)
    const cachePath = path.join(PATHS.cacheNormalized, `${id}.json`)

    if (await fileExists(cachePath)) {
      const cached = JSON.parse(await fs.readFile(cachePath, "utf-8"))
      normalized.push(cached)
      continue
    }

    if (sourceType === "youtube") {
      const expanded = await normalizeYouTubeSource(
        url,
        config,
        yearFilter,
        dateAfter,
        dateBefore,
        playlistStart,
        playlistEnd,
        playlistReverse
      )
      for (const record of expanded) {
        const entryCache = path.join(PATHS.cacheNormalized, `${record.id}.json`)
        if (await fileExists(entryCache)) {
          const cached = JSON.parse(await fs.readFile(entryCache, "utf-8"))
          normalized.push(cached)
          continue
        }
        await fs.writeFile(entryCache, JSON.stringify(record, null, 2), "utf-8")
        normalized.push(record)
      }
      continue
    }

    if (sourceType === "substack") {
      const expanded = await normalizeSubstackSource(url, id, config)
      for (const entry of expanded) {
        const entryId = sha1(entry.url)
        const entryCache = path.join(PATHS.cacheNormalized, `${entryId}.json`)
        if (await fileExists(entryCache)) {
          const cached = JSON.parse(await fs.readFile(entryCache, "utf-8"))
          normalized.push(cached)
          continue
        }
        const meta = await normalizeWebSource(entry.url, entryId)
        meta.sourceType = "substack"
        await fs.writeFile(entryCache, JSON.stringify(meta, null, 2), "utf-8")
        normalized.push(meta)
      }
      continue
    }

    const meta = await normalizeWebSource(url, id)
    await fs.writeFile(cachePath, JSON.stringify(meta, null, 2), "utf-8")
    normalized.push(meta)
  }

  return normalized
}

const callPplx = async (config, messages) => {
  const apiKey = process.env[config.pplx.apiKeyEnv]
  if (!apiKey) return ""

  const response = await fetch(new URL("/chat/completions", config.pplx.baseUrl), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: config.pplx.model,
      messages,
      temperature: 0.3
    })
  })

  if (!response.ok) {
    const details = await response.text()
    throw new Error(`Perplexity error: ${response.status} ${details}`)
  }

  const payload = await response.json()
  return payload.choices?.[0]?.message?.content || ""
}

const extractJson = (text) => {
  const match = text.match(/\{[\s\S]*\}/)
  if (!match) return null
  try {
    return JSON.parse(match[0])
  } catch {
    return null
  }
}

const buildEvidencePack = async (config, record) => {
  const sourceText = record.textPath ? await fs.readFile(record.textPath, "utf-8") : ""
  const transcript = record.transcriptPath && (await fileExists(record.transcriptPath))
    ? await fs.readFile(record.transcriptPath, "utf-8")
    : ""

  const trimmedSource = truncateText(sourceText, 12000)
  const trimmedTranscript = truncateText(transcript, 12000)

  const system =
    "You are a careful research assistant. Extract facts and short quotes. Do not editorialize."

  const user = `Summarize the source below. Return strict JSON with keys: summary (3-5 bullets), quotes (2-4 short quotes), tags (3-6), thesis (1 line), workingTitles (2-3), imageQuery (short phrase).\n\nSOURCE:\n${record.title}\n${record.author}\n${record.publishedAt}\n${record.url}\n${trimmedSource || trimmedTranscript}`

  const response = await callPplx(config, [
    { role: "system", content: system },
    { role: "user", content: user }
  ])

  const parsed = extractJson(response)
  if (parsed) return parsed

  return {
    summary: [],
    quotes: [],
    tags: record.meta?.tags || [],
    thesis: "",
    workingTitles: [record.title || ""],
    imageQuery: ""
  }
}

const createPreflight = async (config, records, limit) => {
  const entries = []

  for (const record of records.slice(0, limit)) {
    const evidence = await buildEvidencePack(config, record)
    const finalTitle = evidence.workingTitles?.[0] || record.title || "Untitled"
    const draftSlug = slugify(finalTitle)

    entries.push({
      id: record.id,
      url: record.url,
      title: finalTitle,
      thesis: evidence.thesis || "",
      tags: evidence.tags || [],
      draft_path: `content/AI_Sandbox/${draftSlug}.md`,
      image_query: evidence.imageQuery || ""
    })
  }

  const pack = {
    approved: false,
    generated: nowIso(),
    persona_mix: config.persona.mix,
    count: entries.length,
    entries
  }

  return pack
}

const slugify = (text) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 80)
}

const writePreflight = async (pack) => {
  await ensureDir(PATHS.outputPreflight)

  const jsonPath = path.join(PATHS.outputPreflight, "preflight-latest.json")
  const mdPath = path.join(PATHS.outputPreflight, "preflight-latest.md")

  const mdLines = [
    "---",
    `approved: ${pack.approved}`,
    `generated: ${pack.generated}`,
    `persona_mix: [${pack.persona_mix.join(", ")}]`,
    `count: ${pack.count}`,
    "---",
    "# Preflight Pack",
    "",
    "Flip approved: true when ready."
  ]

  for (const entry of pack.entries) {
    mdLines.push("", `- id: ${entry.id}`)
    mdLines.push(`  url: ${entry.url}`)
    mdLines.push(`  title: ${entry.title}`)
    mdLines.push(`  thesis: ${entry.thesis}`)
    mdLines.push(`  tags: [${entry.tags.join(", ")}]`)
    mdLines.push(`  draft_path: ${entry.draft_path}`)
  }

  await fs.writeFile(jsonPath, JSON.stringify(pack, null, 2), "utf-8")
  await fs.writeFile(mdPath, mdLines.join("\n"), "utf-8")

  return { jsonPath, mdPath }
}

const readPreflightApproval = async (mdPath) => {
  if (!(await fileExists(mdPath))) return false
  const content = await fs.readFile(mdPath, "utf-8")
  return content.includes("approved: true")
}

const searchBraveImages = async (config, query) => {
  const apiKey = process.env[config.brave.apiKeyEnv]
  if (!apiKey) return []

  const url = new URL("/images/search", config.brave.baseUrl)
  url.searchParams.set("q", query)
  url.searchParams.set("count", "5")

  const response = await fetch(url, {
    headers: {
      "X-Subscription-Token": apiKey
    }
  })

  if (!response.ok) {
    return []
  }

  const payload = await response.json()
  return payload.results || []
}

const REFERENCE_KEYWORDS = [
  "stock",
  "stocks",
  "equity",
  "equities",
  "bond",
  "bonds",
  "yield",
  "yields",
  "treasury",
  "auction",
  "fed",
  "federal reserve",
  "inflation",
  "cpi",
  "ppi",
  "pce",
  "jobs",
  "payroll",
  "employment",
  "gdp",
  "rates",
  "dollar",
  "usd",
  "oil",
  "energy",
  "market",
  "markets",
  "credit",
  "liquidity",
  "earnings",
  "retail",
  "sales",
  "tariff",
  "trade"
]

const REFERENCE_BLOCKED_PATTERNS = [
  /\/opinion\//i,
  /\/newsletters\//i,
  /\/videos\//i,
  /\/graphics\//i,
  /\/podcasts\//i,
  /\/live\//i,
  /\/interactive\//i
]

const isReferenceCandidate = (item) => {
  const url = item?.url || ""
  const title = item?.title || ""
  const snippet = item?.snippet || ""
  if (!url || !title) return false
  if (/sitemap|rss|feed|\.xml/i.test(url)) return false
  if (/table data/i.test(title)) return false
  if (/fred\.stlouisfed\.org\/(data|graph|series)\//i.test(url)) return false
  if (/links\.message\.bloomberg\.com/i.test(url)) return false
  if (/bloomberg\.com\/professional/i.test(url)) return false
  if (REFERENCE_BLOCKED_PATTERNS.some((pattern) => pattern.test(url))) return false
  const text = `${title} ${snippet}`.toLowerCase()
  if (!REFERENCE_KEYWORDS.some((keyword) => text.includes(keyword))) return false
  return true
}

const normalizeSearchResults = (items, mapper) => {
  if (!Array.isArray(items)) return []
  return items
    .map((item) => mapper(item))
    .filter((entry) => entry && isReferenceCandidate(entry))
}

const buildSerperTbs = (range) => {
  if (!range) return ""
  const parts = range.split(" to ")
  if (parts.length !== 2) return ""
  const start = parseDate(parts[0])
  const end = parseDate(parts[1])
  if (!start || !end) return ""
  const fmt = (date) => `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
  return `cdr:1,cd_min:${fmt(start)},cd_max:${fmt(end)}`
}

const serperState = {
  index: 0,
  exhausted: new Set()
}

const getSerperKeys = (config) => {
  const keys = []
  const primary = process.env[config.serper.apiKeyEnv]
  if (primary) keys.push(primary)

  const legacyKeys = [
    process.env.SERPER_API_KEY_1,
    process.env.SERPER_API_KEY_2,
    process.env.SERPER_API_KEY_3
  ].filter(Boolean)

  keys.push(...legacyKeys)

  const list = process.env.SERPER_API_KEYS
  if (list) {
    list
      .split(",")
      .map((value) => value.trim())
      .filter(Boolean)
      .forEach((value) => keys.push(value))
  }

  return [...new Set(keys)]
}

const markSerperExhausted = (key) => {
  if (!key) return
  serperState.exhausted.add(key)
}

const pickSerperKey = (config) => {
  const keys = getSerperKeys(config)
  if (keys.length === 0) return null

  for (let offset = 0; offset < keys.length; offset += 1) {
    const index = (serperState.index + offset) % keys.length
    const key = keys[index]
    if (serperState.exhausted.has(key)) continue
    serperState.index = (index + 1) % keys.length
    return { key, index }
  }

  return null
}

const shouldRotateSerperKey = (response, payload) => {
  if (!response) return false
  const status = response.status
  if ([401, 403, 429].includes(status)) return true
  const message = payload?.message || payload?.error || ""
  return /quota|credits|exceeded|limit/i.test(String(message))
}

const searchSerperWeb = async (config, query, limit = 8, options = {}) => {
  const tbs = options.tbs || ""
  const keys = getSerperKeys(config)
  if (keys.length === 0) return []

  for (let attempt = 0; attempt < keys.length; attempt += 1) {
    const pick = pickSerperKey(config)
    if (!pick) return []
    const response = await fetch(new URL("/search", config.serper.baseUrl), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": pick.key
      },
      body: JSON.stringify({ q: query, num: limit, tbs })
    })

    let payload = null
    if (response.ok) {
      payload = await response.json()
      return normalizeSearchResults(payload.organic || [], (item) => ({
        title: item.title || "",
        url: item.link || "",
        snippet: item.snippet || "",
        date: item.date || ""
      }))
    }

    try {
      payload = await response.json()
    } catch {
      payload = null
    }

    if (shouldRotateSerperKey(response, payload)) {
      console.warn("Serper key exhausted, switching.")
      markSerperExhausted(pick.key)
      continue
    }

    return []
  }

  return []
}

const searchSerperNews = async (config, query, limit = 8, options = {}) => {
  const tbs = options.tbs || ""
  const keys = getSerperKeys(config)
  if (keys.length === 0) return []

  for (let attempt = 0; attempt < keys.length; attempt += 1) {
    const pick = pickSerperKey(config)
    if (!pick) return []
    const response = await fetch(new URL("/news", config.serper.baseUrl), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": pick.key
      },
      body: JSON.stringify({ q: query, num: limit, tbs })
    })

    let payload = null
    if (response.ok) {
      payload = await response.json()
      return normalizeSearchResults(payload.news || [], (item) => ({
        title: item.title || "",
        url: item.link || "",
        snippet: item.snippet || "",
        date: item.date || ""
      }))
    }

    try {
      payload = await response.json()
    } catch {
      payload = null
    }

    if (shouldRotateSerperKey(response, payload)) {
      console.warn("Serper key exhausted, switching.")
      markSerperExhausted(pick.key)
      continue
    }

    return []
  }

  return []
}

const searchBraveWeb = async (config, query, limit = 8) => {
  const apiKey = process.env[config.brave.apiKeyEnv]
  if (!apiKey) return []

  const url = new URL("/web/search", config.brave.baseUrl)
  url.searchParams.set("q", query)
  url.searchParams.set("count", String(limit))

  const response = await fetch(url, {
    headers: {
      "X-Subscription-Token": apiKey
    }
  })

  if (!response.ok) return []
  const payload = await response.json()

  return normalizeSearchResults(payload.web?.results || [], (item) => ({
    title: item.title || "",
    url: item.url || "",
    snippet: item.description || "",
    date: item.age || ""
  }))
}

const searchBraveNews = async (config, query, limit = 8) => {
  const apiKey = process.env[config.brave.apiKeyEnv]
  if (!apiKey) return []

  const url = new URL("/news/search", config.brave.baseUrl)
  url.searchParams.set("q", query)
  url.searchParams.set("count", String(limit))

  const response = await fetch(url, {
    headers: {
      "X-Subscription-Token": apiKey
    }
  })

  if (!response.ok) return []
  const payload = await response.json()

  return normalizeSearchResults(payload.results || [], (item) => ({
    title: item.title || "",
    url: item.url || "",
    snippet: item.description || "",
    date: item.published || item.age || ""
  }))
}

const searchNewsLinks = async (config, query, limit = 8, options = {}) => {
  const serperNews = await searchSerperNews(config, query, limit, options)
  if (serperNews.length > 0) return serperNews
  const braveNews = await searchBraveNews(config, query, limit)
  if (braveNews.length > 0) return braveNews
  const serperWeb = await searchSerperWeb(config, query, limit, options)
  if (serperWeb.length > 0) return serperWeb
  return await searchBraveWeb(config, query, limit)
}

const buildSiteFilter = (sites) => {
  if (!Array.isArray(sites) || sites.length === 0) return ""
  return `(${sites.map((site) => `site:${site}`).join(" OR ")})`
}

const applySiteFilter = (query, siteFilter) => {
  if (!siteFilter) return query
  if (/\bsite:/.test(query)) return query
  return `${query} ${siteFilter}`.trim()
}

const buildReferenceQueries = (weekMeta, evidence, siteFilter) => {
  const summaryText = [
    ...(evidence?.summary || []),
    ...(evidence?.keySignals || []),
    ...(evidence?.risks || []),
    evidence?.thesis || ""
  ]
    .join(" ")
    .trim()

  const terms = extractTopTerms(summaryText, 6)
  const weekTag = weekMeta?.label || weekMeta?.range || ""
  const monthTag = weekMeta?.monthLabel || weekTag
  const exclusions = "-sitemap -rss -feed -xml"

  const keywordQueries = []
  const lowerText = summaryText.toLowerCase()
  if (/(cpi|inflation)/.test(lowerText)) {
    keywordQueries.push(`CPI report ${weekTag} BLS`)
  }
  if (/(ppi)/.test(lowerText)) {
    keywordQueries.push(`PPI report ${weekTag} BLS`)
  }
  if (/(pce)/.test(lowerText)) {
    keywordQueries.push(`PCE price index ${weekTag} BEA`)
  }
  if (/(gdp)/.test(lowerText)) {
    keywordQueries.push(`GDP advance estimate ${weekTag} BEA`)
  }
  if (/(auction|treasury)/.test(lowerText)) {
    keywordQueries.push(`Treasury auction ${weekTag}`)
  }
  if (/(fomc|fed minutes|federal reserve)/.test(lowerText)) {
    keywordQueries.push(`FOMC minutes ${weekTag}`)
  }
  if (/(jobs|payroll|employment)/.test(lowerText)) {
    keywordQueries.push(`Employment Situation ${weekTag} BLS`)
  }
  if (/(retail sales)/.test(lowerText)) {
    keywordQueries.push(`Retail sales ${weekTag} Census`)
  }
  if (/(jobless|claims)/.test(lowerText)) {
    keywordQueries.push(`initial jobless claims ${weekTag}`)
  }
  if (/(ism|pmi)/.test(lowerText)) {
    keywordQueries.push(`ISM PMI ${weekTag}`)
  }
  if (/(adp)/.test(lowerText)) {
    keywordQueries.push(`ADP employment report ${weekTag}`)
  }
  if (/(tariff|trade)/.test(lowerText)) {
    keywordQueries.push(`tariff announcement ${weekTag}`)
  }
  if (/(boj|bank of japan)/.test(lowerText)) {
    keywordQueries.push(`Bank of Japan rate hike ${weekTag}`)
  }
  if (/(earnings|jpm|jpmorgan)/.test(lowerText)) {
    keywordQueries.push(`JPMorgan earnings ${weekTag}`)
  }

  const baseQueries = [
    `${terms.slice(0, 3).join(" ")} ${weekTag}`.trim(),
    `US economic data ${weekTag}`.trim(),
    `Federal Reserve ${weekTag}`.trim(),
    `Treasury auction ${weekTag}`.trim(),
    `inflation CPI PPI ${weekTag}`.trim()
  ]
    .concat(keywordQueries)
    .concat([
      `US stocks ${weekTag}`.trim(),
      `bond yields ${weekTag}`.trim(),
      `Treasury auction results ${weekTag}`.trim(),
      `initial jobless claims ${weekTag}`.trim(),
      `ISM PMI ${weekTag}`.trim(),
      `ADP employment report ${weekTag}`.trim(),
      `Employment Situation ${weekTag}`.trim(),
      `CPI report ${weekTag}`.trim(),
      `FOMC minutes ${weekTag}`.trim(),
      `GDP ${weekTag} BEA`.trim(),
      `PCE price index ${weekTag} BEA`.trim()
    ])
    .filter(Boolean)

  const explicitQueries = [
    `site:bls.gov/news.release Employment Situation ${monthTag}`.trim(),
    `site:bls.gov/news.release CPI ${monthTag}`.trim(),
    `site:bls.gov/news.release PPI ${monthTag}`.trim(),
    `site:bea.gov/news gross domestic product ${monthTag}`.trim(),
    `site:bea.gov/news personal income and outlays ${monthTag}`.trim(),
    `site:federalreserve.gov/monetarypolicy FOMC minutes ${monthTag}`.trim(),
    `site:treasury.gov/press-center Treasury auction ${monthTag}`.trim(),
    `site:fred.stlouisfed.org/release ${monthTag}`.trim()
  ].filter(Boolean)

  const allQueries = baseQueries.concat(explicitQueries)
  const withExclusions = allQueries.map((query) => `${query} ${exclusions}`.trim())

  if (!siteFilter) return withExclusions
  return withExclusions.map((query) => applySiteFilter(query, siteFilter))
}

const dedupeReferences = (items, maxCount = 8) => {
  const seen = new Set()
  const output = []
  for (const item of items) {
    const url = item.url || ""
    if (!url || seen.has(url)) continue
    seen.add(url)
    output.push(item)
    if (output.length >= maxCount) break
  }
  return output
}

const parseResultDate = (value) => {
  if (!value) return null
  if (/ago/i.test(value)) return null
  const parsed = new Date(value)
  if (!Number.isNaN(parsed.getTime())) return parsed
  return null
}

const parseDateFromUrl = (url) => {
  if (!url) return null
  const isoMatch = url.match(/(20\d{2})[-/](\d{2})[-/](\d{2})/)
  if (isoMatch) {
    return parseDate(`${isoMatch[1]}-${isoMatch[2]}-${isoMatch[3]}`)
  }
  const compactMatch = url.match(/(20\d{2})(\d{2})(\d{2})/)
  if (compactMatch) {
    return parseDate(`${compactMatch[1]}-${compactMatch[2]}-${compactMatch[3]}`)
  }
  return null
}

const filterReferencesByWeek = (items, range, minCount = 6) => {
  if (!range) return items
  const parts = range.split(" to ")
  if (parts.length !== 2) return items
  const start = parseDate(parts[0])
  const end = parseDate(parts[1])
  if (!start || !end) return items

  const startAdj = new Date(start)
  startAdj.setDate(startAdj.getDate() - 3)
  const endAdj = new Date(end)
  endAdj.setDate(endAdj.getDate() + 3)

  const dated = items.filter((item) => {
    const date = parseResultDate(item.date) || parseDateFromUrl(item.url)
    if (!date) return false
    return date >= startAdj && date <= endAdj
  })

  if (dated.length >= minCount) return dated
  const undated = items.filter((item) => !parseResultDate(item.date) && !parseDateFromUrl(item.url))
  return dated.concat(undated)
}


const sanitizeSnippet = (text) => {
  if (!text) return ""
  return text
    .replace(/\s+/g, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/[^\x20-\x7E]/g, "")
    .trim()
}

const formatReferenceCallouts = (items) => {
  if (!Array.isArray(items) || items.length === 0) return ""
  return items
    .map((item) => {
      const snippet = sanitizeSnippet(item.snippet || "")
      const trimmed = snippet.length > 180 ? `${snippet.slice(0, 177)}...` : snippet
      const detail = trimmed ? `Why it matters: ${trimmed}` : "Why it matters: Week-specific context."
      return `> [!ref] ${item.title}\n> ${item.url}\n> ${detail}`
    })
    .join("\n\n")
}

const extractSectionBullets = (content, header) => {
  if (!content || !header) return []
  const escaped = header.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  const pattern = new RegExp(`${escaped}\\n([\\s\\S]*?)(?=\\n##\\s|\\n#\\s*$|$)`, "i")
  const match = content.match(pattern)
  if (!match) return []
  return match[1]
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("- "))
    .map((line) => line.replace(/^[-*]\s+/, ""))
}

const replaceReferencesSection = (content, callouts) => {
  if (!content || !callouts) return content
  const newBlock = `## References\n${callouts}`
  if (/## References/i.test(content)) {
    return content.replace(/## References[\s\S]*?(?=\n## questions \/ next)/i, newBlock)
  }
  return content.replace(/\n## questions \/ next/i, `\n${newBlock}\n\n## questions / next`)
}

const appendReferencesBlock = (rawDraft, callouts) => {
  if (!callouts) return rawDraft
  const trimmed = rawDraft.replace(/\n#\s*$/g, "").trimEnd()
  return `${trimmed}\n\n## References\n${callouts}\n`
}

const extractFrontmatterValue = (content, key) => {
  const pattern = new RegExp(`^${key}:\s*(.+)$`, "m")
  const match = content.match(pattern)
  return match ? match[1].trim() : ""
}

const getWeekKeyFromContent = (content, fallback) => {
  const match = content.match(/Weekly Market Report\s+(\d{4}-W\d{2})/i)
  return match?.[1] || fallback || ""
}

const parseWeekFromFilename = (fileName) => {
  const match = fileName.match(/weekly-market-report-(\d{4}-W\d{2})\.md$/i)
  return match?.[1] || ""
}

const resolveWeekRange = (created) => {
  const createdDate = parseDate(created)
  if (!createdDate) return ""
  const range = getIsoWeekRange(createdDate)
  return `${range.start} to ${range.end}`
}

const formatWeekLabel = (created) => {
  const createdDate = parseDate(created)
  if (!createdDate) return ""
  const month = createdDate.toLocaleString("en-US", { month: "long" })
  const day = String(createdDate.getDate())
  const year = createdDate.getFullYear()
  return `week of ${month} ${day} ${year}`
}

const formatMonthLabel = (created) => {
  const createdDate = parseDate(created)
  if (!createdDate) return ""
  const month = createdDate.toLocaleString("en-US", { month: "long" })
  const year = createdDate.getFullYear()
  return `${month} ${year}`
}

const buildNoteId = (created, type = "MR", index = 1) => {
  const createdDate = parseDate(created)
  if (!createdDate) return ""
  const year = String(createdDate.getFullYear()).slice(-2)
  const month = String(createdDate.getMonth() + 1).padStart(2, "0")
  const day = String(createdDate.getDate()).padStart(2, "0")
  const seq = String(index).padStart(2, "0")
  return `${year}${month}${day}${type}${seq}`
}

const readFrontmatter = (content) => {
  const match = content.match(/^---\n([\s\S]*?)\n---/)
  if (!match) return {}
  const lines = match[1].split(/\r?\n/)
  const data = {}
  for (const line of lines) {
    const idx = line.indexOf(":")
    if (idx <= 0) continue
    const key = line.slice(0, idx).trim()
    const value = line.slice(idx + 1).trim()
    data[key] = value
  }
  return data
}

const parseTags = (value) => {
  if (!value) return []
  const cleaned = value.replace(/^\[|\]$/g, "")
  return cleaned
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean)
}

const ensureTrailingHash = (content) => {
  if (content.trim().endsWith("#")) return content
  return `${content.trimEnd()}\n\n#`
}

const getNextNewsId = async (date, yearDir) => {
  const createdDate = parseDate(date)
  if (!createdDate) return ""
  const prefix = buildNoteId(createdDate.toISOString().slice(0, 10), "NW", 0).slice(0, 8)
  const files = (await fileExists(yearDir)) ? await fs.readdir(yearDir) : []
  let maxSeq = 0
  for (const file of files) {
    if (!file.endsWith(".md")) continue
    const content = await fs.readFile(path.join(yearDir, file), "utf-8")
    const fm = readFrontmatter(content)
    const newsId = fm.news_id || fm.note_id || ""
    if (!newsId.startsWith(prefix + "NW")) continue
    const seq = Number(newsId.slice(-2))
    if (!Number.isNaN(seq)) maxSeq = Math.max(maxSeq, seq)
  }
  const nextSeq = String(maxSeq + 1).padStart(2, "0")
  return `${prefix}NW${nextSeq}`
}

const appendUpdatesBlock = async (filePath, updateSlug, summary, date) => {
  if (!(await fileExists(filePath))) return false
  const content = await fs.readFile(filePath, "utf-8")
  const entry = `- ${date}: [[${updateSlug}]] — ${summary || "Update added."}`
  let updated = content
  if (/## Updates/i.test(content)) {
    updated = content.replace(/## Updates[\s\S]*?(?=\n#\s*$|$)/i, (match) => {
      if (match.includes(updateSlug)) return match
      return `${match.trim()}\n${entry}\n`
    })
  } else {
    updated = content.replace(/\n#\s*$/i, `\n\n## Updates\n${entry}\n\n#`)
  }
  if (updated !== content) {
    await fs.writeFile(filePath, updated, "utf-8")
    return true
  }
  return false
}

const insertCrossReference = (content, previousSlug) => {
  if (!content || !previousSlug) return content
  if (content.includes(`[[${previousSlug}]]`)) return content
  const header = "## Commentary"
  const anchor = `${header}\n`
  if (!content.includes(anchor)) return content
  const sentence = `I kept cross-checking with [[${previousSlug}]] because the regime felt continuous rather than new.`
  return content.replace(anchor, `${header}\n${sentence}\n\n`)
}

const appendLinkedFrom = async (filePath, linkedSlug, reason) => {
  if (!(await fileExists(filePath))) return false
  const content = await fs.readFile(filePath, "utf-8")
  if (content.includes(`[[${linkedSlug}]]`)) return false
  const block = `## Cross Review\n- Linked from: [[${linkedSlug}]] — ${reason}`
  let updated = content
  if (/## Cross Review/i.test(content)) {
    updated = content.replace(/## Cross Review[\s\S]*?(?=\n#\s*$|$)/i, (match) => {
      if (match.includes(`[[${linkedSlug}]]`)) return match
      return `${match.trim()}\n- Linked from: [[${linkedSlug}]] — ${reason}\n`
    })
  } else {
    updated = content.replace(/\n#\s*$/i, `\n${block}\n\n#`)
  }

  if (updated !== content) {
    await fs.writeFile(filePath, updated, "utf-8")
    return true
  }
  return false
}

const updateWeeklyReferences = async (config, options = {}) => {
  const year = Number(options.year || new Date().getFullYear())
  const reportDir = path.join(PATHS.contentOut, String(year))
  if (!(await fileExists(reportDir))) {
    throw new Error(`Report directory not found: ${reportDir}`)
  }

  const week = options.week
  const weekStart = options.weekStart
  const weekEnd = options.weekEnd
  const referenceLimit = Number.isFinite(options.referenceLimit) ? options.referenceLimit : 8
  const referenceSites = Array.isArray(options.referenceSites) ? options.referenceSites : []
  const siteFilter = buildSiteFilter(referenceSites)

  const files = await fs.readdir(reportDir)
  const targets = files
    .filter((file) => file.startsWith(`weekly-market-report-${year}-W`) && file.endsWith(".md"))
    .sort()

  const updated = []

  for (const file of targets) {
    const fallbackWeek = parseWeekFromFilename(file)
    if (!fallbackWeek) continue
    if (week && fallbackWeek !== week) continue
    if (weekStart && fallbackWeek < weekStart) continue
    if (weekEnd && fallbackWeek > weekEnd) continue

    const fullPath = path.join(reportDir, file)
    const content = await fs.readFile(fullPath, "utf-8")
    const weekKey = getWeekKeyFromContent(content, fallbackWeek)
    const created = extractFrontmatterValue(content, "created")
    const range = resolveWeekRange(created)
    const label = formatWeekLabel(created)
    const monthLabel = formatMonthLabel(created)

    const evidence = {
      summary: extractSectionBullets(content, "## Overall Summary"),
      keySignals: [
        ...extractSectionBullets(content, "## Rates & Liquidity"),
        ...extractSectionBullets(content, "## Equities")
      ],
      risks: extractSectionBullets(content, "## Outlook Next Week"),
      thesis: extractFrontmatterValue(content, "description")
    }

    const weekMeta = { week: weekKey, range, label, monthLabel }
    const queries = buildReferenceQueries(weekMeta, evidence, siteFilter)
    const results = []
    const tbs = buildSerperTbs(range)
    const searchOptions = tbs ? { tbs } : {}

    for (const query of queries) {
      const found = await searchNewsLinks(config, query, referenceLimit, searchOptions)
      results.push(...found)
      if (results.length >= referenceLimit) break
    }

    const filtered = filterReferencesByWeek(results, range)
    const uniqueRefs = dedupeReferences(filtered, referenceLimit)
    const callouts = formatReferenceCallouts(uniqueRefs)
    if (!callouts) continue

    const nextContent = replaceReferencesSection(content, callouts)
    if (nextContent !== content) {
      await fs.writeFile(fullPath, nextContent, "utf-8")
      updated.push(fullPath)
    }
  }

  return updated
}

const PREFERRED_IMAGE_DOMAINS = [
  "substack.com",
  "google.com",
  "gstatic.com",
  "googleusercontent.com"
]

const FALLBACK_IMAGE_DOMAINS = ["x.com", "twitter.com"]

const pickImageCandidate = (results, domains) => {
  if (!Array.isArray(results) || results.length === 0) return null
  return results.find((result) => {
    const url = result?.url || ""
    return domains.some((domain) => url.includes(domain))
  })
}

const buildDraftPrompt = (personaMix, evidence, record, imageUrl) => {
  const system =
    "You are writing in the aarnphm digital garden style: personal, direct, dense but calm, short paragraphs, compact bullets, inline references, no long preamble. Accept fragmentation."

  const user = `Write a draft in Markdown using this structure:\n- H1 title\n- 1 line grounding statement\n- 3-7 micro-sections or bullet clusters\n- 1-2 callouts (note/info/warning)\n- inline references (not a bibliography)\n- \"questions / next\" block\n- trailing \"#\" line\n\nUse this personality mix: ${personaMix.join(", ")}.\nUse at least 2 internal wikilinks like [[Note Name]].\nUse the evidence pack below. Do not invent facts.\n\nSOURCE URL: ${record.url}\n\nEVIDENCE PACK:\n${JSON.stringify(evidence, null, 2)}\n\nIMAGE URL (optional): ${imageUrl || ""}`

  return [
    { role: "system", content: system },
    { role: "user", content: user }
  ]
}

const buildDraftMarkdown = (record, entry, rawDraft, imageUrl) => {
  const title = entry.title || record.title || "Untitled"
  const created = record.publishedAt || today()
  const updated = today()
  const tags = Array.isArray(entry.tags) ? entry.tags : []
  const description = entry.thesis || ""

  const frontmatter = [
    "---",
    `title: ${title}`,
    `tags: [${tags.join(", ")}]`,
    "draft: true",
    `description: ${description}`,
    `created: ${created}`,
    `updated: ${updated}`,
    "---"
  ].join("\n")

  let body = rawDraft || ""
  if (!body.trim()) {
    body = "todo: draft content missing."
  }
  if (!body.includes("# ")) {
    body = `# ${title}\n\n${body}`
  }

  if (imageUrl && !body.includes("![]")) {
    body = `${body}\n\n> [!info]\n> image candidate: ${imageUrl}`
  }

  if (!body.includes(record.url)) {
    body = `${body}\n\n> [!note]\n> source: ${record.url}`
  }

  if (!body.trim().endsWith("#")) {
    body = `${body}\n\n#`
  }

  return `${frontmatter}\n\n${body}`
}

const buildWeeklyEvidencePack = async (config, weekKey, records, year, options = {}) => {
  const useTranscripts = options.useTranscripts ?? true
  const sourceBlobs = []
  const sources = []
  const missingTranscripts = []

  for (const record of records) {
    if (useTranscripts) {
      await ensureTranscript(config, record)
    }
    const transcriptPath = record.transcriptPath
    const hasTranscript =
      useTranscripts && transcriptPath && (await fileExists(transcriptPath))

    if (useTranscripts && !hasTranscript) {
      missingTranscripts.push({
        id: record.id,
        title: record.title,
        url: record.url,
        channel: record.author
      })
      continue
    }

    const transcript = hasTranscript ? await getTranscriptText(record) : ""
    const snippet = useTranscripts ? truncateText(transcript, 2000) : ""
    sources.push({
      id: record.id,
      title: record.title,
      url: record.url,
      channel: record.author,
      publishedAt: record.publishedAt
    })
    sourceBlobs.push(
      `TITLE: ${record.title}\nCHANNEL: ${record.author}\nDATE: ${record.publishedAt}\nURL: ${record.url}${snippet ? `\nSNIPPET: ${snippet}` : ""}`
    )
  }

  const combined = truncateText(sourceBlobs.join("\n\n"), 20000)

  const system =
    "You are a careful research assistant. Extract factual market themes and concise signals. Do not editorialize. Do not include citations or bracketed references."

  const user = `Summarize the weekly market signals from the sources below. Return strict JSON with keys: summary (5-8 bullets), keySignals (3-6), risks (2-4), thesis (1 line), workingTitle (1), imageQuery (short phrase for a chart or data visualization).\n\nWEEK: ${weekKey}\nYEAR: ${year}\nTRANSCRIPTS_USED: ${useTranscripts}\n\nSOURCES:\n${combined}`

  const response = await callPplx(config, [
    { role: "system", content: system },
    { role: "user", content: user }
  ])

  const parsed = extractJson(response)
  if (parsed) {
    return { ...parsed, sources, transcriptsUsed: useTranscripts, missingTranscripts }
  }

  return {
    summary: [],
    keySignals: [],
    risks: [],
    thesis: "",
    workingTitle: `Weekly Market Report ${weekKey}`,
    imageQuery: "",
    sources,
    transcriptsUsed: useTranscripts,
    missingTranscripts
  }
}

const buildFocusedWeeklyEvidencePack = async (
  config,
  weekKey,
  records,
  year,
  focusChannel,
  macroChannel
) => {
  const focusSources = []
  const macroSources = []
  const missingFocus = []
  const missingMacro = []
  const focusBlobs = []
  const macroBlobs = []

  for (const record of records) {
    const isFocus = channelMatches(record, focusChannel)
    const isMacro = channelMatches(record, macroChannel)
    if (!isFocus && !isMacro) continue

    await ensureTranscript(config, record)

    const transcriptPath = record.transcriptPath
    const hasTranscript = transcriptPath && (await fileExists(transcriptPath))
    if (!hasTranscript) {
      if (isFocus) {
        missingFocus.push({ id: record.id, title: record.title, url: record.url })
      }
      if (isMacro) {
        missingMacro.push({ id: record.id, title: record.title, url: record.url })
      }
      continue
    }

    const transcript = await getTranscriptText(record)
    if (!transcript) continue

    const snippet = truncateText(transcript, 2000)
    const blob = `TITLE: ${record.title}\nCHANNEL: ${record.author}\nDATE: ${record.publishedAt}\nURL: ${record.url}\nTEXT: ${snippet}`

    if (isFocus) {
      focusSources.push({
        id: record.id,
        title: record.title,
        url: record.url,
        channel: record.author,
        publishedAt: record.publishedAt
      })
      focusBlobs.push(blob)
    }

    if (isMacro) {
      macroSources.push({
        id: record.id,
        title: record.title,
        url: record.url,
        channel: record.author,
        publishedAt: record.publishedAt
      })
      macroBlobs.push(blob)
    }
  }

  const focusText = truncateText(focusBlobs.join("\n\n"), 15000)
  const macroText = truncateText(macroBlobs.join("\n\n"), 15000)

  const system =
    "You are a careful research assistant. Extract market signals with a clear split between overall market summary and crypto macro. Do not include citations or references."

  const user = `Return strict JSON with keys: marketSummary (3-5 bullets), marketCommentary (3-5 bullets), cryptoMacro (3-5 bullets), outlookNextWeek (2-4 bullets), workingTitle (1), imageQuery (short phrase).\n\nWEEK: ${weekKey}\nYEAR: ${year}\n\nFOCUS_CHANNEL_TRANSCRIPTS:\n${focusText}\n\nCRYPTO_MACRO_TRANSCRIPTS:\n${macroText}`

  try {
    const response = await callPplx(config, [
      { role: "system", content: system },
      { role: "user", content: user }
    ])

    const parsed = extractJson(response)
    if (parsed) {
      return {
        ...parsed,
        focusSources,
        macroSources,
        missingFocus,
        missingMacro
      }
    }
  } catch {
    // fall through to fallback
  }

  const focusTitleBullets = buildTitleBullets(focusSources, 5)
  const macroTitleBullets = buildTitleBullets(macroSources, 5)

  const focusTextCombined = focusTitleBullets.join(" ")
  const macroTextCombined = macroTitleBullets.join(" ")

  const commentaryTerms = extractTopTerms(focusTextCombined, 6)
  const macroTerms = extractTopTerms(macroTextCombined, 5)

  const marketSummary = focusTitleBullets.length
    ? focusTitleBullets
    : focusSources.map((source) => source.title).slice(0, 4)

  const marketCommentary = buildCommentaryFromTerms(commentaryTerms)

  const cryptoMacro = macroTitleBullets.length
    ? macroTitleBullets
    : macroSources.map((source) => source.title).slice(0, 4)

  const outlookNextWeek = buildOutlookFromTerms(macroTerms, commentaryTerms[0])

  return {
    marketSummary,
    marketCommentary,
    cryptoMacro,
    outlookNextWeek,
    workingTitle: `Weekly Market Report ${weekKey}`,
    imageQuery: "",
    focusSources,
    macroSources,
    missingFocus,
    missingMacro
  }
}

const buildWeeklyEvidenceSkeleton = (weekKey, records, year) => {
  const sources = records.map((record) => ({
    id: record.id,
    title: record.title,
    url: record.url,
    channel: record.author,
    publishedAt: record.publishedAt
  }))

  return {
    summary: [],
    keySignals: [],
    risks: [],
    thesis: "",
    workingTitle: `Weekly Market Report ${weekKey}`,
    imageQuery: "",
    sources,
    transcriptsUsed: false,
    year
  }
}

const writeWeeklyPreflight = async (pack) => {
  await ensureDir(PATHS.outputPreflight)

  const jsonPath = path.join(PATHS.outputPreflight, "preflight-weekly-latest.json")
  const mdPath = path.join(PATHS.outputPreflight, "preflight-weekly-latest.md")

  const mdLines = [
    "---",
    `approved: ${pack.approved}`,
    `generated: ${pack.generated}`,
    `persona_mix: [${pack.persona_mix.join(", ")}]`,
    `count: ${pack.count}`,
    `year: ${pack.year}`,
    "---",
    "# Weekly Preflight Pack",
    "",
    "Flip approved: true when ready."
  ]

  for (const entry of pack.entries) {
    mdLines.push("", `- week: ${entry.week}`)
    mdLines.push(`  range: ${entry.range}`)
    mdLines.push(`  title: ${entry.title}`)
    mdLines.push(`  thesis: ${entry.thesis}`)
    mdLines.push(`  tags: [${entry.tags.join(", ")}]`)
    mdLines.push(`  draft_path: ${entry.draft_path}`)
  }

  await fs.writeFile(jsonPath, JSON.stringify(pack, null, 2), "utf-8")
  await fs.writeFile(mdPath, mdLines.join("\n"), "utf-8")

  return { jsonPath, mdPath }
}

const buildWeeklyDraftPrompt = (personaMix, evidence, weekMeta, imageUrl) => {
  const system =
    "You are writing in the aarnphm digital garden style: personal, direct, dense but calm, short paragraphs, compact bullets, inline references, no long preamble. Accept fragmentation."

  const user = `Write a weekly market report in Markdown using this structure:\n- H1 title\n- 1 line grounding statement\n- 3-7 micro-sections or bullet clusters\n- 1-2 callouts using Obsidian format:\n  > [!note]\n  > ...\n- \"questions / next\" block\n- trailing \"#\" line\n\nUse this personality mix: ${personaMix.join(", ")}.\nUse at least 2 internal wikilinks like [[Note Name]].\nUse the evidence pack below. Do not invent facts.\nDo not include citations, source lists, or external references.\n\nWEEK: ${weekMeta.week} (${weekMeta.range})\n\nEVIDENCE PACK:\n${JSON.stringify(evidence, null, 2)}\n\nIMAGE URL (optional): ${imageUrl || ""}`

  return [
    { role: "system", content: system },
    { role: "user", content: user }
  ]
}

const buildFocusedWeeklyDraftPrompt = (personaMix, evidence, weekMeta, imageUrl) => {
  const system =
    "You are writing in the aarnphm digital garden style: personal, direct, dense but calm, short paragraphs, compact bullets, inline references, no long preamble. Accept fragmentation."

  const user = `Write a weekly market report in Markdown using this structure:\n- H1 title\n- 1 line grounding statement\n- sections in this order:\n  ## Overall Summary\n  ## Commentary\n  ## Rates & Liquidity\n  ## Equities\n  ## Commodities & FX\n  ## Crypto Macro\n  ## Positioning & Flow\n  ## Outlook Next Week\n- 1-2 callouts using Obsidian format:\n  > [!note]\n  > ...\n- \"questions / next\" block\n- trailing \"#\" line\n\nStyle: longer, analytical, dynamic, human, first-person where natural.\nUse this personality mix: ${personaMix.join(", ")}.\nUse at least 2 internal wikilinks like [[Note Name]].\nUse the evidence pack below. Do not invent facts.\nDo not include citations, source lists, or external references.\n\nWEEK: ${weekMeta.week} (${weekMeta.range})\n\nEVIDENCE PACK:\n${JSON.stringify(evidence, null, 2)}\n\nIMAGE URL (optional): ${imageUrl || ""}`

  return [
    { role: "system", content: system },
    { role: "user", content: user }
  ]
}

const buildWeeklyMarkdown = (entry, evidence, rawDraft, imageUrl) => {
  const title = entry.title || `Weekly Market Report ${entry.week}`
  const created = entry.range?.split(" to ")[0] || today()
  const updated = today()
  const tags = Array.isArray(entry.tags) ? entry.tags : []
  const description = entry.thesis || ""
  const noteId = buildNoteId(created, "MR", 1)

  const frontmatter = [
    "---",
    `title: ${title}`,
    `tags: [${tags.join(", ")}]`,
    ...(noteId ? [`note_id: ${noteId}`] : []),
    "draft: true",
    `description: ${description}`,
    `created: ${created}`,
    `updated: ${updated}`,
    "---"
  ].join("\n")

  let body = rawDraft || ""
  body = body.replace(/\[[0-9]+\]/g, "")
  body = body.replace(/^>\s*\*\*>\s*(note|warning|info)\*\*/gim, "> [!$1]")
  body = body.replace(/^>\s*\*\*(note|warning|info)\*\*\s*:/gim, "> [!$1]")
  if (!body.trim()) {
    body = "todo: weekly report content missing."
  }
  if (!body.includes("# ")) {
    body = `# ${title}\n\n${body}`
  }

  if (imageUrl && !body.includes("![]")) {
    body = `${body}\n\n![](${imageUrl})`
  }

  if (!body.trim().endsWith("#")) {
    body = `${body}\n\n#`
  }

  return `${frontmatter}\n\n${body}`
}

const writeReport = async (name, lines) => {
  await ensureDir(PATHS.outputReports)
  const reportPath = path.join(PATHS.outputReports, name)
  await fs.writeFile(reportPath, lines.join("\n"), "utf-8")
  return reportPath
}

const groupRecordsByWeek = (records, year) => {
  const groups = new Map()

  for (const record of records) {
    if (!record.publishedAt) continue
    const recordDate = parseDate(record.publishedAt)
    if (!recordDate) continue
    if (Number(record.publishedAt.slice(0, 4)) !== Number(year)) continue
    const weekKey = toIsoWeekKey(recordDate)
    if (!groups.has(weekKey)) groups.set(weekKey, [])
    groups.get(weekKey).push(record)
  }

  return groups
}

const createWeeklyPreflight = async (config, records, year) => {
  await ensureDir(PATHS.cacheWeekly)
  const grouped = groupRecordsByWeek(records, year)
  const entries = []

  for (const [week, items] of grouped.entries()) {
    if (!week.startsWith(`${year}-W`)) continue
    const weekRange = getIsoWeekRange(parseDate(items[0].publishedAt))
    const evidence = buildWeeklyEvidenceSkeleton(week, items, year)
    const evidencePath = path.join(PATHS.cacheWeekly, `${week}.json`)
    await fs.writeFile(evidencePath, JSON.stringify({ ...evidence, week, range: weekRange }, null, 2), "utf-8")

    const title = evidence.workingTitle || `Weekly Market Report ${week}`
    const draftSlug = slugify(`${year}-${week}-market-report`)
    const tags = ["market-report", "weekly", "finance", String(year)]

    entries.push({
      week,
      range: `${weekRange.start} to ${weekRange.end}`,
      title,
      thesis: evidence.thesis || "",
      tags,
      draft_path: `content/mark-memo/${year}/${draftSlug}.md`,
      evidence_path: evidencePath,
      image_query: evidence.imageQuery || ""
    })
  }

  const pack = {
    approved: false,
    generated: nowIso(),
    persona_mix: config.persona.mix,
    count: entries.length,
    year,
    entries: entries.sort((a, b) => a.week.localeCompare(b.week))
  }

  return pack
}

const readCachedYouTubeRecords = async (year, channelUrls = []) => {
  await ensureDir(PATHS.cacheNormalized)
  const files = await fs.readdir(PATHS.cacheNormalized)
  const channels = new Set(channelUrls)
  const records = []

  for (const file of files) {
    if (!file.endsWith(".json")) continue
    const record = JSON.parse(await fs.readFile(path.join(PATHS.cacheNormalized, file), "utf-8"))
    if (record.sourceType !== "youtube") continue
    if (!record.publishedAt) continue
    if (Number(record.publishedAt.slice(0, 4)) !== Number(year)) continue

    if (channels.size > 0) {
      const sourceUrl = record.meta?.sourceChannelUrl
      if (!sourceUrl || !channels.has(sourceUrl)) continue
    }

    records.push(record)
  }

  return records
}

const generateWeeklyReports = async (config, preflightPath, options = {}) => {
  const mdPath = preflightPath || path.join(PATHS.outputPreflight, "preflight-weekly-latest.md")
  const jsonPath = path.join(PATHS.outputPreflight, "preflight-weekly-latest.json")

  const approved = await readPreflightApproval(mdPath)
  if (!approved) {
    throw new Error("Weekly preflight pack is not approved.")
  }

  if (!(await fileExists(jsonPath))) {
    throw new Error("Weekly preflight JSON not found.")
  }

  const pack = JSON.parse(await fs.readFile(jsonPath, "utf-8"))
  const year = pack.year
  const outputDir = path.join(PATHS.contentOut, String(year))
  await ensureDir(outputDir)

  let entries = [...pack.entries]
  const week = options.week
  const weekStart = options.weekStart
  const weekEnd = options.weekEnd
  const offset = Number.isFinite(options.offset) ? options.offset : 0
  const limit = Number.isFinite(options.limit) ? options.limit : 0
  const refreshEvidence = options.refreshEvidence === true
  const focusChannel = options.focusChannel
  const macroChannel = options.macroChannel
  const includeReferences = options.includeReferences === true
  const includeCrosslinks = options.includeCrosslinks === true
  const crossReason = options.crossReason || "Follow-up reflection added by later week."
  const referenceSites = Array.isArray(options.referenceSites) ? options.referenceSites : []
  const referenceLimit = Number.isFinite(options.referenceLimit) ? options.referenceLimit : 8

  if (week) {
    entries = entries.filter((entry) => entry.week === week)
  } else if (weekStart || weekEnd) {
    entries = entries.filter((entry) => {
      if (weekStart && entry.week < weekStart) return false
      if (weekEnd && entry.week > weekEnd) return false
      return true
    })
  }

  if (offset > 0 || limit > 0) {
    const start = Math.max(0, offset)
    const end = limit > 0 ? start + limit : undefined
    entries = entries.slice(start, end)
  }

  const lines = [`run: ${nowIso()}`, `count: ${entries.length}`, ""]

  for (const entry of entries) {
    const evidencePath = entry.evidence_path
    let evidence = null
    const weekMeta = { week: entry.week, range: entry.range }

    if (evidencePath && (await fileExists(evidencePath))) {
      evidence = JSON.parse(await fs.readFile(evidencePath, "utf-8"))
    }

    if (!evidence) {
      lines.push(`missing evidence: ${entry.week}`)
      continue
    }

    const evidenceText = JSON.stringify(evidence)
    const hasCitations = /\[\d+\]/.test(evidenceText)

    const cached = await readCachedYouTubeRecords(pack.year)
    const weekRecords = cached.filter((record) => {
      if (!record.publishedAt) return false
      const recordDate = parseDate(record.publishedAt)
      if (!recordDate) return false
      return toIsoWeekKey(recordDate) === entry.week
    })

    if (focusChannel && macroChannel) {
      const imageUrl = ""
      const focusRecords = []
      const macroRecords = []

      for (const record of weekRecords) {
        if (channelMatches(record, focusChannel)) {
          await ensureTranscript(config, record)
          const text = await getTranscriptText(record)
          if (text) focusRecords.push({ record, text })
        }
        if (channelMatches(record, macroChannel)) {
          await ensureTranscript(config, record)
          const text = await getTranscriptText(record)
          if (text) macroRecords.push({ record, text })
        }
      }

      if (focusRecords.length === 0 || macroRecords.length === 0) {
        lines.push(`missing transcripts: ${entry.week}`)
        continue
      }

      const focusText = truncateText(
        focusRecords.map((item) => item.text).join(" \n"),
        30000
      )
      const macroText = truncateText(
        macroRecords.map((item) => item.text).join(" \n"),
        20000
      )

      const focusTitles = focusRecords.map((item) => item.record.title).filter(Boolean)
      const macroTitles = macroRecords.map((item) => item.record.title).filter(Boolean)

      const reportData = buildFocusedReportFromTranscripts(
        weekMeta,
        focusText,
        macroText,
        focusTitles,
        macroTitles
      )
      const title = `Weekly Market Report ${entry.week}`

      let summaryLines = reportData.overallSummary.length
        ? reportData.overallSummary
        : focusTitles.slice(0, 4).map((titleLine) => `Steve flagged: ${titleLine}`)

      let commentaryLines = reportData.commentary.length
        ? reportData.commentary
        : buildCommentaryFromSignals(focusTitles.join(" "))

      let ratesLines = reportData.ratesLiquidity.length
        ? reportData.ratesLiquidity
        : ["Rates and liquidity are still the main throttle this week."]

      let equityLines = reportData.equities.length
        ? reportData.equities
        : ["Equities remain selective; leadership is narrow."]

      let commodityLines = reportData.commoditiesFx.length
        ? reportData.commoditiesFx
        : ["USD and energy keep setting the macro tone."]

      let cryptoLines = reportData.cryptoMacro.length
        ? reportData.cryptoMacro
        : macroTitles.slice(0, 4).map((titleLine) => `Crypto focus: ${titleLine}`)

      let flowLines = reportData.positioningFlow.length
        ? reportData.positioningFlow
        : ["Flows feel tactical; conviction is still thin."]

      let outlookLines = reportData.outlook.length
        ? reportData.outlook
        : buildOutlookFromTerms([], "liquidity")

      commentaryLines = ensureMinBullets(commentaryLines, [
        "I’m treating rallies as tactical until breadth improves.",
        "Any surprise in rates can flip this fast."
      ], 3)

      ratesLines = ensureMinBullets(ratesLines, [
        "If yields push higher, risk will likely thin out.",
        "I keep one eye on credit spreads for early stress."
      ], 2)

      equityLines = ensureMinBullets(equityLines, [
        "Dispersion is the signal; chasing weak leaders is costly.",
        "I prefer quality balance sheets until the tape stabilizes."
      ], 2)

      commodityLines = ensureMinBullets(commodityLines, [
        "Gold and energy are still the macro tell.",
        "FX swings can reprice risk quickly."
      ], 2)

      cryptoLines = ensureMinBullets(cryptoLines, [
        "BTC dominance is the risk budget for alts.",
        "Liquidity pulses still drive the short‑term trend."
      ], 2)

      flowLines = ensureMinBullets(flowLines, [
        "Positioning looks crowded; I’m wary of squeeze risk.",
        "I want real buying, not just short‑cover."
      ], 2)

      outlookLines = ensureMinBullets(outlookLines, [
        "I’ll watch rates + risk for confirmation, otherwise stay defensive."
      ], 2)

      if (summaryLines.length < 3) {
        summaryLines = summaryLines.concat(ratesLines.slice(0, 1))
        summaryLines = summaryLines.concat(equityLines.slice(0, 1))
        summaryLines = summaryLines.concat(commodityLines.slice(0, 1))
      }

      const narrative = buildNarrativeFromSignals(`${focusTitles.join(" ")} ${reportData.opener}`)
      let rawDraft = `# ${title}\n\n${reportData.opener}\n\n${narrative.join(" ")}\n\n`
      rawDraft += `## Overall Summary\n${summaryLines.map((line) => `- ${line}`).join("\n")}\n\n`
      rawDraft += `## Commentary\n${commentaryLines.map((line) => `- ${line}`).join("\n")}\n\n`
      rawDraft += `## Rates & Liquidity\n${ratesLines.map((line) => `- ${line}`).join("\n")}\n\n`
      rawDraft += `## Equities\n${equityLines.map((line) => `- ${line}`).join("\n")}\n\n`
      rawDraft += `## Commodities & FX\n${commodityLines.map((line) => `- ${line}`).join("\n")}\n\n`
      rawDraft += `## Crypto Macro\n${cryptoLines.map((line) => `- ${line}`).join("\n")}\n\n`
      rawDraft += `## Positioning & Flow\n${flowLines.map((line) => `- ${line}`).join("\n")}\n\n`
      rawDraft += `## Outlook Next Week\n${outlookLines.map((line) => `- ${line}`).join("\n")}\n\n`
      rawDraft += `> [!note]\n> Bias stays defensive until confirmation — hơi cautious.\n\n`
      rawDraft += `## questions / next\n- Where does the first crack show: rates or earnings?\n- Does crypto still lead risk appetite?\n- Where is the real marginal buyer hiding?\n`

      const draft = buildWeeklyMarkdown(entry, evidence || {}, rawDraft, imageUrl)
      const fileName = `${slugify(entry.week)}-${slugify(entry.title || title)}.md`
      const draftPath = path.join(outputDir, fileName)
      await fs.writeFile(draftPath, draft, "utf-8")
      lines.push(`draft: ${draftPath}`)
      continue
    } else {
      if (
        refreshEvidence ||
        !evidence.transcriptsUsed ||
        !evidence.sources ||
        evidence.sources.length === 0 ||
        hasCitations
      ) {
        if (weekRecords.length > 0) {
          evidence = await buildWeeklyEvidencePack(config, entry.week, weekRecords, pack.year, {
            useTranscripts: true
          })
          await fs.writeFile(evidencePath, JSON.stringify(evidence, null, 2), "utf-8")
        }
      }

      if (!evidence.sources || evidence.sources.length === 0) {
        lines.push(`missing transcripts: ${entry.week}`)
        continue
      }
    }

    let imageUrl = ""
    if (entry.image_query || evidence.imageQuery) {
      const querySeed = entry.image_query || evidence.imageQuery
      const query = `${querySeed} site:substack.com OR site:google.com OR site:gstatic.com OR site:googleusercontent.com OR site:x.com OR site:twitter.com`
      const results = await searchBraveImages(config, query)
      const preferred = pickImageCandidate(results, PREFERRED_IMAGE_DOMAINS)
      const fallback = preferred || pickImageCandidate(results, FALLBACK_IMAGE_DOMAINS)
      imageUrl = fallback?.url || fallback?.thumbnail || ""
    }

    let rawDraft = ""
    let referenceCallouts = ""
    if (includeReferences) {
      const siteFilter = buildSiteFilter(referenceSites)
      const queries = buildReferenceQueries(weekMeta, evidence, siteFilter)
      const results = []
      for (const query of queries) {
        const found = await searchNewsLinks(config, query, referenceLimit)
        results.push(...found)
        if (results.length >= referenceLimit) break
      }
      const uniqueRefs = dedupeReferences(results, referenceLimit)
      referenceCallouts = formatReferenceCallouts(uniqueRefs)
    }
      if (focusChannel && macroChannel) {
        try {
          const messages = buildFocusedWeeklyDraftPrompt(pack.persona_mix, evidence, weekMeta, imageUrl)
          rawDraft = await callPplx(config, messages)
        } catch {
        const summary = evidence.marketSummary || []
        const commentary = evidence.marketCommentary || []
        const crypto = evidence.cryptoMacro || []
        const outlook = evidence.outlookNextWeek || []
        const opener = summary[0] || "Weekly tape notes."
        const summaryLines = summary.length ? summary : ["Tuần này nhiều lớp câu chuyện chồng lên nhau."]
        const commentaryLines = commentary.length ? commentary : buildCommentaryFromTerms([])
        const outlookLines = outlook.length ? outlook : buildOutlookFromTerms([], "thanh khoản")

        rawDraft = `# ${evidence.workingTitle || `Weekly Market Report ${entry.week}`}\n\n${opener}\n\n## Overall Summary\n${summaryLines.map((line) => `- ${line}`).join("\n")}\n\n## Commentary\n${commentaryLines.map((line) => `- ${line}`).join("\n")}\n\n## Rates & Liquidity\n- Lãi suất và thanh khoản quyết định nhịp tuần; khi dòng tiền lắc là mọi thứ lắc theo.\n- Tôi vẫn ưu tiên quan sát kỳ vọng lãi suất hơn là headlines.\n\n## Equities\n- Dòng cổ phiếu dẫn dắt mang tính chọn lọc; không phải lúc nào cũng là xu hướng rộng.\n- Khi độ phân hóa cao, rủi ro đu bám tăng lên.\n\n## Commodities & FX\n- USD và năng lượng là trục vĩ mô.\n- Vàng bật hoặc gãy thường báo trước tâm lý phòng thủ.\n\n## Crypto Macro\n${crypto.map((line) => `- ${line}`).join("\n")}\n\n## Positioning & Flow\n- Dòng tiền vẫn thiên chiến thuật.\n- Tôi muốn thấy lực mua thật, không chỉ short-cover.\n\n## Outlook Next Week\n${outlookLines.map((line) => `- ${line}`).join("\n")}\n\n> [!note]\n> Tôi giữ bias phòng thủ cho đến khi tín hiệu xác nhận rõ ràng hơn.\n\n## questions / next\n- Điểm gãy đầu tiên sẽ nằm ở rates hay earnings?\n- Crypto còn dẫn nhịp risk-on hay bị kéo lại?\n- Bên mua thực sự đang đứng ở đâu?\n`
      }
    } else {
      const messages = buildWeeklyDraftPrompt(pack.persona_mix, evidence, weekMeta, imageUrl)
      rawDraft = await callPplx(config, messages)
    }

    if (referenceCallouts) {
      rawDraft = appendReferencesBlock(rawDraft, referenceCallouts)
    }

    if (includeCrosslinks) {
      const previousWeek = weekMeta.range ? getIsoWeekRange(parseDate(weekMeta.range.split(" to ")[0])) : null
      const previousStart = previousWeek ? new Date(parseDate(previousWeek.start)) : null
      let previousSlug = ""
      if (previousStart) {
        previousStart.setDate(previousStart.getDate() - 7)
        previousSlug = `weekly-market-report-${toIsoWeekKey(previousStart)}`
      }
      if (previousSlug) {
        rawDraft = insertCrossReference(rawDraft, previousSlug)
      }
    }

    const draft = buildWeeklyMarkdown(entry, evidence, rawDraft, imageUrl)
    const fileName = `${slugify(entry.week)}-${slugify(entry.title)}.md`
    const draftPath = path.join(outputDir, fileName)
    await fs.writeFile(draftPath, draft, "utf-8")
    if (includeCrosslinks && weekMeta.range) {
      const startDate = parseDate(weekMeta.range.split(" to ")[0])
      if (startDate) {
        const prevDate = new Date(startDate)
        prevDate.setDate(prevDate.getDate() - 7)
        const prevWeekKey = toIsoWeekKey(prevDate)
        const prevPath = path.join(outputDir, `weekly-market-report-${prevWeekKey}.md`)
        await appendLinkedFrom(prevPath, `weekly-market-report-${weekMeta.week}`, crossReason)
      }
    }
    lines.push(`draft: ${draftPath}`)
  }

  const reportName = `weekly-run-${year}-${Date.now()}.md`
  return await writeReport(reportName, lines)
}

const generateDrafts = async (config, preflightPath) => {
  const mdPath = preflightPath || path.join(PATHS.outputPreflight, "preflight-latest.md")
  const jsonPath = path.join(PATHS.outputPreflight, "preflight-latest.json")

  const approved = await readPreflightApproval(mdPath)
  if (!approved) {
    throw new Error("Preflight pack is not approved.")
  }

  if (!(await fileExists(jsonPath))) {
    throw new Error("Preflight JSON not found.")
  }

  const pack = JSON.parse(await fs.readFile(jsonPath, "utf-8"))
  await ensureDir(PATHS.contentSandbox)

  const lines = [
    `run: ${nowIso()}`,
    `count: ${pack.entries.length}`,
    ""
  ]

  for (const entry of pack.entries) {
    const recordPath = path.join(PATHS.cacheNormalized, `${entry.id}.json`)
    if (!(await fileExists(recordPath))) {
      lines.push(`missing record: ${entry.id}`)
      continue
    }

    const record = JSON.parse(await fs.readFile(recordPath, "utf-8"))
    const evidence = await buildEvidencePack(config, record)

    let imageUrl = record.ogImage
    if (!imageUrl && entry.image_query) {
      const results = await searchBraveImages(config, entry.image_query)
      const preferred = pickPreferredImage(results)
      imageUrl = preferred?.url || preferred?.thumbnail || ""
    }

    const messages = buildDraftPrompt(pack.persona_mix, evidence, record, imageUrl)
    const rawDraft = await callPplx(config, messages)

    const draft = buildDraftMarkdown(record, entry, rawDraft, imageUrl)

    const slug = slugify(entry.title || record.title || "draft")
    let draftPath = path.join(PATHS.contentSandbox, `${slug}.md`)

    let suffix = 1
    while (await fileExists(draftPath)) {
      suffix += 1
      draftPath = path.join(PATHS.contentSandbox, `${slug}-${suffix}.md`)
    }

    await fs.writeFile(draftPath, draft, "utf-8")
    lines.push(`draft: ${draftPath}`)
  }

  return await writeReport(`run-${today()}.md`, lines)
}

const archiveInbox = async () => {
  const files = await fs.readdir(PATHS.sourcesInbox)
  const archiveDir = path.join(PATHS.sourcesArchived, today().slice(0, 7))
  await ensureDir(archiveDir)

  for (const file of files) {
    if (file.toLowerCase().includes("readme")) continue
    const src = path.join(PATHS.sourcesInbox, file)
    const dst = path.join(archiveDir, file)
    await fs.rename(src, dst)
  }

  return archiveDir
}

const main = async () => {
  const config = await loadConfig()
  const limit = Number(args.get("limit") || config.limits.maxPosts)
  const year = Number(args.get("year") || new Date().getFullYear())
  const dateAfter = args.get("dateafter")
  const dateBefore = args.get("datebefore")
  const playlistStart = args.get("playliststart")
  const playlistEnd = args.get("playlistend")
  const playlistReverse = args.get("playlistreverse") === "true"
  const week = args.get("week")
  const weekStart = args.get("weekstart")
  const weekEnd = args.get("weekend")
  const offset = Number(args.get("offset") || 0)
  const refreshEvidence = args.get("refresh") === "true"
  const focusChannel = args.get("focuschannel")
  const macroChannel = args.get("macrochannel")
  const includeReferences = args.get("references") === "true"
  const includeCrosslinks = args.get("crosslink") === "true"
  const crossReason = args.get("crossreason") || "Follow-up reflection added by later week."
  const referenceLimit = Number(args.get("reflimit") || 8)
  const referenceSites = (args.get("refsources") || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean)

  if (command === "preflight") {
    const urls = await getInputUrls()
    const normalized = await normalizeSources(urls, config)
    const pack = await createPreflight(config, normalized, limit)
    const output = await writePreflight(pack)
    console.log(`Preflight written: ${output.mdPath}`)
    return
  }

  if (command === "weekly-preflight") {
    const urls = await getInputUrls()
    const youtubeUrls = urls.filter((url) => detectSourceType(url) === "youtube")
    const normalized = await normalizeSources(youtubeUrls, config, {
      types: ["youtube"],
      year,
      dateAfter,
      dateBefore,
      playlistStart,
      playlistEnd,
      playlistReverse
    })
    const pack = await createWeeklyPreflight(config, normalized, year)
    const output = await writeWeeklyPreflight(pack)
    console.log(`Weekly preflight written: ${output.mdPath}`)
    return
  }

  if (command === "cache-youtube") {
    const urls = await getInputUrls()
    const youtubeUrls = urls.filter((url) => detectSourceType(url) === "youtube")
    const normalized = await normalizeSources(youtubeUrls, config, {
      types: ["youtube"],
      year,
      dateAfter,
      dateBefore,
      playlistStart,
      playlistEnd,
      playlistReverse
    })
    console.log(`Cached ${normalized.length} YouTube records for ${year}.`)
    return
  }

  if (command === "weekly-preflight-cache") {
    const urls = await getInputUrls()
    const youtubeUrls = urls.filter((url) => detectSourceType(url) === "youtube")
    const records = await readCachedYouTubeRecords(year, youtubeUrls)
    const pack = await createWeeklyPreflight(config, records, year)
    const output = await writeWeeklyPreflight(pack)
    console.log(`Weekly preflight written from cache: ${output.mdPath}`)
    return
  }

  if (command === "generate") {
    const report = await generateDrafts(config, args.get("preflight"))
    console.log(`Drafts generated. Report: ${report}`)
    return
  }

  if (command === "weekly-generate") {
    const report = await generateWeeklyReports(config, args.get("preflight"), {
      week,
      weekStart,
      weekEnd,
      offset,
      limit,
      refreshEvidence,
      focusChannel,
      macroChannel,
      includeReferences,
      includeCrosslinks,
      crossReason,
      referenceLimit,
      referenceSites
    })
    console.log(`Weekly reports generated. Report: ${report}`)
    return
  }

  if (command === "weekly-references") {
    const updated = await updateWeeklyReferences(config, {
      year,
      week,
      weekStart,
      weekEnd,
      referenceLimit,
      referenceSites
    })
    if (updated.length === 0) {
      console.log("No reports updated.")
    } else {
      console.log("Updated reports:")
      for (const item of updated) console.log(`- ${item}`)
    }
    return
  }

  if (command === "news-update") {
    const sourcePath = args.get("source")
    const title = args.get("title") || "News Update"
    const summary = args.get("summary") || ""
    const body = args.get("body") || ""
    const date = args.get("date") || today()
    const newsIdArg = args.get("newsid") || ""

    if (!sourcePath) {
      throw new Error("news-update requires --source <path>")
    }

    const sourceContent = await fs.readFile(sourcePath, "utf-8")
    const sourceFrontmatter = readFrontmatter(sourceContent)
    const sourceTitle = sourceFrontmatter.title || "Source Note"
    const sourceNoteId = sourceFrontmatter.note_id || ""
    const sourceSlug = path.basename(sourcePath, ".md")

    const year = date.slice(0, 4)
    const yearDir = path.join(PATHS.contentNews, year)
    await ensureDir(yearDir)

    const newsId = newsIdArg || (await getNextNewsId(date, yearDir))
    const noteParent = sourceNoteId || ""
    const noteBranch = noteParent ? `${noteParent}.N${newsId.slice(-2)}` : ""

    const tags = parseTags(sourceFrontmatter.tags)
    const mergedTags = Array.from(new Set(["news-update", ...tags]))

    const frontmatter = [
      "---",
      `title: ${title}`,
      `tags: [${mergedTags.join(", ")}]`,
      ...(newsId ? [`note_id: ${newsId}`, `news_id: ${newsId}`] : []),
      ...(noteParent ? [`note_parent: ${noteParent}`] : []),
      ...(noteBranch ? [`note_branch: ${noteBranch}`] : []),
      "draft: true",
      `description: ${summary || "News update"}`,
      `created: ${date}`,
      `updated: ${today()}`,
      "---"
    ].join("\n")

    const contentLines = [
      `# ${title}`,
      "",
      `This update branches from [[${sourceTitle}]].`,
      "",
      "## What Changed",
      summary ? `- ${summary}` : "- Update summary pending.",
      "",
      "## Why It Matters",
      "- Note the impact on the original thesis.",
      "",
      "## My Read",
      body || "I am extending the original note with a new data point and adjusting my risk posture accordingly.",
      "",
      "## Links",
      `- [[${sourceSlug}]]`,
      "",
      "## questions / next",
      "- What breaks if this update is wrong?",
      "- What would confirm the new direction?",
      "",
      "#"
    ]

    const fileSlug = slugify(`${date}-${title}`)
    const targetPath = path.join(yearDir, `${fileSlug}.md`)
    const noteContent = `${frontmatter}\n\n${contentLines.join("\n")}`
    await fs.writeFile(targetPath, noteContent, "utf-8")

    await appendUpdatesBlock(sourcePath, fileSlug, summary, date)
    await appendLinkedFrom(sourcePath, fileSlug, "News update added.")

    console.log(`News update created: ${targetPath}`)
    return
  }

  if (command === "archive") {
    const archivedPath = await archiveInbox()
    console.log(`Archived inbox to: ${archivedPath}`)
    return
  }

  console.log("Usage:")
  console.log("  node automation/pipeline.mjs preflight --limit 100 --persona \"analytical,reflective,warm\"")
  console.log("  node automation/pipeline.mjs generate --preflight automation/output/preflight/preflight-latest.md")
  console.log("  node automation/pipeline.mjs weekly-preflight --year 2025 --persona \"analytical,pragmatic,skeptical\"")
  console.log("  node automation/pipeline.mjs weekly-generate --preflight automation/output/preflight/preflight-weekly-latest.md")
  console.log("  node automation/pipeline.mjs weekly-generate --week 2025-W01")
  console.log("  node automation/pipeline.mjs weekly-generate --weekstart 2025-W01 --weekend 2025-W04")
  console.log("  node automation/pipeline.mjs weekly-generate --limit 10 --offset 0")
  console.log("  node automation/pipeline.mjs weekly-generate --week 2025-W01 --references true --refsources \"bls.gov,bea.gov,federalreserve.gov\"")
  console.log("  node automation/pipeline.mjs weekly-references --year 2025 --weekstart 2025-W01 --weekend 2025-W05 --refsources \"bls.gov,bea.gov,federalreserve.gov,treasury.gov,fred.stlouisfed.org,ft.com,wsj.com,bloomberg.com,reuters.com\"")
  console.log("  node automation/pipeline.mjs news-update --source content/mark-memo/2025/weekly-market-report-2025-W25.md --title \"Tariff Pause Update\" --summary \"Policy pause shifted risk premium\"")
  console.log("  node automation/pipeline.mjs cache-youtube --year 2025 --url <channel_url>")
  console.log("  node automation/pipeline.mjs cache-youtube --year 2025 --dateafter 20250101 --datebefore 20250331 --url <channel_url>")
  console.log("  node automation/pipeline.mjs cache-youtube --year 2025 --playliststart 1 --playlistend 120 --url <channel_url>")
  console.log("  node automation/pipeline.mjs weekly-preflight-cache --year 2025")
  console.log("  node automation/pipeline.mjs archive")
}

main().catch((error) => {
  console.error(error.message)
  process.exit(1)
})
