import { ComponentType, HTMLProps, ReactNode, SVGProps } from 'react'

type ValidTags = keyof JSX.IntrinsicElements
interface DynamicComponentProps<T extends ValidTags> {
  tag?: T | ComponentType
  children?: ReactNode
}

type DyntamicComponentProps<T extends ValidTags> = T extends keyof HTMLElementTagNameMap
  ? HTMLProps<HTMLElementTagNameMap[T]>
  : T extends keyof SVGElementTagNameMap
  ? SVGProps<SVGElementTagNameMap[T]>
  : NonNullable<unknown>

export function DynamicComponent<T extends ValidTags>({
  tag: Tag = 'div' as T,
  ...props
}: DynamicComponentProps<T> & DyntamicComponentProps<T>) {
  return <Tag {...props} />
}
