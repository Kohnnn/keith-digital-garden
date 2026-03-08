import { normalizeRelativeURLs } from "../../util/path"
import { fetchCanonical } from "./util"

const parser = new DOMParser()
const storageKey = "stacked-notes-mode"

const defaultSecondaryTitle = "Choose a note"
let activeSecondaryUrl: URL | null = null

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

const sanitizeArticlePreview = (article: HTMLElement) => {
  const clone = article.cloneNode(true) as HTMLElement

  clone.querySelector("h1")?.remove()

  clone
    .querySelectorAll<HTMLElement>(
      ".interactive-sim, canvas, iframe, .graph, .mermaid, .page-footer, .stacked-notes-container",
    )
    .forEach((node) => {
      if (node.classList.contains("interactive-sim")) {
        const placeholder = document.createElement("div")
        placeholder.className = "stacked-note-sim-placeholder"
        placeholder.innerHTML =
          "<strong>Interactive module</strong><p>Open the full page to use the live simulation.</p>"
        node.replaceWith(placeholder)
        return
      }

      node.remove()
    })

  return clone
}

const extractStackContent = (root: ParentNode | Document) => {
  const article =
    (root.querySelector(".center article.popover-hint") as HTMLElement | null) ??
    (root.querySelector("article.popover-hint") as HTMLElement | null) ??
    (root.querySelector(".center article") as HTMLElement | null) ??
    (root.querySelector("article") as HTMLElement | null)

  if (!article) return null

  const wrapper = document.createElement("div")
  wrapper.appendChild(sanitizeArticlePreview(article))
  return wrapper
}

const setToggleState = (toggle: HTMLButtonElement, active: boolean) => {
  toggle.setAttribute("aria-checked", String(active))

  const label = toggle.querySelector("[data-stack-toggle-label]")
  if (label) {
    label.textContent = active ? "Stack" : "Stack"
  }

  const state = toggle.querySelector("[data-stack-toggle-state]")
  if (state) {
    state.textContent = active ? "On" : "Off"
  }
}

const renderPrimary = (
  primary: HTMLElement,
  meta: HTMLElement | null,
  title: HTMLElement | null,
) => {
  const preview = extractStackContent(document)
  if (!preview) return

  prefixIds(preview, "stack-primary")
  primary.replaceChildren(preview)

  if (meta) {
    meta.textContent = window.location.pathname.replace(/^\//, "") || "index"
  }

  if (title) {
    title.textContent =
      document.querySelector("article h1")?.textContent ??
      document.querySelector(".article-title")?.textContent ??
      document.title.replace(/\s+\|\s+.*/, "") ??
      "Current note"
  }
}

const resetSecondary = (
  secondary: HTMLElement,
  meta: HTMLElement | null,
  title: HTMLElement | null,
  clearButton: HTMLButtonElement | null,
  openButton: HTMLButtonElement | null,
) => {
  activeSecondaryUrl = null
  if (meta) meta.textContent = ""
  if (title) title.textContent = defaultSecondaryTitle
  if (clearButton) clearButton.disabled = true
  if (openButton) openButton.disabled = true

  secondary.replaceChildren()
  const placeholder = document.createElement("p")
  placeholder.className = "stacked-note-placeholder"
  placeholder.textContent = "Select an internal link from the left pane to compare it here."
  secondary.appendChild(placeholder)
}

const renderSecondary = async (
  targetUrl: URL,
  secondary: HTMLElement,
  meta: HTMLElement | null,
  titleEl: HTMLElement | null,
  clearButton: HTMLButtonElement | null,
  openButton: HTMLButtonElement | null,
) => {
  secondary.replaceChildren()
  const loading = document.createElement("p")
  loading.className = "stacked-note-loading"
  loading.textContent = "Loading note preview..."
  secondary.appendChild(loading)

  const response = await fetchCanonical(targetUrl).catch((err) => {
    console.error(err)
  })

  if (!response) {
    loading.textContent = "Failed to load this note."
    return
  }

  const contents = await response.text()
  const html = parser.parseFromString(contents, "text/html")
  normalizeRelativeURLs(html, targetUrl)

  const extracted = extractStackContent(html)
  if (!extracted) {
    loading.textContent = "This note does not have a stackable preview yet."
    return
  }

  prefixIds(extracted, `stack-secondary-${targetUrl.pathname.replace(/\//g, "-")}`)

  const title =
    html.querySelector("h1")?.textContent ??
    html.querySelector("title")?.textContent ??
    targetUrl.pathname.replace(/^\//, "")

  activeSecondaryUrl = targetUrl
  if (meta) meta.textContent = targetUrl.pathname.replace(/^\//, "")
  if (titleEl) titleEl.textContent = title
  if (clearButton) clearButton.disabled = false
  if (openButton) openButton.disabled = false
  secondary.replaceChildren(extracted)
}

const isStackableLink = (link: HTMLAnchorElement) => {
  if (!link.classList.contains("internal")) return false
  if (link.getAttribute("target") === "_blank") return false
  if (link.dataset.routerIgnore !== undefined) return false

  const href = link.getAttribute("href")
  if (!href || href.startsWith("#")) return false

  const url = new URL(link.href)
  if (url.origin !== window.location.origin) return false
  if (url.pathname.endsWith(".pdf")) return false
  if (url.pathname.includes("/tags/")) return false

  return true
}

const setupStackMode = () => {
  const toggle = document.getElementById("stacked-notes-toggle") as HTMLButtonElement | null
  const container = document.getElementById("stacked-notes-container") as HTMLElement | null
  const closeButton = document.getElementById("stacked-notes-close") as HTMLButtonElement | null
  const clearButton = document.getElementById("stacked-notes-clear") as HTMLButtonElement | null
  const openButton = document.getElementById("stacked-notes-open") as HTMLButtonElement | null
  const primary = document.querySelector("[data-stack-content='primary']") as HTMLElement | null
  const secondary = document.querySelector("[data-stack-content='secondary']") as HTMLElement | null
  const secondaryMeta = document.querySelector(
    "[data-stack-meta='secondary']",
  ) as HTMLElement | null
  const primaryMeta = document.querySelector("[data-stack-meta='primary']") as HTMLElement | null
  const primaryTitle = document.querySelector("[data-stack-title='primary']") as HTMLElement | null
  const secondaryTitle = document.querySelector(
    "[data-stack-title='secondary']",
  ) as HTMLElement | null

  if (!toggle || !container || !closeButton || !primary || !secondary || !secondaryMeta) return

  placeContainer(container)

  const setMode = (active: boolean) => {
    document.body.classList.toggle("stack-mode", active)
    container.setAttribute("aria-hidden", String(!active))
    setToggleState(toggle, active)
    localStorage.setItem(storageKey, active ? "true" : "false")
    if (active) {
      renderPrimary(primary, primaryMeta, primaryTitle)
      if (!activeSecondaryUrl) {
        resetSecondary(secondary, secondaryMeta, secondaryTitle, clearButton, openButton)
      }
      closeButton.focus()
    }
  }

  const stored = localStorage.getItem(storageKey) === "true"
  setMode(stored)

  const onToggle = () => setMode(!document.body.classList.contains("stack-mode"))
  const onClose = () => setMode(false)
  const onClear = () =>
    resetSecondary(secondary, secondaryMeta, secondaryTitle, clearButton, openButton)
  const onOpen = () => {
    if (!activeSecondaryUrl) return
    setMode(false)
    window.location.assign(activeSecondaryUrl.toString())
  }

  const onKeyDown = (event: KeyboardEvent) => {
    if (!document.body.classList.contains("stack-mode")) return
    if (event.key === "Escape") {
      event.preventDefault()
      setMode(false)
    }
  }

  const onBackdropClick = (event: MouseEvent) => {
    if (event.target === container) {
      event.preventDefault()
      setMode(false)
    }
  }

  toggle.addEventListener("click", onToggle)
  closeButton.addEventListener("click", onClose)
  clearButton?.addEventListener("click", onClear)
  openButton?.addEventListener("click", onOpen)
  document.addEventListener("keydown", onKeyDown)
  container.addEventListener("click", onBackdropClick)

  const onClick = async (event: MouseEvent) => {
    if (!document.body.classList.contains("stack-mode")) return
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return

    const target = event.target as Element | null
    if (!target) return
    const link = target.closest("a.internal") as HTMLAnchorElement | null
    if (!link) return
    if (!container.contains(link)) return
    if (!isStackableLink(link)) return

    event.preventDefault()
    await renderSecondary(
      new URL(link.href),
      secondary,
      secondaryMeta,
      secondaryTitle,
      clearButton,
      openButton,
    )
  }

  document.addEventListener("click", onClick, true)

  window.addCleanup(() => {
    toggle.removeEventListener("click", onToggle)
    closeButton.removeEventListener("click", onClose)
    clearButton?.removeEventListener("click", onClear)
    openButton?.removeEventListener("click", onOpen)
    document.removeEventListener("keydown", onKeyDown)
    container.removeEventListener("click", onBackdropClick)
    document.removeEventListener("click", onClick, true)
  })
}

document.addEventListener("nav", () => {
  setupStackMode()
})
