import React, { useEffect, useRef, useState } from 'react'
import { baseImgUrl } from '../../helpers/functions-general'
import { Link } from 'react-router-dom'
import { FaGithubSquare, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";

const Banner = () => {
  return (
    <main className='h-screen animate-fade-in relative'>
      <div className='h-full w-full max-w-[90rem] flex flex-col lg:flex-row justify-evenly items-center gap-5 lg:gap-0 px-3'>
        <div className='flex flex-col gap-3 items-center w-full text-center lg:text-start lg:items-start lg:w-auto order-2 lg:order-1'>
          <h1 className='font-kanit_sb'>
            <span className='text-2xl sm:text-4xl text-white/90'>Hello, I'm </span>
            <span className='block text-4xl sm:text-5xl md:text-6xl gradient-text'>Daryll Villanueva!</span>
          </h1>
          <p className='text-lg sm:text-xl max-w-[30rem] font-kanit_m text-white/80 tracking-wider text-center lg:text-left'>
            My passion lies in crafting websites that not only captivate users but also provide seamless functionality. I'm a fresh grad that strive to create digital experiences that are both visually appealing and highly efficient.
          </p>
        </div>
        <div className='h-[18rem] w-[18rem] overflow-hidden lg:h-[26rem] lg:w-[26rem] p-2 bg-gray-200 rounded-full hover:shadow-custom order-1 lg:order-2 mt-20 lg:mt-0'>
          <img src={`${baseImgUrl}/about_pic.png`} alt="profile" loading="lazy" className='object-cover object-center w-full h-full rounded-full'/>
        </div>
      </div>
      <button className='absolute top-[93%] left-[48%] text-white hidden lg:block'>
        <FaArrowDown className='size-9'/>
      </button>
    </main>
  )
}

export default Banner