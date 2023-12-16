import React from 'react'

const RecentProject = () => {
    return (
        <div className='w-full px-5 pb-5'>
            <h5 className='py-10 uppercase text-lg font-[Gt]'>/Recent Projects</h5>
            <div className='bg-black w-full h-[.5px]'></div>
            <div className='flex items-center justify-between py-5 md:py-16'>
                <h1 className=' text-4xl md:text-[100px] font-semibold md:font-medium'>REYTS</h1>
                <p className="text-xs md:text-medium uppercase font-[Gt]">Node/Express</p>
            </div>
            <div className='bg-black w-full h-[.5px]'></div>
            <div className='  flex items-center justify-between  py-5 md:py-16'>
                <h1 className=' text-4xl md:text-[100px] font-semibold md:font-medium'>FIRACARD</h1>
                <p className="text-xs md:text-medium uppercase font-[Gt]">Node/Express</p>
            </div>
            <div className='bg-black w-full h-[.5px]'></div>
            <div className='flex items-center justify-between py-5 md:py-16'>
                <h1 className=' text-4xl md:text-[100px] font-semibold md:font-medium'>RITA DATA</h1>
                <p className="text-xs md:text-medium font-[Gt]">HTML/CSS/JAVASCRIPT</p>
            </div>
            <div className='bg-black w-full h-[.5px]'></div>
            <div className='flex items-center justify-between py-5 md:py-16'>
                <h1 className=' text-4xl md:text-[100px] font-semibold md:font-medium'>ABC</h1>
                <p className="text-xs md:text-medium font-[Gt]">REACT/PHP/LARAVEL</p>
            </div>
            <div className='bg-black w-full h-[.5px]'></div>
        </div>
    )
}

export default RecentProject
