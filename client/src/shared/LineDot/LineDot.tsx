"use client"
import { Divider } from '@nextui-org/react'
import React from 'react'
import { DiDotnet } from 'react-icons/di'

interface classnameProps{
    className?: string
}
const LineDot:React.FC<classnameProps> = ({className}) => {
  return (
    <main className={`my-2 w-full flex gap-2 items-center ${className}`}>
        <Divider className='w-1/5 bg-primary h-[2px]'/>
        <DiDotnet size={24} className='text-primary'/>
        <Divider className='w-1/5 bg-primary h-[2px]'/>
        <DiDotnet size={24} className='text-primary'/>
        <Divider className='w-1/5 bg-primary h-[2px]'/>
    </main>
  )
}

export default LineDot
