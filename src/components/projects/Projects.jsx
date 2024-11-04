import React from 'react'
import Projects_Carousel from './Projects_Carousel';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <>
      <div className='bg-background w-screen h-20 md:h-48 relative'>
        <div className='w-full h-20 md:h-48 absolute bg-primary bottom-0 rounded-tr-[50%] rounded-tl-[50%]'></div>
      </div>
      <h1 className='text-4xl lg:text-5xl text-secondary pb-10 font-kodchasan_B'>Projects</h1>
      <Projects_Carousel/>
      <Link target='_blank' to="/projects">
        <Button variant="secondary" size="lg" className="text-primary text-base md:text-lg mt-5 font-kodchasan_M">View All Projects</Button>
      </Link>
    </>
  )
}

export default Projects
