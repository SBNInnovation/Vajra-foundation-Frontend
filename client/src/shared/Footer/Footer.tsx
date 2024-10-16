import React from 'react'
import Link from 'next/link' // Import Link from Next.js
import SharedTitle from '../SharedTitle'
import LineDot from '../LineDot/LineDot'
import { Button, Divider } from '@nextui-org/react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { RiTwitterXLine } from 'react-icons/ri'
import { FiYoutube } from 'react-icons/fi'

const Footer = () => {
    const date = new Date().getFullYear()
    return (
        <main className='w-full relative bottom-0 py-8 px-16'>
            <div className='flex flex-col items-center justify-center'>
                <div className='flex items-center justify-center'>
                    <SharedTitle title='Social media links'/>
                </div>
                <h1 className='flex items-center justify-center font-semibold text-4xl'>Connect with us in various media</h1>
                <LineDot className='justify-center'/>
                <div>
                    <div className='flex items-center justify-center self-start gap-16 mt-12'>
                        <div className='flex flex-col gap-2 items-center justify-center'>
                            <Button size='lg' isIconOnly className='rounded-md border-2 text-xl border-primary bg-transparent text-primary'><FaFacebookF/></Button>
                            <span className='font-semibold text-sm'>Facebook</span>
                        </div>
                        <div className='flex flex-col gap-2 items-center justify-center'>
                            <Button size='lg' isIconOnly className='rounded-md border-2 text-xl border-primary bg-transparent text-primary'><FaInstagram/></Button>
                            <span className='font-semibold text-sm'>Instagram</span>
                        </div>
                        <div className='flex flex-col gap-2 items-center justify-center'>
                            <Button size='lg' isIconOnly className='rounded-md border-2 text-xl border-primary bg-transparent text-primary'><RiTwitterXLine/></Button>
                            <span className='font-semibold text-sm'>{"X (Twitter)"}</span>
                        </div>
                        <div className='flex flex-col gap-2 items-center justify-center'>
                            <Button size='lg' isIconOnly className='rounded-md border-2 text-2xl border-primary bg-transparent text-primary'><FiYoutube/></Button>
                            <span className='font-semibold text-sm'>YouTube</span>
                        </div>
                    </div>
                </div>

                <div className='size-[5rem] my-12 bg-gray-400 rounded-full'></div>

                <p className='italic font-semibold my-4 text-xl'>&quot;The true measure of any society is how it treats its most vulnerable members.&quot; — Mahatma Gandhi</p>

                <div className='grid grid-cols-4 gap-8 w-full mt-12 px-16'>
                    <div className='flex flex-col gap-2'>
                        <h3 className='font-semibold text-lg mb-4'>Quick Links</h3>
                        <Link href='/#home' className='text-sm hover:underline'>Home</Link>
                        <Link href='/#programs' className='text-sm hover:underline'>Programs</Link>
                        <Link href='/#objectives' className='text-sm hover:underline'>Objectives</Link>
                        <Link href='/#aboutus' className='text-sm hover:underline'>About Us</Link>
                        <Link href='/#contactus' className='text-sm hover:underline'>Contact Us</Link>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <h3 className='font-semibold text-lg mb-4'>Our Programs</h3>
                        <Link href='/#health' className='text-sm hover:underline'>Health and Medical Care</Link>
                        <Link href='/#education' className='text-sm hover:underline'>Education and Academy</Link>
                        <Link href='/#environment' className='text-sm hover:underline'>Environment</Link>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <h3 className='font-semibold text-lg mb-4'>Resources</h3>
                        <Link href='/#ongoing' className='text-sm hover:underline'>Ongoing Projects</Link>
                        <Link href='/#upcoming' className='text-sm hover:underline'>Upcoming Projects</Link>
                        <Link href='/#announcements' className='text-sm hover:underline'>General Announcements</Link>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <h3 className='font-semibold text-lg mb-4'>Support Us</h3>
                        <Link href='/#donation' className='text-sm hover:underline'>Donation</Link>
                    </div>
                </div>
                <Divider className='w-[90%] my-4'/>
                <div className='flex items-center my-4 w-full px-16 justify-between'>
                    <div className='flex items-center w-full justify-between text-gray-700'>
                        <p>Copyright © {date} by Vajra Foundations Nepal</p>
                        <p>© Powered by SBN Innovation PVT. LTD.</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Footer
