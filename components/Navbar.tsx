"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Navbar: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    AOS.init();
  }, []);

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
    <div className='w-full md:px-24 px-5 py-7 flex justify-between items-center'>
      <div className=' w-full'>
        <h1 className='font-bold font-[Monument-R] text-sm '>Pelumi</h1>
        <h1 className='font-bold font-[Monument-R] text-sm '>Isola</h1>
      </div>
      <div id="current-time" className='text-[#232121] text-[12px] font-[100]  uppercase tracking-[0.18em]' data-aos="fade-up">{formattedTime}</div>
    </div>
  );
};

export default Navbar;
