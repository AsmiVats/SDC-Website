import React from 'react';
import {studentData,facultyData} from '../data';
import Fcomponent from './Fcomponent'
import Scomponent from './Scomponent'
import { useTheme } from '../../Context/themeContext';
import { useEffect } from "react";
import ReactDOM from "react-dom";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";




function Third({ mode }) {
  const {darkMode} = useTheme();

  function FadeInWhenVisible({ children }) {
    const controls = useAnimation();
    const [ref, inView] = useInView();
  
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
  
    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ duration: 0.5 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 }
        }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={darkMode ? 'bg-black' : 'bg-purple-100' } style={{ width: '100%', overflowX: 'hidden'}}>
      <h1 className={`text-7xl select-none font-bebas-neue md:mb-10 md:mt-12 text-center tracking-widest pt-5 pb-5 ${darkMode ? 'text-white' : 'text-black'}`}>MEET OUR TEAM</h1>

      <div className="flex flex-row justify-center w-[98%] flex-wrap gap-4  my-10	ml-[2%]">
        {facultyData.map((faculty, index) => (
          <FadeInWhenVisible>
          <Fcomponent faculty={faculty}/>
        </FadeInWhenVisible>
          
      ))}
      </div>

      <div className="flex flex-wrap gap-0 justify-center h-[30%] w-[100%] mx-auto ">
        {studentData.map((student, index) => (
        <div key={index}>
          <FadeInWhenVisible>
                    <Scomponent student={student} mode={mode}/>

        </FadeInWhenVisible>
        </div>
      ))}
      </div>

      <div className="border-b border-dotted border-purple-500 border-t-4 border-opacity-50" />

    </div>
  );
}

export default Third;
