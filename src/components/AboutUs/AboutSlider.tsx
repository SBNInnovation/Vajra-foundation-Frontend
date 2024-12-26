"use client"
import LineDot from '@/shared/LineDot/LineDot'
import SharedTitle from '@/shared/SharedTitle'
import { Button } from '@nextui-org/react';
import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import Slider, { CustomArrowProps } from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';

interface CustomArrowComponentProps extends CustomArrowProps {
    onClick?: () => void;
}

const CustomPrevArrow: React.FC<CustomArrowComponentProps> = ({ onClick }) => (
    <Button
        isIconOnly
        onClick={onClick}
        className="absolute left-4 top-1/2 text-white -translate-y-1/2 z-10 bg-primary/40 hover:bg-primary rounded-full p-2 transition-all duration-300"
    >
        <FaChevronLeft />
    </Button>
)

const CustomNextArrow: React.FC<CustomArrowComponentProps> = ({ onClick }) => (
    <Button
        isIconOnly
        onClick={onClick}
        className="absolute right-4 top-1/2 text-white -translate-y-1/2 z-10 bg-primary/40 hover:bg-primary rounded-full p-2 transition-all duration-300"
    >
        <FaChevronRight/>
    </Button>
)

const AboutSlider = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        autoplay: true,
        pauseOnHover: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const national=[
        {
            img:"/national/founder.jpg",
            title:"Bhupendra Bikram Thapa (Chairman)"
        },
        {
            img:"/national/vicechair.jpg",
            title:"Kamal Bhandari (Vice Chairman)"
        },
        {
            img:"/national/treasurer.jpg",
            title:"Deepak Kumar Basnet (Treasurer)"
        }

    ]
    const international=[
        {
            img:"/national/mainfounder.webp",
            title:"Maarten Olthof (Founder)"
        },
        {
            img:"/national/medical.webp",
            title:"Edzo Ebbens (Medical Advisor)"
        }

    ]

    return (
        <div className='w-full px-4 md:px-16'>
            <SharedTitle title='Our Team'/>
            <h1 className='text-3xl font-semibold tracking-wide'>Our Team</h1>
            <div className='w-1/5'>
                <LineDot/>
            </div>
            <section className='flex lg:flex-row flex-col gap-4 items-start w-full mt-12 mb-8'>
                <div className='lg:w-1/3 w-full bg-white rounded-sm shadow-lg px-8 py-4'>
                    <SharedTitle title='National Team'/>
                    <p className='text-justify text-sm'>Our core team within the country works tirelessly to design, implement, and oversee local projects. They understand the challenges and strengths within each community we serve, ensuring our initiatives are impactful and culturally relevant.</p>
                    <p className='mt-12 font-semibold text-xs'>Do you want to become a member ?</p>
                    <Link href='/contact-us'>
                        <Button size='sm' className='text-xs rounded-sm bg-primary px-8 my-2 mb-4 text-white '>Reach Now</Button>
                    </Link>
                </div>
                <div className='lg:w-2/3 w-full'>
                    <div className="relative w-full">
                        <Slider {...settings}>
                            {national.map((item, index) => (
                                <div key={index} className="px-2">
                                    <div className="h-[300px] relative">
                                        <Image 
                                            src={item.img} 
                                            height={1000} 
                                            width={1000} 
                                            alt={item.title}
                                            className='w-full h-full object-cover rounded-sm' 
                                        />
                                        <div className='absolute z-[100] bottom-0 w-full text-white bg-black/80 px-6 py-2 '>
                                            <h1>{item.title}</h1>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
            <section className='flex lg:flex-row flex-col-reverse gap-4 items-start w-full my-8'>
                <div className='lg:w-2/3 w-full'>
                    <div className="relative w-full">
                        <Slider {...settings}>
                            {international.map((item, index) => (
                                <div key={index} className="px-2">
                                    <div className="h-[300px] relative">
                                        <Image 
                                            src={item.img} 
                                            height={1000} 
                                            width={1000} 
                                            alt={item.title}
                                            className='w-full h-full object-contain rounded-sm' 
                                        />
                                        <div className='absolute z-[100] bottom-0 w-full text-white bg-black/80 px-6 py-2 '>
                                            <h1>{item.title}</h1>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
                <div className='lg:w-1/3 w-full bg-white rounded-sm shadow-lg px-8 py-4'>
                    <SharedTitle title='International Team'/>
                    <p className='text-justify text-sm'>Our core team within the country works tirelessly to design, implement, and oversee local projects. They understand the challenges and strengths within each community we serve, ensuring our initiatives are impactful and culturally relevant.</p>
                    <p className='mt-12 font-semibold text-xs'>Do you want to become a member ?</p>
                    <Link href='/contact-us'>
                        <Button size='sm' className='text-xs rounded-sm bg-primary px-8 my-2 mb-4 text-white '>Reach Now</Button>
                    </Link>
                </div>
            </section>
            <section className='flex lg:flex-row flex-col gap-4 items-start w-full my-8'>
                <div className='lg:w-1/3 w-full bg-white rounded-sm shadow-lg px-8 py-4'>
                    <SharedTitle title='General Members'/>
                    <p className='text-justify text-sm'>Our core team within the country works tirelessly to design, implement, and oversee local projects. They understand the challenges and strengths within each community we serve, ensuring our initiatives are impactful and culturally relevant.</p>
                    <p className='mt-12 font-semibold text-xs'>Do you want to become a member ?</p>
                    <Link href='/contact-us'>
                        <Button size='sm' className='text-xs rounded-sm bg-primary px-8 my-2 mb-4 text-white '>Reach Now</Button>
                    </Link>
                </div>
                <div className='lg:w-2/3 w-full'>
                    <div className="relative w-full">
                        <Slider {...settings}>
                            {national.map((item, index) => (
                                <div key={index} className="px-2">
                                    <div className="h-[300px] relative">
                                        <Image 
                                            src={item.img} 
                                            height={1000} 
                                            width={1000} 
                                            alt={item.title}
                                            className='w-full h-full object-cover rounded-sm' 
                                        />
                                        <div className='absolute z-[100] bottom-0 w-full text-white bg-black/80 px-6 py-2 '>
                                            <h1>{item.title}</h1>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        </div>   
    )
}

export default AboutSlider
