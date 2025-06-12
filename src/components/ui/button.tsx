import { cva } from 'class-variance-authority'
import { ButtonHTMLAttributes } from 'react'

const button = cva(
  'px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition'
)

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props: ButtonProps) {
  return <button className={button()} {...props} />
}
