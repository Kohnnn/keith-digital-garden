import assert from "node:assert/strict"
import test from "node:test"

import {
  deriveColorInteractionState,
  deriveFlowInteractionState,
  deriveGpsInteractionState,
  deriveMechanicalInteractionState,
} from "./richModuleScenes"

test("flow interaction state stays neutral without pointer gestures", () => {
  const state = deriveFlowInteractionState(
    { gestures: [] },
    {
      dragging: false,
      nx: 0.82,
      ny: 0.18,
      clickCount: 3,
      path: [{ x: 0.82, y: 0.18 }],
    },
    400,
    240,
    1.2,
  )

  assert.equal(state.active, false)
  assert.equal(state.probeX, 200)
  assert.equal(state.probeY, 120)
  assert.equal(state.pulse, 0)
  assert.equal(state.sampleCount, 0)
  assert.deepEqual(state.path, [])
})

test("flow interaction state reflects drag and click probes", () => {
  const state = deriveFlowInteractionState(
    { gestures: ["drag", "click/tap"] },
    {
      dragging: true,
      nx: 0.8,
      ny: 0.25,
      clickCount: 3,
      path: [
        { x: 0.62, y: 0.44 },
        { x: 0.74, y: 0.32 },
        { x: 0.8, y: 0.25 },
      ],
    },
    500,
    300,
    0.75,
  )

  assert.equal(state.active, true)
  assert.equal(state.probeX, 400)
  assert.equal(state.probeY, 75)
  assert.equal(state.swirl, 1)
  assert.ok(state.pulse > 0)
  assert.equal(state.sampleCount, 12)
  assert.equal(state.path.length, 3)
  assert.ok(state.probeLift > 0)
})

test("mechanical interaction state derives camera tilt and click selection", () => {
  const state = deriveMechanicalInteractionState(
    { gestures: ["drag", "click/tap"] },
    {
      dragging: true,
      nx: 0.85,
      ny: 0.25,
      clickCount: 5,
      path: [
        { x: 0.72, y: 0.44 },
        { x: 0.79, y: 0.34 },
      ],
    },
    4,
    0.4,
  )

  assert.equal(state.active, true)
  assert.ok(state.tiltX > 0)
  assert.ok(state.tiltY < 0)
  assert.ok(state.depth > 1)
  assert.equal(state.exploded, 1)
  assert.equal(state.selectedIndex, 1)
  assert.equal(state.clickEngaged, true)
  assert.equal(state.path.length, 2)
})

test("gps interaction state keeps receiver centered without drag gestures", () => {
  const state = deriveGpsInteractionState(
    { gestures: [], moduleId: "module-03" },
    {
      dragging: false,
      nx: 0.15,
      ny: 0.82,
      clickCount: 2,
      path: [{ x: 0.15, y: 0.82 }],
    },
    640,
    360,
    0.8,
  )

  assert.equal(state.active, false)
  assert.equal(state.receiverX, 435.20000000000005)
  assert.equal(state.receiverY, 223.2)
  assert.equal(state.selectedSatellite, 2)
  assert.deepEqual(state.path, [])
})

test("color interaction state translates click cycling and drag rotation", () => {
  const state = deriveColorInteractionState(
    { gestures: ["drag", "click/tap"], moduleId: "module-15" },
    {
      dragging: true,
      nx: 0.84,
      ny: 0.22,
      clickCount: 5,
      path: [
        { x: 0.72, y: 0.38 },
        { x: 0.81, y: 0.28 },
      ],
    },
    1.1,
  )

  assert.equal(state.active, true)
  assert.equal(state.cycleIndex, 1)
  assert.ok(state.yaw > 4)
  assert.ok(state.pitch < 1)
  assert.ok(state.pulse > 0.5)
  assert.equal(state.path.length, 2)
})
