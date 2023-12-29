import React, { useState, useEffect } from 'react';
import logo from '../Components/img/sdc-logo.png';
import sun from '../Components/img/sun.png';
import moon from '../Components/img/moon.png';
import { Link } from 'react-scroll';
import { useTheme } from '../Context/themeContext';

import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';

const Header = () => {
  let Links = [
    { name: 'HOME', link: 'home' },
    { name: 'FEATURES', link: 'features' },
    { name: 'EVENT', link: 'events'},
    { name: 'OUR TEAM', link: 'about'},
    { name: 'SUPPORT', link: 'contact' },
  ];

  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`shadow-md w-full ${
        isScrolled ? 'sticky top-0 z-50' : ''
      } left-0 bg-white transition-all duration-500 ease-in`}
    >
      <div
        className={`lg:flex items-center flex-wrap justify-between ${
          darkMode ? 'bg-black' : 'bg-white'
        } transition-all duration-500 ease-in py-4 lg:px-7`}
      >
        {/* logo section */}
        <div className='cursor-pointer flex items-center gap-1'>
          <img src={logo} alt='Logo' className='h-14 w-auto' />
        </div>

        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className={`absolute right-8 top-6 ${
            darkMode ? 'text-white' : 'text-black'
          } cursor-pointer lg:hidden w-7 h-7 flex flex-wrap`}
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}

        </div>

        

        {/* linked items */}
        <ul
          className={`${darkMode ? 'bg-black' : 'bg-white'} lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static z-1000 left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? 'top-15' : 'top-[-490px]'
          }`}
        >
          {Links.map((link) => (
            <li
              className=' font-poppins lg:ml-8 lg:my-0 my-7 text-xl mx-6 lg:mx-3 font-semibold'
              key={link.name}
            >
              <Link
                to={link.link}
                smooth={true}
                duration={500}
                className={`${
                  darkMode ? 'text-white' : 'text-black'
                }  hover:text-purple-500 duration-500 cursor-pointer`}
              >
                {link.name}
              </Link>
            </li>
          ))}

          <button className='bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 font-poppins text-lg  p-2 mx-4 lg:mx-3 lg:ml-8 lg:my-0 my-5  font-semibold rounded-full '>
            RECRUITMENT
          </button>

          <div className=' lg:ml-8 font-semibold px-3 py-1 rounded duration-500 lg:static transition-opacity'>
            <img
              src={darkMode ? sun : moon}
              onClick={toggleDarkMode}
              alt='sun'
              className={`w-14 h-14 mr-5 hover:scale-110 transition-transform ${
                darkMode ? 'rotate-180' : 'rotate-0'
              }`}
            />
          </div>
        </ul>
        
      </div>
    </div>
  );
};

export default Header;
