import { QuartzComponent, QuartzComponentConstructor } from "./types"
// @ts-ignore
import script from "./scripts/arenaEnhancer.inline"

const ArenaEnhancer: QuartzComponent = () => null

ArenaEnhancer.afterDOMLoaded = script

export default (() => ArenaEnhancer) satisfies QuartzComponentConstructor
