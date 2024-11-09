import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Express from '../assets/express.png';
import NodeJS from '../assets/node1.png';
import Ruby from '../assets/mongo.png';
import SQL from '../assets/sql1.png';
import Webix from '../assets/webix2.png';
import Docker from '../assets/docker.png';
import Git from '../assets/images.png';
import Source from '../assets/tailwind.png';

const Skills = () => (
  <div name="skills" className="w-full h-screen bg-[#0000CD] text-gray-300">
    <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
      <div>
        <p className="text-4xl font-bold inline border-b-4 border-gray-600 ">Skills</p>
        <p className="py-4">The following are my tech stacks</p>
      </div>

      <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={NodeJS} alt="HTML icon" />
          <p className="my-4">Node JS</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
          <p className="my-4">Javascript</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={Ruby} alt="HTML icon" />
          <p className="my-4">Ruby</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={SQL} alt="HTML icon" />
          <p className="my-4">MS SQL Server</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
          <p className="my-4">HTML</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
          <p className="my-4">CSS</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={Express} alt="HTML icon" />
          <p className="my-4">Express JS</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={Webix} alt="HTML icon" />
          <p className="my-4">Webix</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
          <p className="my-4">React</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={Docker} alt="HTML icon" />
          <p className="my-4">Docker</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={Source} alt="HTML icon" />
          <p className="my-4">Tailwind</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={Git} alt="HTML icon" />
          <p className="my-4">GIT</p>
        </div>
      </div>
    </div>
  </div>
);

export default Skills;
