import LineDot from '@/shared/LineDot/LineDot'
import SharedTitle from '@/shared/SharedTitle'
import { Button, Link } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

const Intro = () => {
  return (
    <div className='flex lg:flex-row flex-col items-center justify-between w-full lg:px-16 px-4 gap-8 lg:py-20 py-8 bg-[#F5FAF1]'>
        <section className='lg:w-3/5 w-full'>
            <SharedTitle title='See our details'/>
            <h1 className='text-3xl font-semibold tracking-wide'>Welcome to Vajra Foundations</h1>
            <LineDot/>
            <p className='text-justify lg:w-[90%] w-full my-4 lg:text-base text-sm lg:leading-8 leading-6 text-gray-600'>
              The Vajra Foundation Nepal supports the development of Nepal through projects in education, healthcare, and ecology. Our primary focus is on the impoverished mountain region of Sindhupalchowk. The Foundation designs and implements the projects, all aimed at progress and self-sufficiency. All staff members are volunteers.

Vajra builds schools, offers scholarships, and established its own private school in 2017, the Vajra Academy. The foundation has constructed numerous public water taps and latrines in remote mountain villages, and set up health posts to provide immediate medical assistance.  Vajra launched a community health development program focused on education and disease prevention. 

Vajra Foundation Nepal was established as the sister organization of the Vajra Foundation, which was founded in 1997 by Maarten Olthof, a biologist, Buddhist, and organizer of spiritual journeys to India and Nepal.
            </p>
            <div className="group w-fit">
              <Link href='/about-us'>
                <Button 
                  endContent={
                    <FaArrowRight className='transition duration-500 group-hover:translate-x-2' />
                  } 
                  className='rounded-sm bg-primary px-12 my-2 text-white flex items-center' 
                  aria-label="Learn more about us"
                >
                  More about us
                </Button>
              </Link>
          </div>

        </section>
        <section className='lg:w-2/5 w-full'>
          <div className='w-full lg:h-[450px] h-[300px] border-groove  border-t-[8px] border-r-[8px] border-t-primary/70 border-r-primary/70'>
            <Image src={"/intro.avif"} alt='intro' width={1000} height={1000} className='h-full w-full object-cover rounded-md shadow-md'/>
          </div>
        </section>
    </div>
  )
}

export default Intro
