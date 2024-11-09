import React from 'react';
import login from '../assets/login.jpg';
import signup from '../assets/signup.jpg';
import guitar1 from '../assets/guitar1.jpg';
import guitar2 from '../assets/guitar2.jpg';

const Work = () => (
  <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0000CD]">
    <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-gray-600">
          Projects
        </p>
        <p className="py-6">Check out some of my recent work</p>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

        {/* Guitar Project 1 */}
        <div
          style={{ backgroundImage: `url(${guitar1})` }}
          className="shadow-lg shadow-[#040c16] group container rounded-md flex flex-col justify-end items-center mx-auto content-div bg-cover bg-center"
        >
          <div className="opacity-0 group-hover:opacity-100 p-4 bg-black bg-opacity-75 rounded-md text-center">
            <span className="text-2xl font-bold text-white tracking-wider">
              DJ Custom Guitar Shop
            </span>
            <p className="text-sm mt-2">Inspired by RJ Guitars in PH, an e-commerce web made with JavaScript, React, HTML, CSS, and tested with Jest.</p>
            <div className="pt-4">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/djacob0/DJcustomguitar"
              >
                <button type="button" className="text-center rounded-lg px-4 py-2 bg-white text-gray-700 font-bold text-lg">
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Guitar Project 2 */}
        <div
          style={{ backgroundImage: `url(${guitar2})` }}
          className="shadow-lg shadow-[#040c16] group container rounded-md flex flex-col justify-end items-center mx-auto content-div bg-cover bg-center"
        >
          <div className="opacity-0 group-hover:opacity-100 p-4 bg-black bg-opacity-75 rounded-md text-center">
            <span className="text-2xl font-bold text-white tracking-wider">
              DJ Custom Guitar Shop
            </span>
            <p className="text-sm mt-2">Inspired by RJ Guitars in PH, an e-commerce web made with JavaScript, React, HTML, CSS, and tested with Jest.</p>
            <div className="pt-4">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/djacob0/DJcustomguitar"
              >
                <button type="button" className="text-center rounded-lg px-4 py-2 bg-white text-gray-700 font-bold text-lg">
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Expense Tracker Project 1 */}
        <div
          style={{ backgroundImage: `url(${login})` }}
          className="shadow-lg shadow-[#040c16] group container rounded-md flex flex-col justify-end items-center mx-auto content-div bg-cover bg-center"
        >
          <div className="opacity-0 group-hover:opacity-100 p-4 bg-black bg-opacity-75 rounded-md text-center">
            <span className="text-2xl font-bold text-white tracking-wider">
              Expense Tracker with Login and Signup
            </span>
            <p className="text-sm mt-2">Built with Node.js, JavaScript, React, HTML, CSS, Babel, and Vite to help users budget expenses with ease.</p>
            <div className="pt-4">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/djacob0/DJexpensetracker"
              >
                <button type="button" className="text-center rounded-lg px-4 py-2 bg-white text-gray-700 font-bold text-lg">
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Expense Tracker Project 2 */}
        <div
          style={{ backgroundImage: `url(${signup})` }}
          className="shadow-lg shadow-[#040c16] group container rounded-md flex flex-col justify-end items-center mx-auto content-div bg-cover bg-center"
        >
          <div className="opacity-0 group-hover:opacity-100 p-4 bg-black bg-opacity-75 rounded-md text-center">
            <span className="text-2xl font-bold text-white tracking-wider">
              Expense Tracker with Login and Signup
            </span>
            <p className="text-sm mt-2">Built with Node.js, JavaScript, React, HTML, CSS, Babel, and Vite to help users budget expenses with ease.</p>
            <div className="pt-4">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/djacob0/DJexpensetracker"
              >
                <button type="button" className="text-center rounded-lg px-4 py-2 bg-white text-gray-700 font-bold text-lg">
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Work;
