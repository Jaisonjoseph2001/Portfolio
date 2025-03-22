import React from 'react'
import { motion } from 'framer-motion'
// import mine from '../assets/jaison full.png'
import mine from '../assets/jaison_pro.png'
import resume from '/Jaison Jacob Resume.pdf'
import Resume_Button from '../constraints/Resume_Button'
import { Hero_Content } from '../constraints/index'

const Hero = () => {

    const container = (delay) => ({
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 1, delay: delay },
        },
    })



    return (

        <div className='min-h-screen' style={{
            background: 'linear-gradient(to right bottom, #e91990, #d94ab3, #c469cd, #ac81df, #9694e7, #83a4f1, #73b2f7, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)'
        }}>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2 px-8'>
                    <div className='flex flex-col items-center lg:items-start'>

                        <motion.h1
                            variants={container(0.25)}
                            initial='hidden'
                            animate='visible'
                            className='pb-14 font-thin tracking-tight leading-tight bg-gradient-to-r from-blue-400 via-teal-500 to-green-400 bg-clip-text text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-transparent lg:mt-14'>
                            Jaison Jacob
                        </motion.h1>

                        <motion.h2
                            variants={container(1)}
                            initial='hidden'
                            animate='visible'
                            className='bg-gradient-to-r from-blue-600 via-emerald-600 to-indigo-500 bg-clip-text text-lg sm:text-xl md:text-3xl tracking-tight text-transparent'>
                            Full Stack Developer
                            <span className='hidden sm:inline-block mx-2'>|</span>
                            <span className='block sm:inline-block'>Application Developer</span>
                        </motion.h2>

                        <motion.p
                            variants={container(1.75)}
                            initial='hidden'
                            animate='visible'
                            className='my-2 max-w-xl pt-6 font-semibold tracking-tight'> {Hero_Content} </motion.p>
                        {/* download resume button here */}
                        <motion.div
                            variants={container(2)}
                            initial="hidden"
                            animate="visible"
                            className="mt-6"
                        >
                            <a href={resume} download="Jaion_Jacob_Resume.pdf">
                                <Resume_Button>
                                    {/* <IoMdDownload className="text-2xl text-white"/>
                            <span>Resume</span> */}
                                </Resume_Button>
                            </a>

                        </motion.div>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8 pt-4 lg:pt-40'>
                    <div className='flex justify-center lg:justify-end'>
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1.5, delay: 0.25 }}
                            className='relative inline-flex rounded-full p-[3px] overflow-hidden active:scale-95 transition focus:outline-none'
                        >
                            {/* Spinning Border Effect */}
                            <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]'>
                            </span>

                            {/* Profile Image */}
                            <img
                                src={mine}
                                alt="profile pic"
                                className='relative h-40 w-auto object-contain sm:h-48 md:h-52 lg:h-72 xl:h-80 2xl:h-96 rounded-full'
                            />
                        </motion.div>
                    </div>
                </div>



            </div>

        </div>
    )
}

export default Hero