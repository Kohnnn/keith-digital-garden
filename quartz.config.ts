import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Keith Kitchen",
    pageTitleSuffix: " | Keith Kitchen",
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
        title: {
          name: "Fraunces",
          weights: [500, 600, 700],
          includeItalic: true,
        },
        header: {
          name: "Fraunces",
          weights: [500, 600, 700],
          includeItalic: true,
        },
        body: "Be Vietnam Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f5efe3",
          lightgray: "#e1d6c1",
          gray: "#746c59",
          darkgray: "#3f4b34",
          dark: "#1a1b17",
          secondary: "#9a5f3f",
          tertiary: "#7b8660",
          highlight: "rgba(154, 95, 63, 0.16)",
          textHighlight: "rgba(236, 207, 131, 0.4)",
        },
        darkMode: {
          light: "#171712",
          lightgray: "#27261d",
          gray: "#ada38c",
          darkgray: "#e7dcc8",
          dark: "#f6eddd",
          secondary: "#d19165",
          tertiary: "#a2ad78",
          highlight: "rgba(209, 145, 101, 0.28)",
          textHighlight: "rgba(209, 145, 101, 0.28)",
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
