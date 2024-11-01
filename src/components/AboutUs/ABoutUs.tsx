import LineDot from '@/shared/LineDot/LineDot'
import SharedTitle from '@/shared/SharedTitle'
import React from 'react'
import { FaHandsHelping, FaDonate, FaTasks, FaRegChartBar } from 'react-icons/fa';

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
        <div className='w-full flex items-center justify-center h-[60vh] relative' style={{backgroundImage:"url('https://plus.unsplash.com/premium_photo-1681140560943-1c1736109b78?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",backgroundAttachment:"fixed",backgroundPosition:"center",backgroundSize:"cover"}}>
                <div className='absolute inset-0 bg-black/30'></div>
                <h1 className='text-white font-bold text-6xl z-[99]'>About Vajra</h1>   
        </div>
        <div className='w-full px-16 my-12'>
            <SharedTitle title='About Us'/>
            <h1 className='text-3xl font-semibold tracking-wide'>Vajra Foundation Nepal</h1>
            <div className='w-2/5'>
                <LineDot/>
            </div>
            <p className='text-justify my-8'>Our foundation is rooted in the belief that every individual deserves the opportunity to lead a healthy, educated, and fulfilling life in a sustainable environment. Guided by a commitment to meaningful impact, we address some of the most pressing challenges facing communities today: access to quality healthcare, inclusive education, and environmental sustainability. We work with local leaders, dedicated volunteers, and trusted partners to create programs that are not only impactful but also respectful of the communities we serve. </p>
            <p className='text-justify '>In the health sector, we strive to bring essential medical services, health education, and preventive care to underserved areas, ensuring that even the most remote communities have access to life-saving support. Through our educational initiatives, we provide scholarships, training, and resources, empowering individuals with knowledge and skills that open doors to a brighter future. Recognizing the urgent need to protect our planet, we also lead efforts in environmental conservation, from reforestation projects to waste reduction campaigns, helping communities adopt sustainable practices that safeguard their natural resources.</p>
            <p className='text-justify my-8'>Our work is driven by a shared vision of a better world—one where people are empowered, ecosystems are preserved, and sustainable development is a reality. With a passionate team and the support of our community, we are committed to building pathways for positive change, one step at a time. Together, we believe in creating a legacy of hope, resilience, and sustainable growth for future generations.</p>
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
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400 text-justify">
                            {item.description}
                        </p>
                        </div>
                    </div>
                    </li>
                ))}
                </ol>
            </div>
        </div>
        <div>
            
        </div>
        </>
    )
}

export default ABoutUs
