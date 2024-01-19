"use client"
import React, { useEffect, useState } from 'react'
import gsap, { Expo } from 'gsap';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuHovered, setIsMenuHovered] = useState(false);

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
    <div className='w-full px-5 py-7 flex justify-between items-center'>
      <div className='hidden md:flex gap-5 justify-center '>
      <h1 id="title" className='text-black text-[12px] font-[100] font-[GT]'>Gh.</h1>
      <h1 id="title" className='text-black text-[12px] font-[100] font-[GT]'>Ln.</h1>
      <h1 id="title" className='text-black text-[12px] font-[100] font-[GT]'>In.</h1>
      <h1 id="title" className='text-black text-[12px] font-[100] font-[GT]'>Tw.</h1>
      </div>
      <Link href="/">
        <h1 id="title" className='text-black text-[12px] font-[100] font-[GT] uppercase tracking-[0.18em]'>I s o l a &nbsp;P e l u m i</h1>
      </Link>
      <h1 id="title" className='text-black text-[12px] font-[100] font-[GT] uppercase tracking-[0.18em]'>21:00PM</h1>
    </div>
  )
}

export default Navbar
