import LineDot from '@/shared/LineDot/LineDot'
import SharedTitle from '@/shared/SharedTitle'
import { Button } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

const Intro = () => {
  return (
    <div className='flex items-center justify-between w-full px-16 gap-8 py-20 bg-[#F5FAF1]'>
        <section className='w-3/5'>
            <SharedTitle title='See our details'/>
            <h1 className='text-3xl font-semibold tracking-wide'>Welcome to Vajra Foundations</h1>
            <LineDot/>
            <p className='text-justify w-[90%] my-4 text-base leading-8 text-gray-600'>Our foundation is driven by a deep commitment to improving lives in underserved communities. Focused on three vital pillars—health, education, and environmental sustainability—we work tirelessly to create meaningful and lasting change. By providing access to healthcare, advancing educational opportunities, and promoting sustainable environmental practices, we empower individuals and communities to thrive.

            With the support of our dedicated team, volunteers, and partners, we aim to build a world where everyone has the opportunity to lead healthier, more educated lives in harmony with a cleaner, greener planet. Together, we believe in the power of collective action to create a brighter future for all.
            </p>
            <div className="group w-fit">
              <Button 
                endContent={
                  <FaArrowRight className='transition duration-500 group-hover:translate-x-2' />
                } 
                className='rounded-sm bg-primary px-12 my-2 text-white flex items-center' 
                aria-label="Learn more about us"
              >
                More about us
              </Button>
          </div>

        </section>
        <section className='w-2/5'>
          <div className='w-full h-[450px] border-groove  border-t-[8px] border-r-[8px] border-t-primary/70 border-r-primary/70'>
            <Image src={"/intro.avif"} alt='intro' width={1000} height={1000} className='h-full w-full object-cover rounded-md shadow-md'/>
          </div>
        </section>
    </div>
  )
}

export default Intro
