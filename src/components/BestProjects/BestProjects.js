import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './BestProjects.css'
import BestProjectsDisplay from './BestProjectsDisplay';

const BestProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/projects', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setProjects(data))
  }, [])
  return (
      <section className='py-6' id='project'>
        <div className="container mx-auto px-2">
          <div className="header flex items-center justify-between py-4">
            <h1 className='text-3xl font-serif font-semibold text-slate-800'>Best Projects</h1>
            <Link to={'/total-projects'} className='text-lg underline text-blue-700'>see all </Link>
          </div>
          <div className="total_items grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {
              projects.map(p => <BestProjectsDisplay projectsData={p} key={p._id} />)
            }
          </div>
        </div>
      </section>
  );
};

export default BestProjects;