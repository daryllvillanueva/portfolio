import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiHtml5Line } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { Link } from "react-router-dom";
import { baseImgUrl } from "../../helpers/functions-general";

const ProjectSlider = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  let settings = {
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  return (
    <div className="slider-container overflow-hidden">
      <Slider {...settings} asNavFor={nav2} ref={slider => (sliderRef1 = slider)} >
        <div>
            <div className="grid grid-cols-2 gap-8 border-2 border-gray-500 p-4 rounded-md">
                <div>
                    <img src={`${baseImgUrl}/main-home.jpg`} alt="" className="rounded-lg h-[30rem] mx-auto"/>
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className='text-3xl'>Homely - A Real Estate Website</h1>
                    <p className='text-lg'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel egestas sapien. Aenean  non accumsan sapien. Donec ac efficitur augue. Etiam fermentum nunc augue, vulputate faucibus magna sollicitudin eget. Vestibulum fringilla massa in ipsum rhoncus cursus.
                    </p>
                    <p className="text-xl">Tech Used:</p>
                    <ul className="flex gap-3">
                        <li><RiHtml5Line className="text-3xl"/></li>
                        <li><RiTailwindCssFill className="text-3xl"/></li>
                        <li><IoLogoJavascript className="text-3xl"/></li>
                        <li><FaGitAlt className="text-3xl"/></li>
                        <li><FaGithubSquare className="text-3xl"/></li>
                    </ul>                    
                    <div className="flex gap-3 mt-auto">
                        <Link className="text-2xl w-full border text-center">Live Demo</Link>
                        <Link className="text-2xl w-full border text-center">Source Code</Link>             
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className="grid grid-cols-2 gap-8 border-2 border-gray-500 p-4 rounded-md">
                <div>
                    <img src={`${baseImgUrl}/car.jpg`} alt="" className="rounded-lg h-[30rem] mx-auto"/>
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className='text-3xl'>Car Services Landing Page</h1>
                    <p className='text-lg'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel egestas sapien. Aenean  non accumsan sapien. Donec ac efficitur augue. Etiam fermentum nunc augue, vulputate faucibus magna sollicitudin eget. Vestibulum fringilla massa in ipsum rhoncus cursus.
                    </p>
                    <p className="text-xl">Tech Used:</p>
                    <ul className="flex gap-3">
                        <li><RiHtml5Line className="text-3xl"/></li>
                        <li><FaSass className="text-3xl"/></li>
                        <li><FaGithubSquare className="text-3xl"/></li>
                    </ul>                    
                    <div className="flex gap-3 mt-auto">
                        <Link className="text-2xl w-full border text-center">Live Demo</Link>
                        <Link className="text-2xl w-full border text-center">Source Code</Link>             
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className="grid grid-cols-2 gap-8 border-2 border-gray-500 p-4 rounded-md">
                <div>
                    <img src="https://placehold.co/600x650" alt="" className="rounded-lg h-[30rem] mx-auto"/>
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className='text-3xl'>Lorem ipsum dolor sit amet 3</h1>
                    <p className='text-lg'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel egestas sapien. Aenean  non accumsan sapien. Donec ac efficitur augue. Etiam fermentum nunc augue, vulputate faucibus magna sollicitudin eget. Vestibulum fringilla massa in ipsum rhoncus cursus.
                    </p>
                    <p className="text-xl">Tech Used:</p>
                    {/* <ul className="flex gap-3">
                        <li><RiHtml5Line className="text-3xl"/></li>
                        <li><FaSass className="text-3xl"/></li>
                        <li><FaGithubSquare className="text-3xl"/></li>
                    </ul>                     */}
                    <div className="flex gap-3 mt-auto">
                        <Link className="text-2xl w-full border text-center">Live Demo</Link>
                        <Link className="text-2xl w-full border text-center">Source Code</Link>             
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className="grid grid-cols-2 gap-8 border-2 border-gray-500 p-4 rounded-md">
                <div>
                    <img src="https://placehold.co/600x650" alt="" className="rounded-lg h-[30rem] mx-auto"/>
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className='text-3xl'>Lorem ipsum dolor sit amet 4</h1>
                    <p className='text-lg'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel egestas sapien. Aenean  non accumsan sapien. Donec ac efficitur augue. Etiam fermentum nunc augue, vulputate faucibus magna sollicitudin eget. Vestibulum fringilla massa in ipsum rhoncus cursus.
                    </p>
                    <p className="text-xl">Tech Used:</p>
                    {/* <ul className="flex gap-3">
                        <li><RiHtml5Line className="text-3xl"/></li>
                        <li><FaSass className="text-3xl"/></li>
                        <li><FaGithubSquare className="text-3xl"/></li>
                    </ul>                     */}
                    <div className="flex gap-3 mt-auto">
                        <Link className="text-2xl w-full border text-center">Live Demo</Link>
                        <Link className="text-2xl w-full border text-center">Source Code</Link>             
                    </div>
                </div>
            </div>
        </div>
      </Slider>
      <Slider
        asNavFor={nav1}
        ref={slider => (sliderRef2 = slider)}
        slidesToShow={4}
        swipeToSlide={true}
        focusOnSelect={true}
      className="mt-10 text-center">
        <div className="border border-white rounded-lg overflow-hidden">
          <img src={`${baseImgUrl}/homely-1.jpg`} alt=""/>
        </div>
        <div className="border border-white rounded-lg overflow-hidden h-[8rem]">
          <img src={`${baseImgUrl}/car.jpg`} alt=""/>
        </div>
        <div className="border-2 border-red-600 rounded-lg overflow-hidden">
          <img src="https://placehold.co/600x352" alt=""/>
        </div>
        <div className="border-2 border-red-600 rounded-lg overflow-hidden">
          <img src="https://placehold.co/600x352" alt=""/>
        </div>
      </Slider>
    </div>
  );
}

export default ProjectSlider;
