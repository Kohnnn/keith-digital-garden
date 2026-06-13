// Theme-aware inline art swap.
//
// Hero / route-tile <img>s that live in raw markdown HTML cannot be retargeted
// by CSS, so the extended wire_pages.py emits paired data attributes:
//
//   <img src="…/foo.webp"
//        data-src-dark="…/foo.webp"
//        data-src-light="…/foo-light.webp" />
//
// This script points each such <img> at the variant matching the active theme,
// on first load, on every SPA `nav`, and whenever Quartz emits `themechange`.
// Missing a light variant degrades silently: wire_pages.py only emits
// data-src-light when the light file exists, so imgs without it are skipped and
// keep their dark src.

type ArtTheme = "light" | "dark"

const currentArtTheme = (): ArtTheme => {
  const saved = document.documentElement.getAttribute("saved-theme")
  if (saved === "light" || saved === "dark") return saved
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

const applyThemeArt = (theme: ArtTheme) => {
  const imgs = document.querySelectorAll<HTMLImageElement>("img[data-src-light][data-src-dark]")
  imgs.forEach((img) => {
    const next = theme === "light" ? img.dataset.srcLight : img.dataset.srcDark
    if (!next) return
    if (img.getAttribute("src") !== next) {
      img.setAttribute("src", next)
    }
  })
}

document.addEventListener("nav", () => {
  applyThemeArt(currentArtTheme())

  const onThemeChange = (e: Event) => {
    const detail = (e as CustomEvent<{ theme: ArtTheme }>).detail
    applyThemeArt(detail?.theme ?? currentArtTheme())
  }

  // Quartz dispatches `themechange` on `document` (see darkmode.inline.ts);
  // listening on `window` would silently never fire.
  document.addEventListener("themechange", onThemeChange)
  window.addCleanup(() => document.removeEventListener("themechange", onThemeChange))
})
