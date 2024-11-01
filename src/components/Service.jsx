import React from 'react'

const Service = () => {
  return (
    <div className='flex flex-col items-center lg:h-screen bg-secondary padding lg:justify-center overflow-hidden'>
      <h1 className='text-4xl lg:text-5xl text-primary font-kodchasan_B mt-20'>What I Do</h1>
      <div className='flex w-full items-center flex-col gap-16 md:flex-row mt-16 text-center justify-evenly md:flex-wrap lg:flex-nowrap'>
        <div className='flex flex-col items-center w-full gap-5 sm:w-96 h-full lg:w-full'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="35" height="35">
            <path fill="currentColor" d="M256 0c53 0 96 43 96 96v3.6c0 15.7-12.7 28.4-28.4 28.4H188.4c-15.7 0-28.4-12.7-28.4-28.4V96c0-53 43-96 96-96zM41.4 105.4c12.5-12.5 32.8-12.5 45.3 0l64 64c.7 .7 1.3 1.4 1.9 2.1c14.2-7.3 30.4-11.4 47.5-11.4H312c17.1 0 33.2 4.1 47.5 11.4c.6-.7 1.2-1.4 1.9-2.1l64-64c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-64 64c-.7 .7-1.4 1.3-2.1 1.9c6.2 12 10.1 25.3 11.1 39.5H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H416c0 24.6-5.5 47.8-15.4 68.6c2.2 1.3 4.2 2.9 6 4.8l64 64c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-63.1-63.1c-24.5 21.8-55.8 36.2-90.3 39.6V240c0-8.8-7.2-16-16-16s-16 7.2-16 16V479.2c-34.5-3.4-65.8-17.8-90.3-39.6L86.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l64-64c1.9-1.9 3.9-3.4 6-4.8C101.5 367.8 96 344.6 96 320H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96.3c1.1-14.1 5-27.5 11.1-39.5c-.7-.6-1.4-1.2-2.1-1.9l-64-64c-12.5-12.5-12.5-32.8 0-45.3z" className='fill-current text-primary'></path>
          </svg>
          <h2 className='font-kodchasan_M text-xl text-primary'>Troubleshooting</h2>
          <p className='text-muted-foreground'>I'm eager to assist with identifying and troubleshooting hardware or software issues you encounter</p>
        </div>
        <div className='flex flex-col items-center w-full gap-5 sm:w-96 h-full lg:w-full'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="35" height="35">
            <path fill="currentColor" d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" className='fill-current text-primary'></path>
          </svg>
          <h2 className='font-kodchasan_M text-xl text-primary'>Web Development</h2>
          <p className='text-muted-foreground'>If you need a website for your project or personal brand, Im here to help. Lets collaborate to make your ideas come to life on the web!</p>
        </div>
        <div className='flex flex-col items-center w-full gap-5 sm:w-96 lg:w-full'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="35" height="35">
            <path fill="currentColor" d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" className='fill-current text-primary'></path>
          </svg>
          <h2 className='font-kodchasan_M text-xl text-primary'>Virtual Assistant</h2>
          <p className='text-muted-foreground'>I'm here to help with your tasks. Whether it's managing your calendar, answering emails, or organizing your projects, let's make your day easier together.</p>
        </div>
      </div>
    </div>
  )
}




export default Service

