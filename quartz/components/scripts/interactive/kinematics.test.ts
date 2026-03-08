import test from "node:test"
import assert from "node:assert/strict"

import {
  bicycleTurnRadius,
  crankSliderPosition,
  gearPairAngles,
  watchHandAngles,
} from "./kinematics"

test("kinematics helpers expose core relationships", () => {
  assert.equal(gearPairAngles(Math.PI, 20, 40).drivenAngle, -Math.PI / 2)
  assert.equal(bicycleTurnRadius(1, 0), Number.POSITIVE_INFINITY)
  assert.ok(crankSliderPosition(1, 3, 0) > crankSliderPosition(1, 3, 180))
  assert.ok(watchHandAngles(4, 1).escapeWheel > watchHandAngles(4, 1).hourWheel)
})
