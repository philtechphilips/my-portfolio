"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  let hours: number = currentTime.getHours();
  let minutes: number = currentTime.getMinutes();
  let seconds: number = currentTime.getSeconds();
  const period: string = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;

  const formattedMinutes: string = minutes < 10 ? '0' + minutes : minutes.toString();
  const formattedSeconds: string = seconds < 10 ? '0' + seconds : seconds.toString();

  const formattedTime: string = `${hours}:${formattedMinutes}:${formattedSeconds}${period}`;

  return (
    <div className='w-full px-5 py-7 flex justify-between items-center'>
      <div className='hidden md:flex gap-5 justify-center'>
        <h1 className='text-black text-[12px] font-[100] font-[GT]'>Gh.</h1>
        <h1 className='text-black text-[12px] font-[100] font-[GT]'>Ln.</h1>
        <h1 className='text-black text-[12px] font-[100] font-[GT]'>In.</h1>
        <h1 className='text-black text-[12px] font-[100] font-[GT]'>Tw.</h1>
      </div>
      <Link href="/">
        <h1 className='text-black text-[12px] font-[100] font-[GT] uppercase tracking-[0.18em]'>I s o l a &nbsp;P e l u m i</h1>
      </Link>
      <div id="current-time" className='text-black text-[12px] font-[100] font-[GT] uppercase tracking-[0.18em]'>{formattedTime}</div>
    </div>
  );
};

export default Navbar;
