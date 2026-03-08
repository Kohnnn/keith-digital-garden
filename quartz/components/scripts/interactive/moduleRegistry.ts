import type { SceneRenderer } from "./storyModel"

export type ModuleControlDefinition =
  | {
      kind: "range"
      id: string
      label: string
      min: number
      max: number
      step: number
      value: number
    }
  | {
      kind: "toggle"
      id: string
      label: string
      value: boolean
    }
  | {
      kind: "choice"
      id: string
      label: string
      value: string
      options: string[]
    }
  | {
      kind: "action"
      id: "reset" | "pause-toggle" | "cycle" | "shuffle"
      label: string
    }

export type ModuleSceneLayout = "inline" | "chart" | "compare" | "sticky" | "note"

export type ModuleSceneDescriptor = {
  sceneId: string
  articleId: string
  moduleId: string
  index: number
  title: string
  kind: string
  description: string
  controlsSummary: string
  responseSummary: string
  renderer: SceneRenderer
  family: string
  visual: string
  layout: ModuleSceneLayout
  noteOnly: boolean
  controls: ModuleControlDefinition[]
  defaultPreset: Record<string, boolean | number | string>
  sharedGroup?: string
  pauseGroup?: string
  gestures: string[]
}

export type InteractiveArticleDescriptor = {
  id: string
  title: string
  author: string
  url: string
  lead: string
  about: string[]
  moduleCount: number
  modules: ModuleSceneDescriptor[]
}

export const buildModuleSceneMap = (articles: InteractiveArticleDescriptor[]) =>
  Object.fromEntries(
    articles.flatMap((article) => article.modules.map((module) => [module.sceneId, module] as const)),
  ) as Record<string, ModuleSceneDescriptor>

export const getArticleModuleCount = (article: InteractiveArticleDescriptor) =>
  article.modules.filter((module) => !module.noteOnly).length

export const isGeneratedModuleSceneId = (sceneId: string) => sceneId.includes(":module-")

export const resolveModuleScene = (
  sceneMap: Record<string, ModuleSceneDescriptor>,
  sceneId: string,
) => sceneMap[sceneId]
