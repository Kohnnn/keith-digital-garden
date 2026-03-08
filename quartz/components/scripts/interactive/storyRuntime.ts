import {
  buildArticleDefinition,
  resolveStepDefinition,
  type ArticleDefinition,
  type StepDefinition,
} from "./storyModel"

export type SimController = {
  destroy: () => void
}

export type SceneDefinition = {
  id: string
  renderer: "canvas" | "svg"
  mount: (root: HTMLElement) => SimController | null
  presets: Record<string, Record<string, number>>
}

const applyPresetToRoot = (root: HTMLElement, preset: Record<string, number>) => {
  for (const [controlId, value] of Object.entries(preset)) {
    const input = root.querySelector<HTMLInputElement>(`[data-control="${controlId}"]`)
    if (!input) continue
    input.value = String(value)
    input.dispatchEvent(new Event("input", { bubbles: true }))
  }
}

const resolveSceneRoots = (
  articleRoot: HTMLElement,
  article: ArticleDefinition,
  step: StepDefinition,
) => {
  if (step.syncGroup) {
    return Array.from(
      articleRoot.querySelectorAll<HTMLElement>(
        `.interactive-sim[data-sync-group="${step.syncGroup}"]`,
      ),
    )
  }

  const stepDefinition = resolveStepDefinition(article, step.id)
  if (!stepDefinition) return []
  return Array.from(
    articleRoot.querySelectorAll<HTMLElement>(
      `.interactive-sim[data-sim-scene="${stepDefinition.sceneId}"]`,
    ),
  )
}

const setActivePresetButton = (articleRoot: HTMLElement, presetId: string) => {
  const buttons = articleRoot.querySelectorAll<HTMLButtonElement>(
    ".interactive-preset-shelf button[data-preset-id]",
  )
  for (const button of buttons) {
    button.classList.toggle("is-active", button.dataset.presetId === presetId)
  }
}

export const setupStoryArticles = (sceneRegistry: Record<string, SceneDefinition>) => {
  const articleRoots = document.querySelectorAll<HTMLElement>(
    ".interactive-article[data-interactive-article]",
  )
  for (const articleRoot of articleRoots) {
    const steps = Array.from(
      articleRoot.querySelectorAll<HTMLElement>(".story-step[data-story-step]"),
    ).map((step) => ({
      id: step.dataset.storyStep ?? "",
      sceneId: step.dataset.stepScene ?? "",
      presetId: step.dataset.stepPreset ?? "",
      focus: step.querySelector("h2")?.textContent ?? undefined,
      syncGroup: step.dataset.syncGroup ?? undefined,
    }))
    if (steps.length === 0) continue

    const defaultScene =
      articleRoot.querySelector<HTMLElement>(".interactive-sim[data-sim-scene]")?.dataset
        .simScene ?? steps[0].sceneId
    const article = buildArticleDefinition(
      articleRoot.dataset.interactiveArticle ?? defaultScene,
      defaultScene,
      steps,
    )
    const caption = articleRoot.querySelector<HTMLElement>("[data-step-caption] p")
    const stepById = new Map(
      Array.from(articleRoot.querySelectorAll<HTMLElement>(".story-step[data-story-step]")).map(
        (step) => [step.dataset.storyStep ?? "", step],
      ),
    )

    const activateStep = (stepId: string) => {
      const current = resolveStepDefinition(article, stepId)
      if (!current) return
      for (const [id, stepNode] of stepById) {
        stepNode.classList.toggle("is-active", id === stepId)
      }

      const sceneDefinition = sceneRegistry[current.sceneId]
      if (sceneDefinition) {
        const preset = sceneDefinition.presets[current.presetId]
        if (preset) {
          for (const root of resolveSceneRoots(articleRoot, article, current)) {
            applyPresetToRoot(root, preset)
          }
        }
      }

      if (caption) {
        const activeNode = stepById.get(stepId)
        caption.textContent =
          activeNode?.querySelector("p")?.textContent ??
          `The active visual state is now aligned to ${current.focus ?? current.id}.`
      }

      setActivePresetButton(articleRoot, current.presetId)
    }

    const onPresetClick = (event: Event) => {
      const target = event.target as HTMLElement | null
      const button = target?.closest<HTMLButtonElement>("button[data-preset-id]")
      if (!button) return
      const presetId = button.dataset.presetId
      const sceneDefinition = sceneRegistry[article.defaultScene]
      if (!presetId || !sceneDefinition) return
      const preset = sceneDefinition.presets[presetId]
      if (!preset) return
      for (const root of Array.from(
        articleRoot.querySelectorAll<HTMLElement>(
          `.interactive-sim[data-sim-scene="${article.defaultScene}"]`,
        ),
      )) {
        applyPresetToRoot(root, preset)
      }
      setActivePresetButton(articleRoot, presetId)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0]
        const stepId = (visible?.target as HTMLElement | undefined)?.dataset.storyStep
        if (stepId) activateStep(stepId)
      },
      { threshold: [0.25, 0.5, 0.75], rootMargin: "-20% 0px -45% 0px" },
    )

    for (const stepNode of stepById.values()) {
      observer.observe(stepNode)
    }

    const presetShelf = articleRoot.querySelector<HTMLElement>(".interactive-preset-shelf")
    presetShelf?.addEventListener("click", onPresetClick)

    activateStep(article.steps[0].id)

    window.addCleanup(() => {
      observer.disconnect()
      presetShelf?.removeEventListener("click", onPresetClick)
    })
  }
}
