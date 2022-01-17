import Image from 'next/image'
import Link from 'next/link'

import { CartIcon } from '../Icons/CartIcon'
import HeaderItem from './HeaderItem/HeaderItem'

const Header = () => {
  return (
    <header className='w-screen absolute z-40'>
      <div className=' flex flex-grow justify-between ml-[102px] mr-[102px]'>
        <div className='mt-[42px]'>
          <Link href={'/'} passHref>
            <Image
              src='/pizzaClubLogo.svg'
              alt='Pizza Club Logo'
              width='121'
              height='121'
              className='mr-[100px] cursor-pointer'
            />
          </Link>
        </div>
        <div className='mt-[32px] flex flex-grow h-[90px] justify-evenly items-center max-w-[1200px]'>
          <HeaderItem title='Menu' navigateTo={'/Menu'} />
          <HeaderItem title='About Us' navigateTo='/About' />
          <HeaderItem title='Contact' navigateTo='/Contact' />
          <HeaderItem title='Login / Sing up' navigateTo='/Welcome' />
          <HeaderItem title='Help' navigateTo='/Help' />
          <HeaderItem Icon={CartIcon} navigateTo='/Order' />
        </div>
      </div>
    </header>
  )
}

export default Header
