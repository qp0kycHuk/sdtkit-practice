import React, { useEffect, useState } from 'react'
import classnames from 'classnames'
import { FieldWrapper } from '../Field/FieldWrapper'
import type { IProps } from '../Input'
import { ToRightIcon } from '@assets/icons/fill'

export function Select({ children, fieldChildren, inputProps, ...props }: IFieldProps) {
  const selectRef = React.createRef<HTMLSelectElement>()
  const [isLabelShow, setIsLabelShow] = useState(
    inputProps?.defaultValue === props.placeholder || !inputProps?.defaultValue
  )

  useEffect(() => {
    selectRef.current?.addEventListener('change', changeHandler)

    return () => {
      selectRef.current?.removeEventListener('change', changeHandler)
    }
  }, [selectRef])

  function changeHandler(event: Event) {
    const target = event.target as HTMLSelectElement
    target.blur()
    setIsLabelShow(target?.value === props.placeholder)
  }

  return (
    <FieldWrapper
      isLabelShow={isLabelShow}
      {...props}
      className={classnames(props.className, 'cursor-pointer group')}
      input={
        <select
          ref={selectRef}
          placeholder=""
          {...inputProps}
          defaultValue={inputProps?.defaultValue || props.placeholder}
          className={classnames(
            'input w-full border-none focus:shadow-none appearance-none cursor-pointer',

            inputProps?.className
          )}
        >
          {children}
        </select>
      }
    >
      {fieldChildren}
      <div className="absolute top-0 right-0 flex items-center h-full pr-4 pointer-events-none">
        <ToRightIcon className="text-lg opacity-40 transition-transform group-focus-within:-rotate-90" />
      </div>
    </FieldWrapper>
  )
}

export interface IFieldProps extends React.PropsWithChildren, IProps {
  placeholder?: string
  className?: string
  fieldClassName?: string
  inputProps?: React.InputHTMLAttributes<HTMLSelectElement>
  fieldChildren?: React.ReactNode
}
