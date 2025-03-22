import React from 'react'
import { motion } from 'framer-motion'
import mine from '../assets/jaison_pro.png'
import { About_Content } from '../constraints'

const About = () => {
  return (
    
    <div className=" min-h-screen"
    style={{ background: 'linear-gradient(to right top, #e91990, #d94ab3, #c469cd, #ac81df, #9694e7, #83a4f1, #73b2f7, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)'
    }}
    >
      <h1 className=" text-center text-4xl text-emerald-500">
        About
        <span className="text-indigo-400"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:0.5, delay:0.25}}
         className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center items-center">
            <img
              src={mine}
              alt="about"
              className=" w-2/4 lg:w-auto object-contain sm:h-40 lg:h-80 xl:h-96 rounded-xl"
            />
          </div>
        </motion.div>

        <motion.div
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:100}}
        transition={{duration:0.5, delay:0.25}}
        className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 pl-2 text-lg">
                {About_Content}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About