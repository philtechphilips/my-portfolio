"use client";
import { projects } from '@/app/data';
import Link from 'next/link'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const RecentProject = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className='w-full px-5 pb-5'>
            <h5 className='py-10 uppercase text-lg font-[Gt]' data-aos="fade-right"
                data-aos-easing="ease-in-out" data-aos-duration="600">/Recent Projects</h5>
            <div className='bg-black w-full h-[.5px]' data-aos="fade-up"
                data-aos-easing="ease-in-out" data-aos-duration="800"></div>
            {projects && projects.map((item) => (
                <div key={item.slug} >
                    <div className='flex items-center justify-between py-5 md:py-16'>
                        <h1 className=' text-4xl md:text-[100px] font-semibold md:font-medium' data-aos="fade-up"
                            data-aos-easing="ease-in-out" data-aos-duration="800">{item.company}</h1>
                        <Link href={`/${item.slug}`} className="text-xs md:text-medium uppercase font-[Gt]" data-aos="fade-left"
                            data-aos-easing="ease-in-out" data-aos-delay="200" data-aos-duration="800"> View Project<i className="ri-arrow-right-s-line"></i></Link>
                    </div>
                    <div className='bg-black w-full h-[.5px]' data-aos="fade-up"
                        data-aos-easing="ease-in-out" data-aos-duration="800"></div>
                </div>
            ))}

        </div>
    )
}

export default RecentProject
