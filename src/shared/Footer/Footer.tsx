import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SharedTitle from '../SharedTitle'
import LineDot from '../LineDot/LineDot'
import { Button, Divider } from '@nextui-org/react'
import { FaBook, FaFacebookF, FaInstagram } from 'react-icons/fa'

const Footer = () => {
    const date = new Date().getFullYear()
    return (
        <main className='w-full relative bottom-0 py-8 px-4 md:px-16'>
            <div className='flex flex-col items-center justify-center'>
                <div className='flex items-center justify-center'>
                    <SharedTitle title='Social media links'/>
                </div>
                <h1 className='text-center font-semibold text-2xl md:text-4xl px-4'>
                    Connect with us in various media
                </h1>
                <LineDot className='justify-center'/>
                
                {/* Social Media Links - Responsive Flex Wrap */}
                <div className='w-full'>
                    <div className='flex flex-wrap items-center justify-center self-start gap-8 md:gap-16 mt-8 md:mt-12'>
                        <div className='flex flex-col gap-2 items-center justify-center'>
                            <Link target='_blank' href={"https://www.facebook.com/profile.php?id=100063684874531"} 
                                  className='flex flex-col gap-2 items-center justify-center'>
                                <Button size='lg' isIconOnly 
                                        className='rounded-md border-2 text-xl border-primary bg-transparent text-primary'>
                                    <FaFacebookF/>
                                </Button>
                                <span className='font-semibold text-sm'>Facebook</span>
                            </Link>
                        </div>
                        <div className='flex flex-col gap-2 items-center justify-center'>
                            <Link target='_blank' href={"https://www.instagram.com/vajraacademy/"} 
                                  className='flex flex-col gap-2 items-center justify-center'>
                                <Button size='lg' isIconOnly 
                                        className='rounded-md border-2 text-xl border-primary bg-transparent text-primary'>
                                    <FaInstagram/>
                                </Button>
                                <span className='font-semibold text-sm'>Instagram</span>
                            </Link>
                        </div>
                        <div className='flex flex-col gap-2 items-center justify-center'>
                            <Link target='_blank' href={"https://vajraacademy.edu.np/"} 
                                  className='flex flex-col gap-2 items-center justify-center'>
                                <Button size='lg' isIconOnly 
                                        className='rounded-md border-2 text-xl border-primary bg-transparent text-primary'>
                                    <FaBook/>
                                </Button>
                                <span className='font-semibold text-sm'>Vajra Academy</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Logo - Responsive Sizing */}
                <div className='lg:h-12 h-8 lg:w-40 w-28 mt-12 mb-4 rounded-full'>
                    <Image 
                        src="/vajra.png" 
                        alt='logo' 
                        height={1000} 
                        width={1000} 
                        className='object-cover h-full w-full mix-blend-multiply'
                    />
                </div>

                {/* Quote - Responsive Text */}
                <p className='italic font-semibold text-center my-4 text-base md:text-xl px-4'>
                    &quot;The true measure of any society is how it treats its most vulnerable members.&quot; — Mahatma Gandhi
                </p>

                {/* Footer Links - Responsive Grid */}
                <div className='grid grid-cols-1 md:grid-cols-4 gap-8 w-full mt-12 px-4 md:px-16'>
                    <div className='flex flex-col gap-2 text-center md:text-left'>
                        <h3 className='font-semibold text-lg mb-4'>Quick Links</h3>
                        <Link href='/' className='text-sm hover:underline py-1'>Home</Link>
                        <Link href='/programs' className='text-sm hover:underline py-1'>Programs</Link>
                        <Link href='/privacy-policy' className='text-sm hover:underline py-1'>Privacy Policy</Link>
                        <Link href='/about-us' className='text-sm hover:underline py-1'>About Us</Link>
                        <Link href='/contact-us' className='text-sm hover:underline py-1'>Contact Us</Link>
                    </div>

                    <div className='flex flex-col gap-2 text-center md:text-left'>
                        <h3 className='font-semibold text-lg mb-4'>Our Programs</h3>
                        <Link href='/programs' className='text-sm hover:underline py-1'>Health and Medical Care</Link>
                        <Link href='/programs' className='text-sm hover:underline py-1'>Education and Academy</Link>
                        <Link href='/programs' className='text-sm hover:underline py-1'>Environment</Link>
                    </div>

                    <div className='flex flex-col gap-2 text-center md:text-left'>
                        <h3 className='font-semibold text-lg mb-4'>Support Us</h3>
                        <Link href='/donation' className='text-sm hover:underline py-1'>Donation</Link>
                    </div>

                    {/* Empty div to maintain 4-column grid on larger screens */}
                    <div className='hidden md:block'></div>
                </div>

                <Divider className='w-[90%] my-4'/>

                {/* Copyright - Responsive Flex */}
                <div className='flex flex-col md:flex-row items-center my-4 w-full px-4 md:px-16 justify-between text-center'>
                    <p className='text-gray-700 mb-2 md:mb-0'>Copyright © {date} by Vajra Foundations Nepal</p>
                    <p className='text-gray-700'>© Powered by SBN Innovation PVT. LTD.</p>
                </div>
            </div>
        </main>
    )
}

export default Footer