import path from "path"
import type { Root } from "hast"
import { visit } from "unist-util-visit"

import { clone } from "../../util/clone"
import { FullSlug, isRelativeURL, simplifySlug } from "../../util/path"

const DUMMY_ORIGIN = "https://quartz.local"

function slugToPublicPath(slug: FullSlug): string {
  const simplified = simplifySlug(slug)
  return simplified === "/" ? "/" : `/${simplified}`
}

export function rebaseRelativeUrlForFolderPage(
  relativeUrl: string,
  currentSlug: FullSlug,
  renderedSlug: FullSlug,
): string {
  const sourceUrl = new URL(slugToPublicPath(currentSlug), DUMMY_ORIGIN)
  const targetUrl = new URL(relativeUrl, sourceUrl)
  const renderedPublicPath = slugToPublicPath(renderedSlug)
  const renderedDir = renderedPublicPath.endsWith("/")
    ? renderedPublicPath
    : path.posix.dirname(renderedPublicPath)

  let rebasedPath = path.posix.relative(renderedDir, targetUrl.pathname)
  if (rebasedPath === "") {
    rebasedPath = "."
  } else if (!rebasedPath.startsWith(".") && !rebasedPath.startsWith("/")) {
    rebasedPath = `./${rebasedPath}`
  }

  if (targetUrl.pathname.endsWith("/") && rebasedPath !== "." && !rebasedPath.endsWith("/")) {
    rebasedPath = `${rebasedPath}/`
  }

  return `${rebasedPath}${targetUrl.search}${targetUrl.hash}`
}

export function rebaseRelativeUrlsForFolderPage(
  tree: Root,
  currentSlug: FullSlug,
  renderedSlug: FullSlug,
): Root {
  const rebasedTree = clone(tree) as Root

  visit(rebasedTree, "element", (node) => {
    for (const attr of ["href", "src"] as const) {
      const value = node.properties?.[attr]
      if (typeof value === "string" && isRelativeURL(value)) {
        node.properties[attr] = rebaseRelativeUrlForFolderPage(value, currentSlug, renderedSlug)
      }
    }
  })

  return rebasedTree
}
