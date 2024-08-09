import React from 'react'
import { PageTitle, baseImgUrl } from '../helpers/functions-general'
import Banner from './banner/Banner'
import Header from '../partials/Header'
import { FaArrowDown } from "react-icons/fa";
import About from './about/About'
import Projects from './projects/Projects';
import Contact from './contact/Contact';
import Footer from '../partials/Footer';

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
      <Header scrollToElement={scrollToElement}/>

      <section className='banner relative py-4 sm:py-0' id='banner'>
        <Banner/>
        <button type='button' className='absolute bottom-1 lg:bottom-3 left-[49%] hidden md:block' onClick={() => scrollToElement("about")}>
          <FaArrowDown className='text-white size-9'/>
        </button>
      </section>

      <section className='about relative pt-[2rem] sm:pt-0' id='about'>
        <About/>
        <button type='button' className='absolute bottom-4 left-[49%] hidden md:block' onClick={() => scrollToElement("projects")}>
          <FaArrowDown className='text-white size-9'/>
        </button>
      </section>

      <section className='projects relative pt-[2rem] sm:pt-0 border-b border-line' id='projects'>
        <Projects/>
      </section>

      <section className='contact relative pt-[2rem] sm:pt-0' id='contact'>
        <Contact/>
      </section>

      <Footer/>

    </main>
  )
}

export default Home