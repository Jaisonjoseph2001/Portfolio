import React from 'react'
import { motion } from 'framer-motion'
import { FaHtml5, FaJs, FaPhp, FaJava } from 'react-icons/fa'
import { BiLogoDjango } from "react-icons/bi";
import { SiCplusplus, SiMongodb, SiPostgresql } from 'react-icons/si'
import { VscVscode } from "react-icons/vsc";

import python from '../assets/techs/python.png'
import css from '../assets/techs/css-3.png'
import { DiMysql } from 'react-icons/di'


const Technologies = () => {

    const iconVariants = (duration) => ({
        initial: { y: -10 },
        animate: {
            y: [10, -10],
            transition: {
                duration: duration,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
            },
        },
    })



    return (

        <div className=' pb-24 min-h-screen'
        style={{
            background: 'radial-gradient(circle, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)'
        }}
        >
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className='py-20 text-center text-4xl'>Technologies</motion.h2>

            {/* row one */}
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className='flex flex-wrap items-center justify-center gap-4 mb-12'>

                <motion.div
                    variants={iconVariants(1.5)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-2.5 sm:p-3 md:p-5'>
                    <img src={python} alt="Python icon" />
                </motion.div>
            </motion.div>

            {/* row two */}
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.5 }}
                className='flex flex-wrap items-center justify-center gap-4 mb-12'>
                <motion.div
                    variants={iconVariants(1.5)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaHtml5 className='text-5xl sm:text-6xl md:text-7xl text-[#e34c26]' />
                </motion.div>

                <motion.div
                    variants={iconVariants(1.5)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-2.5 sm:p-3 md:p-5'>
                    <img src={css} alt="css image" />
                </motion.div>

                <motion.div
                    variants={iconVariants(1.5)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaJs className='text-5xl sm:text-6xl md:text-7xl text-yellow-400' />
                </motion.div>
            </motion.div>

            {/* row three */}
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className='flex flex-wrap items-center justify-center gap-4 mb-12'>

                <motion.div
                    variants={iconVariants(1.5)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaPhp className='text-5xl sm:text-6xl md:text-7xl text-[#777BB4]' />
                </motion.div>

                <motion.div
                    variants={iconVariants(1.75)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <BiLogoDjango className='text-5xl sm:text-6xl md:text-7xl text-[#092E20]' />
                </motion.div>

                <motion.div
                    variants={iconVariants(2)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 shadow-md'>
                    <SiPostgresql className='text-5xl sm:text-6xl md:text-7xl text-white' />
                </motion.div>

                <motion.div
                    variants={iconVariants(2.25)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <DiMysql className='text-5xl sm:text-6xl md:text-7xl text-cyan-500' />
                </motion.div>
            </motion.div>

            {/* row four */}
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.5 }}
                className='flex flex-wrap items-center justify-center gap-4 mb-12'>

                <motion.div
                    variants={iconVariants(1.75)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiMongodb className='text-5xl sm:text-6xl md:text-7xl text-green-500' />
                </motion.div>

                <motion.div
                    variants={iconVariants(2.25)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiCplusplus className='text-5xl sm:text-6xl md:text-7xl text-[#00599C]' />
                </motion.div>

                <motion.div
                    variants={iconVariants(2.5)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaJava className='text-5xl sm:text-6xl md:text-7xl text-[#007396]' />
                </motion.div>

            </motion.div>

            {/* row five */}
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className='flex flex-wrap items-center justify-center gap-4 mb-12'>

                <motion.div
                    variants={iconVariants(2)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <VscVscode className='text-5xl sm:text-6xl md:text-7xl text-[#007ACC]' />
                </motion.div>

            </motion.div>

        </div>
    )
}

export default Technologies