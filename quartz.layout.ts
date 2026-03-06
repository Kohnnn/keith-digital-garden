import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

const isPortfolioSurface = (cssclasses?: string[]) =>
  cssclasses?.includes("portfolio-page") ?? false

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.DappledLight(),
    Component.StackedNotesContainer(),
    Component.InteractiveSim(),
    Component.ArenaEnhancer(),
    Component.RelatedNotes({ tagFilter: "philosophy" }),
    Component.BacklinksGrid({ tagFilter: "philosophy" }),
  ],
  footer: Component.Footer({
    links: {
      Home: "index",
      GitHub: "https://github.com/Kohnnn/keith-digital-garden",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ConditionalRender({
      component: Component.ArticleTitle(),
      condition: (page) =>
        page.fileData.slug !== "index" &&
        !isPortfolioSurface(page.fileData.frontmatter?.cssclasses),
    }),
    Component.ConditionalRender({
      component: Component.ContentMeta(),
      condition: (page) =>
        page.fileData.slug !== "index" &&
        !isPortfolioSurface(page.fileData.frontmatter?.cssclasses),
    }),
    Component.ConditionalRender({
      component: Component.TagList(),
      condition: (page) =>
        page.fileData.slug !== "index" &&
        !isPortfolioSurface(page.fileData.frontmatter?.cssclasses),
    }),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.StackedNotes() },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({
      filterFn: (node) => !["tags", "AI_Sandbox", "attachments"].includes(node.slugSegment),
    }),
  ],
  right: [
    Component.GraphMapToggle(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => !isPortfolioSurface(page.fileData.frontmatter?.cssclasses),
    }),
    Component.ConditionalRender({
      component: Component.ArticleTitle(),
      condition: (page) => !isPortfolioSurface(page.fileData.frontmatter?.cssclasses),
    }),
    Component.ConditionalRender({
      component: Component.ContentMeta(),
      condition: (page) => !isPortfolioSurface(page.fileData.frontmatter?.cssclasses),
    }),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.StackedNotes() },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({
      filterFn: (node) => !["tags", "AI_Sandbox", "attachments"].includes(node.slugSegment),
    }),
  ],
  right: [],
}
