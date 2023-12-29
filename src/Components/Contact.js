import React, { useState } from 'react';
import { useTheme } from '../Context/themeContext';
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'

const ContactMe = () => {
  const {darkMode} = useTheme();
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [message,setMessage] = useState('');

  const handlerSubmit = (e) => {
    e.preventDefault() ;

    const serviceId = process.env.REACT_APP_SERVICE_KEY ;
    const templateId = process.env.REACT_APP_TEMPLATE_ID ;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY ;

    const templateParams = {
      from_name: name ,
      from_email: email ,
      to_name: 'SDC',
      message: message ,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
  .then((response) => {
    
    toast.success("Mail Sent Successfully")
    setName('');
    setEmail('');
    setMessage('');
  })
  .catch((error) => {
    
    toast.error("Please check your Internet Connection")
  });
  }
    
  return (
    <div className={` p-6 mx-auto min-h-full flex flex-col md:flex-row justify-center  items-stretch font-poppins ${darkMode ? 'bg-black':'bg-purple-100'} transition-all duration-500 ease-in`}>
      {/* Left side: Form */}
      <div className={`md:w-1/2 p-5 w-100vh flex-grow my-4 border-2 ${darkMode ? 'border-white' : 'border-black'} `}>
        <h2 className={`text-3xl select-none font-semibold mb-4 ${darkMode? 'text-white':'text-black'}`}>Contact Us</h2>

        <form onSubmit={handlerSubmit}>
          <div className="my-10 ">
            <input
              type="text"
              id="name"
              value={name}
              name="name"
              required="true"
              className={`mt-1 p-2 w-10/12 rounded-full bg-opacity-60 ${darkMode ? 'bg-gray-300 placeholder-slate-100':'bg-gray-500 placeholder-slate-800'}  font-semibold text-lg pl-4`}
              placeholder="Name*"
              onChange={(e)=> setName(e.target.value)}
            />
          </div>
          <div className="my-10">
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              required="true"
              className={`mt-1 p-2 w-10/12 rounded-full bg-opacity-60 ${darkMode ? 'bg-gray-300 placeholder-slate-100':'bg-gray-500 placeholder-slate-800'} font-semibold text-lg pl-4`}
              onChange={(e)=> setEmail(e.target.value)}
              placeholder="Email*"
            />
          </div>
          <div className="my-10">
            <textarea
              id="message"
              name="message"
              value={message}
              rows="6"
              required="true"
              className={`mt-1 p-2 w-10/12 bg-opacity-60 rounded-2xl ${darkMode ? 'bg-gray-300 placeholder-slate-100':'bg-gray-500 placeholder-slate-800'} font-semibold text-lg pl-4`}
              onChange={(e)=> setMessage(e.target.value)}
              placeholder="Your Message*"
            ></textarea>
          </div>
          <button
            type="submit"
            className={`${darkMode? 'bg-slate-300':'bg-slate-500'} px-4 py-2 w-36 mb-4 rounded-full hover:bg-slate-500 text-slate-950 font-semibold`}
          >
            Send
          </button>
        </form>

      </div>

      {/* Right side: Map and Social Media Links */}
      <div className={`md:w-1/2 p-5 flex-grow my-4 border-2 ${darkMode ? 'border-white' : 'border-black'} `} >

        <div className={`mb-4 border-b-2 ${darkMode ? 'border-white' : 'border-black'}`} >

          <iframe 
           
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.535735257909!2d76.84871217603744!3d23.07747641427564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397ce9ceaaaaaaab%3A0xa224b6b82b421f83!2sVIT%20Bhopal%20University!5e0!3m2!1sen!2sin!4v1703080955280!5m2!1sen!2sin" 
            width="100%" 
            height="400"
          style={{ border: "0" }}
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">

            </iframe>

        </div>

        <div className={`m-auto flex flex-col text-lg font-semibold ${darkMode ? 'text-slate-300':'text-slate-800 '} `}>
          <a className="flex select-none items-center gap-4 mb-2">
         
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-slot="icon" class="w-9 h-9">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
        VIT Bhopal University,
Bhopal-Indore Highway
Kothrikalan, Sehore
Madhya Pradesh - 466114
          </a>
          <a href="https://www.instagram.com/sdcvitb?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA==" target="_blank" className="flex items-center gap-4 mb-2">
            <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24">
          <path
            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
            Instagram
          </a>
          <a href="https://www.linkedin.com/company/sdcvitb" target="_blank" className="flex items-center gap-4 mb-2">
                    <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24">
            <path
              d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
          </svg>
              LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
