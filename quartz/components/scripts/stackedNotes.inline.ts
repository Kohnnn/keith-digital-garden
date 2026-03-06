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

const setText = (selector: string, value: string) => {
  const el = document.querySelector(selector)
  if (el) {
    el.textContent = value
  }
}

const isEligibleLink = (link: HTMLAnchorElement) => {
  if (link.getAttribute("target") === "_blank") return false
  if (link.dataset.routerIgnore !== undefined) return false
  if (link.dataset.stackControl !== undefined) return false
  if (link.hasAttribute("download")) return false

  const href = link.getAttribute("href")
  if (!href || href.startsWith("#")) return false

  const url = new URL(link.href, window.location.href)
  if (url.origin !== window.location.origin) return false
  if (url.pathname.endsWith(".pdf")) return false
  if (url.pathname.includes("/tags/") || url.pathname.endsWith("/tags")) return false
  if (url.pathname === window.location.pathname && url.hash) return false
  return link.classList.contains("internal")
}

const setPaneState = (state: "empty" | "ready") => {
  const shell = document.querySelector(".stacked-notes-shell") as HTMLElement | null
  if (!shell) return
  shell.dataset.stackState = state
}

const renderEmpty = (message = "Select a note to open in the secondary reader.") => {
  const secondary = document.querySelector("[data-stack-content='secondary']") as HTMLElement | null
  const openFull = document.getElementById("stacked-notes-open-full") as HTMLAnchorElement | null
  const promote = document.getElementById("stacked-notes-promote") as HTMLButtonElement | null
  if (!secondary) return

  const placeholder = document.createElement("p")
  placeholder.className = "stacked-note-placeholder"
  placeholder.textContent = message

  secondary.replaceChildren(placeholder)
  setText("#stacked-notes-title", "Open a second note")
  setText("#stacked-notes-meta", "Keep the current page in place while you branch sideways.")
  if (openFull) {
    openFull.href = "#"
    openFull.setAttribute("aria-disabled", "true")
    openFull.classList.add("disabled")
  }
  if (promote) {
    promote.disabled = true
  }
  setPaneState("empty")
}

const renderSecondary = async (targetUrl: URL, secondary: HTMLElement) => {
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

  const article = html.querySelector(".center article") as HTMLElement | null
  const pageHeader = html.querySelector(".center .page-header .popover-hint") as HTMLElement | null
  if (!article && !pageHeader) {
    loading.textContent = "No preview available."
    return
  }

  const wrapper = document.createElement("div")
  if (pageHeader) {
    wrapper.appendChild(pageHeader)
  }
  if (article) {
    wrapper.appendChild(article)
  }
  prefixIds(wrapper, `stack-secondary-${targetUrl.pathname.replace(/\//g, "-")}`)

  const title =
    html.querySelector(".center .article-title")?.textContent ??
    html.querySelector(".center article h1")?.textContent ??
    html.querySelector("title")?.textContent ??
    targetUrl.pathname.replace(/^\//, "")

  setText("#stacked-notes-title", title)
  setText("#stacked-notes-meta", targetUrl.pathname.replace(/^\//, "") || "index")
  secondary.replaceChildren(wrapper)
  setPaneState("ready")

  const openFull = document.getElementById("stacked-notes-open-full") as HTMLAnchorElement | null
  const promote = document.getElementById("stacked-notes-promote") as HTMLButtonElement | null
  if (openFull) {
    openFull.href = targetUrl.toString()
    openFull.setAttribute("aria-disabled", "false")
    openFull.classList.remove("disabled")
  }
  if (promote) {
    promote.disabled = false
    promote.dataset.targetUrl = targetUrl.toString()
  }
}

const setupStackMode = () => {
  const toggle = document.getElementById("stacked-notes-toggle") as HTMLButtonElement | null
  const container = document.getElementById("stacked-notes-container") as HTMLElement | null
  const closeButton = document.getElementById("stacked-notes-close") as HTMLButtonElement | null
  const secondary = document.querySelector("[data-stack-content='secondary']") as HTMLElement | null
  const promoteButton = document.getElementById("stacked-notes-promote") as HTMLButtonElement | null

  if (!toggle || !container || !closeButton || !secondary || !promoteButton) return

  placeContainer(container)

  const setMode = (active: boolean) => {
    document.body.classList.toggle("stack-mode", active)
    container.setAttribute("aria-hidden", String(!active))
    toggle.setAttribute("aria-checked", String(active))
    localStorage.setItem(storageKey, active ? "true" : "false")
    if (!active) {
      renderEmpty()
    }
  }

  const stored = localStorage.getItem(storageKey) === "true"
  setMode(stored)

  const onToggle = () => setMode(!document.body.classList.contains("stack-mode"))
  const onClose = () => renderEmpty()
  const onPromote = () => {
    const targetUrl = promoteButton.dataset.targetUrl
    if (!targetUrl) return
    window.location.href = targetUrl
  }

  const onKeyDown = (event: KeyboardEvent) => {
    if (!document.body.classList.contains("stack-mode")) return
    if (event.key === "Escape") {
      event.preventDefault()
      const shell = document.querySelector(".stacked-notes-shell") as HTMLElement | null
      if (shell?.dataset.stackState === "ready") {
        renderEmpty()
      } else {
        setMode(false)
      }
    }
  }

  toggle.addEventListener("click", onToggle)
  closeButton.addEventListener("click", onClose)
  promoteButton.addEventListener("click", onPromote)
  document.addEventListener("keydown", onKeyDown)

  const onClick = async (event: MouseEvent) => {
    if (!document.body.classList.contains("stack-mode")) return
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return

    const target = event.target as Element | null
    if (!target) return
    const link = target.closest("a.internal") as HTMLAnchorElement | null
    if (!link) return
    if (!isEligibleLink(link)) return

    event.preventDefault()
    await renderSecondary(new URL(link.href), secondary)
  }

  document.addEventListener("click", onClick, true)

  window.addCleanup(() => {
    toggle.removeEventListener("click", onToggle)
    closeButton.removeEventListener("click", onClose)
    promoteButton.removeEventListener("click", onPromote)
    document.removeEventListener("keydown", onKeyDown)
    document.removeEventListener("click", onClick, true)
  })
}

document.addEventListener("nav", () => {
  setupStackMode()
})
