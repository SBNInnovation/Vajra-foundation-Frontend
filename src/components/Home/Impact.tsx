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
        <div className='bg-[#F5FAF1] px-16 py-12 w-full flex items-center justify-start flex-col'>
            <div className='flex items-center justify-center'>
                <SharedTitle title='Every small impact matters' />
            </div>
            <h1 className='font-semibold text-5xl tracking-wide my-4'>Our Impacts</h1>
            <LineDot className='justify-center' />
            <p className='text-justify w-[90%]'>
                Through our dedicated efforts, we have touched countless lives by improving access to healthcare, empowering individuals through education, and fostering sustainable environmental practices. Our work has created positive, lasting change in communities, helping build a healthier, more educated, and eco-friendly future for generations to come.
            </p>

            <div className='w-[90%] py-4 flex items-center justify-between my-12'>
                {/* Impact 1 */}
                <div className='flex items-center justify-center flex-col gap-4'>
                    <FaHouseChimneyMedical className='text-primary' size={60} />
                    <h1 className='text-primary font-semibold text-5xl'>
                        <CountUp end={2100} duration={2} separator=',' />
                        +
                    </h1>
                    <p className='font-semibold text-xl'>Households <br /> reached</p>
                </div>

                {/* Impact 2 */}
                <div className='flex items-center justify-center flex-col gap-4'>
                    <MdOutlineHealthAndSafety className='text-primary' size={60} />
                    <h1 className='text-primary font-semibold text-5xl'>
                        <CountUp end={17000} duration={2} separator=',' />
                        +
                    </h1>
                    <p className='font-semibold text-xl'>Healthcare Services <br /> Provided</p>
                </div>

                {/* Impact 3 */}
                <div className='flex items-center justify-center flex-col gap-4'>
                    <PiStudent className='text-primary' size={60} />
                    <h1 className='text-primary font-semibold text-5xl'>
                        <CountUp end={1300} duration={2} separator=',' />
                        +
                    </h1>
                    <p className='font-semibold text-xl'>Students <br /> Supported</p>
                </div>

                {/* Impact 4 */}
                <div className='flex items-center justify-center flex-col gap-4'>
                    <FaHouseChimneyMedical className='text-primary' size={60} />
                    <h1 className='text-primary font-semibold text-5xl'>
                        <CountUp end={17} duration={3} separator=',' />
                        +
                    </h1>
                    <p className='font-semibold text-xl'>Environmental Projects <br /> Completed</p>
                </div>
            </div>
        </div>
    )
}

export default Impact
