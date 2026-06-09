import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

const isPortfolioSurface = (cssclasses?: string[]) =>
  cssclasses?.includes("portfolio-page") ?? false

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.ConditionalRender({
      component: Component.RecentNotes({
        title: "Latest from the Atheneum",
        limit: 5,
        showTags: false,
        filter: (f) => {
          const tags = (f.frontmatter?.tags ?? []) as string[]
          const css = (f.frontmatter?.cssclasses ?? []) as string[]
          const slug = (f.slug ?? "") as string
          // Dated reading-surface notes only; exclude portfolio + hubs + index.
          if (css.includes("portfolio-page") || css.includes("casefile-page")) return false
          if (slug === "index" || slug.startsWith("Portfolio")) return false
          const dispatchTags = [
            "dispatches",
            "research-digest",
            "market-news",
            "thoughtpiece",
            "tech-journal",
            "philosophy",
          ]
          return f.dates !== undefined && tags.some((t) => dispatchTags.includes(t))
        },
      }),
      condition: (page) => page.fileData.slug === "index",
    }),
    Component.DappledLight(),
    Component.StackedNotesContainer(),
    Component.ArenaEnhancer(),
    Component.CopyButtonsEnhancer(),
    Component.RelatedNotes({ tagFilter: "philosophy" }),
    Component.BacklinksGrid({ tagFilter: "philosophy" }),
  ],
  footer: Component.Footer({
    blurb:
      "Keith's Atheneum is a curated atheneum for market systems, research notes, and working ideas.",
    links: {
      Home: "index",
      Notes: "notes",
      Portfolio: "Portfolio",
      "Interactive Lab": "https://kohnnn.github.io/interactive-explanation/",
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
      filterFn: (node) => !["tags", "attachments"].includes(node.slugSegment),
    }),
  ],
  right: [
    Component.ConditionalRender({
      component: Component.GraphMapToggle(),
      condition: (page) => !isPortfolioSurface(page.fileData.frontmatter?.cssclasses),
    }),
    Component.ConditionalRender({
      component: Component.TableOfContents(),
      condition: (page) => !isPortfolioSurface(page.fileData.frontmatter?.cssclasses),
    }),
    Component.ConditionalRender({
      component: Component.Backlinks(),
      condition: (page) => !isPortfolioSurface(page.fileData.frontmatter?.cssclasses),
    }),
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
      filterFn: (node) => !["tags", "attachments"].includes(node.slugSegment),
    }),
  ],
  right: [],
}
