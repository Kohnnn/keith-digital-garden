const MOBILE_BREAKPOINT = 768

const setCollapsedState = (button: HTMLElement, content: HTMLElement, collapsed: boolean) => {
  button.classList.toggle("collapsed", collapsed)
  button.setAttribute("aria-expanded", (!collapsed).toString())
  content.classList.toggle("collapsed", collapsed)

  const state = button.querySelector(".toc-state")
  if (state) {
    state.textContent = collapsed ? "▸" : "▾"
  }
}

function toggleToc(this: HTMLElement) {
  const content = this.nextElementSibling as HTMLElement | undefined
  if (!content) return
  const collapsed = !this.classList.contains("collapsed")
  setCollapsedState(this, content, collapsed)
}

const syncResponsiveTocs = () => {
  const tocs = document.querySelectorAll(".toc") as NodeListOf<HTMLElement>

  tocs.forEach((toc) => {
    const button = toc.querySelector(".toc-header") as HTMLElement | null
    const content = toc.querySelector(".toc-content") as HTMLElement | null
    if (!button || !content) return

    if (window.innerWidth < MOBILE_BREAKPOINT) {
      setCollapsedState(button, content, true)
      toc.dataset.autoCollapsed = "true"
      return
    }

    if (toc.dataset.autoCollapsed === "true") {
      setCollapsedState(button, content, false)
      toc.dataset.autoCollapsed = "false"
    }
  })
}

const updateActiveHeading = () => {
  const headings = Array.from(
    document.querySelectorAll("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]"),
  ) as HTMLElement[]

  const links = document.querySelectorAll(".toc a[data-for]")
  links.forEach((link) => link.classList.remove("toc-active", "in-view"))

  if (headings.length === 0) return

  const threshold = window.innerHeight * 0.24
  let activeHeading = headings[0]

  headings.forEach((heading) => {
    if (heading.getBoundingClientRect().top <= threshold) {
      activeHeading = heading
    }
  })

  const activeLinks = document.querySelectorAll(`.toc a[data-for="${activeHeading.id}"]`)
  activeLinks.forEach((link) => link.classList.add("toc-active", "in-view"))
}

const setupToc = () => {
  for (const toc of document.getElementsByClassName("toc")) {
    const button = toc.querySelector(".toc-header") as HTMLElement | null
    if (!button) continue
    button.addEventListener("click", toggleToc)
    window.addCleanup(() => button.removeEventListener("click", toggleToc))
  }
}

document.addEventListener("nav", () => {
  setupToc()
  syncResponsiveTocs()
  updateActiveHeading()

  window.addEventListener("scroll", updateActiveHeading, { passive: true })
  window.addEventListener("resize", syncResponsiveTocs)
  window.addEventListener("resize", updateActiveHeading)

  window.addCleanup(() => {
    window.removeEventListener("scroll", updateActiveHeading)
    window.removeEventListener("resize", syncResponsiveTocs)
    window.removeEventListener("resize", updateActiveHeading)
  })
})
