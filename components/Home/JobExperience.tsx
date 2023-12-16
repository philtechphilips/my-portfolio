import React from 'react'

const JobExperience = () => {
    return (
        <div className='w-full bg-black px-5 md:px-10 md:py-20'>
            <div className='md:border-b border-b-[#A3A3A3] w-full pt-10 md:pt-0 md:pb-10'>
                <div className='flex flex-col md:flex-row justify-between gap-5 md:gap-0 pb-20'>
                    <div className='w-full md:w-1/4'>
                        <h5 className='text-white uppercase text-lg'>/job experience</h5>
                    </div>
                    <div className='w-full md:w-3/4 flex flex-col gap-7'>
                        <div className='flex items-center justify-between'>
                            <p className='uppercase text-white text-2xl  md:text-4xl font-sans'>Xttreme developers</p>
                            <h5 className='text-white text-xs md:text-sm text-right uppercase'>June 2020 - Present</h5>
                        </div>

                        <div className='flex items-center justify-between'>
                            <p className='uppercase text-white text-2xl  md:text-4xl font-sans'>philtech</p>
                            <h5 className='text-white text-xs md:text-sm text-right uppercase'>April 2020 - Oct 2022</h5>
                        </div>

                        <div className='flex items-center justify-between'>
                            <p className='uppercase text-white text-2xl  md:text-4xl font-sans'>loban genius school</p>
                            <h5 className='text-white text-xs md:text-sm text-right uppercase'>Oct 2021 - Jun 2022</h5>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobExperience
