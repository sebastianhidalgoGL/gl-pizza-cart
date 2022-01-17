import Link from 'next/link'
import { ReactElement } from 'react'

interface Props {
  title?: string
  Icon?: any
  navigateTo: string
}

function HeaderItem({ title, Icon, navigateTo }: Props): ReactElement {
  return (
    <Link href={navigateTo} passHref>
      <div className='cursor-pointer'>
        {title && <p className='text-[24px] hover:text-[#F2C94C]'>{title}</p>}
        {Icon && <Icon hoover={true} />}
      </div>
    </Link>
  )
}

export default HeaderItem
