import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black py-10 px-10 flex justify-between items-center'>
      <div className='flex gap-10'>
        <p className='text-white'>2023©</p>
        <p className='text-white'>11:34 PM</p>
      </div>
      <div className='flex gap-10'>
        <Link href="#" className='text-white'>LINKEDIN</Link>
        <Link href="#" className='text-white'>GITHUB</Link>
        <Link href="#" className='text-white'>TWITTER</Link>
        <Link href="#" className='text-white'>INSTAGRAM</Link>
      </div>
    </div>
  )
}

export default Footer
