import React, { ReactElement } from 'react'

interface Props {
  title: String
}

function HeaderItem({ title }: Props): ReactElement {
  return (
    <div className='cursor-pointer'>
      <p className='text-[24px] hover:text-[#F2C94C] hover:font-bold'>{title}</p>
    </div>
  )
}

export default HeaderItem
