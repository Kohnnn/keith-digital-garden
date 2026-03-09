import { GENERATED_INTERACTIVE_ARTICLES } from "./generatedModuleRegistry"
import type {
  InteractiveArticleDescriptor,
  ModuleControlDefinition,
  ModuleSceneDescriptor,
} from "./moduleRegistry"

const WAVE1A_ANCHOR_IDS = ["mechanical-watch", "airfoil", "gps", "color-spaces"] as const

type Wave1aModuleOverride = Partial<
  Pick<
    ModuleSceneDescriptor,
    | "controls"
    | "defaultPreset"
    | "gestures"
    | "layout"
    | "noteOnly"
    | "pauseGroup"
    | "renderer"
    | "resetScope"
    | "sharedGroup"
  >
>

const generatedById = Object.fromEntries(
  GENERATED_INTERACTIVE_ARTICLES.map((article) => [article.id, article]),
) as Record<string, InteractiveArticleDescriptor>

const normalizeAnchorToken = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")

const range = (
  id: string,
  label: string,
  min: number,
  max: number,
  step: number,
  value: number,
): ModuleControlDefinition => ({ kind: "range", id, label, min, max, step, value })

const choice = (
  id: string,
  label: string,
  value: string,
  options: string[],
): ModuleControlDefinition => ({
  kind: "choice",
  id,
  label,
  value,
  options,
})

const action = (
  id: Extract<ModuleControlDefinition, { kind: "action" }>["id"],
  label: string,
): ModuleControlDefinition => ({ kind: "action", id, label })

const buildPreset = (controls: ModuleControlDefinition[]) =>
  Object.fromEntries(
    controls
      .filter((control) => control.kind !== "action")
      .map((control) => [control.id, control.value] as const),
  )

const flowSpeedControls = [
  range("speed", "flow speed", 0.4, 2.8, 0.05, 1.3),
  action("reset", "reset flow"),
]

const flowShapeControls = [
  range("angle", "angle of attack", -18, 22, 1, 4),
  range("speed", "flow speed", 0.4, 2.8, 0.05, 1.3),
  action("reset", "reset view"),
]

const flowDetailControls = [
  range("detail", "viscosity", 0.1, 1, 0.01, 0.55),
  action("reset", "reset field"),
]

const flowVectorControls = [
  range("speed", "flow speed", 0.4, 2.8, 0.05, 1.3),
  range("detail", "probe density", 0.1, 1, 0.01, 0.55),
  action("reset", "reset probe"),
]

const flowPauseControls = [action("pause-toggle", "pause motion"), action("reset", "reset flow")]
const dragResetControls = [action("reset", "reset position")]

const mechanicalSpeedControls = [
  range("speed", "speed", 0.2, 2.8, 0.05, 1),
  action("reset", "reset motion"),
]

const mechanicalViewControls = [
  range("ratio", "view spread", 0.35, 1.8, 0.05, 0.92),
  action("reset", "reset view"),
]

const mechanicalImpulseControls = [
  range("impulse", "impulse", 0.1, 1, 0.01, 0.55),
  action("reset", "reset step"),
]

const pauseOnlyControls = [action("pause-toggle", "pause motion")]
const clickResetControls = [action("reset", "reset step")]

const gpsTimeControls = [range("time", "time", 0.2, 3, 0.05, 1), action("reset", "reset timeline")]

const gpsOrbitControls = [
  range("altitude", "altitude", 0.1, 0.95, 0.01, 0.58),
  range("inclination", "inclination", 0, 1, 0.01, 0.45),
  action("reset", "reset orbit"),
]

const gpsReceiverControls = [
  range("altitude", "receiver height", 0.1, 0.95, 0.01, 0.58),
  action("reset", "reset receiver"),
]

const gpsGlobalPauseControls = [action("pause-toggle", "pause all motion")]

const colorPickerControls = [
  range("red", "red", 0, 1, 0.01, 0.55),
  range("green", "green", 0, 1, 0.01, 0.42),
  range("blue", "blue", 0, 1, 0.01, 0.68),
  choice("space", "space", "sRGB", ["sRGB", "Display P3", "XYZ"]),
  action("reset", "reset color"),
]

const colorSingleControls = [
  range("red", "encoded value", 0, 1, 0.01, 0.55),
  choice("space", "space", "sRGB", ["sRGB", "Display P3", "XYZ"]),
  action("reset", "reset curve"),
]

const colorExtentControls = [
  range("green", "extent", 0, 1, 0.01, 0.42),
  action("reset", "reset gamut"),
]

const colorCubeControls = [action("pause-toggle", "pause rotation"), action("reset", "reset cube")]
const colorPlotControls = [action("reset", "reset plot")]

const MECHANICAL_GLOBAL_PAUSE_GROUP = "mechanical-watch-motion"
const GPS_GLOBAL_PAUSE_GROUP = "gps-motion"

const mechanicalPauseModules = new Set(
  Array.from({ length: 24 }, (_, index) => `module-${String(index + 2).padStart(2, "0")}`),
)

const gpsGlobalPauseModules = new Set(["module-24", "module-25", "module-26"])

const buildWave1aOverride = (
  articleId: (typeof WAVE1A_ANCHOR_IDS)[number],
  module: ModuleSceneDescriptor,
): Wave1aModuleOverride => {
  const override: Wave1aModuleOverride = {
    sharedGroup: undefined,
    pauseGroup: undefined,
  }

  if (articleId === "mechanical-watch") {
    if (mechanicalPauseModules.has(module.moduleId)) {
      override.pauseGroup = MECHANICAL_GLOBAL_PAUSE_GROUP
    }

    if (module.moduleId === "module-02") {
      override.controls = pauseOnlyControls
      override.gestures = ["play/pause"]
      override.resetScope = "pause-group"
      return override
    }

    if (["module-04", "module-05", "module-11", "module-13"].includes(module.moduleId)) {
      override.controls = mechanicalSpeedControls
      return override
    }

    if (
      [
        "module-03",
        "module-06",
        "module-12",
        "module-14",
        "module-16",
        "module-18",
        "module-25",
      ].includes(module.moduleId)
    ) {
      override.controls = mechanicalViewControls
      return override
    }

    if (
      [
        "module-07",
        "module-08",
        "module-10",
        "module-19",
        "module-21",
        "module-22",
        "module-23",
        "module-24",
      ].includes(module.moduleId)
    ) {
      override.controls = clickResetControls
      override.gestures = module.gestures.filter((gesture) => gesture === "click/tap")
      return override
    }

    if (["module-09", "module-20"].includes(module.moduleId)) {
      override.controls = mechanicalImpulseControls
      return override
    }

    override.controls = mechanicalSpeedControls
    return override
  }

  if (articleId === "airfoil") {
    if (
      ["module-01", "module-02", "module-07", "module-13", "module-23", "module-26"].includes(
        module.moduleId,
      )
    ) {
      override.controls = flowSpeedControls
      override.gestures = ["slider/range"]
      return override
    }

    if (["module-03", "module-04", "module-05", "module-06"].includes(module.moduleId)) {
      override.controls = flowVectorControls
      return override
    }

    if (["module-08", "module-09"].includes(module.moduleId)) {
      override.controls = flowDetailControls
      return override
    }

    if (module.moduleId === "module-10") {
      override.controls = flowShapeControls
      override.gestures = ["slider/range"]
      return override
    }

    if (module.moduleId === "module-20") {
      override.controls = flowPauseControls
      override.gestures = ["play/pause"]
      return override
    }

    if (module.moduleId === "module-25") {
      override.controls = dragResetControls
      override.gestures = ["drag"]
      return override
    }

    if (module.renderer === "svg") {
      override.controls = colorPlotControls
      override.gestures = []
      return override
    }

    override.controls = flowShapeControls
    return override
  }

  if (articleId === "gps") {
    if (gpsGlobalPauseModules.has(module.moduleId)) {
      override.pauseGroup = GPS_GLOBAL_PAUSE_GROUP
      override.resetScope = "pause-group"
    }

    if (
      ["module-02", "module-13", "module-14", "module-19", "module-21", "module-26"].includes(
        module.moduleId,
      )
    ) {
      override.controls = dragResetControls
      override.gestures = ["drag"]
      return override
    }

    if (["module-03", "module-11", "module-12", "module-15"].includes(module.moduleId)) {
      override.controls = gpsTimeControls
      override.gestures = ["slider/range"]
      return override
    }

    if (module.moduleId === "module-17") {
      override.controls = gpsReceiverControls
      override.gestures = ["slider/range"]
      return override
    }

    if (module.moduleId === "module-23") {
      override.controls = pauseOnlyControls
      override.gestures = ["play/pause"]
      return override
    }

    if (module.moduleId === "module-24") {
      override.controls = gpsGlobalPauseControls
      override.gestures = ["play/pause"]
      return override
    }

    if (
      ["module-08", "module-09", "module-10", "module-16", "module-18", "module-25"].includes(
        module.moduleId,
      )
    ) {
      override.controls = gpsOrbitControls
      override.gestures = ["slider/range"]
      return override
    }

    override.controls = gpsOrbitControls
    return override
  }

  if (articleId === "color-spaces") {
    if (
      [
        "module-01",
        "module-02",
        "module-05",
        "module-06",
        "module-07",
        "module-09",
        "module-10",
        "module-12",
      ].includes(module.moduleId)
    ) {
      override.controls = colorPickerControls
      return override
    }

    if (
      ["module-03", "module-04", "module-13", "module-14", "module-22", "module-25"].includes(
        module.moduleId,
      )
    ) {
      override.controls =
        module.moduleId === "module-22" ? colorExtentControls : colorSingleControls
      override.gestures =
        module.moduleId === "module-22" ? ["slider/range", "drag"] : ["slider/range"]
      return override
    }

    if (module.moduleId === "module-15") {
      override.controls = colorCubeControls
      override.gestures = ["drag", "play/pause"]
      return override
    }

    if (module.moduleId === "module-23") {
      override.controls = clickResetControls
      override.gestures = ["click/tap"]
      return override
    }

    if (module.moduleId === "module-24") {
      override.controls = dragResetControls
      override.gestures = ["drag"]
      return override
    }

    if (module.renderer === "svg") {
      override.controls = colorPlotControls
      override.gestures = []
      return override
    }
  }

  return override
}

const buildWave1aModule = (
  articleId: (typeof WAVE1A_ANCHOR_IDS)[number],
  module: ModuleSceneDescriptor,
): ModuleSceneDescriptor => {
  const override = buildWave1aOverride(articleId, module)
  const controls = override.controls ?? module.controls
  const sharedGroup = Object.prototype.hasOwnProperty.call(override, "sharedGroup")
    ? override.sharedGroup
    : module.sharedGroup
  const pauseGroup = Object.prototype.hasOwnProperty.call(override, "pauseGroup")
    ? override.pauseGroup
    : module.pauseGroup

  return {
    ...module,
    ...override,
    controls,
    defaultPreset: override.defaultPreset ?? buildPreset(controls),
    implementationKey: module.sceneId,
    proseAnchor: `${module.moduleId}-${normalizeAnchorToken(module.title || module.moduleId)}`,
    sharedGroup,
    pauseGroup,
    resetScope:
      override.resetScope ?? (pauseGroup ? "pause-group" : sharedGroup ? "shared" : "module"),
  }
}

const buildWave1aArticle = (articleId: (typeof WAVE1A_ANCHOR_IDS)[number]) => {
  const article = generatedById[articleId]
  if (!article) {
    throw new Error(`Missing generated article descriptor for Wave 1A anchor: ${articleId}`)
  }

  return {
    ...article,
    modules: article.modules.map((module) => buildWave1aModule(articleId, module)),
  } satisfies InteractiveArticleDescriptor
}

export const WAVE1A_ANCHOR_ARTICLES: InteractiveArticleDescriptor[] = WAVE1A_ANCHOR_IDS.map(
  (articleId) => buildWave1aArticle(articleId),
)

export const WAVE1A_ANCHOR_ARTICLE_SET = new Set<string>(WAVE1A_ANCHOR_IDS)
