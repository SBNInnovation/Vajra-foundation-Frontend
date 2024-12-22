import LineDot from '@/shared/LineDot/LineDot'
import SharedTitle from '@/shared/SharedTitle'
import Image from 'next/image'
import React from 'react'

const Donation = () => {
    return (
        <>
        <div className='w-full flex items-center justify-center h-[60vh] relative' style={{background:"url('/help.avif')",backgroundAttachment:"fixed",backgroundPosition:"center",backgroundSize:"contain"}}>
                <div className='absolute inset-0 bg-black/30'></div>
                <h1 className='text-white font-bold lg:text-6xl text-xl z-[99]'>Donation</h1>   
            </div>

        <div className='flex flex-col lg:flex-row  lg:gap-12 gap-4 justify-center items-start my-12 w-full px-4 lg:px-16'>
            <div className='flex flex-col lg:w-1/2 w-full'>
                <SharedTitle title='Donation' />
                <h1 className='font-semibold lg:text-2xl text-lg'>Together we can make a difference</h1>
                <LineDot/>
                <p>You can send direct help to Vajra Foundations Nepal. You can also make a donation to our cause.</p>
                <h1 className='font-semibold text-2xl my-8'>Funds to be sent to:</h1>
                <p>Bank Name: <span className='font-semibold'>Siddhartha Bank Private Limited</span> </p>
                <p className='my-6'>Account Name: <span className='font-semibold'>Vajra Foundations Nepal</span> </p>
                <p>Account Number: <span className='font-semibold'>00405901278302</span> </p>
            </div>
            <div className='lg:w-1/2 w-full'>
                <Image src={"https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt='Donation' height={1000} width={1000} className='object-cover h-full w-full rounded-sm shadow-md'/>
            </div>
        </div>
        </>
    )
}

export default Donation
