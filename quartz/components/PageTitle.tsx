import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir} class="page-title-link">
        <span class="page-title-emblem" aria-hidden="true"></span>
        <span class="page-title-text">{title}</span>
      </a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}
.page-title-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}
.page-title-emblem {
  width: 1.6em;
  height: 1.6em;
  flex: 0 0 auto;
  background-image: var(--brand-emblem, none);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  filter: drop-shadow(0 2px 6px rgba(15, 20, 30, 0.18));
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
