import React from 'react'

const Info = () => {
  return (
    <div className='flex flex-col items-center justify-center lg:flex-row gap-8 md:w-[71.5%] p-[2rem] sm:p-10 mx-auto'>
        <div className='size-[13rem] sm:h-[17rem] sm:w-[17rem] overflow-hidden lg:size-[23rem] rounded-md border bg-white p-[0.1rem]'>
            <img src="../../img/about_me.jpg" alt="" className='h-full w-full rounded-md'/>
        </div>
        <ul className='flex flex-col font-kanit_m gap-3 md:gap-4 sm:items-center lg:items-start text-white'>
            <li className='text-xl sm:text-2xl lg:text-[1.7rem] text-center sm:text-center lg:text-left'>📍 Philippines</li>
            <li className='text-xl sm:text-2xl lg:text-[1.7rem] text-center sm:text-center lg:text-left'>💪 My strengths are eager to learn and resilient</li>
            <li className='text-xl sm:text-2xl lg:text-[1.7rem] text-center sm:text-center lg:text-left'>😋 My favorite food is any type of Adobo</li>
        </ul>
    </div>
  )
}

export default Info