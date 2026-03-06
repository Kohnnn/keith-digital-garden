import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/backlinksGrid.scss"
import { resolveRelative, simplifySlug } from "../util/path"
import { classNames } from "../util/lang"

interface BacklinksGridOptions {
  heading: string
  hideWhenEmpty: boolean
  tagFilter?: string
}

const defaultOptions: BacklinksGridOptions = {
  heading: "Backlinks",
  hideWhenEmpty: true,
}

export default ((opts?: Partial<BacklinksGridOptions>) => {
  const options: BacklinksGridOptions = { ...defaultOptions, ...opts }

  const BacklinksGrid: QuartzComponent = ({
    fileData,
    allFiles,
    displayClass,
  }: QuartzComponentProps) => {
    if (!fileData.slug) {
      return null
    }
    const currentSlug = fileData.slug

    const currentTags = (fileData.frontmatter?.tags ?? []) as string[]
    if (options.tagFilter && !currentTags.includes(options.tagFilter)) {
      return null
    }

    const slug = simplifySlug(currentSlug)
    const backlinkFiles = allFiles.filter((file) => file.slug && file.links?.includes(slug))
    if (options.hideWhenEmpty && backlinkFiles.length === 0) {
      return null
    }

    return (
      <div class={classNames(displayClass, "backlinks-grid")}>
        <h3>{options.heading}</h3>
        <ul class="backlinks-grid-list">
          {backlinkFiles.length > 0 ? (
            backlinkFiles.map((f) => {
              if (!f.slug) {
                return null
              }

              return (
                <li>
                  <a href={resolveRelative(currentSlug, f.slug)} class="internal">
                    {f.frontmatter?.title ?? f.slug}
                  </a>
                </li>
              )
            })
          ) : (
            <li>No backlinks yet.</li>
          )}
        </ul>
      </div>
    )
  }

  BacklinksGrid.css = style

  return BacklinksGrid
}) satisfies QuartzComponentConstructor
