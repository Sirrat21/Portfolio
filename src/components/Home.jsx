import React from 'react';
import HeroImage from "../assert/bg-banner.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll"; 

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row"> 
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">I'm Sirrat Rashid</h2>
          <p className="text-gray-400 mt-4">Welcome to my portfolio showcasing my work and skills.</p>
          <Link
            to="portfolio"  
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
          >
            Portfolio
            <span className="group-hover:rotate-90 duration-300">
              <MdKeyboardArrowRight size={25} className='ml-1' />
            </span>
          </Link>
        </div>
        <div className="md:w-1/2 lg:w-1/3 mt-5 md:mt-0 md:ml-auto"> 
          <img src={HeroImage} alt='my profile' className="rounded-2xl w-full" /> 
        </div>
      </div>
    </div>
  );
};

export default Home;

