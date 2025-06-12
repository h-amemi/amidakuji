'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Textarea } from '../components/ui/textarea'
import { Button } from '../components/ui/button'
import AmidaCanvas from '../components/amida/AmidaCanvas'
import useAmida from '../hooks/useAmida'

export default function Home() {
  const [names, setNames] = useState('')
  const [seed, setSeed] = useState('')
  const router = useRouter()
  const searchParams = useSearchParams()
  const initialSeed = searchParams.get('seed') || ''

  const participants = names
    .split('\n')
    .map((n) => n.trim())
    .filter(Boolean)

  const { lines, shuffle } = useAmida(participants.length, 20, seed || initialSeed)

  const handleStart = () => {
    shuffle()
    const params = new URLSearchParams()
    if (seed) params.set('seed', seed)
    router.replace('?' + params.toString())
  }

  return (
    <main className="p-4 space-y-4">
      <Textarea
        className="w-full h-32"
        value={names}
        onChange={(e) => setNames(e.target.value)}
        placeholder="one name per line"
      />
      <input
        type="text"
        className="border p-2"
        value={seed}
        onChange={(e) => setSeed(e.target.value)}
        placeholder="seed"
      />
      <Button onClick={handleStart}>Start</Button>
      <AmidaCanvas participants={participants} lines={lines} />
    </main>
  )
}
