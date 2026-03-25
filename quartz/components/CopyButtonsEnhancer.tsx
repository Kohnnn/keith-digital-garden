import { QuartzComponent, QuartzComponentConstructor } from "./types"
// @ts-ignore
import script from "./scripts/copyButtons.inline"

const CopyButtonsEnhancer: QuartzComponent = () => null

CopyButtonsEnhancer.afterDOMLoaded = script

export default (() => CopyButtonsEnhancer) satisfies QuartzComponentConstructor
