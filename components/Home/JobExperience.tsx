import React from 'react'

const JobExperience = () => {
    return (
        <div className='w-full px-5 pt-12'>
            <div className='w-full pt-10 md:pt-0 md:pb-10'>
                <div className='flex flex-col md:flex-row justify-between gap-5 md:gap-0 pb-20'>
                    <div className='w-full md:w-1/4'>
                        <h5 className='uppercase text-lg font-[Gt]' data-aos="fade-left"
                            data-aos-easing="ease-in-out" data-aos-duration="800">/job experience</h5>
                    </div>
                    <div className='w-full md:w-3/4 flex flex-col gap-7'>
                        <div className='flex items-center justify-between'>
                            <p className='uppercase  text-2xl  md:text-4xl font-sans' data-aos="fade-up"
                                data-aos-easing="ease-in-out" data-aos-delay="100" data-aos-duration="800">Xttreme developers</p>
                            <h5 className=' text-xs md:text-sm text-right uppercase font-[Gt]' data-aos="fade-left"
                                data-aos-easing="ease-in-out" data-aos-delay="200" data-aos-duration="800">June 2020 - Present</h5>
                        </div>

                        <div className='flex items-center justify-between'>
                            <p className='uppercase  text-2xl  md:text-4xl font-sans' data-aos="fade-up"
                                data-aos-easing="ease-in-out" data-aos-duration="800">philtech</p>
                            <h5 className=' text-xs md:text-sm text-right uppercase font-[Gt]' data-aos="fade-left"
                                data-aos-easing="ease-in-out" data-aos-delay="200" data-aos-duration="800">April 2020 - Oct 2022</h5>
                        </div>

                        <div className='flex items-center justify-between'>
                            <p className='uppercase  text-2xl  md:text-4xl font-sans' data-aos="fade-up"
                                data-aos-easing="ease-in-out" data-aos-duration="800">loban genius school</p>
                            <h5 className=' text-xs md:text-sm text-right uppercase font-[Gt]' data-aos="fade-left"
                                data-aos-easing="ease-in-out" data-aos-delay="200" data-aos-duration="800">Oct 2021 - Jun 2022</h5>
                        </div>

                    </div>
                </div>
            </div>
            <div className='bg-black w-full h-[.5px]' data-aos="fade-up"
                data-aos-easing="ease-in-out" data-aos-delay="200" data-aos-duration="800"></div>
        </div>
    )
}

export default JobExperience
