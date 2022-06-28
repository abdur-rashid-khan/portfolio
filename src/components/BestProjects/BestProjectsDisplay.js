import React from 'react';
import { Link } from "react-router-dom";

const BestProjectsDisplay = ({projectsData}) => {
  return (
    <div id="single_project" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="1000">
      <div id='img_div' className="card card-compact bg-slate-200 shadow-xl rounded-md ">
        <img className='w-full h-auto' src={projectsData.image} alt="Shoes" />
      </div>
      <div id="projects_des" className='rounded-lg'>
        <h1 className='capitalize text-xl text-slate-800 font-serif font-semibold py-2 p-2'>{projectsData.projectsName}</h1>
        <p className='text-slate-600 capitalize p-2 text-sm'>{projectsData.projectsDescription}</p>
        <a target="_blank" href={projectsData.projectsLiveLink} className="bg-blue-600 mt-2 hover:bg-blue-800 p-2 px-6 text-white  uppercase font-serif rounded-t text-sm w-full inline-block text-center">Live Demo</a>
      </div>
    </div>
  );
};

export default BestProjectsDisplay;