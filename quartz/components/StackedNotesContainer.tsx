import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import styles from "./styles/stackedNotes.scss"

const StackedNotesContainer: QuartzComponent = ({ displayClass }: QuartzComponentProps) => (
  <div
    class={classNames(displayClass, "stacked-notes-container")}
    id="stacked-notes-container"
    aria-hidden="true"
  >
    <div class="stacked-notes-shell">
      <div class="stacked-notes-header">
        <h2 class="stacked-notes-title">Stacked notes</h2>
        <button class="stacked-notes-close" id="stacked-notes-close" type="button">
          Close
        </button>
      </div>
      <p class="stacked-notes-hint">Hint: click a link to stack. Press Esc to exit.</p>
      <div class="stacked-notes-panels">
        <section class="stacked-note" data-stack="primary">
          <div class="stacked-note-header">
            <span>Primary</span>
            <span class="stacked-note-meta" data-stack-meta="primary"></span>
          </div>
          <div class="stacked-note-content" data-stack-content="primary"></div>
        </section>
        <section class="stacked-note" data-stack="secondary">
          <div class="stacked-note-header">
            <span>Stack</span>
            <span class="stacked-note-meta" data-stack-meta="secondary"></span>
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
