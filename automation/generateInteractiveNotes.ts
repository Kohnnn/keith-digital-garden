import fs from "node:fs/promises"
import path from "node:path"

const ROOT = process.cwd()
const COMPILATION_DIR = path.resolve(ROOT, "..", "..", "interactive-note", "compilations")
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

const parseCompilation = async (filePath: string) => {
  const raw = await fs.readFile(filePath, "utf8")
  const title = raw.match(/^# (.+)$/m)?.[1]?.trim() ?? path.basename(filePath, ".md")
  const modulesBlock =
    raw.match(
      /### Visualization\/Illustration Modules \(Expanded\)\s+([\s\S]*?)\n### Interaction Surface Summary/,
    )?.[1] ?? ""
  const modules = modulesBlock
    .split("\n")
    .filter((line) => line.startsWith("| "))
    .slice(2)
    .length
  return { title, modules }
}

const readCoverage = async (notePath: string) => {
  const raw = await fs.readFile(notePath, "utf8")
  return {
    sections: (raw.match(/data-module-id="/g) ?? []).length,
    scenes: (raw.match(/data-sim-module="/g) ?? []).length,
  }
}

const main = async () => {
  const files = (await fs.readdir(COMPILATION_DIR))
    .filter((name) => name.endsWith(".md") && !name.startsWith("_"))
    .sort()
  const rows = []
  for (const file of files) {
    const compilation = await parseCompilation(path.join(COMPILATION_DIR, file))
    const noteFile = titleToNotePath[compilation.title]
    if (!noteFile) {
      rows.push(`${compilation.title}: missing note mapping`)
      continue
    }
    const notePath = path.join(INTERACTIVE_DIR, noteFile)
    const coverage = await readCoverage(notePath)
    rows.push(
      `${compilation.title}: modules=${compilation.modules} sections=${coverage.sections} live-scenes=${coverage.scenes}`,
    )
  }
  console.log(rows.join("\n"))
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
