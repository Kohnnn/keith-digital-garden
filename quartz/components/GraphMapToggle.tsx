import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { concatenateResources } from "../util/resources"
import GraphConstructor from "./Graph"
import GridMapConstructor from "./GridMap"
// @ts-ignore
import script from "./scripts/graphMapToggle.inline"
import styles from "./styles/graphMapToggle.scss"

const GraphComponent = GraphConstructor()
const GridMapComponent = GridMapConstructor()

const GraphMapToggle: QuartzComponent = ({ displayClass, ...props }: QuartzComponentProps) => (
  <div class={classNames(displayClass, "graph-map-toggle")} data-graph-map data-view="graph">
    <div class="graph-map-switch" role="group" aria-label="Map view">
      <button type="button" data-graph-map-button data-view="graph" aria-pressed="true">
        Graph
      </button>
      <button type="button" data-graph-map-button data-view="grid" aria-pressed="false">
        Map
      </button>
    </div>
    <div class="graph-map-panels">
      <div class="graph-map-panel" data-panel="graph">
        <GraphComponent {...props} />
      </div>
      <div class="graph-map-panel graph-map-panel--grid" data-panel="grid">
        <GridMapComponent {...props} />
      </div>
    </div>
  </div>
)

GraphMapToggle.css = concatenateResources(styles, GraphComponent.css, GridMapComponent.css)
GraphMapToggle.afterDOMLoaded = concatenateResources(
  script,
  GraphComponent.afterDOMLoaded,
  GridMapComponent.afterDOMLoaded,
)

export default (() => GraphMapToggle) satisfies QuartzComponentConstructor
