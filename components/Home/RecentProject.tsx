import Link from 'next/link'
import React from 'react';


const RecentProject = () => {
    return (
        <div className='w-full px-5 pb-5'>
            <h5 className='py-10 uppercase text-lg font-[Gt]'>/Recent Projects</h5>
            <div className='bg-black w-full h-[.5px]'></div>
            <div className='flex items-center justify-between py-5 md:py-16'>
                <h1 className=' text-4xl md:text-[100px] font-semibold md:font-medium'>REYTS</h1>
                <Link href="/reyts" className="text-xs md:text-medium uppercase font-[Gt]">View Project<i className="ri-arrow-right-s-line"></i></Link>
            </div>
            <div className='bg-black w-full h-[.5px]'></div>
            <div className='  flex items-center justify-between  py-5 md:py-16'>
                <h1 className=' text-4xl md:text-[100px] font-semibold md:font-medium'>FIRACARD</h1>
                <Link href="/firacard" className="text-xs md:text-medium uppercase font-[Gt]">View Project<i className="ri-arrow-right-s-line"></i></Link>
            </div>
            <div className='bg-black w-full h-[.5px]'></div>
            <div className='flex items-center justify-between py-5 md:py-16'>
                <h1 className=' text-4xl md:text-[100px] font-semibold md:font-medium'>RITA DATA</h1>
                <Link href="/rita" className="text-xs md:text-medium uppercase font-[Gt]">View Project<i className="ri-arrow-right-s-line"></i></Link>
            </div>
            <div className='bg-black w-full h-[.5px]'></div>
            <div className='flex items-center justify-between py-5 md:py-16'>
                <h1 className=' text-4xl md:text-[100px] font-semibold md:font-medium'>ABC</h1>
                <Link href="/agape" className="text-xs md:text-medium uppercase font-[Gt]">View Project<i className="ri-arrow-right-s-line"></i></Link>
            </div>
            <div className='bg-black w-full h-[.5px]'></div>
        </div>
    )
}

export default RecentProject
