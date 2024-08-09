import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='text-white py-7 flex justify-center items-center'>
      <h1 className='font-kanit_m text-lg md:text-xl'>2024 - This portfolio is an <span className='gradient-text'><Link to={'https://github.com/daryllvillanueva/portfolio'} target='_blank'>open source</Link></span></h1>
    </footer>
  )
}

export default Footer