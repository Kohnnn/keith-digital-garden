import test from "node:test"
import assert from "node:assert/strict"

import {
  applyRequest,
  decayServerLoad,
  firstFitAllocation,
  fragmentationRatio,
  nextRoundRobinServer,
  pickLeastConnections,
} from "./systemMath"

test("load balancing helpers pick deterministic servers", () => {
  const servers = [
    { id: "a", load: 2, power: 1 },
    { id: "b", load: 1, power: 2 },
  ]

  assert.equal(nextRoundRobinServer(servers, 3), 1)
  assert.equal(pickLeastConnections(servers), 1)
  assert.equal(applyRequest(servers[0], { id: "r1", cost: 3 }).load, 5)
  assert.ok(decayServerLoad(servers[0], 0.5).load < servers[0].load)
})

test("memory allocation helpers expose fragmentation", () => {
  const allocation = firstFitAllocation(
    [
      { start: 0, size: 4, used: false },
      { start: 4, size: 4, used: false },
    ],
    3,
  )

  assert.equal(allocation.blocks.length, 3)
  assert.ok(fragmentationRatio(allocation.blocks) > 0)
})
