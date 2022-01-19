import { ReactElement } from 'react'

import InputEmail from './InputEmail/InputEmail'

function Subscribe(): ReactElement {
  return (
    <div
      className='bg-[#F2C94C] h-[190px] w-[632px] 
    absolute rounded-[10px] shadow-lg mx-auto left-0 right-0 -top-[20%] p-9 '
    >
      <div className='h-full w-full flex flex-col '>
        <div className=' basis-2/4 flex flex-col  '>
          <p className='text-[#333333] font-light'>Do you want promotions and news about us?</p>
          <p className='text-[#333333] font-normal'>SUBSCRIBE TO OUR NEWSLETTER</p>
        </div>
        <div className='basis-2/4  '>
          <InputEmail />
        </div>
      </div>
    </div>
  )
}

export default Subscribe
