import React from 'react'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'
import Socials from './partials/Socials'

const About = () => {
  return (
    <>
      <div className='bg-primary w-screen h-20 md:h-48 relative'>
        <div className='w-full h-20 md:h-48 absolute bg-card bottom-0 rounded-tl-[100%]'></div>
      </div>
      <h1 className='text-4xl lg:text-5xl text-primary pb-10 font-kodchasan_B'>About</h1>
      <div className='flex flex-col md:flex-row justify-center gap-10 w-full lg:gap-20'>
        <img src="/img/about_pic.png" alt="profile" className='h-auto max-w-[350px] md:w-full w-full self-center rounded-t-[40%] rounded-tr-[10%] rounded-b-[10%] border border-border object-cover size-96'/>
        <div className="shrink-0 bg-border w-[2px] hidden lg:flex h-[400px] self-center"></div>
        <div className='flex flex-col gap-5 text-sm w-full md:w-1/2'>
            <div>
                <h1 className='text-xl lg:text-2xl font-kodchasan_M text-primary'>Daryll Villanueva</h1>
                <div className="shrink-0 w-24 lg:w-36 h-[3px] rounded-full bg-primary"></div>
            </div>
            <p className='text-muted-foreground'>Hello there! Welcome to my Portfolio</p>
            <p className='text-muted-foreground'>I'm currently self-studying about web development. I'm motivated to develop websites that are not only functional but also user-friendly and visually appealing.</p>
            <p className='text-muted-foreground'>My goal is to improve my technical skills and widen my knowledge of both frond-end and back-end development, and to stay updated with latest industry trends.</p>
            <p className='text-muted-foreground'>I'm eager to start my career in the IT industry in any position. I am trainable and quick to understand new concepts."</p>
            
            <div className='mt-auto flex flex-col sm:flex-row md:flex-col xl:flex-row items-center sm:justify-between w-full gap-5'>
              <div className='flex items-center gap-5 w-full text-primary sm:w-auto font-kodchasan_M'>
                <Link>
                  <Button variant="default" size="lg">Contact</Button>
                </Link>
                <Link target='_blank' to="/Villanueva_Daryll.pdf">
                  <Button variant="outline" size="lg">View CV</Button>
                </Link>
              </div>
              <div className='flex items-center'>
                <Socials/>
              </div>
            </div>
        </div>
      </div>
      <div className='bg-muted h-20 md:h-44 relative w-screen'>
        <div className='bg-card absolute h-20 w-full md:h-44 shadow-sm top-0 rounded-br-[100%]'>
        </div>
      </div>
    </>
  )
}

export default About