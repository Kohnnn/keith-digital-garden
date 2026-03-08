const DEG = Math.PI / 180

export const bicycleTurnRadius = (wheelBase: number, steerAngleDegrees: number) => {
  const steerAngle = steerAngleDegrees * DEG
  const tangent = Math.tan(steerAngle)
  if (Math.abs(tangent) < 1e-6) return Number.POSITIVE_INFINITY
  return wheelBase / tangent
}

export const gearPairAngles = (driverAngle: number, driverTeeth: number, drivenTeeth: number) => ({
  driverAngle,
  drivenAngle: -(driverAngle * driverTeeth) / Math.max(drivenTeeth, 1),
})

export const crankSliderPosition = (
  crankRadius: number,
  rodLength: number,
  angleDegrees: number,
) => {
  const angle = angleDegrees * DEG
  const x = crankRadius * Math.cos(angle)
  const y = crankRadius * Math.sin(angle)
  const piston = x + Math.sqrt(Math.max(rodLength * rodLength - y * y, 0))
  return piston
}

export const watchHandAngles = (time: number, ratio: number) => ({
  escapeWheel: time * ratio,
  minuteWheel: time * ratio * 0.25,
  hourWheel: time * ratio * 0.125,
})
