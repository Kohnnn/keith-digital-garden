import fs from "node:fs/promises"
import path from "node:path"

import { auditInteractiveNote } from "./interactiveCoverage"
import { WAVE1A_ANCHOR_ARTICLES } from "../quartz/components/scripts/interactive/wave1aRegistry"
import { getArticleModuleCount } from "../quartz/components/scripts/interactive/moduleRegistry"

const ROOT = process.cwd()
const INTERACTIVE_DIR = path.resolve(ROOT, "content", "Notes", "Interactive")

const titleToNotePath: Record<string, string> = {
  Airfoil: "Airfoil.md",
  "Color Spaces": "Color-Spaces.md",
  GPS: "GPS.md",
  "Mechanical Watch": "Mechanical-Watch.md",
}

const main = async () => {
  const reports = await Promise.all(
    WAVE1A_ANCHOR_ARTICLES.map(async (article) => {
      const noteFile = titleToNotePath[article.title]
      if (!noteFile) {
        throw new Error(`Missing Wave 1A note mapping for ${article.title}`)
      }

      const notePath = path.join(INTERACTIVE_DIR, noteFile)
      const markdown = await fs.readFile(notePath, "utf8")
      const audit = auditInteractiveNote(article, markdown)

      return {
        article,
        noteFile,
        audit,
      }
    }),
  )

  const rows = reports.map(({ article, noteFile, audit }) => {
    const issueCount =
      audit.missingModules.length +
      audit.extraModules.length +
      (audit.firstOrderMismatch ? 1 : 0) +
      audit.fallbackMarkers.length

    return [
      `${article.title} -> ${noteFile}`,
      `source-modules=${article.moduleCount}`,
      `live-modules=${getArticleModuleCount(article)}`,
      `authored-modules=${audit.actualModules.length}`,
      `issues=${issueCount}`,
    ].join(" | ")
  })

  console.log(rows.join("\n"))

  const failures = reports.flatMap(({ article, noteFile, audit }) => {
    const messages: string[] = []

    if (audit.missingModules.length > 0) {
      messages.push(`${article.title} (${noteFile}) missing: ${audit.missingModules.join(", ")}`)
    }
    if (audit.extraModules.length > 0) {
      messages.push(`${article.title} (${noteFile}) extra: ${audit.extraModules.join(", ")}`)
    }
    if (audit.firstOrderMismatch) {
      messages.push(
        `${article.title} (${noteFile}) order mismatch at index ${audit.firstOrderMismatch.index + 1}: expected ${audit.firstOrderMismatch.expected}, found ${audit.firstOrderMismatch.actual}`,
      )
    }
    if (audit.fallbackMarkers.length > 0) {
      messages.push(
        `${article.title} (${noteFile}) generated fallback markers: ${audit.fallbackMarkers.join(", ")}`,
      )
    }

    return messages
  })

  if (failures.length > 0) {
    console.error("\nWave 1A audit failed:")
    console.error(failures.join("\n"))
    process.exitCode = 1
  }
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
