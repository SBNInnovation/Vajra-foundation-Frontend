import SharedTitle from '@/shared/SharedTitle'
import React from 'react'
import { Button } from '@nextui-org/react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { RiTwitterXLine } from 'react-icons/ri'
import Intro from './Intro'
import Cause from './Cause'
import Impact from './Impact'

const MainHome = () => {
  return (
    <>
      <div className='w-full h-[95vh] relative' style={{background:"url('/edu2.avif')",backgroundAttachment:"fixed",backgroundPosition:"bottom",backgroundSize:"cover"}}>
      <div className='absolute inset-0 bg-black/20'></div>
        <section className='relative w-full top-[30%] px-24 flex gap-12'>
            <div className='relative w-3/5  text-white flex flex-col gap-4 items-center justify-center'>
                <h1 className='text-4xl  italic leading-20'>
                  &quot;Empowering Communities, Changing Lives&quot;
                </h1>
                <div className='mt-6 flex self-start w-full'>
                  <SharedTitle title='Looking out for those in need'/>
                </div>
                <p className='w-full'>Join us in creating lasting impact through education, health, and sustainable development. Together, we can build a brighter future for those in need.</p>
                <Button className='rounded-sm text-white bg-primary w-2/5 flex self-start py-6 mt-8'>Donate for a cause</Button>
                <div className='flex items-center justify-start self-start gap-10 mt-12'>
                  <Button isIconOnly className='rounded-md border-2 border-white bg-transparent text-white'><FaFacebookF/></Button>
                  <Button isIconOnly className='rounded-md border-2 border-white bg-transparent text-white'><FaInstagram/></Button>
                  <Button isIconOnly className='rounded-md border-2 border-white bg-transparent text-white'><RiTwitterXLine/></Button>
                </div>
            </div>
        </section>
      </div>
      <Intro/>
      <Cause/>
      <Impact/>
    </>
  )
}

export default MainHome
