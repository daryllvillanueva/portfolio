import React from 'react'
import { baseImgUrl } from '../../helpers/functions-general'

const Banner = () => {
  return (
    <main className='h-[93vh] sm:h-screen animate-fade-in' >
      <div className='h-full w-full max-w-[90rem] flex flex-col lg:flex-row justify-evenly items-center px-3'>
        <div className='flex flex-col gap-4 items-center w-full text-center lg:text-start lg:items-start lg:w-auto order-2 lg:order-1'>
          <div>
            <h2 className='text-2xl sm:text-4xl text-white/90 font-semibold text-center lg:text-left font-kanit_m'>Hello, I'm </h2>
            <h1 className='block text-4xl sm:text-5xl md:text-6xl gradient-text font-semibold font-kanit_m'>Daryll Villanueva!</h1>
          </div>
          <p className='text-lg sm:text-xl max-w-[30rem] font-medium text-white/80 tracking-wider text-center lg:text-left font-kanit_m'>
            As a fresh grad, I’m here to help you with tech support and web development. Let’s tackle your challenges together and develop websites with seamless functionality!
            {/* I am an aspiring front-end developer with a passion for creating websites that captivate users while providing seamless functionality. */}
          </p>
        </div>
        <div className='size-[14rem] sm:size-[20rem] overflow-hidden lg:size-[23rem] p-2 bg-gray-200 rounded-full hover:shadow-custom order-1 lg:order-2 mt-20 lg:mt-0'>
          <img src={`${baseImgUrl}/about_pic.png`} alt="profile" loading="lazy" className='object-cover object-center w-full h-full rounded-full'/>
        </div>
      </div>
    </main>
  )
}

export default Banner