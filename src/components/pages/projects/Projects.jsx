import React from 'react'
import ProjectSlider from './ProjectSlider'
import { baseImgUrl } from '../../helpers/functions-general'
import { RiHtml5Line, RiTailwindCssFill } from 'react-icons/ri'
import { IoLogoJavascript } from 'react-icons/io5'
import { FaGitAlt, FaGithubSquare, FaSass } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <div className='py-16 text-white'>
      <h1 className='text-5xl lg:text-7xl font-kanit_m font-semibold text-center gradient-text'>Projects</h1>
      <div className='flex flex-wrap justify-center my-10 p-10 gap-5'>
        <div className='w-[25rem] h-[30rem] rounded-lg'>
          <img src={`${baseImgUrl}/homely-main.jpg`} alt="" className="rounded-lg h-full"/>
        </div>
        <div className='w-[25rem] h-[30rem] rounded-lg'>
          <img src={`${baseImgUrl}/car-main.jpg`} alt="" className="rounded-lg h-full"/>
        </div>
        <div className='w-[25rem] h-[30rem] rounded-lg'>
          <img src={`${baseImgUrl}/homely-main.jpg`} alt="" className="rounded-lg h-full"/>
        </div>
        <div className='w-[25rem] h-[30rem] rounded-lg'>
          <img src={`${baseImgUrl}/car-main.jpg`} alt="" className="rounded-lg h-full"/>
        </div>
      </div>
    </div>
  )
}

export default Projects