import { ReactElement, ReactNode } from 'react'

import { classNames } from '../../utils/ClassNames'

type BannerProps = {
  children?: ReactNode
  background?: string
  size?: Size
}
enum Size {
  FULL,
  HALF
}
const SIZE_MAPS: Record<Size, string> = {
  [Size.FULL]: 'w-full',
  [Size.HALF]: 'w-[42%]'
}
function Banner({ children, background, size = Size.FULL }: BannerProps): ReactElement {
  return (
    <div
      className={classNames(
        'h-[90vh] bg-cover bg-center  bg-no-repeat rounded-br-[50vh]',
        SIZE_MAPS[size]
      )}
      style={{ backgroundImage: `url( "${background}" )` }}
    >
      {children}
    </div>
  )
}

Banner.size = Size
export default Banner
