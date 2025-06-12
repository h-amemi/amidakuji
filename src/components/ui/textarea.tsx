import { TextareaHTMLAttributes } from 'react'
import { cva } from 'class-variance-authority'

const textarea = cva(
  'border rounded p-2 w-full font-mono text-sm resize-none'
)

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>

export function Textarea(props: TextareaProps) {
  return <textarea className={textarea()} {...props} />
}
