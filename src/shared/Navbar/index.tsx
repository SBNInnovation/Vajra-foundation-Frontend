"use client"
import { useState, useEffect, useRef } from 'react'
import { Button, Link } from '@nextui-org/react'
import { usePathname } from 'next/navigation';
import React from 'react'
import Image from 'next/image';
import { FaBars, FaTimes, FaWindowClose } from 'react-icons/fa';

const Navbar = () => {
    const nav = [
        { title: "Home", link: "/" },
        { title: "Programs", link: "/programs"},
        { title: "Success Stories", link: "/success-stories" },
        { title: "About Us", link: "/about-us" },
        { title: "Contact Us", link: "/contact-us" }
    ];
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const sidebarRef = useRef<HTMLDivElement>(null);

    const isActive = (path: string) => pathname === path;

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                sidebarRef.current && 
                !sidebarRef.current.contains(event.target as Node) &&
                isSidebarOpen
            ) {
                setIsSidebarOpen(false);
            }
        };

        // Add event listener when sidebar is open
        if (isSidebarOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        // Cleanup the event listener
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isSidebarOpen]);

    return (
        <>
            {/* Desktop Navbar */}
            <main className='w-full bg-transparent fixed z-[9] flex items-center justify-center'>
                <section className='w-[98%] rounded-md flex bg-white mt-2 items-center justify-between px-4 lg:px-12 py-4 relative shadow-md'>
                    <section className='flex gap-12 items-center'>
                        <div className='lg:h-12 h-8 lg:w-40 w-28 bg-gray-400 rounded-full'>
                            <Image src="/vajra.png" alt='logo' height={1000} width={1000} className='object-cover h-full w-full'/>
                        </div>
                        <section className='hidden md:flex items-center gap-8 text-base font-semibold h-full'>
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
                    <section className='hidden md:block'>
                        <Link href='/donation'>
                            <Button className='rounded-sm px-6 text-xs bg-primary text-white'>Donate Now</Button>
                        </Link>
                    </section>

                    {/* Mobile Hamburger */}
                    <button 
                        className='md:hidden z-[100] text-2xl'
                        onClick={toggleSidebar}
                    >
                        {isSidebarOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </section>
            </main>

            {/* Mobile Sidebar */}
            {/* Mobile Sidebar */}
            <div className={`
                fixed inset-0 bg-black/50 z-[9999] 
                transition-opacity duration-300 ease-in-out h-full
                ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                md:hidden
            `}>
                <div 
                    ref={sidebarRef}
                    className={`
                        fixed top-0 right-0 w-64 h-full bg-white 
                        transform transition-transform duration-300 ease-in-out
                        ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}
                        shadow-lg
                    `}
                >
                    <div className='p-6 h-full flex flex-col'>
                        <div className='flex justify-end items-center mb-8'>
                            <button 
                                onClick={toggleSidebar} 
                                className='text-3xl text-primary hover:text-gray-700 transition-colors'
                            >
                                <FaWindowClose />
                            </button>
                        </div>

                        <nav className='flex flex-col space-y-4 flex-grow'>
                            {nav.map((item, index) => (
                                <Link 
                                    key={index} 
                                    href={item.link} 
                                    onClick={toggleSidebar}
                                    className={`
                                        text-base font-semibold 
                                        ${isActive(item.link) ? 'text-primary' : 'text-black'}
                                        hover:text-primary transition-colors
                                    `}
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </nav>

                        {/* Move the "Donate Now" button to the bottom */}
                        <Link 
                            href='/donation' 
                            onClick={toggleSidebar}
                            className='mt-auto'
                        >
                            <Button className='w-full rounded-sm px-6 text-xs bg-primary text-white'>
                                Donate Now
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar