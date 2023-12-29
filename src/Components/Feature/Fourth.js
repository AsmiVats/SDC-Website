import React from 'react'
import {whysdc} from '../data';
import Wcomponent from './Wcomponent'
import { useTheme } from '../../Context/themeContext';

import { useEffect } from "react";
import ReactDOM from "react-dom";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";


function Fourth() {
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
    <div className={darkMode? 'bg-black' : 'bg-purple-100' }style={{ width: '100%', position: 'relative' , overflowX: 'hidden' , zIndex:'-2'}}>
      <h1 className={`text-7xl md:my-10 font-bebas-neue select-none text-center tracking-widest pt-5 pb-5 ${darkMode ? 'text-white':'text-slate-950'}`}>WHY SDC CLUB?</h1>

      <div className="flex justify-center select-none max-w-[90%] flex-wrap gap-x-[140px] gap-y-[70px]  mt-5 mb-20	ml-[5%] ">
        {whysdc.map((why, index) => (
          <FadeInWhenVisible>
          <Wcomponent why={why} />
        </FadeInWhenVisible>
          
      ))}
      </div>
      <div className="border-b border-dotted border-purple-500 border-t-4 border-opacity-50" />

    </div>
  )
}

export default Fourth;
