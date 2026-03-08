import { GENERATED_MODULE_SCENE_MAP } from "./generatedModuleRegistry"
import type { ModuleSceneDescriptor } from "./moduleRegistry"
import { mountGeneratedModuleScene } from "./richModuleScenes"
import type { SceneDefinition, SimController } from "./storyRuntime"

type ControlElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement

const ACTION_CONTROL_IDS = new Set(["reset", "pause-toggle", "cycle", "shuffle"])

const isControlElement = (node: Element | null): node is ControlElement =>
  !!node &&
  (node instanceof HTMLInputElement ||
    node instanceof HTMLSelectElement ||
    node instanceof HTMLTextAreaElement)

const getControlElements = (root: HTMLElement, controlId: string) =>
  Array.from(root.querySelectorAll<Element>(`[data-control="${controlId}"]`)).filter(isControlElement)

const dispatchControlUpdate = (element: ControlElement) => {
  const eventName =
    element instanceof HTMLSelectElement ||
    (element instanceof HTMLInputElement && element.type === "radio")
      ? "change"
      : "input"
  element.dispatchEvent(new Event(eventName, { bubbles: true }))
}

const readControlValue = (element: ControlElement): boolean | number | string => {
  if (element instanceof HTMLInputElement) {
    if (element.type === "checkbox") return element.checked
    if (element.type === "radio") return element.value
    if (element.type === "range" || element.type === "number") return Number(element.value)
  }

  return element.value
}

const writeControlValue = (element: ControlElement, value: boolean | number | string) => {
  if (element instanceof HTMLInputElement) {
    if (element.type === "checkbox") {
      element.checked = Boolean(value)
      return
    }
    if (element.type === "radio") {
      element.checked = String(value) === element.value
      return
    }
  }

  element.value = String(value)
}

const applyPresetToRoot = (
  root: HTMLElement,
  preset: Record<string, boolean | number | string>,
  dispatch = true,
) => {
  for (const [controlId, value] of Object.entries(preset)) {
    if (ACTION_CONTROL_IDS.has(controlId)) continue
    const elements = getControlElements(root, controlId)
    if (elements.length === 0) continue
    for (const element of elements) {
      writeControlValue(element, value)
      if (dispatch) {
        dispatchControlUpdate(element)
      }
    }
  }
}

const updatePauseButtons = (pauseGroup: string, paused: boolean) => {
  const roots = document.querySelectorAll<HTMLElement>(
    `.interactive-sim[data-sim-pause-group="${pauseGroup}"]`,
  )
  for (const root of roots) {
    root.dataset.paused = paused ? "true" : "false"
    const button = root.querySelector<HTMLButtonElement>('button[data-control="pause-toggle"]')
    if (!button) continue
    button.textContent = paused ? "resume motion" : "pause motion"
    button.setAttribute("aria-pressed", paused ? "true" : "false")
  }
}

let propagatingSharedControls = false

const syncSharedControl = (sourceRoot: HTMLElement, controlId: string, value: boolean | number | string) => {
  if (propagatingSharedControls || ACTION_CONTROL_IDS.has(controlId)) return
  const sharedGroup = sourceRoot.dataset.simShared
  if (!sharedGroup) return

  propagatingSharedControls = true
  try {
    const peers = document.querySelectorAll<HTMLElement>(
      `.interactive-sim[data-sim-shared="${sharedGroup}"]`,
    )
    for (const peer of peers) {
      if (peer === sourceRoot) continue
      const controls = getControlElements(peer, controlId)
      for (const control of controls) {
        writeControlValue(control, value)
        dispatchControlUpdate(control)
      }
    }
  } finally {
    propagatingSharedControls = false
  }
}

const restoreModuleDefaults = (root: HTMLElement, scene: ModuleSceneDescriptor) => {
  applyPresetToRoot(root, scene.defaultPreset)
}

export const buildGeneratedSceneRegistry = (): Record<string, SceneDefinition> =>
  Object.fromEntries(
    Object.values(GENERATED_MODULE_SCENE_MAP)
      .filter((scene) => !scene.noteOnly)
      .map((scene) => [
        scene.sceneId,
        {
          id: scene.sceneId,
          renderer: scene.renderer,
          mount: (root: HTMLElement): SimController | null => mountGeneratedModuleScene(root, scene),
          presets: {
            baseline: scene.defaultPreset,
          },
        } satisfies SceneDefinition,
      ]),
  )

export const setupModuleArticles = () => {
  const roots = document.querySelectorAll<HTMLElement>(".interactive-sim[data-sim-module]")
  for (const root of roots) {
    const sceneId = root.dataset.simScene
    if (!sceneId) continue
    const scene = GENERATED_MODULE_SCENE_MAP[sceneId]
    if (!scene) continue

    applyPresetToRoot(root, scene.defaultPreset, false)

    if (scene.pauseGroup) {
      updatePauseButtons(scene.pauseGroup, root.dataset.paused === "true")
    }

    const onInput = (event: Event) => {
      const control = (event.target as HTMLElement | null)?.closest("[data-control]") ?? null
      if (!isControlElement(control)) return
      const controlId = control.dataset.control
      if (!controlId || ACTION_CONTROL_IDS.has(controlId)) return
      syncSharedControl(root, controlId, readControlValue(control))
    }

    const onClick = (event: Event) => {
      const target = event.target as HTMLElement | null
      if (!target) return

      const resetButton = target.closest<HTMLButtonElement>('button[data-control="reset"]')
      if (resetButton) {
        restoreModuleDefaults(root, scene)
        return
      }

      const pauseButton = target.closest<HTMLButtonElement>('button[data-control="pause-toggle"]')
      if (pauseButton && scene.pauseGroup) {
        const paused = root.dataset.paused === "true"
        updatePauseButtons(scene.pauseGroup, !paused)
      }
    }

    root.addEventListener("input", onInput)
    root.addEventListener("change", onInput)
    root.addEventListener("click", onClick)
    window.addCleanup(() => {
      root.removeEventListener("input", onInput)
      root.removeEventListener("change", onInput)
      root.removeEventListener("click", onClick)
    })
  }
}
