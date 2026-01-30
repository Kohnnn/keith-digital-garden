const setThemeTransition = () => {
  document.body.classList.add("theme-transition")
  window.setTimeout(() => {
    document.body.classList.remove("theme-transition")
  }, 450)
}

const placeOverlay = () => {
  const overlays = document.querySelectorAll("#dappled-light")
  if (overlays.length === 0) return
  const overlay = overlays[0] as HTMLElement
  overlays.forEach((node, index) => {
    if (index > 0) {
      node.remove()
    }
  })
  const root = document.getElementById("quartz-root")
  if (!overlay || !root || !root.parentElement) return
  if (overlay.parentElement !== root.parentElement) {
    root.parentElement.insertBefore(overlay, root)
    return
  }
  if (overlay.nextElementSibling !== root) {
    root.parentElement.insertBefore(overlay, root)
  }
}

document.addEventListener("nav", () => {
  placeOverlay()
})

document.addEventListener("themechange", () => {
  setThemeTransition()
})
