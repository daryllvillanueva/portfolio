import React from 'react'
import Info from './Info';
import Tools from './Tools';
import { RiArrowDropDownLine } from "react-icons/ri";

const About = () => {
  const [menuTab, setMenuTab] = React.useState('about_me');
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const handleChangeMenu = (tab) => {
    setMenuTab(tab);
    setDropdownOpen(false);
  }
  return (
    <div className='sm:h-screen sm:py-16 px-5'>
        <div className='md:hidden relative font-kanit_m'>
            <button className="flex justify-between items-center px-5 h-full w-1/2 bg-white relative mx-auto p-2 rounded-md z-[10]" onClick={() => setDropdownOpen(!dropdownOpen)}>
                <h1 className='text-lg sm:text-2xl'>{menuTab === 'about_me' ? 'About Me' : 'Tech Tools'}</h1>
                <RiArrowDropDownLine className={`size-10 ${dropdownOpen ? 'rotate-180 transition-all duration-300' : 'transition-all duration-300'}`}/>
            </button>
            {dropdownOpen && (
                <div className="absolute left-1/4 w-1/2 mx-auto mt-2 bg-white rounded-md shadow-lg overflow-hidden z-[999] transition-all duration-500">
                    <button
                        onClick={() => handleChangeMenu('about_me')}
                        className={`block text-lg sm:text-2xl py-2 px-4 w-full text-left ${
                        menuTab === 'about_me' ? 'bg-gray-200' : 'bg-transparent'
                        }`}
                    >
                        About Me
                    </button>
                    <button
                        onClick={() => handleChangeMenu('tech_tools')}
                        className={`block text-lg sm:text-2xl py-2 px-4 w-full text-left ${
                        menuTab === 'tech_tools' ? 'bg-gray-200' : 'bg-transparent'
                        }`}
                    >
                        Tech Tools
                    </button>
                </div>
            )}
        </div>
        <div className='gap-3 justify-evenly mb-[1rem] lg:mb-[3rem] relative hidden md:flex'>
            <button className={`text-5xl lg:text-7xl font-kanit_m font-semibold ${menuTab === 'about_me' ? "gradient-text" : "text-[#828aa0]"}`} onClick={() => handleChangeMenu('about_me')}>About Me</button>
            <button className={`text-5xl lg:text-7xl font-kanit_m font-semibold ${menuTab === 'tech_tools' ? "gradient-text" : "text-[#828aa0]"}`} onClick={() => handleChangeMenu('tech_tools')}>Tech Tools</button>
            <span className='bg-[#828aa0] absolute h-0 md:h-[47px] lg:h-[70px] w-[3px] bottom-0 left-1/2'></span>
        </div>

        <div>
            <div className={`${menuTab === 'about_me' ? 'opacity-100' : 'opacity-0'}`}>
                {menuTab === 'about_me' && <Info/> }
            </div>
            <div className={`${menuTab === 'tech_tools' ? 'opacity-100' : 'opacity-0'}`}>
                { menuTab === 'tech_tools' && <Tools/>}
            </div>
        </div>
    </div>
  )
}

export default About






