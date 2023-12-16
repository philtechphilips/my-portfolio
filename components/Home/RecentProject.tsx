import React from 'react'

const RecentProject = () => {
    return (
        <div className='w-full bg-black px-5 md:px-10 pb-20'>
            <h5 className='text-white py-10 uppercase text-lg'>/Recent Projects</h5>
            <div className='md:border-t border-t-[#A3A3A3]  flex items-center justify-between py-5 md:py-16'>
                <h1 className='text-[#A3A3A3] text-4xl md:text-[100px] font-semibold md:font-medium'>REYTS</h1>
                <p className="text-white text-xs md:text-medium uppercase">Node/Express</p>
            </div>

            <div className='md:border-t border-t-[#A3A3A3] flex items-center justify-between  py-5 md:py-16'>
                <h1 className='text-[#A3A3A3] text-4xl md:text-[100px] font-semibold md:font-medium'>FIRACARD</h1>
                <p className="text-white text-xs md:text-medium uppercase">Node/Express</p>
            </div>

            <div className='md:border-t border-t-[#A3A3A3] flex items-center justify-between  py-5 md:py-16'>
                <h1 className='text-[#A3A3A3] text-4xl md:text-[100px] font-semibold md:font-medium'>RITA DATA</h1>
                <p className="text-white text-xs md:text-medium">HTML/CSS/JAVASCRIPT</p>
            </div>

            <div className='md:border-t md:border-b border-b-[#A3A3A3] flex items-center justify-between  border-t-[#A3A3A3] py-5 md:py-16'>
                <h1 className='text-[#A3A3A3] text-4xl md:text-[100px] font-semibold md:font-medium'>ABC</h1>
                <p className="text-white text-xs md:text-medium">REACT/PHP/LARAVEL</p>
            </div>
        </div>
    )
}

export default RecentProject
