import { normalizeRelativeURLs } from "../../util/path"
import { fetchCanonical } from "./util"

const parser = new DOMParser()
const storageKey = "stacked-notes-mode"

const prefixIds = (root: HTMLElement, prefix: string) => {
  root.querySelectorAll<HTMLElement>("[id]").forEach((el) => {
    const id = el.getAttribute("id")
    if (!id) return
    el.setAttribute("id", `${prefix}-${id}`)
  })
  root.querySelectorAll<HTMLAnchorElement>("a[href^='#']").forEach((anchor) => {
    const hash = anchor.getAttribute("href")
    if (!hash) return
    anchor.setAttribute("href", `#${prefix}-${hash.slice(1)}`)
  })
}

const placeContainer = (container: HTMLElement) => {
  if (container.parentElement !== document.body) {
    document.body.appendChild(container)
  }
}

const renderPrimary = (primary: HTMLElement) => {
  const source = document.querySelector(".center") as HTMLElement | null
  if (!source) return
  const clone = source.cloneNode(true) as HTMLElement
  prefixIds(clone, "stack-primary")
  primary.replaceChildren(clone)
}

const renderSecondary = async (
  targetUrl: URL,
  secondary: HTMLElement,
  meta: HTMLElement,
) => {
  secondary.replaceChildren()
  const loading = document.createElement("p")
  loading.className = "stacked-note-loading"
  loading.textContent = "Loading note..."
  secondary.appendChild(loading)

  const response = await fetchCanonical(targetUrl).catch((err) => {
    console.error(err)
  })

  if (!response) {
    loading.textContent = "Failed to load note."
    return
  }

  const contents = await response.text()
  const html = parser.parseFromString(contents, "text/html")
  normalizeRelativeURLs(html, targetUrl)

  const popovers = [...html.getElementsByClassName("popover-hint")]
  if (popovers.length === 0) {
    loading.textContent = "No preview available."
    return
  }

  const wrapper = document.createElement("div")
  popovers.forEach((node) => wrapper.appendChild(node))
  prefixIds(wrapper, `stack-secondary-${targetUrl.pathname.replace(/\//g, "-")}`)

  const title =
    html.querySelector("h1")?.textContent ??
    html.querySelector("title")?.textContent ??
    targetUrl.pathname.replace(/^\//, "")

  meta.textContent = targetUrl.pathname.replace(/^\//, "")
  secondary.replaceChildren(wrapper)

  const header = document.createElement("h1")
  header.textContent = title
  secondary.prepend(header)
}

const setupStackMode = () => {
  const toggle = document.getElementById("stacked-notes-toggle") as HTMLButtonElement | null
  const container = document.getElementById("stacked-notes-container") as HTMLElement | null
  const closeButton = document.getElementById("stacked-notes-close") as HTMLButtonElement | null
  const primary = document.querySelector("[data-stack-content='primary']") as HTMLElement | null
  const secondary = document.querySelector("[data-stack-content='secondary']") as HTMLElement | null
  const secondaryMeta = document.querySelector("[data-stack-meta='secondary']") as HTMLElement | null
  const primaryMeta = document.querySelector("[data-stack-meta='primary']") as HTMLElement | null

  if (!toggle || !container || !closeButton || !primary || !secondary || !secondaryMeta) return

  placeContainer(container)

  const setMode = (active: boolean) => {
    document.body.classList.toggle("stack-mode", active)
    container.setAttribute("aria-hidden", String(!active))
    toggle.setAttribute("aria-checked", String(active))
    localStorage.setItem(storageKey, active ? "true" : "false")
    if (active) {
      renderPrimary(primary)
      if (primaryMeta) {
        primaryMeta.textContent = window.location.pathname.replace(/^\//, "") || "index"
      }
    }
  }

  const stored = localStorage.getItem(storageKey) === "true"
  setMode(stored)

  const onToggle = () => setMode(!document.body.classList.contains("stack-mode"))
  const onClose = () => setMode(false)

  const onKeyDown = (event: KeyboardEvent) => {
    if (!document.body.classList.contains("stack-mode")) return
    if (event.key === "Escape") {
      event.preventDefault()
      setMode(false)
    }
  }

  toggle.addEventListener("click", onToggle)
  closeButton.addEventListener("click", onClose)
  document.addEventListener("keydown", onKeyDown)

  const onClick = async (event: MouseEvent) => {
    if (!document.body.classList.contains("stack-mode")) return
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return

    const target = event.target as Element | null
    if (!target) return
    const link = target.closest("a.internal") as HTMLAnchorElement | null
    if (!link) return
    if (!container.contains(link)) return
    if (link.getAttribute("target") === "_blank") return
    if (link.dataset.routerIgnore !== undefined) return

    const href = link.getAttribute("href")
    if (!href || href.startsWith("#")) return

    event.preventDefault()
    await renderSecondary(new URL(link.href), secondary, secondaryMeta)
  }

  document.addEventListener("click", onClick, true)

  window.addCleanup(() => {
    toggle.removeEventListener("click", onToggle)
    closeButton.removeEventListener("click", onClose)
    document.removeEventListener("keydown", onKeyDown)
    document.removeEventListener("click", onClick, true)
  })
}

document.addEventListener("nav", () => {
  setupStackMode()
})
