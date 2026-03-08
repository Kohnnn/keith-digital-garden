import test from "node:test"
import assert from "node:assert/strict"

import {
  applyBasisTransform,
  gpsGeometryScore,
  qrBitAt,
  resolveElasticCollision,
} from "./geometryMath"

test("geometry helpers transform vectors", () => {
  const transformed = applyBasisTransform({ x: 1, y: 2 }, { x: 2, y: 0 }, { x: 0, y: 3 })

  assert.deepEqual(transformed, { x: 2, y: 6 })
})

test("collision and geometry quality helpers stay stable", () => {
  const collision = resolveElasticCollision(
    { position: { x: 0, y: 0 }, velocity: { x: 1, y: 0 }, mass: 1 },
    { position: { x: 1, y: 0 }, velocity: { x: -1, y: 0 }, mass: 1 },
    { x: 1, y: 0 },
  )

  assert.ok(collision.a.x < 0)
  assert.ok(
    gpsGeometryScore(
      [
        { x: 1, y: 0 },
        { x: 0, y: 1 },
        { x: -1, y: 0 },
      ],
      { x: 0, y: 0 },
    ) > 0,
  )
  assert.equal(qrBitAt(21, 1, 1), qrBitAt(21, 1, 1))
})
