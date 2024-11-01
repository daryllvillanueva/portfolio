import React from 'react';

const Navigation = ({ scrollToElement, activeItem, setActiveItem }) => {
  return (
    <>
      <li>
        <button 
          className={activeItem === 'projects' ? 'text-primary font-kodchasan_B' : ''} 
          onClick={() => { scrollToElement('projects'); setActiveItem('projects'); }}>
          Projects
        </button>
      </li>
      <li>
        <button 
          className={activeItem === 'about' ? 'text-primary font-kodchasan_B' : ''} 
          onClick={() => { scrollToElement('about'); setActiveItem('about'); }}>
          About
        </button>
      </li>
      <li>
        <button 
          className={activeItem === 'service' ? 'text-primary font-kodchasan_B' : ''} 
          onClick={() => { scrollToElement('service'); setActiveItem('service'); }}>
          Service
        </button>
      </li>
    </>
  );
}

export default Navigation;
