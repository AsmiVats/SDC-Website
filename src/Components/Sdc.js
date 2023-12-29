import React from 'react'
import logo from '../Components/img/sdc-logo.png';
import { useTheme } from '../Context/themeContext';

const Sdc = () => {
    const {darkMode} = useTheme();

  return (
    <div className={` transition-all duration-500 ease-in ${darkMode ? 'bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900':'bg-gradient-to-r from-slate-300 via-purple-600 to-slate-300'} flex flex-col justify-center items-center h-screen`}>
        <img src={logo} alt='sdc logo' className='w-96 h-auto my-8' />
        <h1 className={`font-bebas-neue select-none font-extrabold tracking-widest text-5xl md:text-5xl lg:text-6xl ${darkMode ? 'text-slate-300':'text-slate-950'}  `}>THE SDC</h1>
    </div>
  )
}

export default Sdc