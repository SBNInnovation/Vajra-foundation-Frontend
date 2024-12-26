"use client"
import LineDot from '@/shared/LineDot/LineDot'
import SharedTitle from '@/shared/SharedTitle'
import { Button } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'
import { DiDotnet } from 'react-icons/di'
import { FaArrowRight } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

const Cause = () => {
    const [ref, inView] = useInView({
        triggerOnce: true, 
        threshold: 0.2,   
    })

    const imageVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    }

    return (
        <main className='w-full relative lg:px-16 px-4 py-8 h-auto flex flex-col-reverse lg:flex-row items-start justify-center gap-16 bg-[#F5FAF1]'>
            <div className='lg:w-2/5 w-full lg:h-[700px] h-[400px] lg:flex hidden'>
                <Image src={"/VajraDroneShot.jpg"} alt='Cause' height={1000} width={1000} className='object-cover h-full w-full rounded-sm shadow-md'/>
            </div>
            <div className='lg:w-3/5 w-full relative'>
                <SharedTitle title='A Help to those who need it'/>
                <h1 className='font-semibold text-3xl tracking-wide'>Our Initiatives </h1>
                <div className='lg:w-2/5 w-full'>
                    <LineDot/>
                </div>
                <p className='text-gray-700 lg:text-base text-sm text-justify my-4'>
                    At our NGO, we are committed to fostering positive change in communities by focusing on three critical areas: health, education, and the environment. Through targeted programs and collaborative efforts, we strive to empower individuals and promote sustainable development, ensuring a brighter future for all.
                </p>

                <div className='flex items-center flex-col gap-4 '>
                    <div className='flex gap-2 items-start'>
                        <div className='flex gap-2 items-center'>
                            <DiDotnet className='text-primary' size={20} />
                            <span className='font-semibold'>Health:</span>
                        </div>
                        <p className='text-gray-700 lg:text-base text-sm text-justify'>Providing essential healthcare services and education to enhance community well-being.</p>
                    </div>
                    <div className='flex gap-2 items-start'>
                        <div className='flex gap-2 items-center'>
                            <DiDotnet className='text-primary' size={20} />
                            <span className='font-semibold'>Education:</span>
                        </div>
                        <p className='text-gray-700 lg:text-base text-sm text-justify'>Offering scholarships and training to improve access and empower individuals with knowledge.</p>
                    </div>
                    <div className='flex gap-2 items-start'>
                        <div className='flex gap-2 items-center'>
                            <DiDotnet className='text-primary' size={20} />
                            <span className='font-semibold'>Environment:</span>
                        </div>
                        <p className='text-gray-700 lg:text-base text-sm text-justify'>Promoting sustainable practices and conservation efforts to protect natural resources.</p>
                    </div>
                </div>
                <Link href={'/programs'}>
                    <div className="group w-fit my-4">
                        <Button 
                            endContent={
                            <FaArrowRight className='transition duration-500 group-hover:translate-x-2' />
                            } 
                            className='rounded-sm bg-primary px-8 my-2 text-white flex items-center' 
                            aria-label="Details"
                        >
                                Details
                        </Button>
                    </div>
                </Link>

                {/* Image grid that fades in */}
                <div ref={ref} className='grid grid-cols-2 lg:grid-cols-4 gap-10 items-center lg:my-8 mt-8'>
                    {/* Education image */}
                    <motion.div 
                        className='relative w-full h-[10rem] group cursor-pointer'
                        variants={imageVariants}
                        initial='hidden'
                        animate={inView ? 'visible' : 'hidden'}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <Image src={"/edu.webp"} alt='education' height={1000} width={1000} className='object-cover h-full w-full shadow-md rounded-sm'/>
                        <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                            <span className='text-white font-semibold text-lg'>Education</span>
                        </div>
                    </motion.div>

                    {/* Health image */}
                    <motion.div 
                        className='relative w-full h-[10rem] group cursor-pointer'
                        variants={imageVariants}
                        initial='hidden'
                        animate={inView ? 'visible' : 'hidden'}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <Image src={"/DSCN5192.jpg"} alt='health' height={1000} width={1000} className='object-cover h-full w-full shadow-md rounded-sm'/>
                        <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                            <span className='text-white font-semibold text-lg'>Health</span>
                        </div>
                    </motion.div>

                    {/* Environment image */}
                    <motion.div 
                        className='relative w-full h-[10rem] group cursor-pointer'
                        variants={imageVariants}
                        initial='hidden'
                        animate={inView ? 'visible' : 'hidden'}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <Image src={"/env-3.webp"} alt='environment' height={1000} width={1000} className='object-cover h-full w-full shadow-md rounded-sm'/>
                        <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                            <span className='text-white font-semibold text-lg'>Environment</span>
                        </div>
                    </motion.div>

                    {/* Second health image */}
                    <motion.div 
                        className='relative w-full h-[10rem] group cursor-pointer'
                        variants={imageVariants}
                        initial='hidden'
                        animate={inView ? 'visible' : 'hidden'}
                        transition={{ duration: 0.5, delay: 0.7 }}
                    >
                        <Image src={"/spon-edu-3.webp"} alt='health' height={1000} width={1000} className='object-cover h-full w-full shadow-md rounded-sm'/>
                        <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                            <span className='text-white font-semibold text-lg'>Health</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    )
}

export default Cause
