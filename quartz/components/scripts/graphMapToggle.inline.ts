const storageKey = "graph-map-view"
const defaultView = "graph"

type ViewType = "graph" | "grid"

const setView = (root: HTMLElement, view: ViewType) => {
  root.dataset.view = view
  const buttons = root.querySelectorAll("[data-graph-map-button]") as NodeListOf<HTMLButtonElement>
  buttons.forEach((button) => {
    const isActive = button.dataset.view === view
    button.setAttribute("aria-pressed", String(isActive))
  })
  localStorage.setItem(storageKey, view)
}

document.addEventListener("nav", () => {
  const roots = document.querySelectorAll("[data-graph-map]") as NodeListOf<HTMLElement>
  roots.forEach((root) => {
    const stored = localStorage.getItem(storageKey)
    const view = stored === "grid" || stored === "graph" ? stored : defaultView
    setView(root, view)

    const buttons = root.querySelectorAll("[data-graph-map-button]") as NodeListOf<HTMLButtonElement>
    buttons.forEach((button) => {
      const view = (button.dataset.view as ViewType | undefined) ?? defaultView
      const onClick = () => setView(root, view)
      button.addEventListener("click", onClick)
      window.addCleanup(() => button.removeEventListener("click", onClick))
    })
  })
})
