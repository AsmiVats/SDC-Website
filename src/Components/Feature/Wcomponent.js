import React from 'react';
import polygon from '../img/polygon.png';
import { useTheme } from '../../Context/themeContext';

function Wcomponent({ why }) {
  const {darkMode} = useTheme();
  return (
    <div className='flex flex-col items-center justify-center relative'>
      <img src={polygon} className='w-[220px] h-[220px] mt-10 z-0' alt="Polygon" />
      <img src={why.image} className='z-5 absolute h-[70px] w-[70px] top-[110px]' />
      <h1 className={`${darkMode ? 'text-white' : 'text-black'} text-2xl font-bold text-center my-4`}>{why.heading}</h1>
      <div className='max-w-xs'>
        <h1 className={`${darkMode ? 'text-white' : 'text-black'} text-l font-bold text-center`}>{why.discription}</h1>
      </div>
    </div>
  );
}

export default Wcomponent;
