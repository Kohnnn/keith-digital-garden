import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { FullSlug, getAllSegmentPrefixes, resolveRelative } from "../util/path"
import styles from "./styles/gridMap.scss"

type GridMapOptions = {
  limit?: number
  minCount?: number
  title?: string
}

const defaultOptions: Required<GridMapOptions> = {
  limit: 36,
  minCount: 1,
  title: "Map",
}

const countLabel = (count: number) => (count === 1 ? "1 note" : `${count} notes`)

export default ((opts?: GridMapOptions) => {
  const options = { ...defaultOptions, ...opts }

  const GridMap: QuartzComponent = ({ allFiles, fileData }: QuartzComponentProps) => {
    const tagCounts = new Map<string, number>()

    for (const file of allFiles) {
      const tags = file.frontmatter?.tags ?? []
      for (const tag of tags.flatMap(getAllSegmentPrefixes)) {
        tagCounts.set(tag, (tagCounts.get(tag) ?? 0) + 1)
      }
    }

    const entries = [...tagCounts.entries()]
      .filter(([, count]) => count >= options.minCount)
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .slice(0, options.limit)

    if (entries.length === 0) {
      return (
        <div class="grid-map">
          <div class="grid-map-header">
            <h3>{options.title}</h3>
          </div>
          <p class="grid-map-empty">No tags yet.</p>
        </div>
      )
    }

    return (
      <div class="grid-map">
        <div class="grid-map-header">
          <h3>{options.title}</h3>
          <a
            class="grid-map-link"
            href={resolveRelative(fileData.slug!, "tags" as FullSlug)}
          >
            All tags
          </a>
        </div>
        <div class="grid-map-grid" role="list">
          {entries.map(([tag, count]) => (
            <a
              class="grid-map-item"
              href={resolveRelative(fileData.slug!, `tags/${tag}` as FullSlug)}
              data-tag={tag}
              role="listitem"
            >
              <span class="grid-map-tag">#{tag}</span>
              <span class="grid-map-count">{countLabel(count)}</span>
            </a>
          ))}
        </div>
      </div>
    )
  }

  GridMap.css = styles

  return GridMap
}) satisfies QuartzComponentConstructor<GridMapOptions>
