import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const BestProjects = () => {
  return (
    <div>
      <section className='py-6'>
        <div className="container mx-auto px-2">
          <div className="header flex items-center justify-between py-4">
            <h1 className='text-3xl font-serif font-semibold text-slate-800'>Best Projects</h1>
            <Link to={'/total-projects'} className='text-lg underline text-blue-700'>see all </Link>
          </div>
          <div className="total_items grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="single_project">
              <div class="card card-compact bg-slate-200 shadow-xl rounded-md ">
                <a href='https://max-shop-99fc1.web.app/' target="_blank"><figure><img className='w-full h-auto' src="https://i.ibb.co/dDWf72s/manu.png" alt="Shoes" /></figure></a>
              </div>
            </div>
            <div className="single_project">
              <div class="card card-compact bg-slate-200 shadow-xl rounded-md">
                <a href='https://ar-photography-f8773.firebaseapp.com/' target="_blank"><figure><img className='w-full h-auto' src="https://i.ibb.co/Mg2ZWF9/screencapture-ar-photography-f8773-firebaseapp-2022-06-12-00-27-32.png" alt="Shoes" /></figure></a>
              </div>
            </div>
            <div className="single_project">
              <div class="card card-compact bg-slate-200 shadow-xl rounded-md">
                <a href='https://doctors-portal-56d81.web.app/' target="_blank"><figure><img className='w-full h-auto' src="https://i.ibb.co/tXTkdCf/screencapture-doctors-portal-56d81-web-app-2022-06-12-00-43-31.png" alt="Shoes" /></figure></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BestProjects;