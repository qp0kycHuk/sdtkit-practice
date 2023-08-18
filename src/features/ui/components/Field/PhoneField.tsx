import { ComponentProps } from 'react'
import { Field } from '@features/ui/'
import { MaskedField } from './MaskedField'
import { getMaskedPhoneValue, isPhoneComplete } from '@utils/index'

export function PhoneField({ ...props }: IPhoneFieldProps) {
  return (
    <MaskedField {...props} isComplete={isPhoneComplete} getMaskedValue={getMaskedPhoneValue} />
  )
}

type IPhoneFieldProps = ComponentProps<typeof Field>
