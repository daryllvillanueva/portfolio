import React, { useEffect } from 'react'
import Header from './partials/Header'
import Banner from './Banner'
import About from './About'
import Projects from './projects/Projects'
import Service from './Service'
import Tools from './Tools'

const Home = () => {
  const [isToggled, setIsToggled] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState('');

  const handleToggled = () => {
    setIsToggled(!isToggled);
  };

  function scrollToElement(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Element with id ${id} not found`);
    }
  }

  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };
  
  const handleScroll = debounce(() => {
    const sections = ['banner', 'projects', 'about', 'service'];
    const scrollY = window.scrollY + window.innerHeight / 2;
  
    const bannerElement = document.getElementById('banner');
    if (bannerElement && scrollY < bannerElement.offsetTop + bannerElement.clientHeight) {
      setActiveItem(''); // Reset active item if in the Banner section
      return; 
    }
  
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, clientHeight } = element;
        if (scrollY >= offsetTop && scrollY < offsetTop + clientHeight) {
          setActiveItem(section);
        }
      }
    });
  }, 50); // Adjust the delay as needed
  
  useEffect(() => {
    const handleScrollDebounced = debounce(handleScroll, 100); // Adjust the debounce timing as necessary
  
    window.addEventListener('scroll', handleScrollDebounced);
    
    return () => {
      window.removeEventListener('scroll', handleScrollDebounced);
    };
  }, []);

  return (
    <div className={`${isToggled ? 'dark' : ''}`} id='home'>
        <Header scrollToElement={scrollToElement} handleToggled={handleToggled} isToggled={isToggled} activeItem={activeItem} setActiveItem={setActiveItem}/>     
        <section id='banner' className='flex flex-col gap-6 padding py-28 md:pt-36 lg:h-screen lg:py-0 lg:pt-0 lg:justify-center bg-background'>
          <Banner/>
        </section>
        <section id='projects' className='padding flex flex-col items-center gap-12 overflow-hidden pb-16 bg-primary'>
          <Projects/>
        </section>
        <section id='about' className='padding flex flex-col items-center gap-12 overflow-hidden bg-card'>
          <About/>
        </section>
        <section id='service'>
          <Service/>
          <Tools/>
        </section>
    </div>
  )
}

export default Home