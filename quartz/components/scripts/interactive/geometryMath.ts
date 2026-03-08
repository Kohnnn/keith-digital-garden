export type Vector2 = {
  x: number
  y: number
}

export type CollisionBody = {
  position: Vector2
  velocity: Vector2
  mass: number
}

export const dot = (left: Vector2, right: Vector2) => left.x * right.x + left.y * right.y

export const magnitude = (vector: Vector2) => Math.hypot(vector.x, vector.y)

export const normalize = (vector: Vector2): Vector2 => {
  const length = magnitude(vector)
  if (length === 0) return { x: 0, y: 0 }
  return { x: vector.x / length, y: vector.y / length }
}

export const resolveElasticCollision = (
  bodyA: CollisionBody,
  bodyB: CollisionBody,
  normal: Vector2,
) => {
  const unitNormal = normalize(normal)
  const relativeVelocity = {
    x: bodyA.velocity.x - bodyB.velocity.x,
    y: bodyA.velocity.y - bodyB.velocity.y,
  }
  const separatingSpeed = dot(relativeVelocity, unitNormal)
  const impulse = (2 * separatingSpeed) / Math.max(bodyA.mass + bodyB.mass, Number.EPSILON)

  return {
    a: {
      x: bodyA.velocity.x - impulse * bodyB.mass * unitNormal.x,
      y: bodyA.velocity.y - impulse * bodyB.mass * unitNormal.y,
    },
    b: {
      x: bodyB.velocity.x + impulse * bodyA.mass * unitNormal.x,
      y: bodyB.velocity.y + impulse * bodyA.mass * unitNormal.y,
    },
  }
}

export const applyBasisTransform = (
  vector: Vector2,
  basisX: Vector2,
  basisY: Vector2,
): Vector2 => ({
  x: vector.x * basisX.x + vector.y * basisY.x,
  y: vector.x * basisX.y + vector.y * basisY.y,
})

export const gpsGeometryScore = (satellites: Vector2[], receiver: Vector2) => {
  if (satellites.length < 2) return 0
  const directions = satellites.map((satellite) =>
    normalize({ x: satellite.x - receiver.x, y: satellite.y - receiver.y }),
  )
  let spread = 0

  for (let index = 1; index < directions.length; index++) {
    const previous = directions[index - 1]
    const current = directions[index]
    spread += Math.abs(previous.x * current.y - previous.y * current.x)
  }

  return spread / (directions.length - 1)
}

export const qrBitAt = (size: number, x: number, y: number) =>
  (x * 17 + y * 31 + size) % 2 === 0 ? 1 : 0
