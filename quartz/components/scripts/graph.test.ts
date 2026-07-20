import assert from "node:assert"
import test from "node:test"
import { selectGlobalGraph } from "./graph.inline"
import type { SimpleSlug } from "../../util/path"

const slug = (value: string) => value as SimpleSlug

test("global graph selection caps data while retaining current, linked, and high-degree nodes", () => {
  const nodeIds = Array.from({ length: 400 }, (_, index) => slug(`node-${index}`))
  const links = [
    { source: slug("node-0"), target: slug("node-1") },
    ...Array.from({ length: 350 }, (_, index) => ({
      source: slug("node-399"),
      target: slug(`node-${index}`),
    })),
    ...Array.from({ length: 800 }, (_, index) => ({
      source: slug(`node-${index % 399}`),
      target: slug(`node-${(index + 1) % 399}`),
    })),
  ]

  const graph = selectGlobalGraph(nodeIds, links, slug("node-0"))

  assert.equal(graph.nodeIds.size, 300)
  assert.ok(graph.links.length <= 750)
  assert.ok(graph.nodeIds.has(slug("node-0")))
  assert.ok(graph.nodeIds.has(slug("node-1")))
  assert.ok(graph.nodeIds.has(slug("node-399")))
  assert.ok(
    graph.links.some((link) => link.source === slug("node-0") && link.target === slug("node-1")),
  )
})
