import fs from "node:fs/promises"
import path from "node:path"

import matter from "gray-matter"

type ModuleRow = {
  title: string
  kind: string
  description: string
  controls: string
  response: string
}

type Compilation = {
  slug: string
  title: string
  url: string
  author: string
  about: string[]
  modules: ModuleRow[]
}

type ControlDefinition =
  | { kind: "range"; id: string; label: string; min: number; max: number; step: number; value: number }
  | { kind: "toggle"; id: string; label: string; value: boolean }
  | { kind: "choice"; id: string; label: string; value: string; options: string[] }
  | { kind: "action"; id: "reset" | "pause-toggle"; label: string }

type ModuleDescriptor = {
  sceneId: string
  articleId: string
  moduleId: string
  index: number
  title: string
  kind: string
  description: string
  controlsSummary: string
  responseSummary: string
  renderer: "canvas" | "svg"
  family: string
  visual: string
  layout: "inline" | "chart" | "compare" | "sticky" | "note"
  noteOnly: boolean
  controls: ControlDefinition[]
  defaultPreset: Record<string, boolean | number | string>
  sharedGroup?: string
  pauseGroup?: string
  gestures: string[]
}

type ArticleDescriptor = {
  id: string
  title: string
  author: string
  url: string
  lead: string
  about: string[]
  moduleCount: number
  modules: ModuleDescriptor[]
}

const ROOT = process.cwd()
const COMPILATION_DIR = path.resolve(ROOT, "..", "..", "interactive-note", "compilations")
const INTERACTIVE_DIR = path.resolve(ROOT, "content", "Notes", "Interactive")
const VISUAL_NOTES_PATH = path.resolve(ROOT, "content", "Visual Notes.md")
const INTERACTIVE_HUB_PATH = path.resolve(ROOT, "content", "Notes", "Interactive.md")
const GENERATED_REGISTRY_PATH = path.resolve(
  ROOT,
  "quartz",
  "components",
  "scripts",
  "interactive",
  "generatedModuleRegistry.ts",
)
const TODAY = "2026-03-08"

const titleToNotePath: Record<string, string> = {
  "Alpha Compositing": "Alpha-Compositing.md",
  Airfoil: "Airfoil.md",
  Bicycle: "Bicycle.md",
  "Cameras and Lenses": "Cameras-and-Lenses.md",
  "Color Spaces": "Color-Spaces.md",
  "Curves and Surfaces": "Curves-and-Surfaces.md",
  "Decision Trees": "Decision-Trees.md",
  "Double Descent": "Double-Descent.md",
  "Double Descent 2": "Double-Descent-2.md",
  "Earth and Sun": "Earth-and-Sun.md",
  Gears: "Gears.md",
  GPS: "GPS.md",
  "Hysteresis & Slack": "Hysteresis-and-Slack.md",
  "Immersive Linear Algebra": "Immersive-Linear-Algebra.md",
  "Internal Combustion Engine": "Internal-Combustion-Engine.md",
  "Lights and Shadows": "Lights-and-Shadows.md",
  "Linear Regression": "Linear-Regression.md",
  "Load Balancing": "Load-Balancing.md",
  "Logistic Regression": "Logistic-Regression.md",
  "Mechanical Watch": "Mechanical-Watch.md",
  "Memory Allocation": "Memory-Allocation.md",
  "Naval Architecture": "Naval-Architecture.md",
  "Precision & Recall": "Precision-Recall.md",
  "Random Forest": "Random-Forest.md",
  "Reading QR codes without a computer!": "Reading-QR-Codes-without-a-Computer.md",
  "Rigid Body Collisions": "Rigid-Body-Collisions.md",
  "ROC & AUC": "ROC-AUC.md",
  Sound: "Sound.md",
  Tesseract: "Tesseract.md",
  "The Bias Variance Tradeoff": "The-Bias-Variance-Tradeoff.md",
  "Train, Test, and Validation Sets": "Train-Test-and-Validation-Sets.md",
}

const sceneSlugOverrides: Record<string, string> = {
  "Hysteresis & Slack": "hysteresis-slack",
  "Precision & Recall": "precision-recall",
  "ROC & AUC": "roc-auc",
}

const normalizeTitle = (title: string) =>
  title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")

const normalizeUrl = (value: string) => value.match(/\((https?:\/\/[^)]+)\)/)?.[1] ?? value.trim()

const toSentence = (text: string) => {
  const compact = text.replace(/\s+/g, " ").trim()
  if (compact.length <= 180) return compact
  const stop = compact.indexOf(". ", 120)
  return stop === -1 ? `${compact.slice(0, 177)}...` : compact.slice(0, stop + 1)
}

const defaultTagsForCompilation = (compilation: Compilation) => {
  const base = ["portfolio", "blog", "external", "interactive"]
  if (compilation.author.includes("Bartosz")) return [...base, "ciechanow", "explorable"]
  if (compilation.author.toLowerCase().includes("machine learning")) {
    return [...base, "machine-learning", "mlu"]
  }
  return [...base, "explorable"]
}

const parseCompilation = async (filePath: string): Promise<Compilation> => {
  const raw = await fs.readFile(filePath, "utf8")
  const title = raw.match(/^# (.+)$/m)?.[1]?.trim() ?? path.basename(filePath, ".md")
  const url = raw.match(/^\*\*Website URL:\*\* (.+)$/m)?.[1]?.trim() ?? ""
  const author = raw.match(/^\*\*Author\/Domain:\*\* (.+)$/m)?.[1]?.trim() ?? ""
  const aboutBlock = raw.match(/## What the Site is About\s+([\s\S]*?)\n## /)?.[1] ?? ""
  const about = aboutBlock
    .split("\n")
    .filter((line) => line.trim().startsWith("- "))
    .map((line) => line.replace(/^- /, "").trim())
  const modulesBlock =
    raw.match(
      /### Visualization\/Illustration Modules \(Expanded\)\s+([\s\S]*?)\n### Interaction Surface Summary/,
    )?.[1] ?? ""
  const modules = modulesBlock
    .split("\n")
    .filter((line) => line.startsWith("| "))
    .slice(2)
    .map((line) => line.split("|").map((cell) => cell.trim()))
    .filter((cells) => cells.length >= 6)
    .map((cells) => ({
      title: cells[1],
      kind: cells[2],
      description: cells[3],
      controls: cells[4],
      response: cells[5],
    }))

  return {
    slug: sceneSlugOverrides[title] ?? normalizeTitle(title),
    title,
    url,
    author,
    about,
    modules,
  }
}

const buildPreset = (controls: ControlDefinition[]) =>
  Object.fromEntries(
    controls
      .filter((control) => control.kind !== "action")
      .map((control) => [control.id, control.value] as const),
  )

const inferLayout = (module: ModuleRow, renderer: "canvas" | "svg", noteOnly: boolean) => {
  if (noteOnly) return "note" as const
  if (renderer === "svg" || module.kind.includes("chart")) return "chart" as const
  return "inline" as const
}

const inferSharedGroup = (slug: string, visual: string) => {
  if (slug === "linear-regression" && visual.startsWith("regression")) return "linear-regression-core"
  if (slug === "hysteresis-slack") return "hysteresis-core"
  if (slug === "color-spaces" && ["chromaticity", "transfer-curve", "rgb-cube"].includes(visual)) {
    return "color-spaces-core"
  }
  if (slug === "gps" && ["orbit-constellation", "trilateration", "signal-timeline"].includes(visual)) {
    return "gps-core"
  }
  if (slug === "mechanical-watch" && ["mechanical-train", "mainspring", "escapement"].includes(visual)) {
    return "mechanical-watch-core"
  }
  if (slug === "airfoil" && ["flow-body", "velocity-field", "pressure-map", "boundary-layer"].includes(visual)) {
    return "airfoil-core"
  }
  return undefined
}

const buildModuleDescriptor = (compilation: Compilation, module: ModuleRow, index: number): ModuleDescriptor => {
  const visual = inferVisual(compilation.slug, module)
  const renderer = inferRenderer(compilation.slug, visual, module.kind)
  const noteOnly = module.kind.toLowerCase().includes("reference/narrative")
  const gestures = parseGestures(module.controls)
  const controls = noteOnly ? [] : buildControls(compilation.slug, visual, gestures)
  return {
    sceneId: `${compilation.slug}:module-${String(index + 1).padStart(2, "0")}`,
    articleId: compilation.slug,
    moduleId: `module-${String(index + 1).padStart(2, "0")}`,
    index: index + 1,
    title: module.title,
    kind: module.kind,
    description: toSentence(module.description),
    controlsSummary: module.controls,
    responseSummary: toSentence(module.response),
    renderer,
    family: compilation.slug,
    visual,
    layout: inferLayout(module, renderer, noteOnly),
    noteOnly,
    controls,
    defaultPreset: buildPreset(controls),
    sharedGroup: noteOnly ? undefined : inferSharedGroup(compilation.slug, visual),
    pauseGroup: gestures.includes("play/pause") ? `${compilation.slug}-motion` : undefined,
    gestures,
  }
}

const buildArticle = (compilation: Compilation): ArticleDescriptor => ({
  id: compilation.slug,
  title: compilation.title,
  author: compilation.author,
  url: normalizeUrl(compilation.url),
  lead:
    compilation.about[0] ??
    `${compilation.title} works best when the prose stays attached to visible state changes.`,
  about: compilation.about,
  moduleCount: compilation.modules.length,
  modules: compilation.modules.map((module, index) => buildModuleDescriptor(compilation, module, index)),
})

const buildControlMarkup = (sceneId: string, control: ControlDefinition) => {
  const id = `${sceneId.replace(/[^a-z0-9]+/gi, "-")}-${control.id}`
  if (control.kind === "range") {
    return `    <div class="interactive-sim-control">
      <label for="${id}">${control.label}</label>
      <input id="${id}" data-control="${control.id}" type="range" min="${control.min}" max="${control.max}" step="${control.step}" value="${control.value}" />
    </div>`
  }
  if (control.kind === "toggle") {
    return `    <label class="interactive-toggle-row" for="${id}">
      <input id="${id}" data-control="${control.id}" type="checkbox" ${control.value ? "checked" : ""} />
      <span>${control.label}</span>
    </label>`
  }
  if (control.kind === "choice") {
    return `    <div class="interactive-sim-control">
      <label>${control.label}</label>
      <div class="interactive-choice-group">
${control.options
  .map(
    (option, index) => `        <label class="interactive-choice-pill" for="${id}-${index}">
          <input id="${id}-${index}" data-control="${control.id}" type="radio" name="${id}" value="${option}" ${option === control.value ? "checked" : ""} />
          <span>${option}</span>
        </label>`,
  )
  .join("\n")}
      </div>
    </div>`
  }
  return `    <button data-control="${control.id}" type="button">${control.label}</button>`
}

const buildSimMarkup = (module: ModuleDescriptor) => {
  const attrs = [
    `data-sim-scene="${module.sceneId}"`,
    `data-sim-module="${module.sceneId}"`,
    module.sharedGroup ? `data-sim-shared="${module.sharedGroup}"` : "",
    module.pauseGroup ? `data-sim-pause-group="${module.pauseGroup}"` : "",
  ]
    .filter(Boolean)
    .join(" ")
  const stageClass = module.layout === "chart" ? "stage-short" : "stage-medium"
  const media =
    module.renderer === "canvas"
      ? `<canvas class="sim-canvas" aria-label="${module.title} interactive module"></canvas>`
      : `<svg class="sim-svg" aria-label="${module.title} interactive module"></svg>`
  return `<div class="interactive-sim" ${attrs}>
  <div class="interactive-sim-stage ${stageClass}">
    ${media}
  </div>
  <div class="interactive-sim-controls">
${module.controls.map((control) => buildControlMarkup(module.sceneId, control)).join("\n")}
  </div>
</div>`
}

const buildModuleSection = (module: ModuleDescriptor, index: number) => {
  const reverseClass = index % 2 === 1 ? " is-reversed" : ""
  const copy = `  <div class="interactive-module-copy">
    <span class="casefile-label">Module ${String(module.index).padStart(2, "0")} · ${module.kind}</span>
    <h2>${module.title}</h2>
    <p>${module.description}</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> ${module.controlsSummary}. <strong>Response:</strong> ${module.responseSummary}</p>
  </div>`
  const figure = module.noteOnly
    ? `  <div class="interactive-module-note">
    <p>This section is narrative in the source article, so it stays Quartz-native while the adjacent interactive modules carry the live simulation state.</p>
  </div>`
    : `  <div class="interactive-module-figure">
${buildSimMarkup(module)}
  </div>`
  return `<section class="interactive-module${reverseClass}" data-layout="${module.layout}" data-module-id="${module.moduleId}">
${copy}
${figure}
</section>`
}

const buildObservationCards = (article: ArticleDescriptor) => {
  const observations = [...article.about]
  while (observations.length < 3) {
    observations.push(`${article.title} works because the explanation stays attached to visible state changes.`)
  }
  return `<div class="note-observation-grid">
${observations
  .slice(0, 3)
  .map(
    (entry, index) => `  <div class="observation-card">
    <h3>${["System behavior", "Control surface", "Reading cue"][index]}</h3>
    <p>${toSentence(entry)}</p>
  </div>`,
  )
  .join("\n")}
</div>`
}

const buildNoteContent = async (article: ArticleDescriptor) => {
  const noteFileName = titleToNotePath[article.title]
  if (!noteFileName) throw new Error(`Missing note path mapping for ${article.title}`)
  const notePath = path.join(INTERACTIVE_DIR, noteFileName)
  const existing = await parseExistingNote(notePath)
  const tags =
    Array.isArray(existing?.data.tags) && existing.data.tags.length > 0
      ? existing.data.tags.map(String)
      : defaultTagsForCompilation({
          slug: article.id,
          title: article.title,
          url: article.url,
          author: article.author,
          about: article.about,
          modules: [],
        })
  const related = existing ? extractRelatedNotes(existing.content) : []
  const frontmatter = {
    title: article.title,
    tags,
    draft: false,
    description: toSentence(article.lead),
    created: normalizeDateField(existing?.data.created, TODAY),
    updated: TODAY,
    aliases: normalizeAliases(existing?.data.aliases, [`Portfolio/Stuffs/${noteFileName.replace(/\.md$/, "")}`]),
    cssclasses: Array.from(
      new Set([...(Array.isArray(existing?.data.cssclasses) ? existing.data.cssclasses.map(String) : []), "external-canvas-note", "note-lab", "module-lab"]),
    ),
  }

  const body = `# ${article.title}

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="${article.url}" target="_blank" rel="noopener noreferrer">${article.title} by ${article.author}</a></p>
</div>

<p class="note-lede">${toSentence(article.lead)}</p>

<div class="interactive-article" data-interactive-article="${article.id}">
  <div class="interactive-module-stack">
${article.modules.map((module, index) => buildModuleSection(module, index)).join("\n\n")}
  </div>
</div>

## What to notice

${buildObservationCards(article)}

## Related notes

${(related.length > 0 ? related : ["[[Visual Notes]]", "[[Interactive]]"]).map((entry) => `- ${entry}`).join("\n")}
`

  await fs.writeFile(notePath, matter.stringify(body, frontmatter), "utf8")
}

const buildRegistryModule = (articles: ArticleDescriptor[]) =>
  `import type { InteractiveArticleDescriptor } from "./moduleRegistry"

export const GENERATED_INTERACTIVE_ARTICLES: InteractiveArticleDescriptor[] = ${JSON.stringify(
    articles,
    null,
    2,
  )} as InteractiveArticleDescriptor[]

export const GENERATED_MODULE_SCENE_MAP = Object.fromEntries(
  GENERATED_INTERACTIVE_ARTICLES.flatMap((article) =>
    article.modules.map((module) => [module.sceneId, module] as const),
  ),
) as Record<string, InteractiveArticleDescriptor["modules"][number]>
`

const buildHubNotes = (articles: ArticleDescriptor[]) => {
  const ciechanow = articles.filter((article) => article.author.includes("Bartosz"))
  const mlu = articles.filter((article) => article.author.toLowerCase().includes("machine learning"))
  const other = articles.filter((article) => !ciechanow.includes(article) && !mlu.includes(article))
  const noteLink = (article: ArticleDescriptor) =>
    `[[Notes/Interactive/${titleToNotePath[article.title].replace(/\.md$/, "")}|${article.title}]]`

  const visualNotes = `---
title: Visual Notes
tags: [notes, interactive, explorable]
draft: false
description: Quartz-native visual notes rebuilt module by module from explorable source compilations.
created: 2026-03-07
updated: ${TODAY}
cssclasses: [branch-hub]
---

# Visual Notes

This shelf now tracks the source articles at the module level. Each note uses ordered inline demos instead of a single hero simulation with preset jumps.

## Ciechanowski set

${ciechanow.map((article) => `- ${noteLink(article)}`).join("\n")}

## Additional explainers

${other.map((article) => `- ${noteLink(article)}`).join("\n")}

## MLU explainers

${mlu.map((article) => `- ${noteLink(article)}`).join("\n")}
`

  const interactiveHub = `---
title: Interactive
tags: [notes, archive, interactive]
draft: false
description: Main branch for explorable notes, visual explainers, and related shelves.
created: 2026-03-07
updated: ${TODAY}
aliases: [AI_Sandbox/AI Sandbox]
cssclasses: [branch-hub]
---

# Interactive

The interactive branch now mounts module-accurate note bodies. Source inventories drive the number, order, and type of live demos in each article.

## Start with these anchor notes

- [[Notes/Interactive/Airfoil|Airfoil]]
- [[Notes/Interactive/Mechanical-Watch|Mechanical Watch]]
- [[Notes/Interactive/GPS|GPS]]
- [[Notes/Interactive/Color-Spaces|Color Spaces]]
- [[Notes/Interactive/Hysteresis-and-Slack|Hysteresis & Slack]]
- [[Notes/Interactive/Linear-Regression|Linear Regression]]

## Visual branch

- [[Visual Notes]]
`

  return { visualNotes, interactiveHub }
}

const main = async () => {
  const files = (await fs.readdir(COMPILATION_DIR))
    .filter((name) => name.endsWith(".md") && !name.startsWith("_"))
    .sort()
  const compilations = await Promise.all(
    files.map((fileName) => parseCompilation(path.join(COMPILATION_DIR, fileName))),
  )
  const articles = compilations.map((compilation) => buildArticle(compilation))

  await fs.writeFile(GENERATED_REGISTRY_PATH, buildRegistryModule(articles), "utf8")
  for (const article of articles) {
    await buildNoteContent(article)
  }

  const hubs = buildHubNotes(articles)
  await fs.writeFile(VISUAL_NOTES_PATH, hubs.visualNotes, "utf8")
  await fs.writeFile(INTERACTIVE_HUB_PATH, hubs.interactiveHub, "utf8")
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})

const parseExistingNote = async (notePath: string) => {
  try {
    return matter(await fs.readFile(notePath, "utf8"))
  } catch {
    return null
  }
}

const extractRelatedNotes = (content: string) => {
  const block = content.match(/## Related notes\s+([\s\S]*?)(?:\n## |\s*$)/)?.[1] ?? ""
  return block
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("- "))
    .map((line) => line.replace(/^- /, "").trim())
}

const normalizeDateField = (value: unknown, fallback: string) => {
  if (typeof value === "string" && value.trim().length > 0) return value.trim().slice(0, 10)
  if (value instanceof Date && !Number.isNaN(value.valueOf())) return value.toISOString().slice(0, 10)
  return fallback
}

const normalizeAliases = (value: unknown, fallback: string[]) => {
  if (Array.isArray(value) && value.length > 0) return value.map(String)
  if (typeof value === "string" && value.trim().length > 0) return [value.trim()]
  return fallback
}

const parseGestures = (controls: string) => {
  const source = controls.toLowerCase()
  return [
    ...(source.includes("slider") || source.includes("range") ? ["slider/range"] : []),
    ...(source.includes("drag") ? ["drag"] : []),
    ...(source.includes("click") || source.includes("tap") ? ["click/tap"] : []),
    ...(source.includes("hover") ? ["hover"] : []),
    ...(source.includes("play/pause") || source.includes("scroll") ? ["play/pause"] : []),
  ]
}

const inferVisual = (slug: string, module: ModuleRow) => {
  const source = `${slug} ${module.title} ${module.kind}`.toLowerCase()
  if (source.includes("regression") && source.includes("formula")) return "regression-formula"
  if (source.includes("regression") && source.includes("residual")) return "regression-residual"
  if (source.includes("regression")) return "regression-fit"
  if (source.includes("precision") || source.includes("roc") || source.includes("logistic")) return "ml-threshold"
  if (source.includes("decision tree")) return "tree-split"
  if (source.includes("random forest")) return "ensemble-vote"
  if (source.includes("double descent")) return "double-descent"
  if (source.includes("bias variance")) return "bias-variance"
  if (source.includes("validation")) return "dataset-partition"
  if (source.includes("hysteresis") || source.includes("plot")) return source.includes("trajectory") ? "trajectory-editor" : "hysteresis-plot"
  if (source.includes("linear algebra")) return "basis-transform"
  if (source.includes("load balancing")) return "queue-balance"
  if (source.includes("memory allocation")) return "memory-fragmentation"
  if (source.includes("qr")) return "qr-grid"
  if (source.includes("collision")) return "collision-resolve"
  if (source.includes("airfoil") || source.includes("pressure") || source.includes("boundary")) {
    if (source.includes("pressure")) return "pressure-map"
    if (source.includes("boundary")) return "boundary-layer"
    if (source.includes("velocity")) return "velocity-field"
    if (source.includes("cube")) return "particle-box"
    return "flow-body"
  }
  if (source.includes("watch") || source.includes("gear") || source.includes("escapement") || source.includes("mainspring") || source.includes("click")) {
    if (source.includes("escapement")) return "escapement"
    if (source.includes("click")) return "click-ratchet"
    if (source.includes("mainspring") || source.includes("power") || source.includes("wind")) return "mainspring"
    return "mechanical-train"
  }
  if (source.includes("gps") || source.includes("orbit") || source.includes("kepler") || source.includes("signal") || source.includes("position")) {
    if (source.includes("simple positioning")) return "trilateration"
    if (source.includes("signal") || source.includes("flight") || source.includes("time")) return "signal-timeline"
    return "orbit-constellation"
  }
  if (source.includes("color") || source.includes("tone response") || source.includes("chromaticity") || source.includes("matrix")) {
    if (source.includes("tone") || source.includes("intensity")) return "transfer-curve"
    if (source.includes("cube")) return "rgb-cube"
    if (source.includes("alpha")) return "layer-composite"
    return "chromaticity"
  }
  if (source.includes("sound")) return "sound-wave"
  if (source.includes("shadow") || source.includes("light")) return "shadow-volume"
  if (source.includes("engine")) return "engine-cycle"
  if (source.includes("bicycle")) return "turn-kinematics"
  if (source.includes("curve") || source.includes("surface") || source.includes("tesseract")) return "curve-surface"
  if (source.includes("camera") || source.includes("lens")) return "optics-lab"
  return "projection-lab"
}

const inferRenderer = (slug: string, visual: string, kind: string): "canvas" | "svg" => {
  const source = `${slug} ${visual} ${kind}`.toLowerCase()
  if (
    source.includes("regression") ||
    source.includes("threshold") ||
    source.includes("tree") ||
    source.includes("ensemble") ||
    source.includes("descent") ||
    source.includes("bias-variance") ||
    source.includes("partition") ||
    source.includes("plot") ||
    source.includes("queue") ||
    source.includes("memory") ||
    source.includes("basis")
  ) {
    return "svg"
  }
  return "canvas"
}

const buildControls = (_slug: string, visual: string, gestures: string[]): ControlDefinition[] => {
  const withPause = gestures.includes("play/pause")
  const pauseToggle: ControlDefinition = {
    kind: "action",
    id: "pause-toggle",
    label: "pause motion",
  }
  const pushPause = (controls: ControlDefinition[]) =>
    withPause ? [...controls, pauseToggle] : controls
  switch (visual) {
    case "flow-body":
    case "velocity-field":
    case "pressure-map":
    case "boundary-layer":
      return pushPause([
        { kind: "range", id: "angle", label: "angle", min: -18, max: 22, step: 1, value: 4 },
        { kind: "range", id: "speed", label: "flow speed", min: 0.4, max: 2.8, step: 0.05, value: 1.3 },
        { kind: "range", id: "detail", label: "detail", min: 0.1, max: 1, step: 0.01, value: 0.55 },
        { kind: "action", id: "reset", label: "reset view" },
      ])
    case "mechanical-train":
    case "mainspring":
    case "escapement":
    case "click-ratchet":
      return pushPause([
        { kind: "range", id: "speed", label: "speed", min: 0.2, max: 3.2, step: 0.05, value: 1 },
        { kind: "range", id: "ratio", label: "ratio", min: 0.35, max: 1.8, step: 0.05, value: 0.92 },
        { kind: "range", id: "impulse", label: "impulse", min: 0.1, max: 1, step: 0.01, value: 0.55 },
        { kind: "action", id: "reset", label: "reset module" },
      ])
    case "orbit-constellation":
    case "trilateration":
    case "signal-timeline":
      return pushPause([
        { kind: "range", id: "time", label: "time", min: 0.2, max: 3, step: 0.05, value: 1 },
        { kind: "range", id: "altitude", label: "altitude", min: 0.1, max: 0.95, step: 0.01, value: 0.58 },
        { kind: "range", id: "inclination", label: "inclination", min: 0, max: 1, step: 0.01, value: 0.45 },
        { kind: "action", id: "reset", label: "reset geometry" },
      ])
    case "chromaticity":
    case "transfer-curve":
    case "rgb-cube":
    case "layer-composite":
      return pushPause([
        { kind: "range", id: "red", label: "red/input", min: 0, max: 1, step: 0.01, value: 0.55 },
        { kind: "range", id: "green", label: "green/gamma", min: 0, max: 1, step: 0.01, value: 0.42 },
        { kind: "range", id: "blue", label: "blue/detail", min: 0, max: 1, step: 0.01, value: 0.68 },
        { kind: "choice", id: "space", label: "space", value: "sRGB", options: ["sRGB", "Display P3", "XYZ"] },
        { kind: "action", id: "reset", label: "reset palette" },
      ])
    case "hysteresis-plot":
    case "trajectory-editor":
      return [
        { kind: "range", id: "slack", label: "slack", min: 0.02, max: 0.42, step: 0.01, value: 0.18 },
        { kind: "range", id: "damping", label: "damping", min: 0.4, max: 0.98, step: 0.01, value: 0.78 },
        { kind: "range", id: "drive", label: "drive", min: 0.4, max: 2.2, step: 0.05, value: 1.1 },
        { kind: "action", id: "reset", label: "reset path" },
      ]
    case "basis-transform":
      return [
        { kind: "range", id: "scale", label: "scale", min: 0.4, max: 2.2, step: 0.05, value: 1.1 },
        { kind: "range", id: "shear", label: "shear", min: -1.5, max: 1.5, step: 0.05, value: 0.25 },
        { kind: "range", id: "rotation", label: "rotation", min: -180, max: 180, step: 1, value: 24 },
        { kind: "action", id: "reset", label: "reset basis" },
      ]
    case "queue-balance":
      return [
        { kind: "range", id: "traffic", label: "traffic", min: 0.4, max: 2.8, step: 0.05, value: 1.3 },
        { kind: "range", id: "power", label: "server skew", min: 0.6, max: 2.4, step: 0.05, value: 1.2 },
        { kind: "action", id: "reset", label: "reroute" },
      ]
    case "memory-fragmentation":
      return [
        { kind: "range", id: "request", label: "request", min: 1, max: 8, step: 1, value: 4 },
        { kind: "action", id: "reset", label: "repack" },
      ]
    case "regression-fit":
    case "regression-residual":
    case "regression-formula":
      return [
        { kind: "range", id: "slope", label: "slope", min: -2, max: 2, step: 0.02, value: 0.6 },
        { kind: "range", id: "intercept", label: "intercept", min: -1.5, max: 1.5, step: 0.02, value: 0.1 },
        { kind: "range", id: "spread", label: "spread", min: 0.1, max: 1.2, step: 0.01, value: 0.35 },
        { kind: "action", id: "reset", label: "reset fit" },
      ]
    case "tree-split":
      return [
        { kind: "range", id: "threshold", label: "threshold", min: 0.1, max: 0.9, step: 0.01, value: 0.48 },
        { kind: "range", id: "noise", label: "noise", min: 0, max: 0.45, step: 0.01, value: 0.12 },
        { kind: "action", id: "reset", label: "reset split" },
      ]
    case "ensemble-vote":
      return [
        { kind: "range", id: "trees", label: "trees", min: 3, max: 7, step: 1, value: 5 },
        { kind: "action", id: "reset", label: "reshuffle" },
      ]
    case "double-descent":
      return [
        { kind: "range", id: "capacity", label: "capacity", min: 0.2, max: 3, step: 0.02, value: 1.2 },
        { kind: "range", id: "data", label: "data ratio", min: 0.4, max: 2.2, step: 0.02, value: 1 },
        { kind: "action", id: "reset", label: "reset curve" },
      ]
    case "bias-variance":
      return [
        { kind: "range", id: "complexity", label: "complexity", min: 0.2, max: 2, step: 0.02, value: 0.9 },
        { kind: "action", id: "reset", label: "reset curve" },
      ]
    case "dataset-partition":
      return [{ kind: "action", id: "reset", label: "reset split" }]
    case "ml-threshold":
      return [
        { kind: "range", id: "threshold", label: "threshold", min: 0.05, max: 0.95, step: 0.01, value: 0.52 },
        { kind: "range", id: "imbalance", label: "imbalance", min: 0.1, max: 0.9, step: 0.01, value: 0.35 },
        { kind: "range", id: "noise", label: "noise", min: 0, max: 0.5, step: 0.01, value: 0.12 },
        { kind: "action", id: "reset", label: "reset threshold" },
      ]
    default:
      return [
        { kind: "range", id: "scale", label: "scale", min: 0.2, max: 2, step: 0.02, value: 0.85 },
        { kind: "range", id: "rotation", label: "rotation", min: -180, max: 180, step: 1, value: 22 },
        { kind: "action", id: "reset", label: "reset view" },
      ]
  }
}
