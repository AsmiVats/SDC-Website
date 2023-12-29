import React from 'react';
import Event from './Event';
import { events } from './eventsData';
import { useTheme } from '../../Context/themeContext';
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const EventsList = () => {
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
    <div className={darkMode ? 'bg-black' : 'bg-purple-100'} style={{ width: '100%', overflowX: 'hidden'}}>
          <h1 className={`text-7xl select-none font-bebas-neue md:mb-5 mt-10 text-center tracking-widest pt-5 pb-5 ${darkMode ? 'text-white' : 'text-black'}`}>EVENTS</h1>

    <div className='flex flex-wrap gap-8 flex-col w-3/4 m-auto justify-center'>
      {events.map((event, index) => (
        <FadeInWhenVisible>
        <Event key={index} events={event} />
        </FadeInWhenVisible>
      ))}
    </div>
    <div className="border-b border-dotted border-purple-500 border-t-4 border-opacity-50 mt-8" />
    </div>
  );
};

export default EventsList;
