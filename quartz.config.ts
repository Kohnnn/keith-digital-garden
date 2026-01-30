import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Project Obsidian",
    pageTitleSuffix: "Digital Garden",
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
          light: "#eae0cf",
          lightgray: "#d7cdbe",
          gray: "#6f8fa3",
          darkgray: "#0d2845",
          dark: "#0f141e",
          secondary: "#0f3f6c",
          tertiary: "#6f8fa3",
          highlight: "rgba(111, 143, 163, 0.18)",
          textHighlight: "rgba(234, 224, 207, 0.55)",
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
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
