import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaTimesSolid } from "react-icons/lia";
import { FaEnvelope, FaFilePdf, FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const Header = () => {
  const [showNav, setShowNav] = React.useState(false)
  const handleShowNav = () => {
    setShowNav(!showNav);
  };
  
  return (
    <>
      <header className='header fixed w-full z-40 transition-all duration-300 shadow-sm bg-transparent border-b md:border-gray-500'>
        <div className='h_container px-10 py-3 max-w-[85rem] mx-auto w-full'>
          <div className="flex justify-between items-center">
            <Link to={"/"}>
            <h1 className='font-semibold text-2xl relative bg-gradient-to-r from-[#7c75f4] to-[#76a9f8] bg-clip-text text-transparent'>
              DARYLL
              <span className='absolute text-[0.8rem] top-[0.35rem] -right-2 bg-gradient-to-r from-[#7c75f4] to-[#76a9f8] bg-clip-text text-transparent'>●</span>
            </h1>
            </Link>

            <nav className='desktop_nav hidden md:block'>
              <ul className='flex items-center gap-5 text-lg px-3 text-white font-kanit_m'>
                <Navigation/>
              </ul>
            </nav>

            <ul className='flex gap-5 items-center text-white'>
                <li><Link to={"#"} target='_blank'><FaGithubSquare className='size-7 md:size-7 hover:text-white/65'/></Link></li>
                <li><Link><FaLinkedin className='size-7 md:size-7 hover:text-white/65'/></Link></li>
                <li><Link><FaEnvelope className='size-7 md:size-7 hover:text-white/65'/></Link></li>
                {/* <li><Link to='/CV-VILLANUEVA.pdf' target='_blank'><FaFilePdf className='size-6 md:size-7 hover:text-white/65'/></Link></li> */}
            </ul>

            <div className='mobile_nav md:hidden'>
              <ul className={`${showNav ? 'right-0' : '-right-full'} flex flex-col pt-12 gap-3 justify-center overflow-hidden
              w-[10rem] h-[30vh] items-center absolute top-0 bg-white/50 rounded-bl-xl transition-all duration-300`}>
                <Navigation/>
              </ul>
            </div>
            
            <button className='burger z-50 block md:hidden' type="button" onClick={handleShowNav}>
                {showNav ? <LiaTimesSolid className='text-white size-7 md:size-8'/> : <RxHamburgerMenu className='text-white size-7 md:size-8'/>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header