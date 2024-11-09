import React from 'react';
import { Link } from 'react-scroll';
import { HiArrowNarrowRight } from 'react-icons/hi';
import me from '../assets/images/menobg1.png';

const Home = () => (
  <div name="home" className="w-full h-screen bg-[#0000CD]">
    <div className="max-w-[1000px] mx-auto px-8 flex flex-col sm:flex-row justify-between items-center h-full">
      <div className="sm:w-1/2">
        <p className="text-gray-300">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-gray-300">
          Daniel Jacob Naval,
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-gray-300 pt-2">
          Glad to see you!
        </h2>
        <p className="text-gray-300 py-4 max-w-[700px] group-hover:text-blue-500 transition-all duration-500">
          I am a full stack software developer and aspiring Guitarist!.
          With a passion for both technology and music.
          I bring creativity and problem-solving skills to every project.
          I can help you build a product, feature, or website tailored to your needs.
          In addition to development, I excel in analyzing and investigating issues,
          My strong debugging skills allow me to identify and resolve bugs efficiently.
          Helping to maintain a smooth user experience.
        </p>
        <div>
          <Link to="work" smooth duration={500} className="w-40 text-gray-300 group border-2 px-6 py-3 my-2 flex items-center hover:bg-gray-500 hover:border-gray-500">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </Link>
        </div>
      </div>
      <div className="sm:w-1/2 flex justify-center sm:justify-end pb-4">
        <img
          src={me}
          alt="Profile"
          className="w-[400px] h-[400px] object-cover rounded-full border-20 border-black-5000"
        />
      </div>
    </div>
  </div>
);

export default Home;
