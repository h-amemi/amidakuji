import { motion } from 'framer-motion'

export interface Line {
  x1: number
  y1: number
  x2: number
  y2: number
}

export default function AmidaCanvas({
  participants,
  lines,
}: {
  participants: string[]
  lines: Line[]
}) {
  const height = 400
  const width = participants.length * 80

  return (
    <svg width={width} height={height} className="border">
      {participants.map((_, i) => (
        <line
          key={`v${i}`}
          x1={40 + i * 80}
          y1={0}
          x2={40 + i * 80}
          y2={height}
          stroke="black"
        />
      ))}
      {lines.map((line, idx) => (
        <motion.line
          key={idx}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: idx * 0.1 }}
          {...line}
          stroke="red"
        />
      ))}
    </svg>
  )
}
