import React from 'react'
import ProjectSlider from './ProjectSlider'

const Projects = () => {
  return (
    <div className='py-16 text-white'>
      <h1 className='text-5xl lg:text-7xl font-kanit_m font-semibold text-center'>Projects</h1>
      <div className='flex flex-wrap my-10 w-full lg:w-[72%] mx-auto p-5'>
        <ProjectSlider/>
      </div>
    </div>
  )
}

export default Projects