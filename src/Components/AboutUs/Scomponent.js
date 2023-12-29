// App.js
import React from "react";
import "./Scomponent.css";
import { SocialIcon } from 'react-social-icons'
import { useTheme } from "../../Context/themeContext";

function App({student,mode}) {
  const {darkMode} = useTheme();
  return (
    <div className="card-wrapper">

      <div className="card-top">
        <img
          className="image"
          src={student.image}
          alt="card"
        />
        <h1 className={`text-2xl select-none font-bold tracking-wider text-center ${darkMode ? 'text-white' : 'text-black' }`}>{student.name}</h1>
        <h1 className={`text-l select-none font-bold tracking-wider text-center ${darkMode ? 'text-white' : 'text-black'}`}>{student.designation}</h1>
      </div>
      
      <div className="card-bottom">
        
        <br />
        <span className="select-none bottom-text">
          {student.discription}
        </span>
        <br />
        <div className="button">
        <SocialIcon url={student.link} target="_blank" rel="noopener noreferrer" className="icon" />

        </div>
      </div>
    </div>
  );
}

export default App;
