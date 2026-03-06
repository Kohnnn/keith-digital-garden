import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

const isCuratedSurface = (slug?: string) => slug === "index" || slug?.startsWith("Portfolio/")

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.DappledLight(),
    Component.InteractiveSim(),
    Component.ConditionalRender({
      component: Component.StackedNotesContainer(),
      condition: (page) => !isCuratedSurface(page.fileData.slug),
    }),
    Component.ConditionalRender({
      component: Component.RelatedNotes({ tagFilter: "philosophy" }),
      condition: (page) => !isCuratedSurface(page.fileData.slug),
    }),
    Component.ConditionalRender({
      component: Component.BacklinksGrid({ tagFilter: "philosophy" }),
      condition: (page) => !isCuratedSurface(page.fileData.slug),
    }),
  ],
  footer: Component.Footer({
    blurb:
      "Keith Kitchen is a working portfolio and research kitchen for market systems, models, and tooling.",
    links: {
      Home: "index",
      Contact: "Portfolio/Contact",
      Projects: "Portfolio/Projects",
      GitHub: "https://github.com/Kohnnn/keith-digital-garden",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index" && !isCuratedSurface(page.fileData.slug),
    }),
    Component.ArticleTitle(),
    Component.ConditionalRender({
      component: Component.ContentMeta(),
      condition: (page) => !isCuratedSurface(page.fileData.slug),
    }),
    Component.ConditionalRender({
      component: Component.TagList(),
      condition: (page) => !isCuratedSurface(page.fileData.slug),
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
        { Component: Component.Darkmode() },
        {
          Component: Component.ConditionalRender({
            component: Component.StackedNotes(),
            condition: (page) => !isCuratedSurface(page.fileData.slug),
          }),
        },
        {
          Component: Component.ConditionalRender({
            component: Component.ReaderMode(),
            condition: (page) => !isCuratedSurface(page.fileData.slug),
          }),
        },
      ],
    }),
    Component.ConditionalRender({
      component: Component.Explorer({
        title: "Browse",
        filterFn: (node) => !["tags", "AI_Sandbox", "attachments"].includes(node.slugSegment),
      }),
      condition: (page) => !isCuratedSurface(page.fileData.slug),
    }),
  ],
  right: [
    Component.ConditionalRender({
      component: Component.GraphMapToggle(),
      condition: (page) => !isCuratedSurface(page.fileData.slug),
    }),
    Component.ConditionalRender({
      component: Component.DesktopOnly(Component.TableOfContents()),
      condition: (page) => !isCuratedSurface(page.fileData.slug),
    }),
    Component.ConditionalRender({
      component: Component.Backlinks(),
      condition: (page) => !isCuratedSurface(page.fileData.slug),
    }),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => !isCuratedSurface(page.fileData.slug),
    }),
    Component.ArticleTitle(),
    Component.ConditionalRender({
      component: Component.ContentMeta(),
      condition: (page) => !isCuratedSurface(page.fileData.slug),
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
        { Component: Component.Darkmode() },
        {
          Component: Component.ConditionalRender({
            component: Component.StackedNotes(),
            condition: (page) => !isCuratedSurface(page.fileData.slug),
          }),
        },
      ],
    }),
    Component.ConditionalRender({
      component: Component.Explorer({
        title: "Browse",
        filterFn: (node) => !["tags", "AI_Sandbox", "attachments"].includes(node.slugSegment),
      }),
      condition: (page) => !isCuratedSurface(page.fileData.slug),
    }),
  ],
  right: [],
}
