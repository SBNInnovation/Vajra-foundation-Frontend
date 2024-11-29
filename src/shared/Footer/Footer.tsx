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
                            <Link target='_blank' href={"https://www.facebook.com/profile.php?id=100063684874531"} className='flex flex-col gap-2 items-center justify-center'>
                                <Button size='lg' isIconOnly className='rounded-md border-2 text-xl border-primary bg-transparent text-primary'><FaFacebookF/></Button>
                                <span className='font-semibold text-sm'>Facebook</span>
                            </Link>
                        </div>
                        <div className='flex flex-col gap-2 items-center justify-center'>
                            <Link target='_blank' href={"https://www.instagram.com/vajraacademy/"} className='flex flex-col gap-2 items-center justify-center'>
                                <Button size='lg' isIconOnly className='rounded-md border-2 text-xl border-primary bg-transparent text-primary'><FaInstagram/></Button>
                                <span className='font-semibold text-sm'>Instagram</span>
                            </Link>
                        </div>
                        <div className='flex flex-col gap-2 items-center justify-center'>
                            <Link target='_blank' href={"https://vajraacademy.edu.np/"} className='flex flex-col gap-2 items-center justify-center'>
                                <Button size='lg' isIconOnly className='rounded-md border-2 text-xl border-primary bg-transparent text-primary'><FaBook/></Button>
                                <span className='font-semibold text-sm'>{"Vajra Academy"}</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='h-20 mt-20 w-54 mb-4  rounded-full'>
                        <Image src="/vajra.png" alt='logo' height={1000} width={1000} className='object-cover h-full w-full mix-blend-multiply'/>
                </div>

                <p className='italic font-semibold my-4 text-xl'>&quot;The true measure of any society is how it treats its most vulnerable members.&quot; — Mahatma Gandhi</p>

                <div className='grid grid-cols-4 gap-8 w-full mt-12 px-16'>
                    <div className='flex flex-col gap-2'>
                        <h3 className='font-semibold text-lg mb-4'>Quick Links</h3>
                        <Link href='/' className='text-sm hover:underline'>Home</Link>
                        <Link href='/programs' className='text-sm hover:underline'>Programs</Link>
                        <Link href='/success-stories' className='text-sm hover:underline'>Success Stories</Link>
                        <Link href='/about-us' className='text-sm hover:underline'>About Us</Link>
                        <Link href='/contact^us' className='text-sm hover:underline'>Contact Us</Link>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <h3 className='font-semibold text-lg mb-4'>Our Programs</h3>
                        <Link href='/programs' className='text-sm hover:underline'>Health and Medical Care</Link>
                        <Link href='/programs' className='text-sm hover:underline'>Education and Academy</Link>
                        <Link href='/programs' className='text-sm hover:underline'>Environment</Link>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <h3 className='font-semibold text-lg mb-4'>Support Us</h3>
                        <Link href='/donation' className='text-sm hover:underline'>Donation</Link>
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
