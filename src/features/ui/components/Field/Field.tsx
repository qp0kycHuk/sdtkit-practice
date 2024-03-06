import { Input, IProps } from '../Input'
import { ComponentProps } from 'react'
import { FieldWrapper } from './FieldWrapper'
import { twMerge } from 'tailwind-merge'

export function Field({ inputProps = {}, ...props }: IFieldProps) {
  return (
    <FieldWrapper
      {...props}
      input={
        <Input
          {...inputProps}
          className={twMerge('w-full border-none focus:shadow-none', inputProps.className)}
        />
      }
    ></FieldWrapper>
  )
}

export interface IFieldProps extends React.PropsWithChildren, IProps {
  placeholder?: string
  className?: string
  fieldClassName?: string
  inputProps?: Omit<ComponentProps<typeof Input>, 'size' | 'color'>
}
