import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { FaGithub } from 'react-icons/fa6'

const Banner = () => {
  return (
    <>
        <div className='flex flex-col justify-center items-center w-full gap-8 md:gap-12 text-center'>
            <h1 className='font-kodchasan_B text-5xl md:text-5xl lg:text-6xl text-center 2xl:w-4/5 text-primary !leading-relaxed'>Dreaming of a Website? Let Me Make It Happen!</h1>
            <h2 className='text-muted-foreground lg:w-2/3 lg:text-xl'>I am passionate about web development, building engaging and user-friendly websites that boost brands, elevate user experiences, and drive results.</h2>
            <div className='flex items-center justify-center gap-5 font-kodchasan_R'>
                <Button variant="default" size="lg" className="text-sm">Contact</Button>
                <Link target='_blank' to="https://github.com/daryllvillanueva" className='text-primary'>
                    <Button variant="outline" size="lg"><FaGithub className='text-primary' style={{ height: '1.3rem', width: '1.3rem' }} />Github</Button>
                </Link>
            </div>
        </div>
    </>
  )
}

export default Banner