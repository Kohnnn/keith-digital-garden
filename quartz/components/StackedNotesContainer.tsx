import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import styles from "./styles/stackedNotes.scss"

const StackedNotesContainer: QuartzComponent = ({ displayClass }: QuartzComponentProps) => (
  <div
    class={classNames(displayClass, "stacked-notes-container")}
    id="stacked-notes-container"
    aria-hidden="true"
  >
    <div class="stacked-notes-shell" data-stack-state="empty">
      <div class="stacked-notes-header">
        <div>
          <p class="stacked-notes-kicker">Split reader</p>
          <h2 class="stacked-notes-title" id="stacked-notes-title">
            Open a second note
          </h2>
          <p class="stacked-notes-meta" id="stacked-notes-meta">
            Keep the current page in place while you branch sideways.
          </p>
        </div>
        <button class="stacked-notes-close" id="stacked-notes-close" type="button">
          Close pane
        </button>
      </div>
      <div class="stacked-notes-actions">
        <a
          class="stacked-notes-link disabled"
          id="stacked-notes-open-full"
          href="#"
          data-stack-control="open-full"
          aria-disabled="true"
        >
          Open full page
        </a>
        <button
          class="stacked-notes-link"
          id="stacked-notes-promote"
          type="button"
          data-stack-control="promote"
          disabled
        >
          Promote to primary
        </button>
      </div>
      <p class="stacked-notes-hint">
        Turn Split on, then click an internal note link. Press Esc to close the pane.
      </p>
      <div class="stacked-note-content" data-stack-content="secondary">
        <p class="stacked-note-placeholder">Select a note to open in the secondary reader.</p>
      </div>
    </div>
  </div>
)

StackedNotesContainer.css = styles

export default (() => StackedNotesContainer) satisfies QuartzComponentConstructor
