import LineDot from '@/shared/LineDot/LineDot'
import SharedTitle from '@/shared/SharedTitle'
import React from 'react'
import Image from 'next/image'

const Environment = () => {
  return (
    <>
        <div className='w-full flex items-center justify-center h-[60vh] relative' style={{background:"url('/env-4.webp')",backgroundAttachment:"fixed",backgroundPosition:"center",backgroundSize:"cover"}}>
                <div className='absolute inset-0 bg-black/30'></div>
                <h1 className='text-white font-bold text-6xl z-[99]'>Our Success in Environment</h1>   
        </div>
        <div className='w-full items-center justify-center flex flex-col gap-4 my-12 px-16 text-justify leading-8'>
            <div className='w-fit'>
                <SharedTitle title='Real stories, real change'/>
            </div>
            <h1 className='text-2xl sm:text-3xl md:text-4xl tracking-wide leading-8 text-center'>Sustainable Solar</h1>
            <div className='w-3/5'>
                <LineDot className='justify-center'/>
            </div>
            <p className='text-justify text-lg leading-10 text-gray-700'>
                The Vajra Foundation Nepal is dedicated to creating a sustainable future by addressing critical environmental issues such as deforestation, waste management, and the promotion of renewable energy. By integrating innovative solutions with active community participation, the foundation is making significant strides in preserving Nepal&apos;s natural resources for future generations.
            </p>
            <h1 className='font-semibold text-2xl my-4 flex self-start'>The World&apos;s Largest Solar Cooker Project</h1>
            <p className=' text-justify text-lg leading-10 text-gray-700'>
                    In 1997, Maarten Olthof, the Vajra foundation&apos;s founder, learned at an international conference about the immense potential of solar cookers in regions with severe fuel scarcity. This insight led to the creation of a solar cooker production workshop in the Beldangi-1 refugee camp in eastern Nepal. By 1999, solar cookers were being used by around 2,500 people, and the initiative expanded to include insulated hay boxes for slow cooking and food storage. The project not only provided clean cooking solutions but also generated employment by training refugees to produce solar cookers. By 2006, the initiative had grown to serve over 85,000 people, making it the largest solar cooking project in the world. When the refugees resettled, the solar cookers were distributed to local communities, ensuring the long-term benefits of the project.
                </p>
            <h1 className='font-semibold text-2xl my-4 flex self-start'>Innovative Solar Cooking Solutions</h1>
            <div className='flex gap-8 w-full'>
                <div className='w-1/2 h-[400px]'>
                    <Image src={'/evn01.jpg'} alt='Health' height={1000} width={1000} className='object-cover h-full w-full rounded-md shadow-md'/> 
                </div>
                <p className='w-1/2 text-justify text-lg leading-10 text-gray-700'>
                    Building on the success of the refugee camp initiative, Vajra Foundation has continued to innovate in solar cooking technology. At the Vajra Academy, a solar kitchen with 10 parabolic dishes was established to showcase solar cooking to students and the broader community. Additionally, the Vajra Eco Resort introduced an advanced oil-based solar cooking system, improving cooking efficiency. These innovations have inspired local communities and helped promote sustainable practices in Nepal.
                </p>
                
            </div>
            <h1 className='font-semibold text-2xl my-4 flex self-start'>Global Recognition and Solar Expeditions   </h1>
                <p className='text-justify text-lg leading-10 text-gray-700'>
                    Vajra&apos;s solar cooking projects have earned international acclaim. In 2013, Maarten Olthof led the first Solar Expedition in the Himalayas, where portable solar cookers were used to prepare meals for 25 participants in extreme conditions. In 2017, Vajra&apos;s initiative, which served 85,000 users, was highlighted at the 6th World Conference on Solar Cooking as the largest solar cooking program worldwide.
                </p>
            <h1 className='font-semibold text-2xl my-4 flex self-start'>Environmental Campaigns: Raising Awareness and Driving Change </h1>
            <Image src={'/env-2.webp'} alt='Health' height={1000} width={1000} className='object-cover h-[500px] w-4/5 rounded-md shadow-md'/>
                <p className='text-justify text-lg leading-10 text-gray-700'>

                In addition to solar cooking, Vajra Foundation is committed to environmental protection through various campaigns. One such initiative is the “Tie the Trash” campaign, which aims to tackle plastic waste by turning it into ropes. The goal is to encircle Kathmandu&apos;s Ring Road with a rope made from plastic waste, raising awareness about recycling and reducing plastic pollution. This ongoing campaign continues to inspire local communities to take action.



    <br /> <br />The foundation is also actively involved in tree planting and environmental cleanup efforts, working with local communities to restore forests, protect biodiversity, and improve life in rural areas. Through these programs, Vajra Foundation is creating a cleaner, greener Nepal.
                </p>
            <h1 className='font-semibold text-2xl my-4 flex self-start'>A Vision for a Sustainable Future</h1>
            <p className='text-justify text-lg leading-10 text-gray-700'>
                    Vajra Foundation Nepal is committed to promoting sustainable practices that protect the environment and enhance the well-being of Nepalese communities. With innovative projects like solar cooking, waste management campaigns, and community-driven environmental efforts, the foundation is laying the groundwork for a healthier and more sustainable future. This work is focused not just on addressing immediate environmental challenges but also on creating lasting change that will benefit generations to come.
                </p>
            <div className='flex gap-4 w-full'>
                <div className='w-1/2 h-[500px]'>
                    <Image src={'/env-3.webp'} alt='Health' height={1000} width={1000} className='object-cover h-full w-full rounded-md shadow-md'/> 
                </div>
                <div className='w-1/2 h-[500px]'>
                    <Image src={'/env-4.webp'} alt='Health' height={1000} width={1000} className='object-cover h-full w-full rounded-md shadow-md'/> 
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Environment
