import React from 'react'
import globe from '../assets/globe-icon.png'

export default function Header() {
  return (
    <div className='flex justify-center w-full bg-red h-10 items-center gap-1'>
        <img src={globe} className='h-5'/>
        <h1 className='font-regular text-xs text-white'>my travel journal.</h1> 
    </div>
  )
}
