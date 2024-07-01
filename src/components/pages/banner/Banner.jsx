import React from 'react'
import { baseImgUrl } from '../../helpers/functions-general'

const Banner = () => {
  return (
    <main className='sm:h-screen animate-fade-in'>
      <div className='h-full w-full max-w-[90rem] flex flex-col lg:flex-row justify-evenly items-center gap-5 lg:gap-0 px-3'>
        <div className='flex flex-col gap-3 items-center w-full text-center lg:text-start lg:items-start lg:w-auto order-2 lg:order-1'>
          <div>
            <h2 className='text-2xl sm:text-4xl text-white/90 font-semibold text-center lg:text-left font-kanit_m'>Hello, I'm </h2>
            <h1 className='block text-4xl sm:text-5xl md:text-6xl gradient-text font-semibold font-kanit_m'>Daryll Villanueva!</h1>
          </div>
          <p className='text-lg sm:text-xl max-w-[30rem] font-medium text-white/80 tracking-wider text-center lg:text-left font-kanit_m'>
            My passion lies in crafting websites that not only captivate users but also provide seamless functionality. I'm a fresh grad striving to break into the tech industry, where I can gain knowledge and make an impact.
          </p>
        </div>
        <div className='h-[18rem] w-[18rem] overflow-hidden lg:h-[26rem] lg:w-[26rem] p-2 bg-gray-200 rounded-full hover:shadow-custom order-1 lg:order-2 mt-20 lg:mt-0'>
          <img src={`${baseImgUrl}/about_pic.png`} alt="profile" loading="lazy" className='object-cover object-center w-full h-full rounded-full'/>
        </div>
      </div>
    </main>
  )
}

export default Banner