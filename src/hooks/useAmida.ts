'use client'

import { useState } from 'react'

export interface Line {
  x1: number
  y1: number
  x2: number
  y2: number
}

function rng(seed: string) {
  let h = 0
  for (let i = 0; i < seed.length; i++) h = Math.imul(31, h) + seed.charCodeAt(i)
  return () => {
    h = Math.imul(48271, h) % 2147483647
    return h / 2147483647
  }
}

export default function useAmida(count: number, branches: number, seed: string) {
  const [lines, setLines] = useState<Line[]>([])
  const shuffle = () => {
    const rand = seed ? rng(seed) : Math.random
    const arr: Line[] = []
    for (let i = 0; i < branches; i++) {
      const x = Math.floor(rand() * (count - 1))
      const y = rand() * 380 + 10
      arr.push({ x1: 40 + x * 80, y1: y, x2: 40 + (x + 1) * 80, y2: y })
    }
    setLines(arr)
  }
  return { lines, shuffle }
}
