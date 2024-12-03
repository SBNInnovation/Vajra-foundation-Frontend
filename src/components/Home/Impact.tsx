"use client"
import LineDot from '@/shared/LineDot/LineDot'
import SharedTitle from '@/shared/SharedTitle'
import React from 'react'
import { FaHouseChimneyMedical } from 'react-icons/fa6'
import { MdOutlineHealthAndSafety } from 'react-icons/md'
import { PiStudent } from 'react-icons/pi'
import CountUp from 'react-countup'

const Impact = () => {
    return (
        <div className='bg-[#F5FAF1] lg:px-16 px-4 lg:py-12 py-4 w-full flex lg:items-center items-start justify-start flex-col'>
            <div className='flex lg:items-center items-start lg:justify-center justify-start'>
                <SharedTitle title='Every small impact matters' />
            </div>
            <h1 className='font-semibold lg:text-5xl text-2xl tracking-wide lg:my-4 my-2'>Our Impacts</h1>
            <LineDot className='justify-center' />
            <p className='text-justify lg:w-[90%] w-full lg-text-base text-sm'>
                Through our dedicated efforts, we have touched countless lives by improving access to healthcare, empowering individuals through education, and fostering sustainable environmental practices. Our work has created positive, lasting change in communities, helping build a healthier, more educated, and eco-friendly future for generations to come.
            </p>

            <div className='lg:w-[90%] w-full py-4 grid lg:grid-cols-4 lg:gap-y-0 gap-y-8 grid-cols-2 my-12'>
                {/* Impact 1 */}
                <div className='flex items-center justify-center flex-col gap-4'>
                    <FaHouseChimneyMedical className='text-primary lg:text-7xl text-5xl' />
                    <h1 className='text-primary font-semibold lg:text-5xl text-2xl'>
                        <CountUp end={2100} duration={2} separator=',' />
                        +
                    </h1>
                    <p className='font-semibold lg:text-xl text-sm'>Households <br /> reached</p>
                </div>

                {/* Impact 2 */}
                <div className='flex items-center justify-center flex-col gap-4'>
                    <MdOutlineHealthAndSafety className='text-primary lg:text-7xl text-5xl' />
                    <h1 className='text-primary font-semibold lg:text-5xl text-2xl'>
                        <CountUp end={17000} duration={2} separator=',' />
                        +
                    </h1>
                    <p className='font-semibold lg:text-xl text-sm'>Healthcare Services <br /> Provided</p>
                </div>

                {/* Impact 3 */}
                <div className='flex items-center justify-center flex-col gap-4'>
                    <PiStudent className='text-primary lg:text-7xl text-5xl' />
                    <h1 className='text-primary font-semibold lg:text-5xl text-2xl'>
                        <CountUp end={1300} duration={2} separator=',' />
                        +
                    </h1>
                    <p className='font-semibold lg:text-xl text-sm'>Students <br /> Supported</p>
                </div>

                {/* Impact 4 */}
                <div className='flex items-center justify-center flex-col gap-4'>
                    <FaHouseChimneyMedical className='text-primary lg:text-7xl text-5xl' />
                    <h1 className='text-primary font-semibold lg:text-5xl text-2xl'>
                        <CountUp end={17} duration={3} separator=',' />
                        +
                    </h1>
                    <p className='font-semibold lg:text-xl text-sm'>Environmental Projects <br /> Completed</p>
                </div>
            </div>
        </div>
    )
}

export default Impact
