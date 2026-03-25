import { Date, formatDate, getDate } from "./Date"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import readingTime from "reading-time"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
import style from "./styles/contentMeta.scss"

interface ContentMetaOptions {
  /**
   * Whether to display reading time
   */
  showReadingTime: boolean
  showComma: boolean
}

const defaultOptions: ContentMetaOptions = {
  showReadingTime: true,
  showComma: true,
}

export default ((opts?: Partial<ContentMetaOptions>) => {
  // Merge options with defaults
  const options: ContentMetaOptions = { ...defaultOptions, ...opts }

  function ContentMetadata({ cfg, fileData, displayClass }: QuartzComponentProps) {
    const text = fileData.text

    if (text) {
      const primaryDate = fileData.dates ? getDate(cfg, fileData) : undefined
      const modifiedDate = fileData.dates?.modified
      const primaryDateLabel =
        cfg.defaultDateType === "published"
          ? "Published"
          : cfg.defaultDateType === "modified"
            ? "Updated"
            : "Created"
      const showLastUpdated =
        primaryDate &&
        modifiedDate &&
        Math.abs(modifiedDate.getTime() - primaryDate.getTime()) > 60 * 1000

      if (options.showReadingTime) {
        const { minutes } = readingTime(text)
        const displayedTime = i18n(cfg.locale).components.contentMeta.readingTime({
          minutes: Math.ceil(minutes),
        })

        return (
          <div show-comma={options.showComma} class={classNames(displayClass, "content-meta")}>
            {primaryDate && (
              <span class="content-meta-segment">
                <span class="content-meta-label">{primaryDateLabel}</span>
                <Date date={primaryDate} locale={cfg.locale} />
              </span>
            )}
            {showLastUpdated && modifiedDate && (
              <span class="content-meta-segment">
                <span class="content-meta-label">Last updated</span>
                <time datetime={modifiedDate.toISOString()}>
                  {formatDate(modifiedDate, cfg.locale)}
                </time>
              </span>
            )}
            <span class="content-meta-segment">
              <span class="content-meta-label">Read</span>
              <span>{displayedTime}</span>
            </span>
          </div>
        )
      }

      return (
        <div show-comma={options.showComma} class={classNames(displayClass, "content-meta")}>
          {primaryDate && (
            <span class="content-meta-segment">
              <span class="content-meta-label">{primaryDateLabel}</span>
              <Date date={primaryDate} locale={cfg.locale} />
            </span>
          )}
          {showLastUpdated && modifiedDate && (
            <span class="content-meta-segment">
              <span class="content-meta-label">Last updated</span>
              <time datetime={modifiedDate.toISOString()}>
                {formatDate(modifiedDate, cfg.locale)}
              </time>
            </span>
          )}
        </div>
      )
    } else {
      return null
    }
  }

  ContentMetadata.css = style

  return ContentMetadata
}) satisfies QuartzComponentConstructor
