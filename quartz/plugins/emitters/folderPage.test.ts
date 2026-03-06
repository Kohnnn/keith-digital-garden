import assert from "node:assert"
import test, { describe } from "node:test"

import { rebaseRelativeUrlForFolderPage } from "./folderPageUtil"
import type { FullSlug } from "../../util/path"

describe("rebaseRelativeUrlForFolderPage", () => {
  test("rebases child links for rendered folder index pages", () => {
    const rebased = rebaseRelativeUrlForFolderPage(
      "../Portfolio/Projects/VNIBB",
      "Portfolio/Projects" as FullSlug,
      "Portfolio/Projects/index" as FullSlug,
    )

    assert.strictEqual(rebased, "./VNIBB")
  })

  test("preserves sibling links and anchors", () => {
    const rebased = rebaseRelativeUrlForFolderPage(
      "../Portfolio/Blog#research-notes",
      "Portfolio/Projects" as FullSlug,
      "Portfolio/Projects/index" as FullSlug,
    )

    assert.strictEqual(rebased, "../Blog#research-notes")
  })

  test("rebases asset paths against the rendered folder URL", () => {
    const rebased = rebaseRelativeUrlForFolderPage(
      "../../attachments/chart.png",
      "Portfolio/Projects" as FullSlug,
      "Portfolio/Projects/index" as FullSlug,
    )

    assert.strictEqual(rebased, "../../attachments/chart.png")
  })
})
