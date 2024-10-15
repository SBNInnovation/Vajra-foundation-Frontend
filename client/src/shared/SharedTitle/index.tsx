import React from 'react'

interface sharedProps{
    title:string
}
const SharedTitle:React.FC<sharedProps> = ({title}) => {
    return (
        <div className='flex gap-5 w-full my-4'>
            <div className='h-auto bg-primary w-[4px] rounded-md'>
                
            </div>
            <h1 className='font-semibold text-sm'>{title}</h1>
        </div>
    )
}

export default SharedTitle
