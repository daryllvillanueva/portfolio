import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaTimesSolid } from "react-icons/lia";
import { FaEnvelope, FaFilePdf, FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const Header = ({scrollToElement}) => {
  const [showNav, setShowNav] = React.useState(false)
  const handleShowNav = () => {
    setShowNav(!showNav);
  };
  
  return (
    <>
      <header className='header fixed w-full z-40 transition-all duration-300 shadow-sm bg-[#212529] border-b md:border-gray-500'>
        <div className='h_container px-10 py-3 max-w-[85rem] mx-auto w-full'>
          <div className="flex justify-between items-center">
            <Link to={"/"}>
            <h1 className='font-semibold text-xl md:text-2xl relative bg-gradient-to-r from-[#7c75f4] to-[#76a9f8] bg-clip-text text-transparent'>
              DARYLL
              <span className='hidden md:block absolute text-[0.8rem] top-[0.35rem] -right-2 bg-gradient-to-r from-[#7c75f4] to-[#76a9f8] bg-clip-text text-transparent'>●</span>
            </h1>
            </Link>

            <nav className='desktop_nav hidden md:block'>
              <ul className='flex items-center gap-5 text-lg px-3 text-white font-kanit_m'>
                <Navigation scrollToElement={scrollToElement}/>
              </ul>
            </nav>

            <ul className='flex gap-5 items-center text-white'>
                <li><Link to={"https://github.com/daryllvillanueva"} target='_blank'><FaGithubSquare className='size-6 md:size-7 hover:text-gray-400'/></Link></li>
                <li><Link to={"https://www.linkedin.com/in/daryll-villanueva/"} target='_blank'><FaLinkedin className='size-6 md:size-7 hover:text-gray-400'/></Link></li>
                <li><Link to={"mailto:darylljvillanueva@gmail.com"} target='_blank'><FaEnvelope className='size-6 md:size-7 hover:text-gray-400'/></Link></li>
                {/* <li><Link to='/CV-VILLANUEVA.pdf' target='_blank'><FaFilePdf className='size-6 md:size-7 hover:text-white/65'/></Link></li> */}
            </ul>
  
            <button className='burger z-50 block md:hidden' type="button" onClick={handleShowNav}>
                {showNav ? <LiaTimesSolid className='text-white size-6 md:size-8'/> : <RxHamburgerMenu className='text-white size-6 md:size-8'/>}
            </button>
          </div>
          <div className='mobile_nav block md:hidden'>
            <ul className={`${showNav ? 'right-0 xs:w-[47%] sm:w-[35%]' : '-right-full'} flex flex-col pt-12 gap-10 justify-center overflow-hidden
            max-w-full h-screen items-center absolute top-0 bg-[#161a1d] transition-all duration-300`}>
              <Navigation scrollToElement={scrollToElement}/>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header