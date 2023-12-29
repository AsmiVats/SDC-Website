import React from 'react';
import { useTheme } from '../../Context/themeContext';

const Event = ({ events }) => {
  const {darkMode} = useTheme();
  return (
    <div className={`w-[96%] my-10 flex flex-col md:flex-row rounded-2xl border-violet-400 border-4  overflow-hidden shadow-lg ${darkMode ? 'bg-purple-950 shadow-violet-950 ' : 'bg-purple-200 shadow-violet-500'} transition-all duration-100 ease-in hover:scale-105`}>
    <img className="mt-3 mb-3 mx-auto md:mx-3 h-[220px] w-[220px] rounded-3xl border-violet-400 border-4 " src={events.image} alt={events.title} />
    <div className="flex-1 flex flex-col font-poppins px-6 py-4 ">
    <div className={`${darkMode ? 'text-white ':'text-black'} font-semibold text-2xl mb-3`}>{events.title}</div>
    <p className={`${darkMode ? 'text-gray-100 ':'text-gray-700 '}text-base my-1`}>{events.date}</p>
    <p className={`${darkMode ? 'text-slate-200  ':'text-slate-900 '} text-base`}>{events.description}</p>
   
  </div>
</div>

   
  );
};

export default Event;
