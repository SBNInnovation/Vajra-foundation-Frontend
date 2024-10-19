"use client"
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Link } from '@nextui-org/react'
import { usePathname } from 'next/navigation';
import React from 'react'
import { IoMdArrowDropdown } from 'react-icons/io';

const Navbar = () => {
    const nav = [
        { title: "Home", link: "/" },
        { title: "Programs", link: "/programs",isDropdown:true },
        { title: "Objectives", link: "/objectives" },
        { title: "About Us", link: "/about-us" },
        { title: "Contact Us", link: "/contact-us" }
    ];
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;

    return (
        <main className='w-full bg-transparent fixed z-[99999] flex items-center justify-center'>
            <section className='w-[98%] rounded-md flex bg-white mt-2 items-center justify-between px-12 py-4  relative shadow-md'>
                <section className='flex gap-12 items-center'>
                    <div className='size-4 bg-gray-400 rounded-full'>

                    </div>
                    <section className='flex items-center gap-8 text-base font-semibold h-full'>
                        {nav.map((item, index) => (
                        item.isDropdown ? (
                            <Dropdown key={index} className='bg-primary/90 text-white z-[999999] rounded-sm ' placement='bottom-start'>
                                <DropdownTrigger>
                                    <div className="group relative cursor-pointer font-medium tracking-wide flex items-center gap-2">
                                        <p>{item.title}</p>
                                        <IoMdArrowDropdown size={18} />
                                        <span
                                            className={`absolute -bottom-0 left-0 h-[2px] bg-white transition-all ${
                                                isActive(item.link) ? 'w-[90%]' : 'w-0'
                                            } group-hover:w-4/5`}
                                        ></span>
                                    </div>
                                </DropdownTrigger>
                                <DropdownMenu aria-label="Resources Menu"  variant='light'>
                                    <DropdownItem key="health">
                                        <Link href="/programs/health"><p className='text-white hover:text-gray-100 hover:underline hover:underline-offset-2 transition-all duration-200'>Health</p></Link>
                                    </DropdownItem>
                                    <DropdownItem key="education">
                                        <Link href="/programs/education"><p className='text-white hover:text-gray-100 hover:underline hover:underline-offset-2 transition-all duration-200'>Education</p></Link>
                                    </DropdownItem>
                                    <DropdownItem key="environment">
                                        <Link href="/programs/environment"><p className='text-white hover:text-gray-100 hover:underline hover:underline-offset-2 transition-all duration-200'>Environment</p></Link>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        ) : (
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
                        )
                    ))}
                    </section>
                </section>
                <Button className='rounded-sm px-6 text-xs bg-primary text-white'>Donate Now</Button>
            </section>
        </main>
    )
}

export default Navbar
