import { ReactElement } from 'react'

import { SendIcon } from '../../../Icons/SendIcon'

function InputEmail(): ReactElement {
  return (
    <div className='h-full w-full flex items-center justify-center '>
      <div className='flex items-center w-full bg-white rounded-[50px] ' x-data="{ search: '' }">
        <div className='w-full'>
          <input
            type='email'
            className='w-full px-4 text rounded-[50px] focus:outline-none'
            placeholder='Enter your email'
            x-model='email'
          />
        </div>
        <div>
          <button
            type='submit'
            className='flex  items-center justify-center  bg-[#219653] shadow-lg w-[95px] h-[44px] rounded-[50px]'
          >
            <SendIcon />
          </button>
        </div>
      </div>
    </div>
  )
}

export default InputEmail
