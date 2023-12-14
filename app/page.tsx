import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-black w-full px-5 md:px-10 h-screen flex gap-0 flex-col justify-center">
      <div className='w-fit'>
      <h1 className='text-[#A3A3A3] text-[130px] font-medium '>SOFTWARE</h1>
      <h1 className='text-[#A3A3A3] text-[130px] font-medium ml-40 -mt-20'>ENGINEER</h1>
      <p className='text-white text-right -mt-8'>BASED IN LAGOS</p>
      </div>
    </div>
  )
}
