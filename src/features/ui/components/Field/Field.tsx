import classnames from 'classnames'
import classes from './Field.module.scss'
import { Input, IProps, getInputClassname } from '../Input'
import { ComponentProps } from 'react'
import { FieldWrapper } from './FieldWrapper'

export function Field({ inputProps = {}, ...props }: IFieldProps) {
  return (
    <FieldWrapper
      {...props}
      input={
        <Input
          {...inputProps}
          className={classnames('w-full border-none focus:shadow-none', inputProps.className)}
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
