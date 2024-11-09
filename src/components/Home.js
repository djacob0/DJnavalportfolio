import React from 'react';
import { Link } from 'react-scroll';
import { HiArrowNarrowRight } from 'react-icons/hi';
import me from '../assets/images/menobg1.png';

const Home = () => (
  <div name="home" className="w-full h-screen bg-[#0000CD]">
    <div className="max-w-[1000px] mx-auto px-8 flex flex-col sm:flex-row justify-between items-center h-full">
      <div className="sm:w-1/2 text-center sm:text-left">
        <p className="text-gray-300 text-lg sm:text-xl">Hi, my name is</p>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-300 leading-tight">
          Daniel Jacob Naval,
        </h1>
        <h2 className="text-xl sm:text-4xl md:text-5xl font-bold text-gray-300 pt-2 leading-tight">
          Glad to see you!
        </h2>
        <p className="text-gray-300 py-4 text-sm sm:text-base max-w-[700px] mx-auto sm:mx-0">
          I am a full stack software developer and aspiring guitarist! With a passion for both
          technology and music, I bring creativity and problem-solving skills to every project.
          I can help you build a product, feature, or website tailored to your needs.
          My strong debugging skills allow me to identify and resolve issues efficiently,
          helping to maintain a smooth user experience.
        </p>
        <div className="flex justify-center sm:justify-start">
          <Link to="work" smooth duration={500} className="w-40 text-gray-300 group border-2 px-6 py-3 my-2 flex items-center hover:bg-gray-500 hover:border-gray-500">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </Link>
        </div>
      </div>
      <div className="sm:w-1/2 flex justify-center sm:justify-end mt-6 sm:mt-0">
        <img
          src={me}
          alt="Profile"
          className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-cover rounded-full border-4 border-gray-500"
        />
      </div>
    </div>
  </div>
);

export default Home;
