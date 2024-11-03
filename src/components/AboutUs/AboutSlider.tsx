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
            img:"https://images.unsplash.com/photo-1505682614136-0a12f9f7beea?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title:"John Cena"
        },
        {
            img:"https://images.unsplash.com/photo-1500088139251-37350df3c1ad?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fHBlcnNvbnxlbnwwfHwwfHx8Mg%3D%3D",
            title:"The Undertaker"
        },
        {
            img:"https://images.unsplash.com/photo-1628499636754-3162d34ca39c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxwZXJzb258ZW58MHx8MHx8fDI%3D",
            title:"Randy Orton"
        },
        {
            img:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxwZXJzb258ZW58MHx8MHx8fDI%3D",
            title:"Gareth Bale"
        },

    ]

    return (
        <div className='w-full px-4 md:px-16'>
            <SharedTitle title='Our Team'/>
            <h1 className='text-3xl font-semibold tracking-wide'>Our Team</h1>
            <div className='w-1/5'>
                <LineDot/>
            </div>
            <section className='flex gap-4 items-start w-full my-12'>
                <div className='w-1/3 h-[300px] bg-white rounded-sm shadow-sm p-4'>
                    
                </div>
                <div className='w-2/3'>
                    <div className="relative w-full">
                        <Slider {...settings}>
                            {national.map((item, index) => (
                                <div key={index} className="px-2">
                                    <div className="h-[300px]">
                                        <Image 
                                            src={item.img} 
                                            height={1000} 
                                            width={1000} 
                                            alt={item.title}
                                            className='w-full h-full object-cover rounded-sm' 
                                        />
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
