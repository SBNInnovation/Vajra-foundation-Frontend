"use client"
import React from 'react'
import { Button } from '@nextui-org/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { CustomArrowProps } from "react-slick"
import SuccessCard from './SuccessCard';

interface CustomArrowComponentProps extends CustomArrowProps {
    onClick?: () => void;
}

const CustomPrevArrow: React.FC<CustomArrowComponentProps> = ({ onClick }) => (
    <Button
        isIconOnly
        onClick={onClick}
        className="absolute left-4 top-1/2 text-white -translate-y-1/2 z-10 bg-primary/40 bg-opacity-50 hover:bg-opacity-100 rounded-full p-2 transition-all duration-300"
    >
        <FaChevronLeft />
    </Button>
)

const CustomNextArrow: React.FC<CustomArrowComponentProps> = ({ onClick }) => (
    <Button
        isIconOnly
        onClick={onClick}
        className="absolute right-2 top-1/2 text-white -translate-y-1/2 z-10 bg-primary/40 bg-opacity-50 hover:bg-opacity-100 rounded-full p-2 transition-all duration-300"
    >
        <FaChevronRight/>
    </Button>
)

const SuccessCardSlider: React.FC = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        autoplay: true,
        pauseOnHover: true,
        autoplaySpeed: 4000,
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

    const successStories = [
        {
            "image": "/Health1.webp",
            "category": "Health",
            "title": "Bringing Healthcare to Remote Villages",
            "description": "Through our mobile clinics, we have provided essential healthcare services to over 2,000 people in remote areas, improving their quality of life and health outcomes.",
            'link':'/success-stories/health'
        },
        {
            "image": "/VajraDroneShot.jpg",
            "category": "Education",
            "title": "Empowering Education with Sponshorships",
            "description": "Our scholarship program has helped 500 girls continue their education, giving them the tools they need to break the cycle of poverty and achieve their dreams.",
            'link':'/success-stories/education'
        },
        {
            "image": "/env-4.webp",
            "category": "Environment",
            "title": "Sustainable Solar Panels",
            "description": "With community support, we have planted 10,000 trees, restoring local forests and empowering communities to protect their natural resources.",
            'link':'/success-stories/environment'
        }
    ]

    return (
        <div className="relative lg:px-12 px-4 py-8">
            <Slider {...settings} className='lg:pr-12 pr-4 lg:pl-16 pl-4'>
                {successStories.map((item, index) => (
                    <div className='lg:px-8 px-4' key={index}>
                        <SuccessCard  {...item} />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default SuccessCardSlider