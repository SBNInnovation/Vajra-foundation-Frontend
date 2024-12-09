import LineDot from '@/shared/LineDot/LineDot'
import SharedTitle from '@/shared/SharedTitle'
import React from 'react'

const Privary = () => {
  return (
    <>
    <div className='w-full flex items-center justify-center h-[60vh] relative' style={{background:"url('https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg')",backgroundAttachment:"scroll",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
                <div className='absolute inset-0 bg-black/30'></div>
                <h1 className='text-white font-bold lg:text-6xl text-4xl z-[99]'>Privacy and Policies</h1>   
        </div>
        <div className='flex items-center justify-center flex-col gap-4 px-16 mt-12'>
          <div className='flex items-center justify-center w-fit'>
            <SharedTitle title='Privacy and Policies'/>
          </div>
            <h1 className='font-semibold text-2xl'>Policy Plan of the Vajra Foundation Nepal</h1>
            <div className='w-3/5 flex items-center justify-center'>
                <LineDot className='justify-center'/>
            </div>

            <div className=''>
                <p className='text-justify text-gray-600 leading-8'>Vajra Foundation Nepal is dedicated to creating a self-sustaining development organization in Nepal. This commitment ensures that all initiatives and projects are designed to be independent and locally owned, with the foundation actively participating and contributing to their success. Our long-term goal is to build a robust, sustainable organization that can continue to serve the community and support development efforts without reliance on external funding.  

</p>
            <h1 className='font-semibold text-xl my-4 mt-12'>Completed Projects </h1>
            <p>Over the first 15 years, Vajra Foundation implemented a variety of projects, always aligning them with Nepalese government plans to ensure complementary efforts.</p>
            <h1 className='font-semibold my-4'>Healthcare</h1>
            <ul className='list-disc ml-8'>
              <li className='list-outside'>Vajra built a hospital and four health posts.</li>
              <li className='list-outside my-2'>Around 50,000 people benefit from the latrines and water facilities constructed by Vajra.</li>
              <li className='list-outside'>As part of a large community health program, many health volunteers were trained, and 100 mother groups were formed to provide education on safe childbirth and child care, aiming to reduce child and maternal mortality.</li>
            </ul>
            <h1 className='font-semibold my-4'>Cooperative</h1>
            <ul className='list-disc ml-8'>
              <li className='list-outside'>The small savings program initiated in Ramche evolved into a model cooperative for all of Nepal. It began as a kitchen gardening project and grew to encompass nearly the entire village population, with members saving weekly. This cooperative now has its own office, a substantial fund, and encourages local trade initiatives. In 2012, it was recognized as a model for Nepal.</li>
            </ul>
            <h1 className='font-semibold my-4'>Solar Oven Project</h1>
            <ul className='list-disc ml-8'>
              <li className='list-outside'>The solar oven project in the Bhutanese refugee camps became the largest in the world. By 2008, 85,000 refugees used solar ovens to cook, saving 15 million kilograms of firewood annually and reducing CO2 emissions by 20,000 tons.</li>
            </ul>
            <h1 className='font-semibold my-4'>Education</h1>
            <ul className='list-disc ml-8'>
              <li className='list-outside'>Over 300 students received scholarships from Vajra, with many going on to university or finding good jobs, becoming role models for other youth in Nepal.</li>
              <li className='list-outside'>Vajra built nine schools over its 20 years, benefitting approximately 4,000 students. These schools were transferred to the Nepalese government, but the Vajra Foundation also established the Vajra Academy, which it continues to manage.</li>
            </ul>
            <h1 className='font-semibold text-xl my-4 mt-12'>Low Overhead</h1>
            <p>Vajra Foundation Nepal operates with an exceptionally low overhead of around 1%, thanks to the use of volunteers. This allows 100% of donations to go directly to projects in Nepal. None of the staff receive salaries or reimbursements. </p>
            <h1 className='font-semibold text-xl my-4 mt-12'>Future of Vajra Foundation Nepal </h1>
            <p>In the coming years, Vajra will focus on completing the Vajra Academy and establishing vocational education. The foundation will also work towards sustainable entrepreneurship, linked to education.

<br /> <br />A key goal is to further enhance the quality of education at the Vajra Academy, aiming to make it one of the best schools in Nepal and a model for environmental sustainability. The Academy hopes to receive an international &quot;Changemaker School&quot; designation, awarded to only about 260 schools globally, recognized for their ability to provide relevant 21st-century education.

<br /><br />Vajra Foundation Nepal&apos;s commitment to providing free education to students from disadvantaged backgrounds remains steadfast. This is embedded in the school&apos;s statutes, with one in four students receiving free education, funded partly by the parents of wealthier students.

<br /><br />Vajra Academy will continue to produce skilled graduates who will tackle Nepal&apos;s challenges with creativity and knowledge. They will not only find jobs but will also create work through sustainable entrepreneurship. In time, Vajra Nepal will gradually take over the sponsorship of underprivileged students, ensuring that places remain available for them at the Academy.

</p>
            </div>
        </div>
    </>
  )
}

export default Privary
