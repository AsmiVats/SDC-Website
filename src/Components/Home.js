import React from 'react';
import backgroundImage1 from '../Components/img/image 1.png';
import backgroundImage2 from '../Components/img/image 2.png';
import { useTheme } from '../Context/themeContext';


const Home = () => {
  const { darkMode } = useTheme();
  return (
    <div
      className='flex justify-center items-center h-screen bg-no-repeat bg-cover bg-center rounded-lg transition-all duration-500 ease-in'
      style={{ backgroundImage: `url('${darkMode ? backgroundImage1 : backgroundImage2}')` }}
    >
     <div className="font-semibold leading-8 tracking-normal text-center ">
        <h1 className={`text-4xl select-none sm:text-5xl md:text-6xl lg:text-7xl   font-bebas-neue tracking-widest pt-5 pb-5 ${
          darkMode ? 'text-white' : 'text-purple-950'
        }`}>
          WELCOME TO THE SDC!
        </h1>
      </div>
    </div>
  );
};

export default Home;
