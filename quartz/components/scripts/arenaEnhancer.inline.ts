const headingSelector = "article.arena-hub h2, article.arena-hub h3"

const collectSectionItems = (heading: Element) => {
  const currentLevel = Number(heading.tagName.slice(1))
  const items: HTMLLIElement[] = []
  let sibling = heading.nextElementSibling

  while (sibling) {
    if (/^H[23]$/.test(sibling.tagName)) {
      const nextLevel = Number(sibling.tagName.slice(1))
      if (nextLevel <= currentLevel) break
    }

    if (sibling.matches("ul, ol")) {
      items.push(
        ...Array.from(sibling.querySelectorAll("li")).filter((item) =>
          item.querySelector("a[href^='http'], a[href^='https']"),
        ),
      )
    }

    sibling = sibling.nextElementSibling
  }

  return items
}

const updateArena = () => {
  const article = document.querySelector("article.arena-hub") as HTMLElement | null
  const filterInput = document.querySelector("#arena-filter-input") as HTMLInputElement | null
  const filterMeta = document.querySelector("[data-arena-filter-meta]") as HTMLElement | null
  if (!article || !filterInput || !filterMeta) return

  const importedHeading = Array.from(article.querySelectorAll("h2")).find((heading) =>
    heading.textContent?.trim().startsWith("Imported links"),
  )
  const indexHeading = Array.from(article.querySelectorAll("h2")).find(
    (heading) => heading.textContent?.trim() === "Index",
  )
  const indexList =
    indexHeading?.nextElementSibling instanceof HTMLUListElement
      ? indexHeading.nextElementSibling
      : null

  const importedSections: HTMLHeadingElement[] = []
  if (importedHeading) {
    let sibling = importedHeading.nextElementSibling
    while (sibling) {
      if (sibling.matches("h2")) {
        importedSections.push(sibling as HTMLHeadingElement)
      }
      sibling = sibling.nextElementSibling
    }
  }

  const curatedCount = Array.from(article.querySelectorAll("h3")).filter(
    (heading) => collectSectionItems(heading).length > 0,
  ).length
  const importedCount = importedSections.length
  const importedLinks = importedSections.reduce(
    (sum, heading) => sum + collectSectionItems(heading).length,
    0,
  )

  const categoryStat = document.querySelector("[data-arena-stat='categories']")
  const linksStat = document.querySelector("[data-arena-stat='links']")
  const curatedStat = document.querySelector("[data-arena-stat='curated']")
  if (categoryStat) categoryStat.textContent = `${importedCount} categories`
  if (linksStat) linksStat.textContent = `${importedLinks} links`
  if (curatedStat) curatedStat.textContent = `${curatedCount} curated shelves`

  if (indexList) {
    indexList.classList.add("arena-index-list")
    indexList.replaceChildren(
      ...importedSections.map((heading) => {
        const item = document.createElement("li")
        const link = document.createElement("a")
        const count = collectSectionItems(heading).length
        const label = heading.textContent?.trim() ?? "Untitled"
        link.href = `#${heading.id}`
        link.textContent = `${label} (${count})`
        item.appendChild(link)
        return item
      }),
    )
  }

  const headings = Array.from(article.querySelectorAll(headingSelector))
  const applyFilter = () => {
    const query = filterInput.value.trim().toLowerCase()
    let visibleCount = 0

    const allLinkItems = Array.from(article.querySelectorAll("li")).filter((item) =>
      item.querySelector("a[href^='http'], a[href^='https']"),
    ) as HTMLLIElement[]

    allLinkItems.forEach((item) => {
      const matches = query === "" || item.textContent?.toLowerCase().includes(query)
      item.hidden = !matches
      if (matches) visibleCount += 1
    })

    headings.forEach((heading) => {
      if (heading === indexHeading || heading === importedHeading) return
      const items = collectSectionItems(heading)
      const headingMatches = query === "" || heading.textContent?.toLowerCase().includes(query)
      const hasVisibleItems = items.some((item) => !item.hidden)
      ;(heading as HTMLElement).hidden = !headingMatches && !hasVisibleItems

      let sibling = heading.nextElementSibling
      while (sibling) {
        if (/^H[23]$/.test(sibling.tagName)) {
          const nextLevel = Number(sibling.tagName.slice(1))
          const currentLevel = Number(heading.tagName.slice(1))
          if (nextLevel <= currentLevel) break
        }

        if (sibling.matches("ul, ol")) {
          const visibleItems = Array.from(sibling.querySelectorAll("li")).some(
            (item) => !item.hidden,
          )
          ;(sibling as HTMLElement).hidden = !headingMatches && !visibleItems
        }

        sibling = sibling.nextElementSibling
      }
    })

    if (indexHeading) {
      ;(indexHeading as HTMLElement).hidden = query !== ""
    }
    if (indexList) {
      indexList.hidden = query !== ""
    }
    if (importedHeading) {
      ;(importedHeading as HTMLElement).hidden = false
    }

    filterMeta.textContent =
      query === ""
        ? `Showing all ${importedLinks} imported links across ${importedCount} categories.`
        : `Showing ${visibleCount} matching links for “${filterInput.value.trim()}”.`
  }

  filterInput.addEventListener("input", applyFilter)
  applyFilter()

  window.addCleanup(() => {
    filterInput.removeEventListener("input", applyFilter)
  })
}

document.addEventListener("nav", updateArena)
