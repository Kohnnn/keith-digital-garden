import type { InteractiveArticleDescriptor } from "../quartz/components/scripts/interactive/moduleRegistry"

const GENERATED_FALLBACK_MARKERS = [
  { label: "generated module badge", pattern: /casefile-label">Module / },
  { label: "generated controls summary", pattern: /<strong>Controls:<\/strong>/ },
  { label: "generated response summary", pattern: /<strong>Response:<\/strong>/ },
  { label: "generated what-to-notice section", pattern: /^## What to notice$/m },
]

export type InteractiveNoteAudit = {
  expectedModules: string[]
  actualModules: string[]
  missingModules: string[]
  extraModules: string[]
  firstOrderMismatch?: {
    index: number
    expected: string
    actual: string
  }
  fallbackMarkers: string[]
}

export const extractModuleOrder = (markdown: string) =>
  Array.from(markdown.matchAll(/data-sim-module="([^"]+)"/g), (match) => match[1])

export const detectGeneratedFallbackMarkers = (markdown: string) =>
  GENERATED_FALLBACK_MARKERS.filter(({ pattern }) => pattern.test(markdown)).map(
    ({ label }) => label,
  )

export const auditInteractiveNote = (
  article: InteractiveArticleDescriptor,
  markdown: string,
): InteractiveNoteAudit => {
  const expectedModules = article.modules
    .filter((module) => !module.noteOnly)
    .map((module) => module.sceneId)
  const actualModules = extractModuleOrder(markdown)
  const actualSet = new Set(actualModules)
  const expectedSet = new Set(expectedModules)
  const missingModules = expectedModules.filter((moduleId) => !actualSet.has(moduleId))
  const extraModules = actualModules.filter((moduleId) => !expectedSet.has(moduleId))
  const mismatchIndex = expectedModules.findIndex(
    (moduleId, index) => actualModules[index] !== moduleId,
  )

  return {
    expectedModules,
    actualModules,
    missingModules,
    extraModules,
    firstOrderMismatch:
      mismatchIndex === -1
        ? undefined
        : {
            index: mismatchIndex,
            expected: expectedModules[mismatchIndex],
            actual: actualModules[mismatchIndex] ?? "<missing>",
          },
    fallbackMarkers: detectGeneratedFallbackMarkers(markdown),
  }
}
