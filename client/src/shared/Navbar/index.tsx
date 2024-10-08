import { Button } from '@nextui-org/react'
import React from 'react'

const Navbar = () => {
  return (
    <main >
        <section className='flex items-center justify-between px-12 py-4  relative shadow-md'>
            <div className='size-4 bg-gray-400 rounded-full'>

            </div>
            <section className='flex items-center gap-8 text-lg font-semibold h-full'>
                <p className='h-full'>Home</p>
                <p>Programs</p>
                <p>Objectives</p>
                <p>About Us</p>
                <p>Contact Us</p>
            </section>
            <Button className='rounded-sm px-6 text-xs'>Donate Now</Button>
        </section>
    </main>
  )
}

export default Navbar
