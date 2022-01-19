import Image from 'next/image'
import Link from 'next/link'
import { ReactElement } from 'react'

import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon
} from '../Icons/SocialNetworks'
import Subscribe from './Subscribe/Subscribe'

function Footer(): ReactElement {
  return (
    <footer
      className='bg-[#F2994A] h-[451px] w-100 inset-x-0 bottom-0 p-4 absolute 
    rounded-tr-[367.5px] '
    >
      <Subscribe />
      <div className='flex flex-row gap-32 h-[350px] w-11/12 pt-[103px] pl-[102px]'>
        <div className=' basis-1/3 flex flex-col gap-3 items-baseline'>
          <Link href={'/'} passHref>
            <Image
              src='/pizzaClubLogo.svg'
              alt='Pizza Club Logo'
              width='101'
              height='101'
              className='mr-[100px] cursor-pointer'
            />
          </Link>

          <p className='text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec scelerisque vulputate
            est iaculis bibendum curabitur.
          </p>

          <div className='flex flex-row gap-5'>
            <FacebookIcon />
            <TwitterIcon />
            <LinkedinIcon />
            <YoutubeIcon />
            <InstagramIcon />
          </div>
        </div>

        <div className=' mt-12 basis-2/3 flex flex-row gap-5'>
          <div className='basis-1/4  flex flex-col gap-3'>
            <h4 className='text-[24px] '>Our Links</h4>
            <Link href={'/Menu'} passHref>
              <p className='text cursor-pointer'>Menu</p>
            </Link>
            <Link href={'/Contact'} passHref>
              <p className='text cursor-pointer'>Contact</p>
            </Link>
            <Link href={'/About'} passHref>
              <p className='text cursor-pointer'>About us</p>
            </Link>
            <Link href={'/Help'} passHref>
              <p className='text cursor-pointer'>Help</p>
            </Link>
          </div>
          <div className=' basis-1/2  flex flex-col gap-3'>
            <h4 className='text-[24px]'>Important stuff</h4>
            <Link href={'/Menu'} passHref>
              <p className='text cursor-pointer'>Terms & Conditions</p>
            </Link>
            <Link href={'/Contact'} passHref>
              <p className='text cursor-pointer'>Privacy Policy</p>
            </Link>
            <Link href={'/About'} passHref>
              <p className='text cursor-pointer'>Careers</p>
            </Link>
          </div>
          <div className='basis-1/4 flex flex-col gap-3'>
            <h4 className='text-[24px]'>Our Feed</h4>
            <div className='text-[24px] grid grid-cols-3 grid-flow-row gap-2 '>
              <Image
                src='/pizzaSquare1.png'
                alt='Pizza Club Logo'
                width='101'
                height='101'
                className='mr-[100px] cursor-pointer'
              />
              <Image
                src='/pizzaSquare2.png'
                alt='Pizza Club Logo'
                width='101'
                height='101'
                className='mr-[100px] cursor-pointer'
              />{' '}
              <Image
                src='/pizzaSquare3.png'
                alt='Pizza Club Logo'
                width='101'
                height='101'
                className='mr-[100px] cursor-pointer'
              />{' '}
              <Image
                src='/pizzaSquare4.png'
                alt='Pizza Club Logo'
                width='101'
                height='101'
                className='mr-[100px] cursor-pointer'
              />{' '}
              <Image
                src='/pizzaSquare5.png'
                alt='Pizza Club Logo'
                width='101'
                height='101'
                className='mr-[100px] cursor-pointer'
              />{' '}
              <Image
                src='/pizzaSquare6.png'
                alt='Pizza Club Logo'
                width='101'
                height='101'
                className='mr-[100px] cursor-pointer'
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
