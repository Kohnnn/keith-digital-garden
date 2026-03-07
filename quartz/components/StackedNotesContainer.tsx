import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import styles from "./styles/stackedNotes.scss"

const StackedNotesContainer: QuartzComponent = ({ displayClass }: QuartzComponentProps) => (
  <div
    class={classNames(displayClass, "stacked-notes-container")}
    id="stacked-notes-container"
    aria-hidden="true"
  >
    <div
      class="stacked-notes-shell"
      role="dialog"
      aria-modal="true"
      aria-labelledby="stacked-notes-heading"
    >
      <div class="stacked-notes-header">
        <div>
          <p class="stacked-notes-kicker">Overlay reader</p>
          <h2 class="stacked-notes-title" id="stacked-notes-heading">
            Stacked notes
          </h2>
        </div>
        <div class="stacked-notes-toolbar">
          <p class="stacked-notes-hint">
            Freeze this note on the left, then open internal links on the right.
          </p>
          <button class="stacked-notes-close" id="stacked-notes-close" type="button">
            Close
          </button>
        </div>
      </div>
      <div class="stacked-notes-panels">
        <section class="stacked-note" data-stack="primary">
          <div class="stacked-note-header">
            <div class="stacked-note-heading">
              <span class="stacked-note-kicker">Current note</span>
              <strong class="stacked-note-name" data-stack-title="primary">
                Loading...
              </strong>
            </div>
            <span class="stacked-note-meta" data-stack-meta="primary"></span>
          </div>
          <div class="stacked-note-content" data-stack-content="primary"></div>
        </section>
        <section class="stacked-note" data-stack="secondary">
          <div class="stacked-note-header">
            <div class="stacked-note-heading">
              <span class="stacked-note-kicker">Stacked note</span>
              <strong class="stacked-note-name" data-stack-title="secondary">
                Choose a note
              </strong>
            </div>
            <div class="stacked-note-header-tools">
              <span class="stacked-note-meta" data-stack-meta="secondary"></span>
              <button class="stacked-note-action" id="stacked-notes-clear" type="button">
                Clear
              </button>
              <button class="stacked-note-action" id="stacked-notes-open" type="button">
                Open full page
              </button>
            </div>
          </div>
          <div class="stacked-note-content" data-stack-content="secondary">
            <p class="stacked-note-placeholder">Select a note to stack.</p>
          </div>
        </section>
      </div>
    </div>
  </div>
)

StackedNotesContainer.css = styles

export default (() => StackedNotesContainer) satisfies QuartzComponentConstructor
