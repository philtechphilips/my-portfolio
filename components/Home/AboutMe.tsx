import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Marquee from 'react-fast-marquee';
import 'remixicon/fonts/remixicon.css';

const AboutMe = () => {
    return (
        <>
            <div className="bg-black w-full px-5 md:px-10 h-[600px] md:h-screen flex gap-0 flex-col justify-center">
                <i className="ri-arrow-right-down-line text-[#A3A3A3] text-xl md:text-9xl"></i>
                <div className='w-fit'>
                    <h1 className='text-[#A3A3A3] text-[60px] md:text-[130px] font-semibold md:font-medium '>SOFTWARE</h1>
                    <h1 className='text-[#A3A3A3] text-[60px] md:text-[130px] font-semibold md:font-medium md:ml-40 md:-mt-20'>ENGINEER</h1>
                    <p className='text-white text-right md:-mt-8 font-semibold'>BASED IN LAGOS</p>
                </div>
            </div>

            <div className='w-full bg-black px-5 md:px-10 md:pt-20'>
                <div className='md:border-t  border-t-[#A3A3A3] w-full pt-10 py-10 md:py-0'>
                    <div className='flex flex-col md:flex-row justify-between md:py-20'>
                        <div className='w-1/3'>
                            <h5 className='text-white uppercase text-lg'>/About Me</h5>
                        </div>
                        <div className='w-full md:w-2/3 flex flex-col gap-7'>
                            <p className='uppercase text-white md:text-4xl leading-8 md:leading-[50px] font-sans'>
                                a passionate software engineer with 3 years of hands-on experience.
                                My skills span PHP, Laravel, JavaScript, TypeScript, React.js, Node.js, and more. I love turning ideas into reality by seamlessly merging front-end and back-end engineering solutions.
                            </p>
                            <Image src="/images/picture.png" alt='my Image' width="300" height={400} />
                            <p className='uppercase text-white  md:text-4xl leading-8 md:leading-[50px] font-sans'>
                                I've tackled exciting projects, including enhancing React, NodeJs and Express applications.
                            </p>

                            <p className='uppercase text-white  md:text-4xl leading-8 md:leading-[50px] font-sans'>
                                I'm committed to continuous learning, collaboration, and innovation, aiming to specialize in emerging technologies for impactful solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full bg-black px-5 md:px-10 md:py-20'>
                <div className='md:border-t border-t-[#A3A3A3] md:border-b border-b-[#A3A3A3] w-full'>
                    <div className='flex flex-col md:flex-row justify-between py-20'>
                        <div className='w-1/3'>
                            <h5 className='text-white uppercase text-lg'>/Skillset</h5>
                        </div>
                        <div className='w-full md:w-2/3 mt-0'>
                            <h1 className='text-[#A3A3A3] text-2xl mt-5 md:text-[80px] font-semibold uppercase md:mt-16'>CREATIVE</h1>
                            <h1 className='text-[#A3A3A3] text-2xl mt-3 md:text-[80px] font-semibold uppercase md:mt-16'>Teamplayer</h1>
                            <h1 className='text-[#A3A3A3] text-2xl mt-3 md:text-[80px] font-semibold uppercase md:mt-16'>Critical thinker</h1>
                            <h1 className='text-[#A3A3A3] text-2xl mt-3 md:text-[80px] font-semibold uppercase md:mt-16'>html</h1>
                            <h1 className='text-[#A3A3A3] text-2xl mt-3 md:text-[80px] font-semibold uppercase md:mt-16'>css</h1>
                            <h1 className='text-[#A3A3A3] text-2xl mt-3 md:text-[80px] font-semibold uppercase md:mt-16'>bootstrap</h1>
                            <h1 className='text-[#A3A3A3] text-2xl mt-3 md:text-[80px] font-semibold uppercase md:mt-16'>tailwind css</h1>
                            <h1 className='text-[#A3A3A3] text-2xl mt-3 md:text-[80px] font-semibold uppercase md:mt-16'>mui</h1>
                            <h1 className='text-[#A3A3A3] text-2xl mt-3 md:text-[80px] font-semibold uppercase md:mt-16'>scss</h1>
                            <h1 className='text-[#A3A3A3] text-2xl mt-3 md:text-[80px] font-semibold uppercase md:mt-16'>sql/mysql</h1>
                            <h1 className='text-[#A3A3A3] text-2xl mt-3 md:text-[80px] font-semibold uppercase md:mt-16'>Mongodb</h1>
                            <h1 className='text-[#A3A3A3] text-2xl mt-3 md:text-[80px] font-semibold uppercase md:mt-16'>redis</h1>
                            <h1 className='text-[#A3A3A3] text-2xl mt-3 md:text-[80px] font-semibold uppercase md:mt-16'>react/next</h1>
                            <h1 className='text-[#A3A3A3] text-2xl mt-3 md:text-[80px] font-semibold uppercase md:mt-16'>nodejs/express</h1>
                            <h1 className='text-[#A3A3A3] text-2xl mt-3 md:text-[80px] font-semibold uppercase md:mt-16'>php/laravel</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe
