import { Button } from '@nextui-org/react'
import React from 'react'

const Navbar = () => {
    return (
        <main className='w-full bg-transparent fixed z-[99999] flex items-center justify-center'>
            <section className='w-[98%] rounded-md flex bg-white mt-2 items-center justify-between px-12 py-4  relative shadow-md'>
                <section className='flex gap-12 items-center'>
                    <div className='size-4 bg-gray-400 rounded-full'>

                    </div>
                    <section className='flex items-center gap-8 text-base font-semibold h-full'>
                        <p>Home</p>
                        <p>Programs</p>
                        <p>Objectives</p>
                        <p>About Us</p>
                        <p>Contact Us</p>
                    </section>
                </section>
                <Button className='rounded-sm px-6 text-xs bg-primary text-white'>Donate Now</Button>
            </section>
        </main>
    )
}

export default Navbar
