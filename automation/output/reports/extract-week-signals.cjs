const fs = require("fs")
const path = require("path")

const paths = {
  "2025-W02": {
    steve: [
      "C:/Users/Admin/Desktop/PersonalWebsite/ProjectObsidian/keith-digital-garden/automation/raw/transcripts/28886833354bcf099950277b8e51a080ac021957.txt",
      "C:/Users/Admin/Desktop/PersonalWebsite/ProjectObsidian/keith-digital-garden/automation/raw/transcripts/3db1b3e1f8187a7fb914003fbb66bdd0f24f81a7.txt",
      "C:/Users/Admin/Desktop/PersonalWebsite/ProjectObsidian/keith-digital-garden/automation/raw/transcripts/4607a8bb5929b07ab60d9951bb238bf919803341.txt",
      "C:/Users/Admin/Desktop/PersonalWebsite/ProjectObsidian/keith-digital-garden/automation/raw/transcripts/8717172430c0b1b67fe28f3666b8e02e302e39db.txt",
      "C:/Users/Admin/Desktop/PersonalWebsite/ProjectObsidian/keith-digital-garden/automation/raw/transcripts/b698cb4ab41a6a758f602034ab627c435ed7f6b1.txt"
    ],
    crypto: [
      "C:/Users/Admin/Desktop/PersonalWebsite/ProjectObsidian/keith-digital-garden/automation/raw/transcripts/1b60ca4edba229f4d8ec464abd2ed50c425b47e7.txt",
      "C:/Users/Admin/Desktop/PersonalWebsite/ProjectObsidian/keith-digital-garden/automation/raw/transcripts/2fb0fd1bcd8238f503985946a28e6aee6eb90d70.txt",
      "C:/Users/Admin/Desktop/PersonalWebsite/ProjectObsidian/keith-digital-garden/automation/raw/transcripts/4394645ab5cd436f726138423570b4f3d431d6c3.txt",
      "C:/Users/Admin/Desktop/PersonalWebsite/ProjectObsidian/keith-digital-garden/automation/raw/transcripts/56e550cba36e7413869c3d45512c0415b01470d7.txt",
      "C:/Users/Admin/Desktop/PersonalWebsite/ProjectObsidian/keith-digital-garden/automation/raw/transcripts/7e6171265b3619714fe371378dbccc8448dbb3d2.txt",
      "C:/Users/Admin/Desktop/PersonalWebsite/ProjectObsidian/keith-digital-garden/automation/raw/transcripts/ba85b9a3ff8aedc2ec4be3b755b8e46c7f7e0c6e.txt",
      "C:/Users/Admin/Desktop/PersonalWebsite/ProjectObsidian/keith-digital-garden/automation/raw/transcripts/cd1a1e645691c08090d110e1118b28d52eff4e11.txt"
    ]
  },
  "2025-W03": {
    steve: [
      "C:/Users/Admin/Desktop/PersonalWebsite/ProjectObsidian/keith-digital-garden/automation/raw/transcripts/481366ee639bcd83ef8c7bdd2265ce5e64fbff85.txt",
      "C:/Users/Admin/Desktop/PersonalWebsite/ProjectObsidian/keith-digital-garden/automation/raw/transcripts/5245750e5c3774128957348de8cecd19cbdfe57d.txt",
      "C:/Users/Admin/Desktop/PersonalWebsite/ProjectObsidian/keith-digital-garden/automation/raw/transcripts/5b074ff018dcdc9afb13bf37476c09f26c498ad5.txt",
      "C:/Users/Admin/Desktop/PersonalWebsite/ProjectObsidian/keith-digital-garden/automation/raw/transcripts/64307fe908c56689813d7430f210cd6fb02df8de.txt",
      "C:/Users/Admin/Desktop/PersonalWebsite/ProjectObsidian/keith-digital-garden/automation/raw/transcripts/b8c5ae6021364b767aa1b9d0760f5b483accae61.txt"
    ],
    crypto: [
      "C:/Users/Admin/Desktop/PersonalWebsite/ProjectObsidian/keith-digital-garden/automation/raw/transcripts/824937a3e11bcaed536c9c339cf087ff47f8403c.txt",
      "C:/Users/Admin/Desktop/PersonalWebsite/ProjectObsidian/keith-digital-garden/automation/raw/transcripts/a2494eef3dd52f3acde2a0d19c93fc5632eed20c.txt",
      "C:/Users/Admin/Desktop/PersonalWebsite/ProjectObsidian/keith-digital-garden/automation/raw/transcripts/a36576b5bf02c2c80bcbb12685dca52b5c9fa8d3.txt",
      "C:/Users/Admin/Desktop/PersonalWebsite/ProjectObsidian/keith-digital-garden/automation/raw/transcripts/b38a295aa5656132a86b5dc803d8ba46e516e54e.txt",
      "C:/Users/Admin/Desktop/PersonalWebsite/ProjectObsidian/keith-digital-garden/automation/raw/transcripts/f01611d37d3035bd62182cc3e5fd2657b508485c.txt",
      "C:/Users/Admin/Desktop/PersonalWebsite/ProjectObsidian/keith-digital-garden/automation/raw/transcripts/fdd19af5e0d4b8bcdfa2c05cf2f1c9635041a23e.txt"
    ]
  },
  "2025-W04": {
    steve: [
      "C:/Users/Admin/Desktop/PersonalWebsite/ProjectObsidian/keith-digital-garden/automation/raw/transcripts/98fb9ebca598f156b8852099b154a3f0f8fa4d50.txt",
      "C:/Users/Admin/Desktop/PersonalWebsite/ProjectObsidian/keith-digital-garden/automation/raw/transcripts/a13bcccf7432b58f8756f882dee43770b5f48dc2.txt",
      "C:/Users/Admin/Desktop/PersonalWebsite/ProjectObsidian/keith-digital-garden/automation/raw/transcripts/b39c57ba1b8b585dee3f7650c500e110beb336d9.txt",
      "C:/Users/Admin/Desktop/PersonalWebsite/ProjectObsidian/keith-digital-garden/automation/raw/transcripts/bc28e7a5f213d50c84a62a88cc2f75c638f0a612.txt",
      "C:/Users/Admin/Desktop/PersonalWebsite/ProjectObsidian/keith-digital-garden/automation/raw/transcripts/cfdadb6b9b0d6c5f8cfbe4baa417552f2587f2f5.txt",
      "C:/Users/Admin/Desktop/PersonalWebsite/ProjectObsidian/keith-digital-garden/automation/raw/transcripts/e242270ebd0c4790093999368d326d68239c0571.txt"
    ],
    crypto: [
      "C:/Users/Admin/Desktop/PersonalWebsite/ProjectObsidian/keith-digital-garden/automation/raw/transcripts/2694248422da6800e73dc5f9e0b48b549d586f6d.txt",
      "C:/Users/Admin/Desktop/PersonalWebsite/ProjectObsidian/keith-digital-garden/automation/raw/transcripts/54f9917559d6b673d1abf8019eb204ff36103339.txt",
      "C:/Users/Admin/Desktop/PersonalWebsite/ProjectObsidian/keith-digital-garden/automation/raw/transcripts/7987e43b74d9f5e158d168645b04317110bad5b1.txt",
      "C:/Users/Admin/Desktop/PersonalWebsite/ProjectObsidian/keith-digital-garden/automation/raw/transcripts/b6645a9930c51ba79178378845e98c04799ef6dd.txt",
      "C:/Users/Admin/Desktop/PersonalWebsite/ProjectObsidian/keith-digital-garden/automation/raw/transcripts/c68e40da5a31a04d9bca97c9f076345b49dd0c51.txt",
      "C:/Users/Admin/Desktop/PersonalWebsite/ProjectObsidian/keith-digital-garden/automation/raw/transcripts/d047d0bb7fffc28e56c4a50ad004d568c278c05b.txt"
    ]
  },
  "2025-W05": {
    steve: [
      "C:/Users/Admin/Desktop/PersonalWebsite/ProjectObsidian/keith-digital-garden/automation/raw/transcripts/371ebd213c5d77e4796b942f250d342ba40ce921.txt",
      "C:/Users/Admin/Desktop/PersonalWebsite/ProjectObsidian/keith-digital-garden/automation/raw/transcripts/524e85a34bedb116163e824293b1e0cfd9cffe52.txt",
      "C:/Users/Admin/Desktop/PersonalWebsite/ProjectObsidian/keith-digital-garden/automation/raw/transcripts/7d58ef6af3b8b30739290d2b89166409b9b6e852.txt",
      "C:/Users/Admin/Desktop/PersonalWebsite/ProjectObsidian/keith-digital-garden/automation/raw/transcripts/853cc8d27025abc3b45fa18d6d1543b77d559dcc.txt",
      "C:/Users/Admin/Desktop/PersonalWebsite/ProjectObsidian/keith-digital-garden/automation/raw/transcripts/91e7f2f58e94446542cf5a2f419319f12dfa9cf2.txt",
      "C:/Users/Admin/Desktop/PersonalWebsite/ProjectObsidian/keith-digital-garden/automation/raw/transcripts/ad10d8692fb479a11a6a24438e1cef98ed725f1d.txt",
      "C:/Users/Admin/Desktop/PersonalWebsite/ProjectObsidian/keith-digital-garden/automation/raw/transcripts/f571678d2e24e324ee858b45e94cde91fb126e6e.txt"
    ],
    crypto: [
      "C:/Users/Admin/Desktop/PersonalWebsite/ProjectObsidian/keith-digital-garden/automation/raw/transcripts/17e0c21afd177d40e30ca686aa38e0800bdbcbfa.txt",
      "C:/Users/Admin/Desktop/PersonalWebsite/ProjectObsidian/keith-digital-garden/automation/raw/transcripts/98a401e215c70df3342b5f30467bd936deb6d38f.txt",
      "C:/Users/Admin/Desktop/PersonalWebsite/ProjectObsidian/keith-digital-garden/automation/raw/transcripts/a60dacfaaf29649529870cf15b0d83b4ee74742e.txt",
      "C:/Users/Admin/Desktop/PersonalWebsite/ProjectObsidian/keith-digital-garden/automation/raw/transcripts/ab397956fed589111432a5b0091506fb290f5706.txt",
      "C:/Users/Admin/Desktop/PersonalWebsite/ProjectObsidian/keith-digital-garden/automation/raw/transcripts/b9d84785e9ac3fb3ebe122a582f377f99bba5d1c.txt",
      "C:/Users/Admin/Desktop/PersonalWebsite/ProjectObsidian/keith-digital-garden/automation/raw/transcripts/d7326be6363ab49d61c7c9df1ce1d01c5c0ed69f.txt",
      "C:/Users/Admin/Desktop/PersonalWebsite/ProjectObsidian/keith-digital-garden/automation/raw/transcripts/f04ab41704aabc176fcbbcba76fc4a5dcd5dc0bc.txt"
    ]
  }
}

const keywords = [
  "rate",
  "yield",
  "bond",
  "credit",
  "inflation",
  "cpi",
  "jobs",
  "employment",
  "recession",
  "liquidity",
  "tesla",
  "nvidia",
  "nvda",
  "china",
  "gold",
  "oil",
  "usd",
  "dollar",
  "bitcoin",
  "btc",
  "stablecoin",
  "dominance",
  "fomc"
]

const splitSentences = (text) => text.replace(/\s+/g, " ").split(/(?<=[.!?])\s+/)

const cleanSentences = (text) => {
  const sentences = splitSentences(text)
  const seen = new Set()
  const output = []
  for (const sentence of sentences) {
    const trimmed = sentence.trim()
    if (trimmed.length < 60 || trimmed.length > 220) continue
    const lower = trimmed.toLowerCase()
    if (seen.has(lower)) continue
    seen.add(lower)
    output.push(trimmed)
  }
  return output
}

const pick = (sentences, kw, limit) => {
  const hits = []
  for (const sentence of sentences) {
    const lower = sentence.toLowerCase()
    if (kw.some((key) => lower.includes(key))) {
      hits.push(sentence)
      if (hits.length >= limit) break
    }
  }
  return hits
}

const summary = {}
for (const week of Object.keys(paths)) {
  const steveText = paths[week].steve.map((p) => fs.readFileSync(p, "utf8")).join(" ")
  const cryptoText = paths[week].crypto.map((p) => fs.readFileSync(p, "utf8")).join(" ")
  const steveSentences = cleanSentences(steveText)
  const cryptoSentences = cleanSentences(cryptoText)
  summary[week] = {
    steveHits: pick(steveSentences, keywords, 6),
    cryptoHits: pick(cryptoSentences, keywords, 4)
  }
}

fs.writeFileSync(
  "C:/Users/Admin/Desktop/PersonalWebsite/ProjectObsidian/keith-digital-garden/automation/output/reports/week-signal-W02-W05.json",
  JSON.stringify(summary, null, 2)
)
console.log("written")
