import React from 'react'

const Info = () => {
  return (
    <div className='flex flex-col items-center justify-center lg:flex-row gap-8 md:w-[71.5%] p-[2rem] sm:p-10 mx-auto'>
        <div className='size-[13rem] sm:h-[17rem] sm:w-[17rem] overflow-hidden lg:h-[23rem] lg:w-[23rem] rounded-md border bg-white p-[0.1rem]'>
            <img src="../../img/about_me.jpg" alt="" loading='lazy' className='h-full w-full rounded-md'/>
        </div>
        <ul className='flex flex-col font-kanit_m gap-3 md:gap-4 sm:items-center lg:items-start text-white lg:w-[30rem]'>
            <li className='text-xl sm:text-2xl lg:text-[1.7rem]'>📍 Philippines</li>
            <li className='text-xl sm:text-2xl lg:text-[1.7rem]'>📖 BS in Information Technology
                <span className='block ml-0 md:ml-8 text-xl sm:text-2xl lg:text-[1.7rem]'>De La Salle Lipa (2020 - 2024)</span>
            </li>
            <li className='text-xl sm:text-2xl lg:text-[1.7rem]'>🎮 I love playing Dota 2 and FPS games</li>
            <li className='text-xl sm:text-2xl lg:text-[1.7rem]'>😣 My weakness is communication</li>
            <li className='text-xl sm:text-2xl lg:text-[1.7rem]'>💪 My strengths are eager to learn and resilient</li>
        </ul>
    </div>
  )
}

export default Info