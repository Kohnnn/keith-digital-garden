import { QuartzComponent, QuartzComponentConstructor } from "./types"
// @ts-ignore
import script from "./scripts/stackedNotes.inline"

const StackedNotes: QuartzComponent = () => (
  <button
    class="stacked-notes-toggle"
    id="stacked-notes-toggle"
    type="button"
    role="switch"
    aria-label="Toggle stacked notes"
    aria-checked="false"
  >
    Stack
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="14" cy="12" r="5" opacity="0.9" fill="none" stroke="currentColor" stroke-width="2" />
      <circle cx="10" cy="12" r="5" opacity="0.5" fill="none" stroke="currentColor" stroke-width="2" />
    </svg>
  </button>
)

StackedNotes.afterDOMLoaded = script

export default (() => StackedNotes) satisfies QuartzComponentConstructor
