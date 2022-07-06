import React from 'react';
import img from '../../img/about.png'
// import Footer from '../Footer/Footer';
import './aboutMe.css'

const AboutMe = () => {
  return (
    <>
      <section>
        <div className="container mx-auto px-4 py-20">
          <div className="">
            <div className="content">
              <div className="" id='aboutMe'>
                <div className="img_container py-4 w-full h-auto sm:w-96 sm:h-96 m-auto">
                  <img className='rounded w-full h-auto' src={img} alt="" />
                </div>
                <div className="about_content py-4">
                  <div className="">
                    <h1 className='capitalize text-base sm:text-xl md:text-2xl font-serif font-semibold text-slate-700 pt-6'> Hi , I am abdur rashid khan . </h1>
                    <p className='py-6 text-slate-700'>I Have Been Designing And Developing Website For More Then 1.5 Years.It Will Be Responsive, Mobile-Friendly.If You Need To Build A Full Complete Website With More Functions And Unque Look For Your Service/Business/Protfolio, Please Contact Me...</p>
                    <hr className='bg-slate-300 my-6' style={{ width: '100%', height: '3px' }} />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center justify-between">
                      <ul>
                        <li><p>Name : <span className='text-slate-800 font-semibold'>Abdur Rashid Khan</span></p></li>
                        <li><p>Age : <span className='text-slate-800 font-semibold'>20 Year</span></p></li>
                        <li><p>Address :<span className='text-slate-800 font-semibold'> Rajbari , Dhaka , Bangladesh</span> </p></li>
                        <li><p> Study : <span className='text-slate-800 font-semibold'> Rajbari Govt. College</span></p></li>
                      </ul>
                      <ul>
                        <li><p>Phone : <span className='text-slate-800 font-semibold'> +8801636164178 </span></p></li>
                        <li><p>Email : <span className='text-slate-800 font-semibold'> rashidkhanbd57@gmail.com </span> </p></li>
                        <li><p>Nationality : <span className='text-slate-800 font-semibold'> Bangladeshi </span> </p></li>
                        <li><p>Language : <span className='text-slate-800 font-semibold'> Bangla , English</span></p></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
};

export default AboutMe;