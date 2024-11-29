"use client"
import { Button, Divider, Pagination } from '@nextui-org/react'
import Image from 'next/image'
import React, { useState } from 'react'

const Success = () => {
    const [currentPage,setCurrentPage]=useState(0)

    const successStories = [
    {
        "image": "/health.avif",
        "category": "Health",
        "title": "Bringing Healthcare to Remote Villages",
        "description": "Through our mobile clinics, we have provided essential healthcare services to over 2,000 people in remote areas, improving their quality of life and health outcomes.",
        "day": "Mon",
        "date": "05",
        "month": "DECEMBER",
        "year": "2024",
        "adminPostedOn": "12th Nov 2021"
    },
    {
        "image": "/edu.avif",
        "category": "Education",
        "title": "Empowering Girls Through Education",
        "description": "Our scholarship program has helped 500 girls continue their education, giving them the tools they need to break the cycle of poverty and achieve their dreams.",
        "day": "Wed",
        "date": "08",
        "month": "NOVEMBER",
        "year": "2024",
        "adminPostedOn": "15th Nov 2021"
    },
    {
        "image": "/intro.avif",
        "category": "Environment",
        "title": "Restoring Forests, Rebuilding Communities",
        "description": "With community support, we have planted 10,000 trees, restoring local forests and empowering communities to protect their natural resources.",
        "day": "Fri",
        "date": "10",
        "month": "OCTOBER",
        "year": "2021",
        "adminPostedOn": "18th Nov 2021"
    },
    {
        "image": "/medical.avif",
        "category": "Health",
        "title": "Access to Clean Water for All",
        "description": "Our clean water project has provided safe drinking water to 1,000 families, reducing waterborne illnesses and improving overall health.",
        "day": "Sun",
        "date": "12",
        "month": "JUNE",
        "year": "2022",
        "adminPostedOn": "20th Nov 2021"
    }
];

  return (
    <div className='w-full px-24'>
        <div className="flex flex-col gap-5">
            <Pagination
                total={2}
                page={currentPage}
                onChange={setCurrentPage}
            />
            <div className="flex gap-2">
                <Button
                size="sm"
                variant="flat"
                className='bg-primary text-white rounded-sm'
                onPress={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}
                >
                Previous
                </Button>
                <Button
                size="sm"
                variant="flat"
                className='bg-primary text-white rounded-sm'
                onPress={() => setCurrentPage((prev) => (prev < 10 ? prev + 1 : prev))}
                >
                Next
                </Button>
            </div>
        </div>
        <div className='w-full flex flex-col gap-6 my-10'>
            {successStories.map((item,index)=>(
                <div className='flex flex-col gap-4 cursor-pointer' key={index}>
                    <div className='flex items-center gap-8 w-full'>
                        <p className='text-xl font-light tracking-wide text-gray-600 '>{item.month} {item.year}</p>
                        <Divider className='w-4/5'/>
                    </div>
                    <div className='flex gap-4 w-full shadow-md rounded-md h-[200px] border border-gray-200 px-6 py-4'>
                        <div className='w-[70%] flex gap-8'>
                            <div className='flex flex-col gap-4'>
                                <div className='h-16 w-16 rounded-sm px-4 py-2 shadow-sm flex flex-col items-center justify-center bg-primary text-white'>
                                    <p className='font-medium text-sm'>{item.date}</p>
                                    <h1 className='font-semibold'>{item.day}</h1>
                                </div>
                                <Button className='bg-primary text-xs text-white rounded-sm' size='sm'>Read</Button>
                            </div>
                            <div className=''>
                                <h1 className='text-xl font-semibold'>{item.title}</h1>
                                <p className='text-gray-600 mt-4'>{item.description}</p>
                            </div>
                        </div>
                        <div className='w-[30%] h-full'>
                            <Image src={item.image} alt={item.title} height={1000} width={1000} className='object-cover h-full w-full shadow-md rounded-sm'/>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Success
