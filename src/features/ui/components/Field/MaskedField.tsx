import { ComponentProps } from 'react'
import { Field } from '@features/ui/'

export function MaskedField({
  getMaskedValue,
  isComplete,
  inputProps,
  ...props
}: IMaskedFieldProps) {
  function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const maskedValue = getMaskedValue(event.currentTarget.value)
    event.currentTarget.value = maskedValue
    inputProps?.onChange?.(event)
  }

  function blurHandler(event: React.FocusEvent<HTMLInputElement>) {
    if (!isComplete(event.currentTarget.value) && event.currentTarget.value !== '') {
      event.currentTarget.value = ''
      inputProps?.onChange?.(event)

      try {
        event.currentTarget.focus()
        event.currentTarget.blur()
      } catch {}
    }

    inputProps?.onBlur?.(event)
  }

  return (
    <Field
      {...props}
      inputProps={{
        ...inputProps,
        defaultValue: getMaskedValue(
          (inputProps?.value || inputProps?.defaultValue || '').toString()
        ),
        onChange: changeHandler,
        onBlur: blurHandler,
      }}
    />
  )
}

interface IMaskedFieldProps extends ComponentProps<typeof Field> {
  getMaskedValue: (s: string) => string
  isComplete: (s: string) => boolean
}
