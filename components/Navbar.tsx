import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-black w-full px-5 md:px-10 py-7 flex justify-between items-center fixed top-0 left-0'>
      <h1 className='text-white font-medium text-[18px]'>Isola Pelumi</h1>
      <h1 className='text-white text-[16px] cursor-pointer'>MENU +</h1>
    </div>
  )
}

export default Navbar
