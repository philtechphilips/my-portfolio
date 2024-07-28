import Image from 'next/image';
import React, { useEffect } from 'react'
import Marquee from 'react-fast-marquee';
import 'remixicon/fonts/remixicon.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutMe = ({ changeCursor }: any) => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <div className="w-full px-5  md:h-screen flex gap-0 flex-col md:-mt-4 justify-center">
                <div className='bg-black w-full h-[.5px]'></div>
                <div className='w-full'>
                    <h1 onMouseEnter={() => changeCursor(true)} onMouseLeave={() => changeCursor(false)} className='text-black text-center text-[60px] md:text-[180px] font-semibold md:font-medium' data-aos="fade-left"
                        data-aos-easing="ease-in-out" data-aos-duration="800">SOFTWARE</h1>
                    <div className='bg-black w-full h-[.5px]' data-aos="fade-up"
                        data-aos-easing="ease-in-out" data-aos-duration="800"></div>
                    <div className='flex items-center justify-between'>
                        <Image src="/images/asterisk.svg" alt='asterick' width={15} height={15} className='md:hidden asterick' data-aos="fade-right"
                            data-aos-easing="ease-in-out" data-aos-duration="800" />
                        <Image src="/images/asterisk.svg" alt='asterick' width={50} height={50} className='hidden md:block asterick' data-aos="fade-right"
                            data-aos-easing="ease-in-out" data-aos-duration="800" />
                        <h1 className='text-black text-center text-[60px] md:text-[180px] font-semibold md:font-medium' data-aos="fade-up"
                            data-aos-easing="ease-in-out" data-aos-delay="200" data-aos-duration="800">
                            ENGINEER
                        </h1>
                        <Image src="/images/asterisk.svg" alt='asterick' width={50} height={50} className='hidden md:block asterick' data-aos="fade-right"
                            data-aos-easing="ease-in-out" data-aos-duration="800" />
                        <Image src="/images/asterisk.svg" alt='asterick' width={15} height={15} className='md:hidden asterick' data-aos="fade-right"
                            data-aos-easing="ease-in-out" data-aos-duration="800" />
                    </div>
                    <div className='bg-black w-full h-[.5px]' data-aos="fade-up"
                        data-aos-easing="ease-in-out" data-aos-duration="800"></div>
                </div>
            </div>

            <div className='w-full px-5'>
                <div className='w-full pt-10 py-10 md:py-0'>
                    <div className='flex flex-col md:flex-row justify-between md:py-20'>
                        <div className='w-full md:w-1/3'>
                            <h5 className='text-black uppercase text-center md:text-left text-lg font-[Gt]' data-aos="fade-right"
                                data-aos-easing="ease-in-out">/About Me</h5>
                        </div>
                        <div className='w-full md:w-2/3 flex flex-col gap-7'>
                            <p className='uppercase text-center md:text-left text-black md:text-4xl leading-8 md:leading-[50px] font-sans' data-aos="fade-left"
                                data-aos-easing="ease-in-out" data-aos-duration="800">
                                a security inclined software engineer with over 4 years of hands-on experience.
                                My skills span PHP, Laravel, JavaScript, TypeScript, React.js, Node.js, and more. I love turning ideas into reality by seamlessly merging front-end and back-end engineering solutions.
                            </p>
                            <div className='flex items-center justify-center md:justify-start'>
                            <Image src="/images/picture.png" alt='my Image' width="300" height={400} />
                            </div>
                            <p className='uppercase text-black text-center md:text-left md:text-4xl leading-8 md:leading-[50px] font-sans' data-aos="fade-up"
                                data-aos-easing="ease-in-out" data-aos-delay="100" data-aos-duration="800">
                                I've tackled exciting projects, including enhancing React, NodeJs and Express applications.
                            </p>

                            <p className='uppercase text-black text-center md:text-left md:text-4xl leading-8 md:leading-[50px] font-sans' data-aos="fade-up"
                                data-aos-easing="ease-in-out" data-aos-delay="200" data-aos-duration="800">
                                I'm committed to continuous learning, collaboration, and innovation, aiming to specialize in emerging technologies for impactful solutions.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='bg-black w-full h-[.5px]'></div>
            </div>

            <div className='w-full px-5'>
                <div className='w-full mt-3'>
                    <h5 className='text-black uppercase text-lg font-[Gt]' data-aos="fade-right"
                        data-aos-easing="ease-in-out">/Skillset</h5>
                </div>

                <div className='w-full flex gap-4 flex-wrap items-center justify-center mt-3'>
                    <div className='px-4 py-2 border border-[#d3d2d2]'>
                    <p className='font-sans'>Creative</p>
                    </div>

                    <div className='px-4 py-2 border border-[#d3d2d2]'>
                    <p>Teamplayer</p>
                    </div>

                    <div className='px-4 py-2 border border-[#d3d2d2]'>
                    <p>Critical Thinker</p>
                    </div>

                    <div className='px-4 py-2 border border-[#d3d2d2]'>
                    <p>HTML/CSS/JAVASCRIPT</p>
                    </div>

                    <div className='px-4 py-2 border border-[#d3d2d2]'>
                    <p>REACT/NEXT JS</p>
                    </div>

                    <div className='px-4 py-2 border border-[#d3d2d2]'>
                    <p>NODE JS/EXPRESS</p>
                    </div>

                    <div className='px-4 py-2 border border-[#d3d2d2]'>
                    <p>FIGMA</p>
                    </div>

                    <div className='px-4 py-2 border border-[#d3d2d2]'>
                    <p>NODE JS/EXPRESS</p>
                    </div>

                    <div className='px-4 py-2 border border-[#d3d2d2]'>
                    <p>PHP/LARAVEL</p>
                    </div>

                    <div className='px-4 py-2 border border-[#d3d2d2]'>
                    <p>NEST JS</p>
                    </div>

                    <div className='px-4 py-2 border border-[#d3d2d2]'>
                    <p>MONGO DB/MSSQL/MYSQL</p>
                    </div>

                    <div className='px-4 py-2 border border-[#d3d2d2]'>
                    <p>REDIS/AZURE SERVICE BUS</p>
                    </div>

                    <div className='px-4 py-2 border border-[#d3d2d2]'>
                    <p>TAILWIND/SCSS/MUI</p>
                    </div>

                    <div className='px-4 py-2 border border-[#d3d2d2]'>
                    <p>AZURE REPO/GIT/GITLAB/GITHUB/BIT BUCKET</p>
                    </div>

                    <div className='px-4 py-2 border border-[#d3d2d2]'>
                    <p>BASIC CI/CD</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe
