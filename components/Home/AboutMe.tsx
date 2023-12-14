import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

const AboutMe = () => {
    return (
        <>
            <div className="bg-black w-full px-5 md:px-10 h-screen flex gap-0 flex-col justify-center">
                <div className='w-fit'>
                    <h1 className='text-[#A3A3A3] text-[130px] font-medium '>SOFTWARE</h1>
                    <h1 className='text-[#A3A3A3] text-[130px] font-medium ml-40 -mt-20'>ENGINEER</h1>
                    <p className='text-white text-right -mt-8'>BASED IN LAGOS</p>
                </div>
            </div>

            <div className='px-10 bg-black py-5 w-full pb-20'>
               <div className='flex gap-3 px-10 bg-white py-1 items-center'>
               <p>LANGUAGES/FRAMEWORKS/DATABASE:</p>
               <Marquee className='flex gap-3'>
               <p className='mx-2'>JAVASCRIPT</p>
                <p className='mx-2'>TYPESCRIPT</p>
                <p className='mx-2'>REACT</p>
                <p className='mx-2'>NEXT JS</p>
                <p className='mx-2'>PHP/LARAVEL</p>
                <p className='mx-2'>TAILWINDCSS</p>
                <p className='mx-2'>NODEJS/EXPRESS</p>
                <p className='mx-2'>BOOTSTRAP</p>
                <p className='mx-2'>MUI</p>
                <p className='mx-2'>SCSS</p>
                <p className='mx-2'>SQL</p>
                <p className='mx-2'>MYSQL</p>
                <p className='mx-2'>MONGODB</p>
               </Marquee>
               </div>
            </div>

            <div className='w-full bg-black px-5 md:px-28 flex pb-20 gap-20 items-center'>
                <Image src="/images/picture.png" alt="my image" width="300" height="385" />
                <div>
                    <h1 className='text-[28px] text-[#A3A3A3] font-bold'>ABOUT ME</h1>
                    <p className='text-white mb-6'>I'm Isola Pelumi, a passionate software engineer with 3 years of hands-on experience. My skills span PHP, Laravel, JavaScript, TypeScript, React.js, Node.js, and more. I love turning ideas into reality by seamlessly merging front-end and back-end engineering solutions. I've tackled exciting projects, including enhancing React, NodeJs and Express applications. I'm committed to continuous learning, collaboration, and innovation, aiming to specialize in emerging technologies for impactful solutions.</p>
                    <a href='#' className='text-white border border-white px-6 py-2 rounded'>Get In Touch</a>
                </div>
            </div>
        </>
    )
}

export default AboutMe
