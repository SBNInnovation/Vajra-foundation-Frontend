import LineDot from '@/shared/LineDot/LineDot'
import SharedTitle from '@/shared/SharedTitle'
import Image from 'next/image'
import React from 'react'

const Health = () => {
  return (
    <>
        <div className='w-full flex items-center justify-center h-[60vh] relative' style={{background:"url('https://images.unsplash.com/photo-1551892589-865f69869476?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",backgroundAttachment:"fixed",backgroundPosition:"center",backgroundSize:"cover"}}>
                <div className='absolute inset-0 bg-black/30'></div>
                <h1 className='text-white font-bold text-6xl z-[99]'>Our Success in Health</h1>   
        </div>
        <div className='w-full items-center justify-center flex flex-col gap-4 my-12 px-16 text-justify leading-8'>
            <div className='w-fit'>
                <SharedTitle title='Real stories, real change'/>
            </div>
            <h1 className='text-2xl sm:text-3xl md:text-4xl tracking-wide leading-8 text-center'>Health</h1>
            <div className='w-3/5'>
                <LineDot className='justify-center'/>
            </div>
            <p className='text-justify text-lg leading-10 text-gray-700'>
                The Vajra Foundation Nepal has been a transformative force in improving healthcare for Nepal&apos;s remote mountain communities. These regions often grapple with extreme poverty and limited access to medical facilities, resulting in low life expectancy and a high prevalence of untreated illnesses. Recognizing these challenges, Vajra initiated its mission by organizing health camps in areas accessible to local populations. These camps provided critical services, including medical checkups, distribution of essential medications, surgical procedures, dental care, and other vital healthcare interventions for underserved individuals.
            </p>
            <div className='flex gap-8 w-full'>
                <div className='w-1/2 h-[400px]'>
                    <Image src={'/Health1.webp'} alt='Health' height={1000} width={1000} className='object-cover h-full w-full rounded-md shadow-md'/> 
                </div>
                <p className='w-1/2 text-justify text-lg leading-10 text-gray-700'>
                    In 1998, Dutch physician Dr. Henk Becker volunteered at Vajra&apos;s first health camp in Sindhupalchowk. He documented common health issues and identified prevention strategies. This led to several initiatives, such as constructing latrines and clean water points to combat waterborne diseases. Local &quot;water committees&quot; were also formed to maintain these resources.

Vajra also focused on addressing indoor air pollution caused by traditional cooking practices. By helping families build wood-efficient stoves with chimneys, the foundation reduced harmful smoke exposure, improving respiratory health, especially for women and children.
                </p>
            </div>
                <p className='text-justify text-lg leading-10 text-gray-700'>
                    In 2002, Vajra launched a community health development program with support from the Simavi Foundation. This program trained local volunteers to provide basic healthcare and educate communities on hygiene, disease prevention, sanitation, family planning, and maternal care. Women&apos;s groups were formed to promote awareness on issues such as timely medical visits and the dangers of alcohol and drug abuse.
                </p>
                <p className='text-justify text-lg leading-10 text-gray-700'>

                    To enhance access to healthcare, Vajra converted a small health post in Barhabise into a fully operational hospital in 2001 and established five additional health posts in nearby villages. Vajra also arranged surgeries for women suffering from uterine prolapse and conducted awareness campaigns to prevent this condition.

    <br /> <br />Vajra&apos;s healthcare initiatives continue to improve the quality of life in Nepal&apos;s mountain communities, combining immediate medical assistance with long-term prevention efforts.
                </p>
            <div className='flex gap-4 w-full'>
                <div className='w-1/2 h-[500px]'>
                    <Image src={'/h2.webp'} alt='Health' height={1000} width={1000} className='object-cover h-full w-full rounded-md shadow-md'/> 
                </div>
                <div className='w-1/2 h-[500px]'>
                    <Image src={'/h3.webp'} alt='Health' height={1000} width={1000} className='object-cover h-full w-full rounded-md shadow-md'/> 
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Health
