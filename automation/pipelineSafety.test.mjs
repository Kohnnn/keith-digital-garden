import assert from "node:assert/strict"
import fs from "node:fs/promises"
import os from "node:os"
import path from "node:path"
import test from "node:test"

import {
  assertPublishedContentPath,
  assertUnsafePublishedMutations,
  canonicalWeeklyReportPath,
  generatedOutputPath,
  previousWeeklyReportKey,
  writeNewGeneratedFile,
} from "./pipeline.mjs"

test("generated output remains inside the sandbox", () => {
  const sandboxPath = path.join(os.tmpdir(), "pipeline-sandbox")
  assert.equal(
    generatedOutputPath(sandboxPath, "Market_Reports", "2025", "weekly.md"),
    path.join(sandboxPath, "Market_Reports", "2025", "weekly.md"),
  )
  assert.throws(() => generatedOutputPath(sandboxPath, "..", "published.md"), {
    message: /must stay in the sandbox/,
  })
})

test("generated output refuses to overwrite an existing file", async () => {
  const sandboxPath = await fs.mkdtemp(path.join(os.tmpdir(), "pipeline-sandbox-"))
  const targetPath = generatedOutputPath(sandboxPath, "draft.md")

  try {
    await writeNewGeneratedFile(sandboxPath, targetPath, "first")
    await assert.rejects(writeNewGeneratedFile(sandboxPath, targetPath, "second"), {
      code: "EEXIST",
    })
    assert.equal(await fs.readFile(targetPath, "utf-8"), "first")
  } finally {
    await fs.rm(sandboxPath, { recursive: true, force: true })
  }
})

test("published content paths exclude the sandbox", async () => {
  const contentPath = await fs.mkdtemp(path.join(os.tmpdir(), "pipeline-content-"))
  const sandboxPath = path.join(contentPath, "AI_Sandbox")

  try {
    await assert.rejects(
      assertPublishedContentPath(path.join(sandboxPath, "draft.md"), contentPath, sandboxPath),
      /outside AI_Sandbox/,
    )
    await assert.rejects(
      assertPublishedContentPath(path.join(os.tmpdir(), "draft.md"), contentPath, sandboxPath),
      /under content/,
    )
    await assert.doesNotReject(
      assertPublishedContentPath(
        path.join(contentPath, "mark-memo", "2025", "report.md"),
        contentPath,
        sandboxPath,
      ),
    )
  } finally {
    await fs.rm(contentPath, { recursive: true, force: true })
  }
})

test("published content paths refuse a symlink escape", async (t) => {
  const contentPath = await fs.mkdtemp(path.join(os.tmpdir(), "pipeline-content-"))
  const escapedPath = await fs.mkdtemp(path.join(os.tmpdir(), "pipeline-escape-"))
  const sandboxPath = path.join(contentPath, "AI_Sandbox")
  const linkPath = path.join(contentPath, "escape")

  try {
    try {
      await fs.symlink(escapedPath, linkPath, process.platform === "win32" ? "junction" : "dir")
    } catch (error) {
      if (["EPERM", "EACCES", "UNKNOWN"].includes(error.code)) {
        t.skip(`symlinks unavailable: ${error.code}`)
        return
      }
      throw error
    }

    await assert.rejects(
      assertPublishedContentPath(path.join(linkPath, "report.md"), contentPath, sandboxPath),
      /escapes content/,
    )
  } finally {
    await fs.rm(contentPath, { recursive: true, force: true })
    await fs.rm(escapedPath, { recursive: true, force: true })
  }
})

test("generated output refuses a symlink escape", async (t) => {
  const sandboxPath = await fs.mkdtemp(path.join(os.tmpdir(), "pipeline-sandbox-"))
  const escapedPath = await fs.mkdtemp(path.join(os.tmpdir(), "pipeline-escape-"))
  const linkPath = path.join(sandboxPath, "escape")

  try {
    try {
      await fs.symlink(escapedPath, linkPath, process.platform === "win32" ? "junction" : "dir")
    } catch (error) {
      if (["EPERM", "EACCES", "UNKNOWN"].includes(error.code)) {
        t.skip(`symlinks unavailable: ${error.code}`)
        return
      }
      throw error
    }

    await assert.rejects(
      writeNewGeneratedFile(sandboxPath, path.join(linkPath, "draft.md"), "blocked"),
      /escapes the sandbox/,
    )
    assert.equal(
      await fs.access(path.join(escapedPath, "draft.md")).then(
        () => true,
        () => false,
      ),
      false,
    )
  } finally {
    await fs.rm(sandboxPath, { recursive: true, force: true })
    await fs.rm(escapedPath, { recursive: true, force: true })
  }
})

test("published mutations require the explicit unsafe flag", () => {
  assert.throws(() => assertUnsafePublishedMutations(false), /unsafe-published-mutations true/)
  assert.doesNotThrow(() => assertUnsafePublishedMutations(true))
})

test("crosslinks target the previous canonical published weekly report", () => {
  assert.equal(previousWeeklyReportKey("2025-03-10 to 2025-03-16"), "2025-W10")
  assert.equal(
    canonicalWeeklyReportPath(path.join("content", "mark-memo"), 2025, "2025-W10"),
    path.join("content", "mark-memo", "2025", "weekly-market-report-2025-W10.md"),
  )
  assert.throws(
    () => canonicalWeeklyReportPath(path.join("content", "mark-memo"), 2025, "invalid"),
    /Invalid weekly report key/,
  )
})
