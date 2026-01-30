import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
// @ts-ignore
import script from "./scripts/dappledLight.inline"
import styles from "./styles/dappledLight.scss"

const DappledLight: QuartzComponent = ({ displayClass }: QuartzComponentProps) => (
  <div class={classNames(displayClass, "dappled-light")} id="dappled-light" aria-hidden="true">
    <div class="dappled-glow"></div>
    <div class="dappled-glow-bounce"></div>
    <div class="dappled-window">
      <div class="dappled-motes"></div>
      <div class="dappled-blinds"></div>
      <div class="dappled-vertical"></div>
    </div>
    <div class="dappled-blur"></div>
  </div>
)

DappledLight.css = styles
DappledLight.afterDOMLoaded = script

export default (() => DappledLight) satisfies QuartzComponentConstructor
