import React from 'react'
import logo from '../assets/logo.png'
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className='pb-2 flex justify-between items-center bg-gradient-to-r from-green-400 via-pink-400 to-blue-400'>
      <div className='flex flex-shrink-0 items-center '>
        <img src={logo} alt="Logo" className="h-11 lg:h-20 mx-2 w-auto object-contain" />
      </div>
      <div className="mx-8 flex items-center justify-center gap-6 text-2xl text-white">
        
        <a href="https://linkedin.com/in/jerry-james-" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:bg-white rounded hover:text-sky-500 transition-colors duration-300" />
        </a>

        <a href="https://github.com/Jaison964517" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-white hover:text-black rounded-full hover:bg-white transition-colors duration-300" />
        </a>

        <a href="https://www.instagram.com/j_a_i_s_o_n?igsh=NGJ6MHY2b3h6b2I0" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-pink-500 hover:text-orange-500 transition-colors duration-300 " />
        </a>

      </div>
    </nav>
  )
}

export default Navbar