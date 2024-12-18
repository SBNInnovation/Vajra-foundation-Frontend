import LineDot from '@/shared/LineDot/LineDot'
import SharedTitle from '@/shared/SharedTitle'
import React from 'react'
import { FaHandsHelping, FaDonate, FaTasks, FaRegChartBar } from 'react-icons/fa';
import AboutSlider from './AboutSlider';
import Image from 'next/image';
import { Button } from '@nextui-org/react';
import Link from 'next/link';

const ABoutUs = () => {
    const timelineData = [
        {
        title: "Awareness and Engagement",
        date: "Step 1",
        description: "We begin by raising awareness about the causes we support, engaging potential donors through stories of impact and the pressing needs of the communities we serve.",
        icon: <FaHandsHelping className="w-5 h-5 text-white" />
        },
        {
        title: "Donation Collection",
        date: "Step 2",
        description: "With the generosity of our supporters, we collect funds through various channels—online donations, events, and partnerships—to ensure resources reach those in need.",
        icon: <FaDonate className="w-5 h-5 text-white" />
        },
        {
        title: "Allocation and Implementation",
        date: "Step 3",
        description: "Every donation is thoughtfully allocated to impactful programs. Our team works closely with local partners to implement projects in health, education, and environmental sustainability.",
        icon: <FaTasks className="w-5 h-5 text-white" />
        },
        {
        title: "Reporting and Transparency",
        date: "Step 4",
        description: "We prioritize transparency by providing detailed reports and updates to donors, showing exactly how their contributions have transformed lives and communities.",
        icon: <FaRegChartBar className="w-5 h-5 text-white" />
        }
    ];
    return (
        <>
        <div className='w-full flex items-center justify-center h-[60vh] relative' style={{backgroundImage:"url('https://images.unsplash.com/photo-1584324127278-b0ad4aba28b4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGxhbnQlMjB0cmVlc3xlbnwwfHwwfHx8Mg%3D%3D')",backgroundAttachment:"fixed",backgroundPosition:"center",backgroundSize:"cover"}}>
                <div className='absolute inset-0 bg-black/30'></div>
                <h1 className='text-white font-bold text-6xl z-[99]'>About Vajra</h1>   
        </div>
        <div className='w-full px-16 mt-12'>
            <SharedTitle title='About Us'/>
            <h1 className='text-3xl font-semibold tracking-wide'>Vajra Foundation Nepal</h1>
            <div className='w-2/5'>
                <LineDot/>
            </div>
            <p className='text-justify mt-8'>The Vajra Foundation Nepal supports the development of Nepal through projects in education, healthcare, and ecology. Our primary focus is on the impoverished mountain region of Sindhupalchowk. The Foundation designs and implements the projects, all aimed at progress and self-sufficiency. All staff members are volunteers.

<br /><br /> Vajra builds schools, offers scholarships, and established its own private school in 2017, the Vajra Academy. The foundation has constructed numerous public water taps and latrines in remote mountain villages, and set up health posts to provide immediate medical assistance.  Vajra launched a community health development program focused on education and disease prevention. 

<br /><br /> Vajra Foundation Nepal was established as the sister organization of the Vajra Foundation, which was founded in 1997 by Maarten Olthof, a biologist, Buddhist, and organizer of spiritual journeys to India and Nepal.</p>
        </div>
        <div className="w-full px-4 md:px-16 py-12">
            <div className="w-full px^16 mx-auto">
                <SharedTitle title="Little Steps" />
                <h1 className="text-2xl md:text-3xl font-semibold tracking-wide mb-6">
                A concrete help for a better and kind world
                </h1>
                <div className="w-4/5">
                <LineDot />
                </div>
                
                <ol className="relative grid grid-cols-1 gap-8 sm:grid-cols-4 my-8">
                {timelineData.map((item, index) => (
                    <li key={index} className="relative">
                    <div className="flex flex-col items-center sm:items-start">
                        <div className="flex items-center mb-4">
                        <div className="z-10 flex items-center justify-center w-10 h-10 bg-primary rounded-full ring-4 ring-white dark:ring-gray-900 shrink-0">
                            {item.icon}
                        </div>
                        {index < timelineData.length - 1 && (
                            <div className="hidden sm:block w-full h-0.5 bg-gray-200 dark:bg-gray-700" />
                        )}
                        </div>
                        <div className="text-center sm:text-left">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {item.title}
                        </h3>
                        <time className="block mb-2 text-sm font-normal text-gray-400 dark:text-gray-500">
                            {item.date}
                        </time>
                        <p className="text-base font-normal text-gray-800 dark:text-gray-400 text-justify">
                            {item.description}
                        </p>
                        </div>
                    </div>
                    </li>
                ))}
                </ol>
            </div>
        </div>
        <AboutSlider/>
        <div className="w-full my-20 mt-32 flex justify-center relative px-16">
                <div className="relative w-full h-[600px] mb-12 flex gap-12">
                    
                    <div className="w-1/2">
                        <div className='w-full h-[200px] mb-12'>
                            <Image 
                                src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                                alt='Help' 
                                height={1000} 
                                width={1000} 
                                className='object-cover h-full w-full rounded-sm shadow-md'
                            />
                        </div>
                        <SharedTitle title="Our Mission" />
                        <h1 className="text-3xl font-semibold tracking-wide">What we aim for?</h1>
                        <div className="w-4/5">
                            <LineDot />
                        </div>
                        <p className="text-justify my-8 text-gray-700">
                            Our mission is to drive meaningful change by empowering communities through health, education, and environmental initiatives. We believe in sustainable development, where everyone has access to essential resources, quality education, and a clean, safe environment. Guided by compassion and commitment, we work alongside local leaders and global partners to address pressing challenges and foster resilience. Through targeted programs and dedicated support, we aim to uplift lives and create a future where communities can thrive with dignity and opportunity.
                        </p>
                    </div>

                    <div className="w-1/2">
                        <SharedTitle title="Our Story" />
                        <h1 className="text-3xl font-semibold tracking-wide">Our Story</h1>
                        <div className="w-4/5">
                            <LineDot />
                        </div>
                        <p className="text-justify my-8 text-gray-700">
                            Our story began with a vision to create lasting change and uplift communities in need. Driven by a deep commitment to addressing issues in health, education, and the environment, our founders embarked on a journey to bridge gaps and bring sustainable solutions to vulnerable populations. Over the years, we have grown into a dedicated team of changemakers, partnering with local leaders and global supporters to reach those who need it most. Every step of our journey is inspired by the people we serve, and we remain dedicated to building a brighter, healthier, and more equitable world for all.
                        </p>
                        <div className='w-full h-[200px]'>
                            <Image 
                                src="/help.avif" 
                                alt='Help' 
                                height={1000} 
                                width={1000} 
                                className='object-cover h-full w-full rounded-sm shadow-md'
                            />
                        </div>
                    </div>
                </div>
            </div>
                
            <div className='h-[400px] relative mb-12 mx-16 rounded-md' style={{backgroundImage:"url('https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",backgroundAttachment:"fixed",backgroundPosition:"center",backgroundSize:"cover"}}>
                <div className='absolute inset-0 bg-black/50 rounded-md'></div>
                <div className='z-[100] absolute w-full h-fit my-12  flex flex-col items-center justify-center'>
                    <h1 className="text-5xl font-bold text-white tracking-wide">Make a difference today</h1>
                    <p className='text-justify my-8 text-white w-3/4'>Your support has the power to change lives and uplift communities. By contributing, you&apos;re not just giving resources; you&apos;re giving hope, health, and opportunity to those who need it most. Our organization is committed to using every donation to make a tangible impact, funding essential projects in healthcare, education, and environmental preservation. Whether it&apos;s providing meals to families, enabling education for children, or supporting sustainable practices, your generosity fuels positive change.

                    Every gift, no matter the size, is a step toward a brighter, more equitable future. Join us in our mission to create lasting change—donate today and become part of a global community dedicated to a better tomorrow.
                    </p>
                    <Link href="/donation">
                        <Button className='rounded-sm text-white bg-primary px-16'>Donate Now</Button>
                    </Link>

                </div>
            </div>


        </>
    )
}

export default ABoutUs
