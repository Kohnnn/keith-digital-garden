import { QuartzComponent, QuartzComponentConstructor } from "./types"
// @ts-ignore
import script from "./scripts/stackedNotes.inline"

const StackedNotes: QuartzComponent = () => (
  <button
    class="stacked-notes-toggle"
    id="stacked-notes-toggle"
    type="button"
    aria-label="Open stacked notes"
    aria-pressed="false"
    title="Open stacked notes"
  >
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect
        x="4"
        y="7"
        width="11"
        height="11"
        rx="2"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      />
      <rect
        x="9"
        y="4"
        width="11"
        height="11"
        rx="2"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      />
    </svg>
  </button>
)

StackedNotes.afterDOMLoaded = script

export default (() => StackedNotes) satisfies QuartzComponentConstructor
