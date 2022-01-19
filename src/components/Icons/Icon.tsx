import { ReactElement, ReactNode } from 'react'

export interface SvgIconProps {
  children: ReactNode
  width?: number
  height?: number
  viewBox?: string
}

export const Icon = ({
  children,
  width = 25,
  height = 25,
  viewBox = '0 0 33 33'
}: SvgIconProps): ReactElement => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      xmlns='http://www.w3.org/2000/svg'
      className='cursor-pointer'
    >
      {children}
    </svg>
  )
}
