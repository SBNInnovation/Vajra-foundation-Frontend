import LineDot from '@/shared/LineDot/LineDot'
import SharedTitle from '@/shared/SharedTitle'
import React from 'react'

const SuccessStories = () => {
    return (
        <>
        <div className='w-full flex items-center justify-center h-[60vh] relative' style={{background:"url('https://images.unsplash.com/photo-1551892589-865f69869476?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",backgroundAttachment:"fixed",backgroundPosition:"center",backgroundSize:"cover"}}>
                <div className='absolute inset-0 bg-black/30'></div>
                <h1 className='text-white font-bold text-6xl z-[99]'>Our Success Stories</h1>   
        </div>
        <div className='w-full items-center justify-center flex flex-col gap-4 my-12 px-16 text-justify leading-8'>
            <div className='w-fit'>
                <SharedTitle title='Real stories, real change'/>
            </div>
            <h1 className='text-2xl sm:text-3xl md:text-4xl tracking-wide leading-8 text-center'>Our success stories</h1>
            <div className='w-3/5'>
                <LineDot className='justify-center'/>
            </div>
            <p>At the heart of our mission lies the belief that every small action can lead to extraordinary change. Our success stories are not just statistics or outcomes—they are real, powerful tales of transformation that illustrate the profound impact of our work in health, education, and the environment. These stories reflect the struggles, the triumphs, and the determination of the individuals and communities we serve, as well as the unwavering support of our dedicated team, volunteers, and donors.

From providing life-saving healthcare services to those who previously had no access, to creating educational opportunities for children who once had to choose between learning and survival, our initiatives have opened doors to brighter futures. In the environmental sector, we&apos;ve partnered with local communities to promote sustainable practices, conserve natural resources, and mitigate the effects of climate change. Through each of these successes, we&apos;ve seen firsthand how resilience, collaboration, and compassion can bring about tangible, positive change.
            </p>
            <p>These stories are a testament to the collective power of community. Whether it&apos;s a family in need receiving healthcare support, a child gaining the tools to pursue their dreams, or a village thriving through sustainable agriculture practices, the impact is clear: lives are being transformed. They serve as a reminder that when we come together, we can overcome even the greatest challenges.

Our success stories are more than just a reflection of what we&apos;ve accomplished—they are an invitation. They inspire others to take action, to believe in the power of giving, and to understand that together, we can create a ripple effect of positive change. As we continue our journey, we carry these stories with us, knowing that they will inspire generations to come and motivate us to keep pushing for a future where every community has the chance to thrive.
            </p>
        </div>
        </>
    )
}

export default SuccessStories
