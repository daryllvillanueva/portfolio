import React from 'react'
import { baseImgUrl } from '../../helpers/functions-general'
import { RiHtml5Line, RiTailwindCssFill } from 'react-icons/ri'
import { IoLogoJavascript } from 'react-icons/io5'
import { FaGitAlt, FaGithubSquare, FaSass, FaWordpress } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <div className='sm:py-16 px-5'>
      <h1 className='text-5xl lg:text-7xl font-kanit_m font-semibold text-center gradient-text'>Portfolio</h1>
      <div className='flex flex-wrap justify-center my-5 sm:my-10 p-6 md:p-7 gap-7'>
        <div className='h-[19rem] w-[17rem] sm:w-[25rem] sm:h-[27rem] rounded-lg relative overflow-hidden group border'>
          <img src={`${baseImgUrl}/homely-main.jpg`} alt="" className="rounded-lg w-full h-full group-hover:blur-md"/>
          <div className='absolute top-0 bg-gradient-to-b from-black via-black to-gray-900 h-full w-full opacity-70'></div>
          <div className='absolute top-0 left-0 h-full w-full pt-6 px-5 text-white'>
            <div className='h-[14.3rem] sm:h-[19rem]'>
              <h1 className='font-kanit_m font-semibold text-3xl sm:text-5xl'>Homely</h1>
              <ul className="flex gap-2 mt-2">
                <li><RiHtml5Line className="text-xl sm:text-2xl"/></li>
                <li><RiTailwindCssFill className="text-xl sm:text-2xl"/></li>
                <li><IoLogoJavascript className="text-xl sm:text-2xl"/></li>
                <li><FaGitAlt className="text-xl sm:text-2xl"/></li>
                <li><FaGithubSquare className="text-xl sm:text-2xl"/></li>
                <li><FaWordpress className="text-xl sm:text-2xl"/></li>
              </ul>
              <p className='text-gray-300 mt-3 text-base sm:text-[1.2rem] font-semibold font-kanit_m'>Welcome to Homely - Your Home Awaits!</p>
              <p className='text-gray-300 text-base mt-1 tracking-wide xs:line-clamp-4 sm:line-clamp-[8]'>Finding your perfect home should feel as comfortable as stepping into your own living room. Our user-friendly platform offers a comprehensive selection of real estate options, whether you’re looking to buy, rent, or explore properties. Discover a diverse array of houses for sale, tailored to fit every lifestyle and budget.</p>
            </div>
            <div className='flex gap-5 mt-3 sm:mt-8 justify-center'>
              <Link to={"https://wp-homely.netlify.app"} target='_blank' className='border py-1 px-2 text-xs sm:text-xl hover:bg-white/10 rounded-md'>Live Demo</Link>
              <Link to={"https://github.com/RonK-0/tw-homely"} target='_blank' className='border py-1 px-2 text-xs sm:text-xl hover:bg-white/10 rounded-md'>Source Code</Link>
            </div>
          </div>
        </div>
        <div className='h-[19rem] w-[17rem] sm:w-[25rem] sm:h-[27rem] rounded-lg relative overflow-hidden group border'>
          <img src={`${baseImgUrl}/car-main.jpg`} alt="" className="rounded-lg w-full h-full group-hover:blur-md"/>
          <div className='absolute top-0 bg-gradient-to-b from-black via-black to-gray-900 h-full w-full opacity-70'></div>
          <div className='absolute top-0 left-0 h-full w-full pt-6 px-5 text-white'>
            <div className='h-[14.3rem] sm:h-[19rem]'>
              <h1 className='font-kanit_m font-semibold text-3xl sm:text-5xl'>CarService Shop</h1>
              <ul className="flex gap-2 mt-2">
                <li><RiHtml5Line className="text-2xl"/></li>
                <li><FaSass className="text-2xl"/></li>
                <li><IoLogoJavascript className="text-2xl"/></li>
              </ul>
              <p className='text-gray-300 mt-3 text-base sm:text-[1.2rem] font-semibold font-kanit_m'>Your One-Stop Car Repair  and Parts Shop</p>
              <p className='text-gray-300 text-base mt-1 tracking-wide xs:line-clamp-4 sm:line-clamp-[8]'>We understand that regular maintenance is the key to extending the life of your vehicle and ensuring safety on the road. Our experienced technicians provide high-quality service with a commitment to excellence. With transparent pricing and a customer-first approach, we make car care convenient and stress-free.</p>
            </div>
            <div className='flex gap-5 mt-3 sm:mt-8 justify-center'>
              <Link to={"https://daryllvillanueva.github.io/car_sass/"} target='_blank' className='border py-1 px-2 text-xs sm:text-xl hover:bg-white/10 rounded-md'>Live Demo</Link>
              <Link to={"https://github.com/daryllvillanueva/car_sass"} target='_blank' className='border py-1 px-2 text-xs sm:text-xl hover:bg-white/10 rounded-md'>Source Code</Link>
            </div>
          </div>
        </div>      

      </div>
    </div>
  )
}

export default Projects