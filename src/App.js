import Home from './Components/Home'
import Third from './Components/AboutUs/Third'
import EventsList from './Components/Event/Events'
import Fourth from './Components/Feature/Fourth'
import Contact from './Components/Contact'
import Header from './Components/Header';
import Sdc from './Components/Sdc';
import CursorCircle from './Components/CursorCircle';
import { ThemeProvider } from './Context/themeContext';
import { useState } from 'react';
import "./App.css";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import { Toaster } from 'react-hot-toast';
import { Events } from 'react-scroll';
import {Analytics} from '@vercel/analytics/react'

function App() {
  const [loading,setLoading] = useState(true) ;
  const spinner = document.getElementById("spinner") ;
  if(spinner) {
    setTimeout(() => {
      spinner.style.display = "none" ;
      setLoading(false);
    }, 5000) ;
  }
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    !loading && (
      <ThemeProvider>
    <div>
      <Header />
      <section id="home">
        <Home />
      </section>
      <section id="features">
        <Fourth />
      </section>
      <section id="events">
      <EventsList />
      </section>
      <section id="about">
        <Third />
      </section>
      <section id="contact" >
        <Contact />
      </section>
      <Sdc />
      <Toaster position="top-center" />
      </div>
      <CursorCircle />
      <motion.div className="progress" style={{ scaleX }} />
      <Analytics />
    </ThemeProvider>
    )
  );
}

export default App;