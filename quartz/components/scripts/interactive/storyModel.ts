export type SceneRenderer = "canvas" | "svg"

export type StepDefinition = {
  id: string
  sceneId: string
  presetId: string
  focus?: string
  syncGroup?: string
}

export type ArticleDefinition = {
  id: string
  defaultScene: string
  steps: StepDefinition[]
  syncGroups: string[]
}

const normalizeStep = (step: StepDefinition): StepDefinition => ({
  ...step,
  id: step.id.trim(),
  sceneId: step.sceneId.trim(),
  presetId: step.presetId.trim(),
  focus: step.focus?.trim(),
  syncGroup: step.syncGroup?.trim(),
})

export const dedupeSteps = (steps: StepDefinition[]): StepDefinition[] => {
  const seen = new Set<string>()
  const deduped: StepDefinition[] = []

  for (const rawStep of steps) {
    const step = normalizeStep(rawStep)
    const key = `${step.id}:${step.sceneId}:${step.presetId}:${step.syncGroup ?? ""}`
    if (seen.has(key)) continue
    seen.add(key)
    deduped.push(step)
  }

  return deduped
}

export const buildArticleDefinition = (
  id: string,
  defaultScene: string,
  steps: StepDefinition[],
): ArticleDefinition => {
  const normalizedSteps = dedupeSteps(steps)
  const syncGroups = Array.from(
    new Set(
      normalizedSteps.map((step) => step.syncGroup).filter((group): group is string => !!group),
    ),
  )

  return {
    id,
    defaultScene,
    steps: normalizedSteps,
    syncGroups,
  }
}

export const resolveStepDefinition = (
  article: ArticleDefinition,
  stepId: string,
): StepDefinition | undefined => article.steps.find((step) => step.id === stepId)

export const resolvePresetTargets = (
  article: ArticleDefinition,
  activeStep: StepDefinition,
): StepDefinition[] => {
  if (activeStep.syncGroup) {
    return article.steps.filter((step) => step.syncGroup === activeStep.syncGroup)
  }

  return article.steps.filter((step) => step.sceneId === activeStep.sceneId)
}
