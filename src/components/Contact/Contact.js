import React from 'react';
import './Contact.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useForm } from "react-hook-form";
import fb from '../../img/facebook.svg'
import whatsApp from '../../img/whatsapp (2).svg'
import telegram from '../../img/telegram5.svg'
import skype from '../../img/skype.svg'
const Contact = () => {
  const { register, formState: { errors } } = useForm();
  return (
    <section className='container mx-auto py-20 px-4' id='contact'>
      <div className="mt-10 sm:mt-0" id='contactElement'>
        <div className="bg-white py-6 rounded px-4 shadow-2xl" data-aos="fade-up" data-aos-easing="linear"data-aos-duration="1000">
          <div className="text-start">
            <h1 className='text-lg sm:text-lg md:text-2xl lg:text-3xl text-slate-800 font-serif'>Contact Information</h1>
            <p className='py-4 text-slate-700 font-serif'  >Are you a full-stack developer at MERN Stack
              And looking for a front-end developer? Then contact me</p>
          </div>
          <div className="">
            <ul>
              <li className='py-1'><FontAwesomeIcon className='text-slate-700 font-bold pr-4 text-sm sm:text-lg' icon={faPhone} /> <span className='text-slate-700 text-sx sm:text-lg'> +8801636164178</span></li>
              <li className='py-1'><FontAwesomeIcon className='text-slate-700 font-bold pr-4 text-sm sm:text-lg' icon={faEnvelope} /> <span className='text-slate-700 text-sx sm:text-lg'>abdurrashidkhan10@gmail.com</span></li>
              <li className='py-1'><FontAwesomeIcon className='text-slate-700 font-bold pr-4 text-sm sm:text-lg' icon={faLocationDot} /> <span className='text-slate-700 text-sx sm:text-lg'>Rajbari , Dhaka , Bangladesh</span></li>
            </ul>
          </div>
          <div className="socialContactIcon py-4">
            <ul>
              <li className='inline-block py-2'><Link to=""><span className='w-9 h-9 p-2 ml-2 block rounded-full hover:bg-slate-200' style={{ border: '1px solid #333' }}> <img className="w-full h-full" src={fb} alt="facebookIcon" /> </span></Link></li>
              <li className='inline-block py-2'><Link to=""><span className='w-9 h-9 p-2 ml-2 block rounded-full hover:bg-slate-200' style={{ border: '1px solid #333' }}> <img className="w-full h-full" src={whatsApp} alt="whatsApp" /> </span></Link></li>
              <li className='inline-block py-2'><Link to=""><span className='w-9 h-9 p-2 ml-2 block rounded-full hover:bg-slate-200' style={{ border: '1px solid #333' }}> <img className="w-full h-full" src={telegram} alt="telegram" /> </span></Link></li>
              <li className='inline-block py-2'><Link to=""><span className='w-9 h-9 p-2 ml-2 block rounded-full hover:bg-slate-200' style={{ border: '1px solid #333' }}> <img className="w-full h-full" src={skype} alt="telegram" /> </span></Link></li>
            </ul>
          </div>
        </div>
        <div className="m-auto bg-white rounded shadow-2xl my-4 sm:my-0" id='contactForm' data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="2000">
          <div className="mt-5 md:mt-0 md:col-span-2">
            {/* <form > */}
            <form action='https://formspree.io/f/mvolnlkq' method="POST" >
              <div className="p-4">
                <div className="block sm:flex gap-3 py-4">
                  <div className='w-full pb-4 sm:pb-0'>
                    <div className='block sm:flex items-center'>
                      <label htmlFor="fastName" className="text-slate-500 font-semibold w-1/2 ">Fast Name</label>
                      <input required id="fastName" name="fastName" type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder='Enter Your Fast Name'
                        {...register("fastName", {
                          required: {
                            value: true,
                            message: "Enter Your Fast Name ",
                          },
                        }
                        )}
                      />
                    </div>
                    <label className="text-left sm:text-right block">
                      {errors.fastName?.type === "required" && (
                        <span className="text-red-500 text-sm capitalize">
                          {errors.fastName.message}
                        </span>
                      )}
                    </label>
                  </div>
                  <div className='w-full'>
                    <div className='block sm:flex items-center '>
                      <label htmlFor="lastName" className="text-slate-500 font-semibold w-1/2 ">Last Name </label>
                      <input required id="lastName" name="lastName" type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder='Enter your Last Name '
                        {...register("lastName", {
                          required: {
                            value: true,
                            message: "Enter your Last Name ",
                          },
                        }
                        )}
                      />
                    </div>
                    <label className="text-left sm:text-right block">
                      {errors.lastName?.type === "required" && (
                        <span className="text-red-500 text-sm capitalize">
                          {errors.lastName.message}
                        </span>
                      )}
                    </label>
                  </div>
                </div>
                <div >
                  <div className='block sm:flex items-center'>
                    <label htmlFor="number" className="text-slate-500 font-semibold w-1/5 ">Mobile Number</label>
                    <input required id="number" name="number" type="number" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Enter Your Mobile Number"
                      {...register("number", {
                        required: {
                          value: true,
                          message: " Enter Your Mobile Number",
                        },
                      }
                      )}
                    />
                  </div>
                  <label className="text-left sm:text-right block">
                    {errors.number?.type === "required" && (
                      <span className="text-red-500 text-sm capitalize">
                        {errors.number.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className='py-4'>
                  <div className=' block sm:flex '>
                    <label htmlFor="email" className="text-slate-500 w-1/5 font-semibold">Email Address </label>
                    <input required id="email" name="email" type="email" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder='Enter your Email'
                      {...register("email", {
                        required: {
                          value: true,
                          message: "type here task description",
                        },

                      }
                      )}
                    />
                  </div>
                  <label className="text-left sm:text-right block">
                    {errors.email?.type === "required" && (
                      <span className="text-red-500 text-sm  capitalize">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className='py-1'>
                  <div className=' block sm:flex '>
                    <label htmlFor="message" className="text-slate-500 w-1/5 font-semibold">Message</label>
                    <textarea id="message" name="message" type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Message"
                      cols="5"
                      rows="5"
                      {...register("message", {
                        required: {
                          value: true,
                          message: "Message",
                        },

                      }
                      )}
                    />
                  </div>
                  <label className="text-left sm:text-right block">
                    {errors.message?.type === "required" && (
                      <span className="text-red-500 text-sm  capitalize">
                        {errors.message.message}
                      </span>
                    )}
                  </label>
                </div>
              </div>
              <button className='uppercase bg-blue-700 w-full py-2 text-white hover:bg-blue-600 rounded-b'>create task</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;