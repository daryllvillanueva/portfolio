import React from 'react'
import Info from './Info';
import Tools from './Tools';

const About = () => {
  const [menuTab, setMenuTab] = React.useState('about_me');
  const handleChangeMenu = (tab) => {
    setMenuTab(tab);
  }
  return (
    <div className='sm:h-screen sm:pt-16 px-5'>
        <div className='flex flex-col md:flex-row gap-7 justify-evenly mb-[1rem] lg:mb-[3rem] relative '>
            <button className={`text-5xl lg:text-7xl font-kanit_m font-semibold ${menuTab === 'about_me' ? "gradient-text" : "text-[#828aa0]"}`} onClick={() => handleChangeMenu('about_me')}>About Me</button>
            <button className={`text-5xl lg:text-7xl font-kanit_m font-semibold ${menuTab === 'tech_tools' ? "gradient-text" : "text-[#828aa0]"}`} onClick={() => handleChangeMenu('tech_tools')}>Tech Tools</button>
            <span className='bg-[#828aa0] absolute hidden md:block md:h-[47px] lg:h-[70px] w-[3px] bottom-0 left-1/2'></span>
            <span className='bg-[#828aa0] absolute xs:h-[14rem] md:hidden lg:hidden w-[3px] -bottom-14 left-1/2 rotate-90'></span>
        </div>

        <div>
            <div className={`${menuTab === 'about_me' ? 'block' : 'hidden'}`}>
                {menuTab === 'about_me' && <Info/> }
            </div>
            <div className={`${menuTab === 'tech_tools' ? 'block' : 'hidden'}`}>
                { menuTab === 'tech_tools' && <Tools/>}
            </div>
        </div>
    </div>
  )
}

export default About






