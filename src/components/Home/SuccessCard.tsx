import React from 'react'
import Image from 'next/image'
import SharedTitle from '@/shared/SharedTitle'
import { Button } from '@nextui-org/react'

interface CardProps {
    title: string
    description: string
    image: string
    category: string
}

const SuccessCard: React.FC<CardProps> = ({ title, description, image, category }) => {
    return (
        <section className='flex h-[400px] w-full items-center justify-center relative'>
            <div className='absolute left-0 w-4/5 h-[400px]'>
                <Image src={image} alt={title} height={1000} width={1000} className='object-cover h-full w-full shadow-md rounded-md group'/>
            </div>
            <div className='absolute w-3/5 z-[1000] right-0 flex flex-col gap-4 shadow-md'>
                <div className='bg-white rounded-sm shadow-md px-8 py-0'>
                    <SharedTitle title={category}/>
                </div>
                <div className='px-6 py-4 bg-white'>
                    <h1 className='font-semibold text-lg mb-2'>{title}</h1>
                    <p className='text-justify text-xs'>{description}</p>
                    <Button size='sm' className='shadow-sm bg-primary text-xs px-12 rounded-md text-white my-4'>View Details</Button>
                </div>
            </div>
        </section>
    )
}

export default SuccessCard