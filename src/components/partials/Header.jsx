import React, { useState } from 'react'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'
import { FaGithub } from "react-icons/fa6";
import { Button } from '../ui/button';
import { HiOutlineMenu } from "react-icons/hi";
import { BsSun } from "react-icons/bs";

const Header = ({scrollToElement, isToggled, handleToggled}) => {

  return (
    <header className='fixed top-0 left-0 w-screen z-20 h-14 flex items-center lg:justify-between border-b bg-card padding'>
        <button className='font-kodchasan_B text-primary text-3xl hidden lg:flex' onClick={() => scrollToElement("home")}>Daryll</button>
        <nav className='lg:hidden flex items-center justify-between w-full'>
          <button className='font-kodchasan_M text-primary text-2xl' onClick={() => scrollToElement("home")}>Daryll</button>
          <div className='flex items-center gap-2 sm:gap-3 font-kodchasan_R'>
            <Button variant="default" size="md" className="text-sm">Contact</Button>
            <Link target='_blank' to="https://github.com/daryllvillanueva">
              <Button variant="ghost" size="icon"><FaGithub className='text-primary header'/></Button>
            </Link>
            <Button variant="ghost" size="icon" onClick={handleToggled}>
              {isToggled ? (
                <BsSun className='text-primary header'/>
              ) : (
                <svg viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg" className='header'>
                  <path d="M 31.2110 14.9453 C 31.4922 14.9453 31.6563 14.7578 31.7031 14.5000 C 32.4297 10.6094 32.4063 10.5156 36.4610 9.7187 C 36.7422 9.6719 36.9063 9.5312 36.9063 9.2500 C 36.9063 8.9453 36.7422 8.8047 36.4610 8.7578 C 32.4063 7.9375 32.4297 7.8672 31.7031 3.9765 C 31.6563 3.7187 31.4922 3.5312 31.2110 3.5312 C 30.9297 3.5312 30.7891 3.7187 30.7422 3.9765 C 29.9922 7.8672 30.0391 7.9375 25.9610 8.7578 C 25.7031 8.8047 25.5157 8.9453 25.5157 9.2500 C 25.5157 9.5312 25.7031 9.6719 25.9610 9.7187 C 30.0626 10.5156 29.9922 10.6094 30.7422 14.5000 C 30.7891 14.7578 30.9297 14.9453 31.2110 14.9453 Z M 42.4375 30.7891 C 42.8594 30.7891 43.1641 30.4844 43.2110 30.0391 C 43.9844 23.7578 44.2891 23.5703 50.6406 22.5860 C 51.1561 22.4922 51.4609 22.2578 51.4609 21.7891 C 51.4609 21.3438 51.1561 21.0625 50.7342 20.9922 C 44.3360 19.7734 43.9844 19.8203 43.2110 13.5391 C 43.1641 13.0938 42.8594 12.7891 42.4375 12.7891 C 41.9922 12.7891 41.6875 13.0938 41.6407 13.5156 C 40.8204 19.8672 40.6094 20.0781 34.1172 20.9922 C 33.6953 21.0391 33.3907 21.3438 33.3907 21.7891 C 33.3907 22.2344 33.6953 22.4922 34.1172 22.5860 C 40.6094 23.7812 40.8438 23.8047 41.6407 30.0860 C 41.6875 30.4844 41.9922 30.7891 42.4375 30.7891 Z M 24.7891 52.4688 C 33.2735 52.4688 40.0469 48.1797 43.2813 40.9609 C 43.6797 40.0938 43.6094 39.3438 43.1875 38.9453 C 42.8126 38.5938 42.1563 38.5469 41.4297 38.8047 C 39.5313 39.5547 37.3047 39.9297 34.7500 39.9297 C 24.1094 39.9297 17.3126 33.2734 17.3126 22.8906 C 17.3126 19.9375 17.8750 17.1016 18.6016 15.6485 C 19.0000 14.8281 19.0000 14.1250 18.6485 13.6797 C 18.2266 13.2109 17.4766 13.1406 16.5626 13.4922 C 9.3672 16.3281 4.5391 23.9687 4.5391 32.5469 C 4.5391 43.9609 12.9531 52.4688 24.7891 52.4688 Z" className='fill-current text-primary'/>
                </svg> 
              )}   
            </Button>
            <Button variant="ghost" size="icon"><HiOutlineMenu className='text-primary header'/></Button>
          </div>
        </nav>
        <ul className='hidden lg:flex items-center gap-8 text-sm text-muted-foreground font-kodchasan_R'>
          <Navigation scrollToElement={scrollToElement}/>
          <div className='flex items-center gap-2'>
            <Button variant="default" size="md" className="text-sm">Contact</Button>
            <Link target='_blank' to="https://github.com/daryllvillanueva">
              <Button variant="ghost" size="icon"><FaGithub className='text-primary header'/></Button>
            </Link>
            <Button variant="ghost" size="icon" onClick={handleToggled}>
              {isToggled ? (
                <BsSun className='text-primary header'/>
              ) : (
                <svg viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg" className='header'>
                  <path d="M 31.2110 14.9453 C 31.4922 14.9453 31.6563 14.7578 31.7031 14.5000 C 32.4297 10.6094 32.4063 10.5156 36.4610 9.7187 C 36.7422 9.6719 36.9063 9.5312 36.9063 9.2500 C 36.9063 8.9453 36.7422 8.8047 36.4610 8.7578 C 32.4063 7.9375 32.4297 7.8672 31.7031 3.9765 C 31.6563 3.7187 31.4922 3.5312 31.2110 3.5312 C 30.9297 3.5312 30.7891 3.7187 30.7422 3.9765 C 29.9922 7.8672 30.0391 7.9375 25.9610 8.7578 C 25.7031 8.8047 25.5157 8.9453 25.5157 9.2500 C 25.5157 9.5312 25.7031 9.6719 25.9610 9.7187 C 30.0626 10.5156 29.9922 10.6094 30.7422 14.5000 C 30.7891 14.7578 30.9297 14.9453 31.2110 14.9453 Z M 42.4375 30.7891 C 42.8594 30.7891 43.1641 30.4844 43.2110 30.0391 C 43.9844 23.7578 44.2891 23.5703 50.6406 22.5860 C 51.1561 22.4922 51.4609 22.2578 51.4609 21.7891 C 51.4609 21.3438 51.1561 21.0625 50.7342 20.9922 C 44.3360 19.7734 43.9844 19.8203 43.2110 13.5391 C 43.1641 13.0938 42.8594 12.7891 42.4375 12.7891 C 41.9922 12.7891 41.6875 13.0938 41.6407 13.5156 C 40.8204 19.8672 40.6094 20.0781 34.1172 20.9922 C 33.6953 21.0391 33.3907 21.3438 33.3907 21.7891 C 33.3907 22.2344 33.6953 22.4922 34.1172 22.5860 C 40.6094 23.7812 40.8438 23.8047 41.6407 30.0860 C 41.6875 30.4844 41.9922 30.7891 42.4375 30.7891 Z M 24.7891 52.4688 C 33.2735 52.4688 40.0469 48.1797 43.2813 40.9609 C 43.6797 40.0938 43.6094 39.3438 43.1875 38.9453 C 42.8126 38.5938 42.1563 38.5469 41.4297 38.8047 C 39.5313 39.5547 37.3047 39.9297 34.7500 39.9297 C 24.1094 39.9297 17.3126 33.2734 17.3126 22.8906 C 17.3126 19.9375 17.8750 17.1016 18.6016 15.6485 C 19.0000 14.8281 19.0000 14.1250 18.6485 13.6797 C 18.2266 13.2109 17.4766 13.1406 16.5626 13.4922 C 9.3672 16.3281 4.5391 23.9687 4.5391 32.5469 C 4.5391 43.9609 12.9531 52.4688 24.7891 52.4688 Z" className='fill-current text-primary'/>
                </svg> 
              )}   
            </Button>
          </div>
        </ul>
    </header>
  )
}

export default Header