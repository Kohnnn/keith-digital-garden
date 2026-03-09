import fs from "node:fs/promises"
import path from "node:path"

import { auditInteractiveNote } from "./interactiveCoverage"
import { INTERACTIVE_ARTICLES } from "../quartz/components/scripts/interactive/articleRegistry"
import { getArticleModuleCount } from "../quartz/components/scripts/interactive/moduleRegistry"

const ROOT = process.cwd()
const INTERACTIVE_DIR = path.resolve(ROOT, "content", "Notes", "Interactive")

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

const main = async () => {
  const rows = await Promise.all(
    INTERACTIVE_ARTICLES.map(async (article) => {
      const noteFile = titleToNotePath[article.title]
      if (!noteFile) {
        return `${article.title}: missing note mapping`
      }

      const notePath = path.join(INTERACTIVE_DIR, noteFile)
      try {
        const markdown = await fs.readFile(notePath, "utf8")
        const audit = auditInteractiveNote(article, markdown)
        return [
          `${article.title}`,
          `source=${article.moduleCount}`,
          `live=${getArticleModuleCount(article)}`,
          `authored=${audit.actualModules.length}`,
          `missing=${audit.missingModules.length}`,
          `extra=${audit.extraModules.length}`,
          `fallback=${audit.fallbackMarkers.length}`,
        ].join(" | ")
      } catch {
        return `${article.title}: note file missing at ${noteFile}`
      }
    }),
  )

  console.log(rows.join("\n"))
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
