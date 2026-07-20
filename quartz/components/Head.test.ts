import assert from "node:assert/strict"
import test from "node:test"
import { resolveSocialImage } from "./Head"

test("social images preserve explicit URLs and fall back to the shared asset", () => {
  const baseUrl = "example.com/garden"

  assert.equal(resolveSocialImage(baseUrl), "https://example.com/garden/static/og-image.png")
  assert.equal(
    resolveSocialImage(baseUrl, "covers/note.png"),
    "https://example.com/garden/static/covers/note.png",
  )
  assert.equal(
    resolveSocialImage(baseUrl, "https://cdn.example.com/note.webp"),
    "https://cdn.example.com/note.webp",
  )
})
