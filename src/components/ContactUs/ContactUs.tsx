"use client"
import LineDot from '@/shared/LineDot/LineDot'
import SharedTitle from '@/shared/SharedTitle'
import { Button, Input, Textarea } from '@nextui-org/react'
import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { FaArrowRight } from 'react-icons/fa'
import { IoMdCall, IoMdMail } from 'react-icons/io'

const ContactUs = () => {
    return (
        <>
            <div className='w-full flex items-center justify-center h-[60vh] relative' style={{background:"url('/help.avif')",backgroundAttachment:"fixed",backgroundPosition:"center",backgroundSize:"contain"}}>
                <div className='absolute inset-0 bg-black/30'></div>
                <h1 className='text-white font-bold text-6xl z-[99]'>Our Contacts</h1>   
            </div>
            <section className='flex px-16 items-start justify-center gap-12 w-full my-12'>
                <div className='py-12 w-1/2 flex flex-col gap-4'>
                    <SharedTitle title='Get in touch with us'/>
                    <h1 className='font-bold text-5xl'>Contact Us for any inquiry !</h1>
                    <p className='text-gray-700 text-justify'>We&apos;re here to answer any questions or provide more information about our work. Whether you prefer to reach out via phone or email, our team is available and ready to assist you. You can find our contact details above. If you&apos;d like to meet in person, feel free to visit us at our office location provided below. We look forward to hearing from you and are happy to help in any way we can.</p>
                    <section className='flex flex-col gap-4 font-semibold mt-4'>
                        <div className='flex flex-col gap-6 px-2'>
                            <div className='flex items-center gap-2'>
                                <IoMdCall size={20}/>
                                <div className='bg-black h-[.5px] w-4'></div>
                                <p className='tracking-wide'>+977-1-4519145 / 1-4517230</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <IoMdMail size={20}/>
                                <div className='bg-black h-[.5px] w-4'></div>
                                <p className='tracking-wide'>info@goingnepal.com / goingnepal@gmail.com</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <CiLocationOn size={20}/>
                                <div className='bg-black h-[.5px] w-4'></div>
                                <p className='tracking-wide'>(9:00am - 05:00pm office hour)</p>
                            </div>
                        </div>
                    </section>
                </div>
                <div className='flex flex-col py-12 w-1/2 items-center justify-center'>
                        <h1 className={`font-semibold text-2xl tracking-wider`}>Send us a message</h1>
                        <LineDot className='justify-center'/>
                        <form action="" className='flex flex-col gap-8 mt-4 w-full px-8 text-black'>
                            <Input 
                            classNames={{
                                    label: "text-black",
                                    input: "text-black",
                                }}
                            type='text' size='lg' label="Enter your name"  radius='sm' required variant='bordered' className='bg-white text-black' />
                            <Input 
                            classNames={{
                                label: "text-black",
                                input: "text-black",
                            }}
                            type='email' size='lg' required label="Enter your email" radius='sm' variant='bordered'  className='bg-white'/>
                            <Textarea
                                type='text'
                                size='lg'
                                label="Enter your message"
                                radius='sm'
                                classNames={{
                                    inputWrapper:"bg-white border border-gray-300 shadow-md",
                                    input: "bg-white text-red-400 min-h-[150px]",
                                    label:"text-black"
                                }}
                            />
                            <div className="group w-fit my-4">
                                <Button 
                                    type='submit'
                                    endContent={
                                    <FaArrowRight className='transition duration-500 group-hover:translate-x-2' />
                                    } 
                                    className='rounded-sm bg-primary px-8 my-2 text-white flex items-center' 
                                    aria-label="Send Message"
                                >
                                    Send Message
                                </Button>
                            </div>
                        </form>
                </div>
            </section>

            <div className="w-full h-[100vh] my-8 -mt-4 flex items-center justify-center flex-col">
                <div className='flex items-center justify-center'>
                    <SharedTitle title='On site'/>
                </div>
                <h1 className='text-4xl font-bold tracking-wide'>Our Location</h1>
                <div className='w-2/5'>
                    <LineDot className='justify-center my-8'/>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.9927385581045!2d85.32190857546776!3d27.717510476176777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19da434dc251%3A0x9f38fff86882064b!2sGoing%20Nepal%20Pvt%20Ltd%2C%20Tailor-Made%20Luxury%20DMC!5e0!3m2!1sen!2snp!4v1728413039018!5m2!1sen!2snp"
                    width="100%"
                    height="100%"
                    allowFullScreen
                    style={{border:"none",outline:"none"}}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </>
    )
}

export default ContactUs
