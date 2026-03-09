import { buildModuleSceneMap, type InteractiveArticleDescriptor } from "./moduleRegistry"
import { GENERATED_INTERACTIVE_ARTICLES } from "./generatedModuleRegistry"
import { WAVE1A_ANCHOR_ARTICLES, WAVE1A_ANCHOR_ARTICLE_SET } from "./wave1aRegistry"

export const INTERACTIVE_ARTICLES: InteractiveArticleDescriptor[] = [
  ...WAVE1A_ANCHOR_ARTICLES,
  ...GENERATED_INTERACTIVE_ARTICLES.filter((article) => !WAVE1A_ANCHOR_ARTICLE_SET.has(article.id)),
]

export const INTERACTIVE_MODULE_SCENE_MAP = buildModuleSceneMap(INTERACTIVE_ARTICLES)
