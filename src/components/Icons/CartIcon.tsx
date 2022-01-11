export interface SvgIconProps {
  width?: number
  height?: number
  strokeWidth?: number
  fill?: string
  hoover?: boolean
}

export const CartIcon = ({
  fill = '#F2F2F2',
  strokeWidth = 2,
  width = 25,
  height = 25,
  hoover
}: SvgIconProps) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 26 26'
    xmlns='http://www.w3.org/2000/svg'
    className='cursor-pointer'
  >
    <path
      strokeWidth={strokeWidth}
      d='M7.75 20.5C6.375 20.5 5.2625 21.625 5.2625 23C5.2625 24.375 6.375 25.5 7.75 25.5C9.125 25.5 10.25 24.375 10.25 23C10.25 21.625 9.125 20.5 7.75 20.5ZM0.25 0.5V3H2.75L7.25 12.4875L5.5625 15.55C5.3625 15.9 5.25 16.3125 5.25 16.75C5.25 18.125 6.375 19.25 7.75 19.25H22.75V16.75H8.275C8.1 16.75 7.9625 16.6125 7.9625 16.4375L8 16.2875L9.125 14.25H18.4375C19.375 14.25 20.2 13.7375 20.625 12.9625L25.1 4.85C25.2 4.675 25.25 4.4625 25.25 4.25C25.25 3.5625 24.6875 3 24 3H5.5125L4.3375 0.5H0.25ZM20.25 20.5C18.875 20.5 17.7625 21.625 17.7625 23C17.7625 24.375 18.875 25.5 20.25 25.5C21.625 25.5 22.75 24.375 22.75 23C22.75 21.625 21.625 20.5 20.25 20.5Z'
      fill={fill}
      className={hoover ? `hover:fill-[#F2C94C]` : ''}
    />
  </svg>
)