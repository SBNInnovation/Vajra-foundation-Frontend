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
        <main className='w-full relative px-16 py-8 h-auto flex items-start justify-center gap-16 bg-[#F5FAF1]'>
            <div className='w-2/5 h-[700px]'>
                <Image src={"/medical.avif"} alt='Cause' height={1000} width={1000} className='object-cover h-full w-full rounded-sm shadow-md'/>
            </div>
            <div className='w-3/5 z-[100] relative'>
                <SharedTitle title='A Help to those who need it'/>
                <h1 className='font-semibold text-3xl tracking-wide'>Our Initiatives </h1>
                <div className='w-2/5'>
                    <LineDot/>
                </div>
                <p className='text-gray-700 text-justify my-4'>
                    At our NGO, we are committed to fostering positive change in communities by focusing on three critical areas: health, education, and the environment. Through targeted programs and collaborative efforts, we strive to empower individuals and promote sustainable development, ensuring a brighter future for all.
                </p>

                <div className='flex flex-col gap-2'>
                    <div className='flex gap-2 items-start'>
                        <div className='flex gap-2 items-center'>
                            <DiDotnet className='text-primary' size={20} />
                            <span className='font-semibold'>Health:</span>
                        </div>
                        <p className='text-gray-700'>Providing essential healthcare services and education to enhance community well-being.</p>
                    </div>
                    <div className='flex gap-2 items-start'>
                        <div className='flex gap-2 items-center'>
                            <DiDotnet className='text-primary' size={20} />
                            <span className='font-semibold'>Education:</span>
                        </div>
                        <p className='text-gray-700'>Offering scholarships and training to improve access and empower individuals with knowledge.</p>
                    </div>
                    <div className='flex gap-2 items-start'>
                        <div className='flex gap-2 items-center'>
                            <DiDotnet className='text-primary' size={20} />
                            <span className='font-semibold'>Environment:</span>
                        </div>
                        <p className='text-gray-700'>Promoting sustainable practices and conservation efforts to protect natural resources.</p>
                    </div>
                </div>

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

                {/* Image grid that fades in */}
                <div ref={ref} className='flex absolute gap-10 items-center my-8'>
                    {/* Education image */}
                    <motion.div 
                        className='relative w-1/4 h-[10rem] group cursor-pointer'
                        variants={imageVariants}
                        initial='hidden'
                        animate={inView ? 'visible' : 'hidden'}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <Image src={"/edu.avif"} alt='education' height={1000} width={1000} className='object-cover h-full w-full shadow-md rounded-sm'/>
                        <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                            <span className='text-white font-semibold text-lg'>Education</span>
                        </div>
                    </motion.div>

                    {/* Health image */}
                    <motion.div 
                        className='relative w-1/4 h-[10rem] group cursor-pointer'
                        variants={imageVariants}
                        initial='hidden'
                        animate={inView ? 'visible' : 'hidden'}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <Image src={"/health.avif"} alt='health' height={1000} width={1000} className='object-cover h-full w-full shadow-md rounded-sm'/>
                        <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                            <span className='text-white font-semibold text-lg'>Health</span>
                        </div>
                    </motion.div>

                    {/* Environment image */}
                    <motion.div 
                        className='relative w-1/4 h-[10rem] group cursor-pointer'
                        variants={imageVariants}
                        initial='hidden'
                        animate={inView ? 'visible' : 'hidden'}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <Image src={"/intro.avif"} alt='environment' height={1000} width={1000} className='object-cover h-full w-full shadow-md rounded-sm'/>
                        <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                            <span className='text-white font-semibold text-lg'>Environment</span>
                        </div>
                    </motion.div>

                    {/* Second health image */}
                    <motion.div 
                        className='relative w-1/4 h-[10rem] group cursor-pointer'
                        variants={imageVariants}
                        initial='hidden'
                        animate={inView ? 'visible' : 'hidden'}
                        transition={{ duration: 0.5, delay: 0.7 }}
                    >
                        <Image src={"/medical.avif"} alt='health' height={1000} width={1000} className='object-cover h-full w-full shadow-md rounded-sm'/>
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
