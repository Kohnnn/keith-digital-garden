const COPY_RESET_DELAY = 1800
const resetTimers = new WeakMap<HTMLButtonElement, number>()

const fallbackCopy = (text: string) => {
  const textarea = document.createElement("textarea")
  textarea.value = text
  textarea.setAttribute("readonly", "true")
  textarea.style.position = "fixed"
  textarea.style.opacity = "0"
  document.body.appendChild(textarea)
  textarea.select()
  const copied = document.execCommand("copy")
  textarea.remove()
  return copied
}

const setupCopyButtons = () => {
  const buttons = document.querySelectorAll(
    "button[data-copy-text]",
  ) as NodeListOf<HTMLButtonElement>

  buttons.forEach((button) => {
    const defaultLabel = button.dataset.copyDefault ?? button.textContent?.trim() ?? "Copy"
    const successLabel = button.dataset.copySuccess ?? "Copied"
    const errorLabel = button.dataset.copyError ?? "Copy failed"

    const handler = async () => {
      const text = button.dataset.copyText ?? ""
      if (!text) return

      let copied = false
      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(text)
          copied = true
        } else {
          copied = fallbackCopy(text)
        }
      } catch {
        copied = fallbackCopy(text)
      }

      button.textContent = copied ? successLabel : errorLabel
      button.dataset.copyState = copied ? "copied" : "error"

      const existingTimer = resetTimers.get(button)
      if (existingTimer) {
        window.clearTimeout(existingTimer)
      }

      const timer = window.setTimeout(() => {
        button.textContent = defaultLabel
        button.dataset.copyState = "idle"
      }, COPY_RESET_DELAY)

      resetTimers.set(button, timer)
    }

    button.textContent = defaultLabel
    button.dataset.copyState = button.dataset.copyState ?? "idle"
    button.addEventListener("click", handler)
    window.addCleanup(() => button.removeEventListener("click", handler))
  })
}

document.addEventListener("nav", setupCopyButtons)
