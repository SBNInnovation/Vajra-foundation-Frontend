import SharedTitle from '@/shared/SharedTitle'
import React from 'react'
import Image from 'next/image'
import { Button } from '@nextui-org/react'

const MainHome = () => {
  return (
    <div className='w-full h-[95vh] relative' style={{background:"url('/edu.avif')",backgroundAttachment:"fixed",backgroundPosition:"top",backgroundSize:"cover"}}>
      <section className='relative w-full top-[30%] px-16 flex gap-12'>
          <div className='relative w-3/5  text-white flex flex-col gap-4 items-center justify-center'>
              <h1 className='text-4xl  italic leading-20'>
                "Empowering Communities, Changing Lives"
              </h1>
              <div className='mt-6 flex self-start w-full'>
                <SharedTitle title='Looking out for those in need'/>
              </div>
              <p className='w-full'>Join us in creating lasting impact through education, health, and sustainable development. Together, we can build a brighter future for those in need.</p>
              <Button className='rounded-sm text-white bg-primary w-2/5 flex self-start py-6 mt-8'>Donate for a cause</Button>
          </div>
      </section>
    </div>
  )
}

export default MainHome
