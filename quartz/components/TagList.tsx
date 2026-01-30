import { FullSlug, resolveRelative } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const TagList: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const tags = fileData.frontmatter?.tags
  if (tags && tags.length > 0) {
    return (
      <ul class={classNames(displayClass, "tags")}>
        {tags.map((tag) => {
          const linkDest = resolveRelative(fileData.slug!, `tags/${tag}` as FullSlug)
          return (
            <li>
              <a href={linkDest} class="internal tag-link">
                {tag}
              </a>
            </li>
          )
        })}
      </ul>
    )
  } else {
    return null
  }
}

TagList.css = `
.tags {
  list-style: none;
  display: flex;
  padding-left: 0;
  gap: 0.4rem;
  margin: 1rem 0;
  flex-wrap: wrap;
}

.section-li > .section > .tags {
  justify-content: flex-end;
}
  
.tags > li {
  display: inline-block;
  white-space: nowrap;
  margin: 0;
  overflow-wrap: normal;
}

a.internal.tag-link {
  border-radius: 8px;
  background-color: color-mix(in srgb, var(--light) 92%, var(--tertiary) 8%);
  border: 1px solid color-mix(in srgb, var(--gray) 45%, transparent 55%);
  color: var(--darkgray);
  padding: 0.15rem 0.45rem;
  margin: 0 0.05rem;
  font-size: 0.75rem;
  letter-spacing: 0.02em;
}

:root[saved-theme="dark"] a.internal.tag-link {
  background-color: color-mix(in srgb, var(--light) 88%, #000 12%);
  border-color: color-mix(in srgb, var(--gray) 55%, transparent 45%);
  color: var(--darkgray);
}
`

export default (() => TagList) satisfies QuartzComponentConstructor
