import React from 'react';

const Navigation = ({ scrollToElement, activeItem, setActiveItem, onClose }) => {
  const handleClick = (item) => {
    setActiveItem(item);
    scrollToElement(item);
    onClose();
  };

  return (
    <>
      <li className='lg:hidden'>
        <button 
          className={activeItem === 'banner' ? 'text-primary font-kodchasan_M' : ''} 
          onClick={() => handleClick('banner')}>
          Home
        </button>
      </li>
      <li>
        <button 
          className={activeItem === 'projects' ? 'text-primary font-kodchasan_M' : ''} 
          onClick={() => handleClick('projects')}>
          Projects
        </button>
      </li>
      <li>
        <button 
          className={activeItem === 'about' ? 'text-primary font-kodchasan_M' : ''} 
          onClick={() => handleClick('about')}>
          About
        </button>
      </li>
      <li>
        <button 
          className={activeItem === 'service' ? 'text-primary font-kodchasan_M' : ''} 
          onClick={() => handleClick('service')}>
          Service
        </button>
      </li>
    </>
  );
}

export default Navigation;
