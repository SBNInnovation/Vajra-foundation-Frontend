import LineDot from '@/shared/LineDot/LineDot'
import SharedTitle from '@/shared/SharedTitle'
import React from 'react'
import SuccessCardSlider from './SuccessCardSlider'

const Success = () => {
    return (
        <main className='px-4 sm:px-8 md:px-16 py-4 pb-12 bg-[#F5FAF1] flex flex-col gap-4 items-center justify-center'>
            <div className='flex items-center justify-center'>
                <SharedTitle title='Real stories, real change'/>
            </div>
            <h1 className='text-2xl sm:text-3xl md:text-4xl tracking-wide leading-8 text-center'>
                Our success stories
            </h1>
            <div className='flex items-center justify-center w-full sm:w-3/4 md:w-2/3 lg:w-2/5'>
                <LineDot className='justify-center'/>
            </div>
            <p className='text-gray-700 text-justify px-4 sm:px-8 md:px-12'>
                Our success stories highlight the transformative impact of our efforts in health, education, and environmental sustainability. These personal accounts from individuals and communities showcase how our programs have improved lives—whether it&apos;s through access to vital healthcare services, educational opportunities that open doors to a brighter future, or initiatives that protect and restore the environment. Each story reflects the resilience of those we serve and the lasting change that collective action can bring. Join us in celebrating the inspiring journeys of people whose lives have been forever changed by our mission.
            </p>
            <div className='w-[110%]'>
                <SuccessCardSlider/>
            </div>
        </main>
    )
}

export default Success