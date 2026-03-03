import { QuartzComponent, QuartzComponentConstructor } from "./types"
// @ts-ignore
import script from "./scripts/interactiveSim.inline"
import style from "./styles/interactiveSim.scss"

const InteractiveSim: QuartzComponent = () => <div class="interactive-sim-runtime" aria-hidden="true"></div>

InteractiveSim.css = style
InteractiveSim.afterDOMLoaded = script

export default (() => InteractiveSim) satisfies QuartzComponentConstructor
