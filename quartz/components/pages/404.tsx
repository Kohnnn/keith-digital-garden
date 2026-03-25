import { i18n } from "../../i18n"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  // If baseUrl contains a pathname after the domain, use this as the home link
  const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
  const baseDir = url.pathname.replace(/\/$/, "")
  const sitePath = (path: string) => `${baseDir}/${path}`

  return (
    <article class="popover-hint">
      <h1>404</h1>
      <p>This page doesn't exist yet - or it might be private.</p>
      <p>{i18n(cfg.locale).pages.error.notFound}</p>
      <p>Use Ctrl/Cmd+K to search the garden, or jump back through one of these routes.</p>
      <ul>
        <li>
          <a href={sitePath("Portfolio")}>Portfolio</a>
        </li>
        <li>
          <a href={sitePath("notes")}>Notes</a>
        </li>
        <li>
          <a href={sitePath("Dispatches")}>Dispatches</a>
        </li>
        <li>
          <a href={baseDir || "/"}>{i18n(cfg.locale).pages.error.home}</a>
        </li>
      </ul>
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
