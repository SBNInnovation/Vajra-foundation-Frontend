import React from 'react'
import Image from 'next/image'
import SharedTitle from '@/shared/SharedTitle'
import { Button } from '@nextui-org/react'
import { FaArrowRight } from 'react-icons/fa'

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
                    <div className="group w-fit my-4">
                    <Button 
                        size='sm'
                        endContent={
                        <FaArrowRight className='transition duration-500 group-hover:translate-x-2' />
                        } 
                        className='rounded-sm bg-primary px-8 my-2 text-white flex items-center' 
                        aria-label="Details"
                    >
                        Read Details
                    </Button>
                </div>
                </div>
            </div>
        </section>
    )
}

export default SuccessCard