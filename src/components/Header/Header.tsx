import Image from 'next/image'
import React from 'react'

import { CartIcon } from '../Icons/CartIcon'
import HeaderItem from './HeaderItem/HeaderItem'

const Header = () => {
  return (
    <header className='flex flex-grow justify-between  ml-[102px] mr-[102px]'>
      <div className='mt-[42px]'>
        <Image
          src='/pizzaClubLogo.svg'
          alt='Pizza Club Logo'
          width='121'
          height='121'
          className='mr-[100px] cursor-pointer'
        />
      </div>
      <div className='mt-[32px] flex flex-grow h-[90px] justify-evenly items-center max-w-[1200px]'>
        <HeaderItem title='Menu' />
        <HeaderItem title='About Us' />
        <HeaderItem title='Contact' />
        <HeaderItem title='Login / Sing up' />
        <HeaderItem title='Help' />
        <CartIcon hoover='#F2C94C' />
      </div>
    </header>
  )
}

export default Header
