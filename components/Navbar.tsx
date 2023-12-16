"use client"
import React, { useEffect } from 'react'
import gsap, { Expo } from 'gsap';

const Navbar = () => {
  useEffect(() => {
    const title = document.getElementById('title');
    const menu = document.getElementById('menu');

    gsap.set([title, menu], { opacity: 0, y: 20 });

    const fadeUp = gsap.timeline({ defaults: { ease: 'power2.out' } })
      .to([title, menu], { opacity: 1, y: 0, duration: 1.5, ease: Expo.easeInOut });

    return () => {
      fadeUp.kill();
    };
  }, []);
  return (
    <div id='background' className='bg-black w-full px-5 md:px-10 py-7 flex justify-between items-center fixed top-0 left-0'>
     <h1 id="title" className='text-white font-medium text-[18px]'>Isola Pelumi</h1>
      <h1 id="menu" className='text-white text-[16px] cursor-pointer'>MENU +</h1>
    </div>
  )
}

export default Navbar
