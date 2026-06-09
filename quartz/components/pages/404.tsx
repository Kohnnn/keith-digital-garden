import { i18n } from "../../i18n"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"
import style from "../styles/notFound.scss"

// Root-absolute so it resolves under the GitHub Pages base path
const BANNER_URL = "/keith-digital-garden/attachments/placeholders/surface-404.webp"

const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  // If baseUrl contains a pathname after the domain, use this as the home link
  const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
  const baseDir = url.pathname.replace(/\/$/, "")
  const home = baseDir || "/"
  const sitePath = (path: string) => `${baseDir}/${path}`

  return (
    <article class="popover-hint not-found-hero">
      <img
        class="not-found-img"
        src={BANNER_URL}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />
      <div class="not-found-scrim" aria-hidden="true"></div>
      <div class="not-found-content">
        <p class="not-found-kicker">Lost in the void</p>
        <h1 class="not-found-title">This page drifted off the map</h1>
        <p class="not-found-message">
          The passage you followed leads to an empty arch. The page may not exist yet, or it might
          be kept private.
        </p>
        <div class="not-found-actions">
          <a class="not-found-button" href={home}>
            {i18n(cfg.locale).pages.error.home}
          </a>
          <a class="not-found-link" href={sitePath("Portfolio")}>
            Portfolio
          </a>
          <a class="not-found-link" href={sitePath("notes")}>
            Notes
          </a>
          <a class="not-found-link" href={sitePath("Dispatches")}>
            Dispatches
          </a>
        </div>
      </div>
    </article>
  )
}

NotFound.css = style

export default (() => NotFound) satisfies QuartzComponentConstructor
