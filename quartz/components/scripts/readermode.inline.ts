let isReaderMode = false
const readerModeButtonPositions = new Map<
  HTMLButtonElement,
  { parent: Node; nextSibling: Node | null }
>()

const emitReaderModeChangeEvent = (mode: "on" | "off") => {
  const event: CustomEventMap["readermodechange"] = new CustomEvent("readermodechange", {
    detail: { mode },
  })
  document.dispatchEvent(event)
}

const restoreReaderModeButtons = () => {
  for (const [button, { parent, nextSibling }] of readerModeButtonPositions) {
    if (button.isConnected) parent.insertBefore(button, nextSibling)
  }
  readerModeButtonPositions.clear()
}

const applyReaderMode = () => {
  const mode = isReaderMode ? "on" : "off"
  document.documentElement.setAttribute("reader-mode", mode)

  for (const button of document.querySelectorAll<HTMLButtonElement>(".readermode")) {
    button.setAttribute("aria-pressed", String(isReaderMode))
    button.classList.toggle("readermode-active", isReaderMode)
    if (isReaderMode && !readerModeButtonPositions.has(button)) {
      readerModeButtonPositions.set(button, {
        parent: button.parentNode as Node,
        nextSibling: button.nextSibling,
      })
      document.body.append(button)
    }
  }

  if (!isReaderMode) restoreReaderModeButtons()

  for (const rail of document.querySelectorAll<HTMLElement>(".sidebar.left, .sidebar.right")) {
    rail.inert = isReaderMode
    rail.setAttribute("aria-hidden", String(isReaderMode))
  }
}

document.addEventListener("nav", () => {
  const switchReaderMode = () => {
    isReaderMode = !isReaderMode
    applyReaderMode()
    emitReaderModeChangeEvent(isReaderMode ? "on" : "off")
  }

  for (const readerModeButton of document.querySelectorAll<HTMLButtonElement>(".readermode")) {
    readerModeButton.addEventListener("click", switchReaderMode)
    window.addCleanup(() => readerModeButton.removeEventListener("click", switchReaderMode))
  }

  window.addCleanup(() => {
    restoreReaderModeButtons()
    for (const rail of document.querySelectorAll<HTMLElement>(".sidebar.left, .sidebar.right")) {
      rail.inert = false
      rail.removeAttribute("aria-hidden")
    }
  })

  applyReaderMode()
})
