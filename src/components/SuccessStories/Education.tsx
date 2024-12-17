import LineDot from '@/shared/LineDot/LineDot'
import SharedTitle from '@/shared/SharedTitle'
import React from 'react'
import Image from 'next/image'
import { Button } from '@nextui-org/react'
import { CiGlobe } from 'react-icons/ci'
import Link from 'next/link'

const Education = () => {
  return (
    <>
        <div className='w-full flex items-center justify-center h-[60vh] relative' style={{background:"url('/VajraDroneShot.jpg')",backgroundAttachment:"fixed",backgroundPosition:"center",backgroundSize:"cover"}}>
                <div className='absolute inset-0 bg-black/30'></div>
                <h1 className='text-white font-bold text-6xl z-[99]'>Our Success in Education</h1>   
        </div>
        <div className='w-full items-center justify-center flex flex-col gap-4 my-12 px-16 text-justify leading-8'>
            <div className='w-fit'>
                <SharedTitle title='Education: The Foundation of Development'/>
            </div>
            <h1 className='text-2xl sm:text-3xl md:text-4xl tracking-wide leading-8 text-center'>Education</h1>
            <div className='w-3/5'>
                <LineDot className='justify-center'/>
            </div>
            <p className='text-justify text-lg leading-10 text-gray-700'>
                Development begins with quality education. If you truly want to combat poverty and underdevelopment, education becomes an essential focus. This principle has guided Vajra&apos;s efforts since its inception.

            </p>
            <h1 className='font-semibold text-2xl my-4 flex self-start'>Sponsoring students</h1>
            <p className='text-justify text-lg leading-10 text-gray-700'>
              For the past 15 years, sponsoring students has been one of Vajra&apos;s primary activities, and it remains a core focus. Vajra foundation Nepal&apos;s board identifies eligible students in mountain village schools based on their family circumstances, prioritizing children from economically disadvantaged backgrounds. The selection also considers the child&apos;s intelligence and motivation.

<br /> <br /> One unique aspect of this sponsorship program is the personal connection between donors and students. Donors are informed about the specific child they are supporting and often maintain direct communication with the students and their families, following their academic progress with great interest. The sponsorship commitment is typically for a minimum of five years, ensuring that students can complete their education. This personalized approach enriches the experience for both the donors and the students.
            </p>
            <div className='w-4/5 h-[500px]'>
                    <Image src={'/edu.webp'} alt='Health' height={1000} width={1000} className='object-cover h-full w-full rounded-md shadow-md'/> 
                </div>

            <h1 className='font-semibold text-2xl my-4 flex self-start'>Students at the Vajra Hostel in Kathmandu</h1>
            <p className='text-justify text-lg leading-10 text-gray-700'>
              Starting in 1999, Vajra collaborated with Merryland School, a private institution in Kathmandu. To support children from remote villages, Vajra opened its own hostel, the Vajra Hostel, in 2002. Students lived at the hostel and commuted to Merryland School by bus. After school, alumni assisted with homework, and activities like sports and recreation were organized, often with help from Dutch volunteers.

<br /><br /> When the Vajra Academy was established, the hostel was sold, and scholarship students began attending Vajra&apos;s own private school. Over the years, hundreds of children have received an education through Vajra&apos;s programs. Currently, approximately 150 students benefit from scholarships.
            </p>
            ̣<h1 className='font-semibold text-2xl my-4 flex self-start'>School construction</h1>
            <div className='flex gap-8 w-full'>
                <div className='w-1/2 h-[400px]'>
                    <Image src={'/spon-edu-3.webp'} alt='Health' height={1000} width={1000} className='object-cover h-full w-full rounded-md shadow-md'/> 
                </div>
                <p className='w-1/2 text-justify text-lg leading-10 text-gray-700'>
                    In the village of Ramche, located along the route from Kathmandu to Tibet in Sindhupalchowk, Vajra found an active group of villagers eager to bring positive change. They pledged to contribute to development projects, with the Nepalese government covering 20% of costs and the villagers contributing 5% through labor.
                </p>
            </div>
            ̣<h1 className='font-semibold text-2xl my-4 flex self-start'>Construction of one of six Vajra schools in the mountain village of Mankha.</h1>
                <p className='text-justify text-lg leading-10 text-gray-700'>
                    Over the last 20 years, Vajra has built six schools in Sindhupalchowk, benefiting approximately 3,300 students. These projects received support from students at TU Delft. Old school buildings were demolished and replaced with larger, earthquake-resistant structures, doubling the number of classrooms. The schools were also equipped with sanitation facilities, furniture, and educational materials.

Unfortunately, the devastating 2015 earthquake severely damaged several schools, including the one in Ramche, which had to be completely rebuilt. In 2008, Vajra Nepal also financed the construction of a school entirely through local efforts. Alumni of an old primary school in Barhabise raised funds to rebuild and expand it with a secondary education wing.

Vajra ensures that schools are handed over to the community during celebratory openings, with the local community managing them as government schools moving forward.
                </p>
                <div className='flex gap-4 items-center justify-start w-full'>
                    <h1 className='font-semibold text-2xl my-4 flex self-start'>The Vajra Academy</h1>
                    <Link href={'https://vajraacademy.edu.np/'} target='_blank'>
                        <Button startContent={<CiGlobe size={20} className='text-white'/>} className='bg-primary text-white rounded-sm shadow-md px-8' size='md'>Visit the website</Button>
                    </Link>
                </div>
                <p className='text-justify text-lg leading-10 text-gray-700'>

                  <strong>Opening of the Vajra Academy in 2007.</strong> 
Government schools in Nepal often face challenges, including poorly trained, underpaid teachers and low-quality education. Teaching methods rely on rote learning, leaving students with little room for independent thinking. To address this, Vajra envisioned a private school offering high-quality education where underprivileged students could also study alongside fee-paying students.

<br /> The Vajra Academy was established as Nepal&apos;s first “green” school, promoting not just academic learning but also environmental awareness and social responsibility. Students learn to respect nature and their surroundings while engaging with Vajra’s community projects and volunteers.

<br /> The Vajra Academy has now celebrated over ten years of excellence, setting a benchmark for education in Nepal. 


                </p>
            <div className='flex gap-4 w-full'>
                <div className='w-1/2 h-[500px]'>
                    <Image src={'/spon-edu2.webp'} alt='Health' height={1000} width={1000} className='object-cover h-full w-full rounded-md shadow-md'/> 
                </div>
                <div className='w-1/2 h-[500px]'>
                    <Image src={'/spon-edu-4.webp'} alt='Health' height={1000} width={1000} className='object-cover h-full w-full rounded-md shadow-md'/> 
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Education

