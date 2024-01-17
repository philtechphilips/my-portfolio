import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Marquee from 'react-fast-marquee';
import 'remixicon/fonts/remixicon.css';

const AboutMe = ({ changeCursor }: any) => {
    return (
        <>
            <div className="w-full px-5  md:h-screen flex gap-0 flex-col md:-mt-4 justify-center">
                <div className='bg-black w-full h-[.5px]'></div>
                <div className='w-full'>
                    <h1 onMouseEnter={() => changeCursor(true)} onMouseLeave={() => changeCursor(false)} className='text-black text-center text-[60px] md:text-[180px] font-semibold md:font-medium '>SOFTWARE</h1>
                    <div className='bg-black w-full h-[.5px]'></div>
                    <div className='flex items-center justify-between'>
                        <Image src="/images/asterisk.svg" alt='asterick' width={15} height={15} className='md:hidden' />
                        <Image src="/images/asterisk.svg" alt='asterick' width={50} height={50} className='hidden md:block' />
                        <h1 className='text-black text-center text-[60px] md:text-[180px] font-semibold md:font-medium'>
                            ENGINEER
                        </h1>
                        <Image src="/images/asterisk.svg" alt='asterick' width={50} height={50} className='hidden md:block' />
                        <Image src="/images/asterisk.svg" alt='asterick' width={15} height={15} className='md:hidden' />
                    </div>
                    <div className='bg-black w-full h-[.5px]'></div>
                </div>
            </div>

            <div className='w-full px-5'>
                <div className='w-full pt-10 py-10 md:py-0'>
                    <div className='flex flex-col md:flex-row justify-between md:py-20'>
                        <div className='w-1/3'>
                            <h5 className='text-black uppercase text-lg font-[Gt]'>/About Me</h5>
                        </div>
                        <div className='w-full md:w-2/3 flex flex-col gap-7'>
                            <p className='uppercase text-black md:text-4xl leading-8 md:leading-[50px] font-sans'>
                                a passionate software engineer with 3 years of hands-on experience.
                                My skills span PHP, Laravel, JavaScript, TypeScript, React.js, Node.js, and more. I love turning ideas into reality by seamlessly merging front-end and back-end engineering solutions.
                            </p>
                            <Image src="/images/picture.png" alt='my Image' width="300" height={400} />
                            <p className='uppercase text-black  md:text-4xl leading-8 md:leading-[50px] font-sans'>
                                I've tackled exciting projects, including enhancing React, NodeJs and Express applications.
                            </p>

                            <p className='uppercase text-black  md:text-4xl leading-8 md:leading-[50px] font-sans'>
                                I'm committed to continuous learning, collaboration, and innovation, aiming to specialize in emerging technologies for impactful solutions.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='bg-black w-full h-[.5px]'></div>
            </div>

            <div className='w-full px-5'>
                <div className='w-full'>
                    <h5 className='text-black uppercase text-lg font-[Gt]'>/Skillset</h5>
                </div>
                <Marquee style={{ height: "120px", display: "flex", alignItems: "center" }} gradient={true} gradientColor='#FAFAFA' gradientWidth={200}>
                    <h1 className='text-center font-thin text-4xl mt-5 md:text-[80px] capitalize mr-5'>Creative</h1>

                    <Image src="/images/asterisk.svg" alt='asterick' width={30} height={30} className='mt-5 mr-5' />

                    <h1 className='text-center font-light text-4xl mt-3 md:text-[80px] capitalize mr-5'>Teamplayer</h1>

                    <Image src="/images/asterisk.svg" alt='asterick' width={30} height={30} className='mt-5 mr-5' />

                    <h1 className='text-center font-light text-4xl mt-3 md:text-[80px] capitalize mr-5'>Critical thinker</h1>

                    <Image src="/images/asterisk.svg" alt='asterick' width={30} height={30} className='mt-5 mr-5' />

                    <h1 className='text-center font-light text-4xl mt-3 md:text-[80px] capitalize mr-5'>html</h1>

                    <Image src="/images/asterisk.svg" alt='asterick' width={30} height={30} className='mt-5 mr-5' />

                    <h1 className='text-center font-light text-4xl mt-3 md:text-[80px] capitalize mr-5'>css</h1>

                    <Image src="/images/asterisk.svg" alt='asterick' width={30} height={30} className=' mt-5 mr-5' />

                    <h1 className='text-center font-light text-4xl mt-3 md:text-[80px] capitalize mr-5'>bootstrap</h1>

                    <Image src="/images/asterisk.svg" alt='asterick' width={30} height={30} className=' mt-5 mr-5' />

                    <h1 className='text-center font-light text-4xl mt-3 md:text-[80px] capitalize mr-5'>tailwind css</h1>

                    <Image src="/images/asterisk.svg" alt='asterick' width={30} height={30} className='mt-5 mr-5' />

                    <h1 className='text-center font-light text-4xl mt-3 md:text-[80px] capitalize mr-5'>mui</h1>

                    <Image src="/images/asterisk.svg" alt='asterick' width={30} height={30} className=' mt-5 mr-5' />

                    <h1 className='text-center font-light text-4xl mt-3 md:text-[80px] capitalize mr-5'>scss</h1>

                    <Image src="/images/asterisk.svg" alt='asterick' width={30} height={30} className='mt-5 mr-5' />

                    <h1 className='text-center font-light text-4xl mt-3 md:text-[80px] capitalize mr-5'>sql/mysql</h1>

                    <Image src="/images/asterisk.svg" alt='asterick' width={30} height={30} className='mt-5 mr-5' />

                    <h1 className='text-center font-light text-4xl mt-3 md:text-[80px] capitalize mr-5'>Mongodb</h1>

                    <Image src="/images/asterisk.svg" alt='asterick' width={30} height={30} className='mt-5 mr-5' />

                    <h1 className='text-center font-light text-4xl mt-3 md:text-[80px] capitalize mr-5'>redis</h1>

                    <Image src="/images/asterisk.svg" alt='asterick' width={30} height={30} className=' mt-5 mr-5' />

                    <h1 className='text-center font-light text-4xl mt-3 md:text-[80px] capitalize mr-5'>react/next Js</h1>

                    <Image src="/images/asterisk.svg" alt='asterick' width={30} height={30} className='mt-5 mr-5' />

                    <h1 className='text-center font-light text-4xl mt-3 md:text-[80px] capitalize mr-5'>nodejs/express</h1>

                    <Image src="/images/asterisk.svg" alt='asterick' width={30} height={30} className='mt-5 mr-5' />

                    <h1 className='text-center font-light text-4xl mt-3 md:text-[80px] capitalize mr-5'>php/laravel</h1>

                    <Image src="/images/asterisk.svg" alt='asterick' width={30} height={30} className='mt-5 mr-5' />
                </Marquee>
            </div>
        </>
    )
}

export default AboutMe
