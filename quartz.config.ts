import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Keith's Atheneum",
    pageTitleSuffix: " | Keith's Atheneum",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "kohnnn.github.io/keith-digital-garden",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Be Vietnam Pro",
        body: "Be Vietnam Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f4eddc",
          lightgray: "#e3d7bd",
          gray: "#8a6f4d",
          darkgray: "#3a332b",
          dark: "#2b2620",
          secondary: "#1f3a5f",
          tertiary: "#6f7f5c",
          highlight: "rgba(31, 58, 95, 0.12)",
          textHighlight: "rgba(201, 162, 75, 0.30)",
        },
        darkMode: {
          light: "#0f141e",
          lightgray: "#0d2845",
          gray: "#3F678D",
          darkgray: "#eae0cf",
          dark: "#f3ebdd",
          secondary: "#94b4c1",
          tertiary: "#b9cbd2",
          highlight: "rgba(13, 40, 69, 0.35)",
          textHighlight: "rgba(234, 224, 207, 0.35)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
