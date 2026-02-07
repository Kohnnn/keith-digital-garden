import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/relatedNotes.scss"
import { resolveRelative, simplifySlug } from "../util/path"
import { classNames } from "../util/lang"

interface RelatedNotesOptions {
  heading: string
  limit: number
  minSharedTags: number
  tagFilter?: string
}

const defaultOptions: RelatedNotesOptions = {
  heading: "You might like",
  limit: 8,
  minSharedTags: 1,
}

export default ((opts?: Partial<RelatedNotesOptions>) => {
  const options: RelatedNotesOptions = { ...defaultOptions, ...opts }

  const RelatedNotes: QuartzComponent = ({ fileData, allFiles, displayClass }: QuartzComponentProps) => {
    const currentTags = (fileData.frontmatter?.tags ?? []) as string[]
    if (currentTags.length === 0) {
      return null
    }

    if (options.tagFilter && !currentTags.includes(options.tagFilter)) {
      return null
    }

    const currentSlug = simplifySlug(fileData.slug ?? "")
    const related = allFiles
      .filter((file) => file.slug && simplifySlug(file.slug) !== currentSlug)
      .filter((file) => !file.frontmatter?.draft)
      .map((file) => {
        const tags = (file.frontmatter?.tags ?? []) as string[]
        const sharedTags = tags.filter((tag) => currentTags.includes(tag))
        return {
          file,
          sharedTags,
          sharedCount: sharedTags.length,
        }
      })
      .filter((item) => item.sharedCount >= options.minSharedTags)
      .sort((a, b) => {
        if (b.sharedCount !== a.sharedCount) {
          return b.sharedCount - a.sharedCount
        }
        const aTitle = a.file.frontmatter?.title ?? ""
        const bTitle = b.file.frontmatter?.title ?? ""
        return aTitle.localeCompare(bTitle)
      })
      .slice(0, options.limit)

    if (related.length === 0) {
      return null
    }

    return (
      <div class={classNames(displayClass, "related-notes")}>
        <h3>{options.heading}</h3>
        <ul class="related-notes-grid">
          {related.map((item) => {
            const title = item.file.frontmatter?.title ?? item.file.slug ?? "Untitled"
            const href = resolveRelative(fileData.slug!, item.file.slug!)
            const tagLabel = item.sharedTags.slice(0, 3).join(", ")
            return (
              <li>
                <a href={href} class="internal">
                  {title}
                </a>
                {tagLabel && <span class="related-notes-tags">Shared: {tagLabel}</span>}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  RelatedNotes.css = style

  return RelatedNotes
}) satisfies QuartzComponentConstructor
