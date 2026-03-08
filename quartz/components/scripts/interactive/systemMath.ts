export type ServerState = {
  id: string
  load: number
  power: number
}

export type RequestState = {
  id: string
  cost: number
}

export type MemoryBlock = {
  start: number
  size: number
  used: boolean
}

export const nextRoundRobinServer = (servers: ServerState[], cursor: number) => {
  if (servers.length === 0) return -1
  return ((cursor % servers.length) + servers.length) % servers.length
}

export const pickLeastConnections = (servers: ServerState[]) => {
  if (servers.length === 0) return -1
  let bestIndex = 0
  let bestScore = servers[0].load / Math.max(servers[0].power, 0.1)

  for (let index = 1; index < servers.length; index++) {
    const score = servers[index].load / Math.max(servers[index].power, 0.1)
    if (score < bestScore) {
      bestScore = score
      bestIndex = index
    }
  }

  return bestIndex
}

export const applyRequest = (server: ServerState, request: RequestState): ServerState => ({
  ...server,
  load: server.load + request.cost / Math.max(server.power, 0.1),
})

export const decayServerLoad = (server: ServerState, damping: number): ServerState => ({
  ...server,
  load: Math.max(0, server.load * damping),
})

export const firstFitAllocation = (blocks: MemoryBlock[], requestSize: number) => {
  const index = blocks.findIndex((block) => !block.used && block.size >= requestSize)
  if (index === -1) return { index: -1, blocks }

  const block = blocks[index]
  const nextBlocks = [...blocks]
  nextBlocks.splice(
    index,
    1,
    { start: block.start, size: requestSize, used: true },
    ...(block.size === requestSize
      ? []
      : [{ start: block.start + requestSize, size: block.size - requestSize, used: false }]),
  )

  return { index, blocks: nextBlocks }
}

export const fragmentationRatio = (blocks: MemoryBlock[]) => {
  const freeBlocks = blocks.filter((block) => !block.used)
  const freeSpace = freeBlocks.reduce((total, block) => total + block.size, 0)
  if (freeSpace === 0) return 0
  const largestFree = Math.max(...freeBlocks.map((block) => block.size))
  return 1 - largestFree / freeSpace
}
