"use client"
import { Button,Link } from '@nextui-org/react'
import { usePathname } from 'next/navigation';
import React from 'react'
import Image from 'next/image';

const Navbar = () => {
    const nav = [
        { title: "Home", link: "/" },
        { title: "Programs", link: "/programs"},
        { title: "Success Stories", link: "/success-stories" },
        { title: "About Us", link: "/about-us" },
        { title: "Contact Us", link: "/contact-us" }
    ];
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;

    return (
        <main className='w-full bg-transparent fixed z-[99999] flex items-center justify-center'>
            <section className='w-[98%] rounded-md flex bg-white mt-2 items-center justify-between px-12 py-4  relative shadow-md'>
                <section className='flex gap-12 items-center'>
                    <div className='h-12 w-40 bg-gray-400 rounded-full'>
                        <Image src="/vajra.png" alt='logo' height={1000} width={1000} className='object-cover h-full w-full'/>
                    </div>
                    <section className='flex items-center gap-8 text-base font-semibold h-full'>
                        {nav.map((item, index) => (
                            <Link key={index} href={item.link}>
                                <div className="group relative text-black">
                                    <p>{item.title}</p>
                                    <span
                                        className={`absolute -bottom-0 left-0 h-[2px] bg-primary transition-all ${
                                            isActive(item.link) ? 'w-full' : 'w-0'
                                        } group-hover:w-full`}
                                    ></span>
                                </div>
                            </Link>
                    ))}
                    </section>
                </section>
                <Link href='/donation'>
                    <Button className='rounded-sm px-6 text-xs bg-primary text-white'>Donate Now</Button>
                </Link>
            </section>
        </main>
    )
}

export default Navbar
