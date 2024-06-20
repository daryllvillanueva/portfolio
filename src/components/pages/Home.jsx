import React from 'react'
import { PageTitle, baseImgUrl } from '../helpers/functions-general'
import Banner from './banner/Banner'
import Header from '../partials/Header'
import Tools from './Tools'

const Home = () => {
  PageTitle("Daryll - Portfolio");
  return (
    <div className='bg-black'>
      <Header/>
      <Banner/>
      <Tools/>
    </div>
  )
}

export default Home