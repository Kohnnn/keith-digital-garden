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

type ControlConfig = {
  id: string
  label: string
  min: number
  max: number
  step: number
  value: number
}

type SceneConfig = {
  ariaLabel: string
  stageClass: string
  tags: string[]
  description: string
  controls: ControlConfig[]
  related: string[]
}

const ROOT = process.cwd()
const COMPILATION_DIR = path.resolve(ROOT, "..", "..", "interactive-note", "compilations")
const INTERACTIVE_DIR = path.resolve(ROOT, "content", "Notes", "Interactive")
const PRESET_FILE = path.resolve(
  ROOT,
  "quartz",
  "components",
  "scripts",
  "interactive",
  "generatedPresets.ts",
)
const VISUAL_NOTES_PATH = path.resolve(ROOT, "content", "Visual Notes.md")
const INTERACTIVE_HUB_PATH = path.resolve(ROOT, "content", "Notes", "Interactive.md")
const TODAY = "2026-03-08"

const sceneConfigs: Record<string, SceneConfig> = {
  "hysteresis-slack": {
    ariaLabel: "Hysteresis and slack response plot",
    stageClass: "stage-medium",
    tags: ["portfolio", "blog", "external", "interactive", "systems", "mechanics"],
    description: "Interactive lag-and-slack sandbox for preload, damping, and hysteresis loops.",
    controls: [
      { id: "slack", label: "slack window", min: 0.02, max: 0.42, step: 0.01, value: 0.18 },
      { id: "damping", label: "damping", min: 0.4, max: 0.98, step: 0.01, value: 0.78 },
      { id: "drive", label: "drive rate", min: 0.4, max: 2.2, step: 0.05, value: 1.15 },
    ],
    related: ["[[Load Balancing]]", "[[Memory Allocation]]", "[[Mechanical Watch]]"],
  },
  "immersive-linear-algebra": {
    ariaLabel: "Linear algebra basis transform view",
    stageClass: "stage-medium",
    tags: ["portfolio", "blog", "external", "interactive", "math", "linear-algebra"],
    description:
      "Interactive basis-transform sandbox for vectors, eigen directions, and matrix intuition.",
    controls: [
      { id: "scale", label: "basis scale", min: 0.4, max: 2.2, step: 0.05, value: 1.1 },
      { id: "shear", label: "shear", min: -1.5, max: 1.5, step: 0.05, value: 0.25 },
      { id: "rotation", label: "rotation", min: -180, max: 180, step: 1, value: 24 },
    ],
    related: ["[[Tesseract]]", "[[Curves and Surfaces]]", "[[Linear Regression]]"],
  },
  "load-balancing": {
    ariaLabel: "Load balancing queue simulator",
    stageClass: "stage-medium",
    tags: ["portfolio", "blog", "external", "interactive", "systems", "performance"],
    description:
      "Interactive request-routing lab for algorithm choice, arrival pressure, and server skew.",
    controls: [
      { id: "traffic", label: "traffic rate", min: 0.4, max: 2.8, step: 0.05, value: 1.3 },
      { id: "power", label: "server skew", min: 0.6, max: 2.4, step: 0.05, value: 1.2 },
      { id: "burst", label: "burstiness", min: 0, max: 1, step: 0.01, value: 0.35 },
    ],
    related: ["[[Memory Allocation]]", "[[Hysteresis and Slack]]", "[[Random Forest]]"],
  },
  "memory-allocation": {
    ariaLabel: "Memory allocation fragmentation view",
    stageClass: "stage-medium",
    tags: ["portfolio", "blog", "external", "interactive", "systems", "memory"],
    description:
      "Interactive allocator sandbox for request size, churn, and fragmentation behavior.",
    controls: [
      { id: "request", label: "request size", min: 1, max: 8, step: 1, value: 4 },
      { id: "churn", label: "churn", min: 0.1, max: 0.95, step: 0.01, value: 0.45 },
      { id: "reserve", label: "reserve blocks", min: 4, max: 20, step: 1, value: 12 },
    ],
    related: ["[[Load Balancing]]", "[[Exposing NSMutableArray]]", "[[Exposing Floating Point]]"],
  },
  "reading-qr-codes-without-a-computer": {
    ariaLabel: "QR decoding grid",
    stageClass: "stage-medium",
    tags: ["portfolio", "blog", "external", "interactive", "computation", "visualization"],
    description:
      "Interactive QR decoding notebook for masks, modules, and error-correction intuition.",
    controls: [
      { id: "mask", label: "mask pattern", min: 0, max: 7, step: 1, value: 3 },
      { id: "noise", label: "noise", min: 0, max: 0.45, step: 0.01, value: 0.08 },
      { id: "scan", label: "scan line", min: 0, max: 20, step: 1, value: 10 },
    ],
    related: ["[[Exposing NSDictionary]]", "[[Color Spaces]]", "[[Immersive Linear Algebra]]"],
  },
  "rigid-body-collisions": {
    ariaLabel: "Rigid body collision playground",
    stageClass: "stage-medium",
    tags: ["portfolio", "blog", "external", "interactive", "physics", "simulation"],
    description: "Interactive collision sandbox for restitution, mass ratio, and contact angle.",
    controls: [
      { id: "restitution", label: "restitution", min: 0, max: 1, step: 0.01, value: 0.82 },
      { id: "mass", label: "mass ratio", min: 0.2, max: 3, step: 0.05, value: 1.1 },
      { id: "angle", label: "impact angle", min: -75, max: 75, step: 1, value: 18 },
    ],
    related: ["[[Naval Architecture]]", "[[Bicycle]]", "[[Sound]]"],
  },
  "decision-trees": {
    ariaLabel: "Decision tree split explorer",
    stageClass: "stage-medium",
    tags: ["portfolio", "blog", "external", "interactive", "machine-learning", "mlu"],
    description: "Interactive split explorer for thresholds, purity, and branching structure.",
    controls: [
      { id: "threshold", label: "threshold", min: 0.1, max: 0.9, step: 0.01, value: 0.48 },
      { id: "noise", label: "label noise", min: 0, max: 0.45, step: 0.01, value: 0.12 },
      { id: "depth", label: "tree depth", min: 1, max: 6, step: 1, value: 3 },
    ],
    related: ["[[Random Forest]]", "[[Train-Test-and-Validation-Sets]]", "[[Linear Regression]]"],
  },
  "double-descent": {
    ariaLabel: "Double descent curve",
    stageClass: "stage-medium",
    tags: ["portfolio", "blog", "external", "interactive", "machine-learning", "mlu"],
    description:
      "Interactive model-capacity curve for interpolation spikes and second-descent intuition.",
    controls: [
      { id: "capacity", label: "capacity", min: 0.2, max: 3, step: 0.02, value: 1.2 },
      { id: "data", label: "data ratio", min: 0.4, max: 2.2, step: 0.02, value: 1 },
      { id: "noise", label: "noise", min: 0, max: 0.6, step: 0.01, value: 0.18 },
    ],
    related: ["[[Double Descent 2]]", "[[The Bias Variance Tradeoff]]", "[[Linear Regression]]"],
  },
  "double-descent-2": {
    ariaLabel: "Double descent variant curve",
    stageClass: "stage-medium",
    tags: ["portfolio", "blog", "external", "interactive", "machine-learning", "mlu"],
    description:
      "Interactive second-pass double-descent view for interpolation width and data scaling.",
    controls: [
      { id: "capacity", label: "capacity", min: 0.2, max: 3.2, step: 0.02, value: 1.55 },
      { id: "width", label: "interpolation width", min: 0.2, max: 1.8, step: 0.02, value: 0.65 },
      { id: "noise", label: "noise", min: 0, max: 0.6, step: 0.01, value: 0.14 },
    ],
    related: ["[[Double Descent]]", "[[The Bias Variance Tradeoff]]", "[[Random Forest]]"],
  },
  "linear-regression": {
    ariaLabel: "Linear regression fit explorer",
    stageClass: "stage-medium",
    tags: ["portfolio", "blog", "external", "interactive", "machine-learning", "mlu"],
    description:
      "Interactive regression notebook for slope, intercept, and residual error behavior.",
    controls: [
      { id: "slope", label: "slope", min: -2, max: 2, step: 0.02, value: 0.6 },
      { id: "intercept", label: "intercept", min: -1.5, max: 1.5, step: 0.02, value: 0.1 },
      { id: "spread", label: "data spread", min: 0.1, max: 1.2, step: 0.01, value: 0.35 },
    ],
    related: ["[[Logistic Regression]]", "[[The Bias Variance Tradeoff]]", "[[Decision Trees]]"],
  },
  "logistic-regression": {
    ariaLabel: "Logistic regression threshold explorer",
    stageClass: "stage-medium",
    tags: ["portfolio", "blog", "external", "interactive", "machine-learning", "mlu"],
    description:
      "Interactive classification notebook for logits, thresholds, and decision boundaries.",
    controls: [
      { id: "weight", label: "weight", min: -6, max: 6, step: 0.1, value: 2.4 },
      { id: "bias", label: "bias", min: -3, max: 3, step: 0.05, value: -0.4 },
      { id: "threshold", label: "threshold", min: 0.1, max: 0.9, step: 0.01, value: 0.5 },
    ],
    related: ["[[Precision Recall]]", "[[ROC AUC]]", "[[Linear Regression]]"],
  },
  "precision-recall": {
    ariaLabel: "Precision recall threshold chart",
    stageClass: "stage-medium",
    tags: ["portfolio", "blog", "external", "interactive", "machine-learning", "mlu"],
    description:
      "Interactive threshold chart for precision, recall, and class imbalance tradeoffs.",
    controls: [
      { id: "threshold", label: "threshold", min: 0.05, max: 0.95, step: 0.01, value: 0.52 },
      { id: "imbalance", label: "class imbalance", min: 0.1, max: 0.9, step: 0.01, value: 0.35 },
      { id: "noise", label: "score noise", min: 0, max: 0.5, step: 0.01, value: 0.12 },
    ],
    related: ["[[Logistic Regression]]", "[[ROC AUC]]", "[[Train-Test-and-Validation-Sets]]"],
  },
  "random-forest": {
    ariaLabel: "Random forest ensemble explorer",
    stageClass: "stage-medium",
    tags: ["portfolio", "blog", "external", "interactive", "machine-learning", "mlu"],
    description:
      "Interactive ensemble notebook for tree count, feature randomness, and vote stability.",
    controls: [
      { id: "trees", label: "tree count", min: 3, max: 25, step: 1, value: 9 },
      { id: "features", label: "feature subsample", min: 1, max: 6, step: 1, value: 3 },
      { id: "noise", label: "sample noise", min: 0, max: 0.45, step: 0.01, value: 0.12 },
    ],
    related: [
      "[[Decision Trees]]",
      "[[Train-Test-and-Validation-Sets]]",
      "[[The Bias Variance Tradeoff]]",
    ],
  },
  "roc-auc": {
    ariaLabel: "ROC and AUC curve",
    stageClass: "stage-medium",
    tags: ["portfolio", "blog", "external", "interactive", "machine-learning", "mlu"],
    description:
      "Interactive ranking notebook for ROC curves, threshold motion, and AUC interpretation.",
    controls: [
      { id: "threshold", label: "threshold", min: 0.05, max: 0.95, step: 0.01, value: 0.5 },
      { id: "separation", label: "class separation", min: 0.1, max: 1.2, step: 0.01, value: 0.75 },
      { id: "noise", label: "score noise", min: 0, max: 0.45, step: 0.01, value: 0.1 },
    ],
    related: ["[[Precision Recall]]", "[[Logistic Regression]]", "[[Linear Regression]]"],
  },
  "the-bias-variance-tradeoff": {
    ariaLabel: "Bias variance tradeoff curve",
    stageClass: "stage-medium",
    tags: ["portfolio", "blog", "external", "interactive", "machine-learning", "mlu"],
    description: "Interactive complexity curve for underfit, overfit, and total error reasoning.",
    controls: [
      { id: "complexity", label: "model complexity", min: 0.2, max: 3, step: 0.02, value: 1.1 },
      { id: "data", label: "data richness", min: 0.4, max: 2.2, step: 0.02, value: 1 },
      { id: "noise", label: "noise floor", min: 0, max: 0.5, step: 0.01, value: 0.12 },
    ],
    related: ["[[Double Descent]]", "[[Linear Regression]]", "[[Random Forest]]"],
  },
  "train-test-and-validation-sets": {
    ariaLabel: "Dataset split explorer",
    stageClass: "stage-medium",
    tags: ["portfolio", "blog", "external", "interactive", "machine-learning", "mlu"],
    description: "Interactive dataset split notebook for train, validation, and test tradeoffs.",
    controls: [
      { id: "train", label: "train share", min: 0.4, max: 0.85, step: 0.01, value: 0.64 },
      {
        id: "validation",
        label: "validation share",
        min: 0.05,
        max: 0.35,
        step: 0.01,
        value: 0.18,
      },
      { id: "shift", label: "distribution shift", min: 0, max: 0.5, step: 0.01, value: 0.08 },
    ],
    related: ["[[Decision Trees]]", "[[Random Forest]]", "[[Precision Recall]]"],
  },
}

const titleToNotePath: Record<string, string> = {
  Airfoil: "Airfoil.md",
  "Alpha Compositing": "Alpha-Compositing.md",
  Bicycle: "Bicycle.md",
  "Cameras and Lenses": "Cameras-and-Lenses.md",
  "Color Spaces": "Color-Spaces.md",
  "Curves and Surfaces": "Curves-and-Surfaces.md",
  "Earth and Sun": "Earth-and-Sun.md",
  Gears: "Gears.md",
  GPS: "GPS.md",
  "Internal Combustion Engine": "Internal-Combustion-Engine.md",
  "Lights and Shadows": "Lights-and-Shadows.md",
  "Mechanical Watch": "Mechanical-Watch.md",
  "Naval Architecture": "Naval-Architecture.md",
  Sound: "Sound.md",
  Tesseract: "Tesseract.md",
  "Hysteresis & Slack": "Hysteresis-and-Slack.md",
  "Immersive Linear Algebra": "Immersive-Linear-Algebra.md",
  "Load Balancing": "Load-Balancing.md",
  "Memory Allocation": "Memory-Allocation.md",
  "Reading QR codes without a computer!": "Reading-QR-Codes-without-a-Computer.md",
  "Rigid Body Collisions": "Rigid-Body-Collisions.md",
  "Decision Trees": "Decision-Trees.md",
  "Double Descent": "Double-Descent.md",
  "Double Descent 2": "Double-Descent-2.md",
  "Linear Regression": "Linear-Regression.md",
  "Logistic Regression": "Logistic-Regression.md",
  "Precision & Recall": "Precision-Recall.md",
  "Random Forest": "Random-Forest.md",
  "ROC & AUC": "ROC-AUC.md",
  "The Bias Variance Tradeoff": "The-Bias-Variance-Tradeoff.md",
  "Train, Test, and Validation Sets": "Train-Test-and-Validation-Sets.md",
}

const normalizeTitle = (title: string) =>
  title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")

const sceneSlugOverrides: Record<string, string> = {
  "Hysteresis & Slack": "hysteresis-slack",
  "Precision & Recall": "precision-recall",
  "ROC & AUC": "roc-auc",
}

const normalizeUrl = (value: string) => value.match(/\((https?:\/\/[^)]+)\)/)?.[1] ?? value.trim()

const isMluCompilation = (compilation: Compilation) =>
  compilation.author.toLowerCase().includes("machine learning university")

const defaultTagsForCompilation = (compilation: Compilation) => {
  const base = ["portfolio", "blog", "external", "interactive"]
  if (compilation.author === "Bartosz Ciechanowski") {
    return [...base, "ciechanow", "explorable"]
  }

  if (isMluCompilation(compilation)) {
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

const toSentence = (text: string) => {
  const compact = text.replace(/\s+/g, " ").trim()
  if (compact.length <= 180) return compact
  const stop = compact.indexOf(". ", 120)
  return stop === -1 ? `${compact.slice(0, 177)}...` : compact.slice(0, stop + 1)
}

const parseExistingNote = async (notePath: string) => {
  try {
    const raw = await fs.readFile(notePath, "utf8")
    return matter(raw)
  } catch {
    return null
  }
}

const extractFirstInteractiveBlock = (content: string) => {
  const start = content.indexOf('<div class="interactive-sim')
  if (start === -1) return null

  const divPattern = /<\/?div\b[^>]*>/g
  divPattern.lastIndex = start
  let depth = 0
  let openFound = false
  let match: RegExpExecArray | null

  while ((match = divPattern.exec(content)) !== null) {
    if (!openFound) {
      openFound = true
      depth = 1
      continue
    }

    depth += match[0].startsWith("</div") ? -1 : 1
    if (depth === 0) {
      return content.slice(start, divPattern.lastIndex)
    }
  }

  return null
}

const extractControlsFromMarkup = (markup: string | null): ControlConfig[] => {
  if (!markup) return []
  return Array.from(
    markup.matchAll(
      /<label(?: for="[^"]+")?>([^<]+)<\/label>\s*<input[^>]*data-control="([^"]+)"[^>]*min="([^"]+)"[^>]*max="([^"]+)"[^>]*step="([^"]+)"[^>]*value="([^"]+)"/g,
    ),
  ).map((match) => ({
    label: match[1].trim(),
    id: match[2].trim(),
    min: Number(match[3]),
    max: Number(match[4]),
    step: Number(match[5]),
    value: Number(match[6]),
  }))
}

const extractStageClassFromMarkup = (markup: string | null) => {
  if (!markup) return null
  return markup.match(/class="interactive-sim-stage(?: ([^"]+))?"/)?.[1]?.trim() ?? "stage-medium"
}

const extractAriaLabelFromMarkup = (markup: string | null) =>
  markup?.match(/aria-label="([^"]+)"/)?.[1]?.trim() ?? null

const extractRelatedNotes = (content: string) => {
  const relatedBlock = content.match(/## Related notes\s+([\s\S]*?)(?:\n## |\s*$)/)?.[1] ?? ""
  return relatedBlock
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("- "))
    .map((line) => line.replace(/^- /, "").trim())
}

const mergeCssClasses = (value: unknown) => {
  const existing = Array.isArray(value) ? value.map(String) : []
  return Array.from(new Set([...existing, "external-canvas-note", "note-lab", "story-lab"]))
}

const normalizeDateField = (value: unknown, fallback: string) => {
  if (typeof value === "string" && value.trim().length > 0) {
    return value.trim().slice(0, 10)
  }

  if (value instanceof Date && !Number.isNaN(value.valueOf())) {
    return value.toISOString().slice(0, 10)
  }

  return fallback
}

const normalizeAliases = (value: unknown, fallback: string[]) => {
  if (Array.isArray(value) && value.length > 0) return value.map(String)
  if (typeof value === "string" && value.trim().length > 0) return [value.trim()]
  return fallback
}

const resolveSceneConfig = (
  compilation: Compilation,
  existing: matter.GrayMatterFile<string> | null,
  existingInteractive: string | null,
): SceneConfig => {
  const configured = sceneConfigs[compilation.slug]
  const existingTags =
    Array.isArray(existing?.data.tags) && existing.data.tags.length > 0
      ? existing.data.tags.map(String)
      : null
  const existingRelated = existing ? extractRelatedNotes(existing.content) : []
  const description =
    typeof existing?.data.description === "string" && existing.data.description.trim().length > 0
      ? existing.data.description.trim()
      : (configured?.description ??
        toSentence(
          compilation.about[0] ??
            `${compilation.title} works best when the prose stays attached to visible state changes.`,
        ))

  return {
    ariaLabel:
      extractAriaLabelFromMarkup(existingInteractive) ??
      configured?.ariaLabel ??
      `${compilation.title} interactive view`,
    stageClass:
      extractStageClassFromMarkup(existingInteractive) || configured?.stageClass || "stage-medium",
    tags: existingTags ?? configured?.tags ?? defaultTagsForCompilation(compilation),
    description,
    controls: configured?.controls ?? [],
    related:
      existingRelated.length > 0
        ? existingRelated
        : (configured?.related ?? ["[[Visual Notes]]", "[[Interactive]]"]),
  }
}

const buildPresetValues = (controls: ControlConfig[], ratio: number) => {
  const values: Record<string, number> = {}
  controls.forEach((control, index) => {
    const wave = ((Math.sin((ratio + index * 0.17) * Math.PI * 2) + 1) / 2) * 0.6 + 0.2
    const value = control.min + (control.max - control.min) * wave
    const decimals =
      control.step >= 1 ? 0 : Math.min(6, String(control.step).split(".")[1]?.length ?? 2)
    values[control.id] = Number(value.toFixed(decimals))
  })
  return values
}

const buildControlsMarkup = (controls: ControlConfig[], prefix: string) => `
  <div class="interactive-sim-controls">
${controls
  .map(
    (control) => `    <div class="interactive-sim-control">
      <label for="${prefix}-${control.id}">${control.label}</label>
      <input id="${prefix}-${control.id}" data-control="${control.id}" type="range" min="${control.min}" max="${control.max}" step="${control.step}" value="${control.value}" />
    </div>`,
  )
  .join("\n")}
    <button data-control="reset" type="button">reset view</button>
  </div>`

const buildPrimarySimMarkup = (slug: string, controls: ControlConfig[], config: SceneConfig) => `
<div class="interactive-sim interactive-story-sim" data-sim-scene="${slug}" data-sync-group="${slug}-main">
  <div class="interactive-sim-stage ${config.stageClass}">
    <canvas class="sim-canvas" aria-label="${config.ariaLabel}"></canvas>
  </div>
${buildControlsMarkup(controls, slug)}
</div>`

const buildStorySteps = (compilation: Compilation) =>
  (compilation.modules.length > 0
    ? compilation.modules
    : [
        {
          title: "Overview",
          kind: "story",
          description:
            compilation.about[0] ??
            `${compilation.title} is structured as a linked explorable system rather than a static article summary.`,
          controls:
            "Use the preset shelf and main controls to move between stable and stressed states.",
          response: "The visual state updates in lockstep with the surrounding prose.",
        },
      ]
  )
    .map(
      (
        module,
        index,
      ) => `    <section class="story-step" data-story-step="module-${String(index + 1).padStart(2, "0")}" data-step-scene="${compilation.slug}" data-step-preset="module-${String(index + 1).padStart(2, "0")}" data-sync-group="${compilation.slug}-main">
      <span class="casefile-label">Module ${String(index + 1).padStart(2, "0")}</span>
      <h2>${module.title}</h2>
      <p>${toSentence(module.description)}</p>
      <p class="story-step-meta"><strong>Controls:</strong> ${module.controls}. <strong>Response:</strong> ${toSentence(module.response)}</p>
    </section>`,
    )
    .join("\n")

const buildObservationCards = (compilation: Compilation) => {
  const observations = compilation.about.slice(0, 3)
  while (observations.length < 3) {
    observations.push(
      `The ${compilation.title} article works because the explanation stays attached to visible state changes instead of abstract narration.`,
    )
  }

  return `<div class="note-observation-grid">
${observations
  .map(
    (entry, index) => `  <div class="observation-card">
    <h3>${["System behavior", "Control surface", "Reading cue"][index]}</h3>
    <p>${toSentence(entry)}</p>
  </div>`,
  )
  .join("\n")}
</div>`
}

const buildNoteContent = async (compilation: Compilation) => {
  const noteFileName = titleToNotePath[compilation.title]
  if (!noteFileName) throw new Error(`Missing note path mapping for ${compilation.title}`)

  const notePath = path.join(INTERACTIVE_DIR, noteFileName)
  const existing = await parseExistingNote(notePath)
  const existingInteractive = existing ? extractFirstInteractiveBlock(existing.content) : null
  const config = resolveSceneConfig(compilation, existing, existingInteractive)
  const extractedControls = extractControlsFromMarkup(existingInteractive)
  const controls = extractedControls.length > 0 ? extractedControls : config.controls

  if (controls.length === 0) {
    throw new Error(`No scene config found for ${compilation.slug}`)
  }

  const frontmatter = {
    title: compilation.title,
    tags: config.tags,
    draft: false,
    description: config.description,
    created: normalizeDateField(existing?.data.created, TODAY),
    updated: TODAY,
    aliases: normalizeAliases(existing?.data.aliases, [
      `Portfolio/Stuffs/${noteFileName.replace(/\.md$/, "")}`,
    ]),
    cssclasses: mergeCssClasses(existing?.data.cssclasses),
  }

  const lead =
    compilation.about[0] ??
    config.description ??
    `${compilation.title} becomes easier to read when the visual state and the prose move together.`

  const primarySimMarkup =
    existingInteractive && controls.length > 0
      ? existingInteractive.replace(
          /<div class="interactive-sim"/,
          `<div class="interactive-sim interactive-story-sim" data-sync-group="${compilation.slug}-main"`,
        )
      : buildPrimarySimMarkup(compilation.slug, controls, config)

  const body = `# ${compilation.title}

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="${normalizeUrl(compilation.url)}" target="_blank" rel="noopener noreferrer">${compilation.title} by ${compilation.author}</a></p>
</div>

<p class="note-lede">${toSentence(lead)}</p>

<div class="interactive-article" data-interactive-article="${compilation.slug}">
  <div class="interactive-story">
    <div class="interactive-story-rail">
${primarySimMarkup}
      <div class="interactive-step-caption" data-step-caption>
        <span class="casefile-label">Story sync</span>
        <p>The visual state follows the active step so the note reads like an explorable system rather than a detached summary.</p>
      </div>
      <div class="interactive-preset-shelf" data-preset-shelf="${compilation.slug}">
        <button type="button" data-preset-id="baseline">baseline</button>
        <button type="button" data-preset-id="explore">explore</button>
        <button type="button" data-preset-id="stress">stress</button>
        <button type="button" data-preset-id="contrast">contrast</button>
      </div>
    </div>
    <div class="interactive-story-steps">
${buildStorySteps(compilation)}
    </div>
  </div>
</div>

## What to notice

${buildObservationCards(compilation)}

## Limits

- This note keeps Quartz-native prose and structure rather than cloning the source page byte for byte.
- Repeated source variants are collapsed into presets and step-driven states where the behavior is materially the same.
- The interactive layer is tuned for conceptual fidelity and readable browser performance, not a literal runtime port.

## Related notes

${config.related.map((entry) => `- ${entry}`).join("\n")}
`

  return { notePath, body: matter.stringify(body, frontmatter), controls }
}

const buildPresetsModule = (presetMap: Record<string, Record<string, Record<string, number>>>) =>
  `export const GENERATED_SCENE_PRESETS: Record<string, Record<string, Record<string, number>>> = ${JSON.stringify(
    presetMap,
    null,
    2,
  )}\n`

const buildHubNotes = (compilations: Compilation[]) => {
  const ciechanow = compilations.filter(
    (compilation) => compilation.author === "Bartosz Ciechanowski",
  )
  const mlu = compilations.filter((compilation) => isMluCompilation(compilation))
  const other = compilations.filter(
    (compilation) =>
      compilation.author !== "Bartosz Ciechanowski" && !isMluCompilation(compilation),
  )

  const visualNotes = `---
title: Visual Notes
tags: [notes, interactive, explorable]
draft: false
description: Quartz-native visual notes rebuilt from explorable source compilations.
created: 2026-03-07
updated: ${TODAY}
cssclasses: [branch-hub]
---

# Visual Notes

This shelf now behaves like a true explorable branch. The visual surface is Quartz-native, but the storytelling and module coverage track the compilation set much more closely than the earlier adaptation pass.

## Ciechanowski set

${ciechanow.map((compilation) => `- [[Notes/Interactive/${titleToNotePath[compilation.title].replace(/\.md$/, "")}|${compilation.title}]]`).join("\n")}

## Additional explainers

${other.map((compilation) => `- [[Notes/Interactive/${titleToNotePath[compilation.title].replace(/\.md$/, "")}|${compilation.title}]]`).join("\n")}

## MLU scrollytelling

${mlu.map((compilation) => `- [[Notes/Interactive/${titleToNotePath[compilation.title].replace(/\.md$/, "")}|${compilation.title}]]`).join("\n")}

## Reading pattern

- Start with a note when you want the visual system and the prose to stay locked together.
- Use the preset shelf for quick state jumps, then read the sticky story steps in order.
- Move back to [[Interactive]] for the wider branch and the non-visual shelves.
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

This branch now holds the rebuilt explorable note system: Quartz-native notes with sticky visual rails, step-driven storytelling, and broader source coverage than the previous adaptation pass.

## Start with the visual explainers

- [[Visual Notes]]
- [[Notes/Interactive/Airfoil|Airfoil]]
- [[Notes/Interactive/GPS|GPS]]
- [[Notes/Interactive/Mechanical-Watch|Mechanical Watch]]
- [[Notes/Interactive/Linear-Regression|Linear Regression]]

## Scrollytelling notes

${mlu
  .slice(0, 5)
  .map(
    (compilation) =>
      `- [[Notes/Interactive/${titleToNotePath[compilation.title].replace(/\.md$/, "")}|${compilation.title}]]`,
  )
  .join("\n")}

## Then open the shelves

- [[Notes/Interactive/General_Notes|General notes]]
- [[Notes/Interactive/Research_Digests|Research digests]]
- [[Notes/Interactive/Tech_Journal|Tech journal]]
- [[Notes/Interactive/Market_News|Market news]]
- [[Notes/Interactive/Thoughtpieces|Thoughtpieces]]
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

  const presetMap: Record<string, Record<string, Record<string, number>>> = {}
  for (const compilation of compilations) {
    const { notePath, body, controls } = await buildNoteContent(compilation)
    await fs.writeFile(notePath, body, "utf8")

    const presets: Record<string, Record<string, number>> = {
      baseline: Object.fromEntries(controls.map((control) => [control.id, control.value])),
      explore: buildPresetValues(controls, 0.25),
      stress: buildPresetValues(controls, 0.55),
      contrast: buildPresetValues(controls, 0.85),
    }

    compilation.modules.forEach((_, index) => {
      const ratio = (index + 1) / Math.max(compilation.modules.length + 1, 2)
      presets[`module-${String(index + 1).padStart(2, "0")}`] = buildPresetValues(controls, ratio)
    })

    presetMap[compilation.slug] = presets
  }

  await fs.writeFile(PRESET_FILE, buildPresetsModule(presetMap), "utf8")
  const hubs = buildHubNotes(compilations)
  await fs.writeFile(VISUAL_NOTES_PATH, hubs.visualNotes, "utf8")
  await fs.writeFile(INTERACTIVE_HUB_PATH, hubs.interactiveHub, "utf8")
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
