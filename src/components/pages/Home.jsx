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
      <section className='banner relative py-4 sm:py-0' id='banner'>
        <Banner/>
        <button type='button' className='absolute bottom-0 lg:bottom-3 left-[49%] hidden md:block' onClick={() => scrollToElement("tools")}>
          <FaArrowDown className='text-white size-9'/>
        </button>
      </section>
      <section className='tools relative pt-[2rem] sm:pt-0' id='tools'>
        <Tools scrollToElement={scrollToElement}/>
        <button type='button' className='absolute bottom-4 left-[49%] hidden md:block' onClick={() => scrollToElement("projects")}>
          <FaArrowDown className='text-white size-9'/>
        </button>
      </section>
    
    </main>
  )
}

export default Home