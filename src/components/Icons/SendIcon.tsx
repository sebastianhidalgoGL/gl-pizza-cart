import { ReactElement } from 'react'

import { Icon } from './Icon'

export interface SvgIconProps {
  strokeWidth?: number
  fill?: string
  hoover?: boolean
}

export const SendIcon = ({}: SvgIconProps): ReactElement => (
  <Icon viewBox='0 0 21 22' width={21} height={20.84}>
    <path
      d='M0.00999999 21.421L21 10.9999L0.00999999 0.578857L0 8.68412L15 10.9999L0 13.3157L0.00999999 21.421Z'
      fill='#F2F2F2'
    />
  </Icon>
)
