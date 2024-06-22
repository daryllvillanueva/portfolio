import React from 'react'
import { PageTitle, baseImgUrl } from '../helpers/functions-general'
import Banner from './banner/Banner'
import Header from '../partials/Header'
import Tools from './Tools'
import { FaArrowDown } from "react-icons/fa";

const Home = () => {
  PageTitle("Daryll - Portfolio");
  // scroll to element
  function scrollToElement(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Element with id ${id} not found`);
    }
  }
  return (
    <main className='bg-black'>
      <Header/>
      <section className='banner relative' id='banner'>
        <Banner/>
        <button type='button' className='absolute bottom-3 left-1/2 hidden lg:block' onClick={() => scrollToElement("tools")}>
          <FaArrowDown className='text-white size-9'/>
        </button>
      </section>
      <section className='tools relative' id='tools'>
        <Tools scrollToElement={scrollToElement}/>
        <button type='button' className='absolute bottom-5 left-1/2 hidden lg:block' onClick={() => scrollToElement("projects")}>
          <FaArrowDown className='text-white size-9'/>
        </button>
      </section>
    
    </main>
  )
}

export default Home