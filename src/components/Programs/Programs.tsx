import SharedTitle from '@/shared/SharedTitle';
import React from 'react'
import Image from 'next/image';
import LineDot from '@/shared/LineDot/LineDot';
import { FaBook, FaHeart, FaLeaf } from 'react-icons/fa';

const Programs = () => {
    const areasOfHelp = [
    {
        title: "Health",
        miniTitle: "Promoting Well-Being",
        description: "Health is the cornerstone of every thriving community. At our NGO, we strive to bridge the gap in healthcare accessibility for underserved populations. Our mobile clinics travel to remote villages, bringing essential medical care, vaccinations, and health screenings to those who would otherwise go without. We partner with local healthcare professionals to deliver maternal and child health programs, ensuring a safe start to life for infants and better health outcomes for mothers. Beyond direct medical care, we conduct widespread health education campaigns to teach communities about hygiene, nutrition, and the prevention of common diseases. Clean water and sanitation are at the heart of our health initiatives, with projects that construct wells, install filtration systems, and educate communities on the importance of safe water practices. Through these efforts, we aim to build a future where no one is denied the basic right to health and well-being.",
        image: "https://images.unsplash.com/photo-1599045118108-bf9954418b76?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvc3BpdGFsfGVufDB8fDB8fHwy",
        icon: <FaHeart size={34}/> 
    },
    {
        title: "Education",
        miniTitle: "Empowering Through Knowledge",
        description: "Education is a powerful tool for social transformation and a fundamental right for every child. Through our education initiatives, we focus on making quality education accessible to all, especially girls and children from marginalized communities. Our scholarship programs provide financial assistance to children who face barriers to continuing their education. Additionally, we equip schools with essential learning materials, from books and stationery to modern digital tools, creating an environment where students can excel. Teacher training workshops ensure educators are well-prepared to inspire and guide the next generation. Beyond formal education, we run community learning programs aimed at teaching vocational skills, literacy, and financial management to adults and youths. By fostering a love for learning and empowering individuals with knowledge, we are breaking the cycle of poverty and paving the way for a future of opportunity and growth.",
        image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNjaG9vbHxlbnwwfHwwfHx8Mg%3D%3D",
        icon: <FaBook size={34} />
    },
    {
        title: "Environment",
        miniTitle: "Preserving Nature",
        description: "The environment is the foundation of life, and its preservation is essential for the survival of future generations. Our environmental programs aim to restore balance to ecosystems through innovative and community-driven initiatives. Reforestation projects are at the heart of our efforts, with thousands of trees planted to combat deforestation and soil erosion. We work closely with local communities to promote sustainable farming techniques, encouraging practices that enrich the soil and preserve biodiversity. Waste management programs educate the public on reducing, reusing, and recycling to minimize the impact of waste on the environment. Additionally, we conduct workshops and campaigns to raise awareness about climate change and the importance of conserving natural resources. By empowering individuals to act as stewards of the planet, we are building a movement for environmental sustainability and resilience. Together, we can ensure that the earth remains vibrant and thriving for generations to come.",
        image: "https://images.unsplash.com/photo-1697992350862-acb64ab92414?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        icon: <FaLeaf size={34}/> 
    }
];

  return (
    <>
        <div className='w-full flex items-center justify-center h-[60vh] relative' style={{background:"url('https://images.unsplash.com/photo-1668709078432-b4e07f7e63c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmdvfGVufDB8fDB8fHwy')",backgroundAttachment:"fixed",backgroundPosition:"center",backgroundSize:"cover"}}>
                <div className='absolute inset-0 bg-black/30'></div>
                <h1 className='text-white font-bold text-6xl z-[99]'>Our Programs</h1>   
        </div>
        <div className='flex flex-col gap-6'>
            {areasOfHelp.map((area, index) => (
                <section key={index} className='flex px-16 items-start justify-center gap-12 w-full my-12'>
                    <div className=' w-1/2 flex flex-col'>
                        <SharedTitle title={area.title}/>
                        <h1 className={` font-semibold text-4xl`}>{area.miniTitle}</h1>
                        <LineDot className='justify-start'/>
                        <p className='text-gray-700 text-justify'>{area.description}</p>
                    </div>
                    <div className='w-1/2 relative'>
                        <div className='size-[4rem] absolute z-[10] top-1/2 -left-8 text-white bg-primary rounded-full shadow-md p-4'>{area.icon}</div>
                        <Image src={area.image} alt={area.title} height={1000} width={1000} className='object-cover h-full w-full shadow-md rounded-md group'/>
                    </div>
                </section>
            ))}
        </div>
    </>
  )
}

export default Programs
