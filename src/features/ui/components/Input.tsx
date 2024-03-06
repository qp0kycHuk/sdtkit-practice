import React from 'react'
import type { Color, Size } from '../types'
import { twMerge } from 'tailwind-merge'

const colorClassNames: PartialRecord<Color, string> = {
  white: 'input-white',
  black: 'input-black',
  green: 'input-green',
  yellow: 'input-yellow',
  primary: 'input-primary',
  red: 'input-red',
}

const sizeClassNames: PartialRecord<Size, string> = {
  xs: 'input-xs',
  sm: 'input-sm',
  base: 'input-base',
  lg: 'input-lg',
}

function InputComponent(
  { color, size, type = 'text', className, ...props }: InputProps,
  ref: InputRef
) {
  const classNames = getInputClassname({ color, size, className })

  return <input placeholder="" {...props} type={type} ref={ref} className={classNames} />
}

export function getInputClassname({ color = 'primary', size, className }: InputProps) {
  return twMerge(
    'input',
    color ? colorClassNames[color] : null,
    size ? sizeClassNames[size] : null,
    className
  )
}

export const Input = React.forwardRef(InputComponent)

export interface IProps {
  color?: keyof typeof colorClassNames
  size?: keyof typeof sizeClassNames
  className?: string
}

export type InputProps = IProps & Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof IProps>
export type InputRef = React.ForwardedRef<HTMLInputElement>
