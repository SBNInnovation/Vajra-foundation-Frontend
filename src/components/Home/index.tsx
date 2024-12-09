import SharedTitle from '@/shared/SharedTitle'
import React from 'react'
import { Button } from '@nextui-org/react'
import { FaBook, FaFacebookF, FaInstagram } from 'react-icons/fa'
import Intro from './Intro'
import Cause from './Cause'
import Impact from './Impact'
import Success from './Success'
import Link from 'next/link'

const MainHome = () => {
  return (
    <>
      <div className='w-full lg:h-[95vh] h-[70vh] relative' style={{background:"url('/edu2.avif')",backgroundAttachment:"scroll",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
      <div className='absolute inset-0 bg-black/20'></div>
        <section className='relative w-full lg:top-[30%] top-[20%] lg:px-24 px-4 flex gap-12'>
            <div className='relative lg:w-3/5 w-full  text-white flex flex-col gap-4 items-center justify-center'>
                <h1 className='lg:text-4xl text-2xl  italic lg:leading-20 leading-8'>
                  &quot;Empowering Communities, Changing Lives&quot;
                </h1>
                <div className='lg:mt-6 mt-2 flex self-start w-full'>
                  <SharedTitle title='Looking out for those in need'/>
                </div>
                <p className='w-full lg:text-lg text-sm'>Join us in creating lasting impact through education, health, and sustainable development. Together, we can build a brighter future for those in need.</p>
                <Button className='rounded-sm text-white bg-primary lg:w-2/5 w-3/5 flex self-start py-6 lg:mt-8 mt-4'>
                <Link href={'/donation'}>
                  Donate for a cause
                </Link>
                  </Button>
                <div className='flex items-center justify-start self-start gap-10 lg:mt-12 mt-6'>
                  <Link target='_blank' href={"https://www.facebook.com/profile.php?id=100063684874531"}>
                    <Button isIconOnly className='rounded-md border-2 border-white bg-transparent text-white'><FaFacebookF/></Button>
                  </Link>
                  <Link target='_blank' href={"https://www.instagram.com/vajraacademy/"}>
                    <Button isIconOnly className='rounded-md border-2 border-white bg-transparent text-white'><FaInstagram/></Button>
                  </Link>
                  <Link target='_blank' href={"https://vajraacademy.edu.np/"}>
                    <Button isIconOnly className='rounded-md border-2 border-white bg-transparent text-white'><FaBook/></Button>
                  </Link>
                </div>
            </div>
        </section>
      </div>
      <Intro/>
      <Cause/>
      <Impact/>
      <Success/>
    </>
  )
}

export default MainHome
