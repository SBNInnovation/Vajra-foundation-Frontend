    import SharedTitle from '@/shared/SharedTitle';
import React from 'react'
import Image from 'next/image';
import LineDot from '@/shared/LineDot/LineDot';
import { FaBook, FaHeart, FaLeaf } from 'react-icons/fa';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
import { CiGlobe } from 'react-icons/ci';

const Programs = () => {
    const areasOfHelp = [
    {
            title: "Health",
            miniTitle: "Promoting Well-Being",
            description: "The Healthcare Program of the Vajra Foundation Nepal is dedicated to improving health outcomes in Nepal's remote mountain regions, where poverty, limited access to medical facilities, and inadequate living conditions contribute to a high burden of disease. Recognizing the urgent need for healthcare services, Vajra Foundation has been at the forefront of providing both immediate medical assistance and long-term preventive care to marginalized communities.",
            image: "/Health1.webp",
            icon: <FaHeart size={34} />,
            heading: {
                h1: "Health Camps and Medical Assistance",
                h2: "Prevention and Education",
                h3: "Long-Term Healthcare Impact"
            },
            content: [
                "One of the foundation's earliest initiatives was to establish health camps in accessible areas. These camps offered essential services such as medical checkups, surgeries, dental care, and medications, bringing healthcare to people in need who otherwise had limited access to hospitals or doctors. With the support of dedicated volunteers and medical professionals, the health camps helped bridge the gap between rural communities and necessary medical care. Over the years, Vajra Foundation Nepal has expanded its efforts by converting a small health post into a fully functional hospital in Barhabise and establishing five additional health posts in nearby villages.",
                "Vajra Foundation Nepal's healthcare work focuses on disease prevention and educating communities. In 1998, Dr. Henk Becker, a Dutch physician, began documenting common health problems in the region and identified important prevention measures, like improving water sanitation and hygiene. Vajra helped build latrines, clean water points, and formed 'water committees' to ensure communities maintained these systems. The foundation also addressed indoor air pollution caused by traditional cooking methods in mountain villages. By helping families build wood-efficient stoves with chimneys, Vajra reduced harmful smoke exposure, improving respiratory health for women and children.",
                "The Healthcare Program of the Vajra Foundation Nepal is not just about providing immediate medical services but also ensuring long-term, sustainable improvements in health. Through education, community-led initiatives, and medical infrastructure development, the foundation is helping communities take charge of their health. Whether it's reducing waterborne diseases or preventing maternal health complications, Vajra's holistic approach continues to make a lasting impact in the lives of Nepal's most vulnerable populations."
            ]
        },

    {
            title: "Education",
            miniTitle: "Empowering Through Knowledge",
            description: "Education is a powerful tool for social transformation and a fundamental right for every child. Through our education initiatives, we focus on making quality education accessible to all, especially girls and children from marginalized communities. Our scholarship programs provide financial assistance to children who face barriers to continuing their education. Additionally, we equip schools with essential learning materials, from books and stationery to modern digital tools, creating an environment where students can excel. Teacher training workshops ensure educators are well-prepared to inspire and guide the next generation. Beyond formal education, we run community learning programs aimed at teaching vocational skills, literacy, and financial management to adults and youths. By fostering a love for learning and empowering individuals with knowledge, we are breaking the cycle of poverty and paving the way for a future of opportunity and growth.",
            image: "/edu.webp",
            icon: <FaBook size={34} />,
            heading: {
                h1: 'Scholarships and Sponsorships',
                h2: 'Vajra Hostel and Education Support',
                h3: "The Vajra Academy",
                h4: 'School Construction and Community Involvement'
            },
            content: [
                "Our Scholarship Program is central to our mission of improving educational access for marginalized children. Through this initiative, we sponsor students from rural villages, allowing them to attend good schools that would otherwise be out of reach. The selection process considers both the economic background and academic potential of the students, ensuring that those most in need are supported. A unique feature of our sponsorship program is the personal connection between donors and students. Donors receive updates on the student's academic progress and can communicate directly with them, providing encouragement and fostering a strong bond of support throughout their educational journey. The sponsorship commitment typically lasts for five years, allowing students to complete their education and reach their full potential.",
                "In 2002, we established the Vajra Hostel in Kathmandu to support children from remote villages who needed a place to stay while attending school. The hostel offered a safe and nurturing environment, ensuring students could focus on their studies while also benefiting from extracurricular activities and academic support. In 2007, with the establishment of the Vajra Academy, the focus shifted from the hostel to providing a high-quality education directly through our own institution. Our comprehensive approach helps students thrive both academically and personally.",
                "To improve educational infrastructure in rural areas, Vajra Foundation Nepal has constructed six schools across Sindhupalchowk and other remote regions. These schools are designed to withstand the region's seismic activity and provide students with safe, modern learning environments. Each school is equipped with essential facilities, including sanitation, furniture, and educational materials. Vajra Foundation works closely with local communities to ensure that the schools are managed and maintained sustainably, with the community taking responsibility for the operation of the schools after their completion.",
                "In 2007, we established the Vajra Academy, Nepal's first “green” school, which combines high-quality education with environmental awareness and social responsibility. The Academy provides a holistic educational experience, focusing not only on academic achievement but also on critical thinking, creativity, and respect for the environment. By fostering an atmosphere of active learning, we encourage students to engage with their community and develop the skills necessary to become leaders of positive change. The Vajra Academy continues to set a new benchmark for education in Nepal."
            ]
        },
    {
        title: "Environment",
        miniTitle: "Preserving Nature",
        description: "At the Vajra Foundation Nepal, we believe that a healthy environment is key to sustainable development. Our environmental initiatives are designed to address critical ecological challenges, ranging from deforestation and waste management to promoting renewable energy solutions. By combining innovation with community involvement, we are actively working to protect Nepal's natural resources and ensure a greener future for generations to come.",
        image: "/env-3.webp",
        icon: <FaLeaf size={34}/> ,
        heading:{
            h1:'Solar Cooking: A Sustainable Solution for Rural Communities',
            h2:"The World's Largest Solar Cooker Project",
            h3:'Innovative Solar Cooking Solutions',
            h4:'Global Recognition and Solar Expeditions',
            h5:'Environmental Campaigns: Creating Awareness and Driving Change',
            h6:'A Vision for a Sustainable Future'
        },
        content:["In remote Nepalese mountain villages, cooking over open fires is common, causing deforestation, air pollution, and health risks. In 1997, Vajra Foundation introduced solar cookers to promote sustainable cooking. While the initiative initially gained traction, its use declined over time due to time-consuming cooking and the need for supervision.",
            "After learning at an international conference about the effectiveness of solar cookers in fuel-scarce areas, Vajra established a solar cooker workshop in the Beldangi-1 refugee camp in 1999, providing clean cooking for 2,500 people. The project expanded to seven refugee camps, eventually reaching 85,000 people by 2006, making it the world's largest solar cooking initiative. As refugees resettled, the solar cookers were distributed to local communities.",
            "Vajra continued innovating by installing a solar kitchen with 10 parabolic dishes at the Vajra Academy and introducing an efficient oil-based solar cooker system at the Vajra Eco Resort, further promoting sustainable cooking practices.",
            "Vajra's solar cooking projects gained international recognition, including the 2013 Solar Expedition in the Himalayas, and in 2017, Vajra was featured at the 6th World Conference on Solar Cooking as the largest global initiative serving 85,000 users.",
            "The Vajra Foundation Nepal's commitment to environmental protection extends beyond solar cooking. We run various campaigns focused on waste management, conservation, and community engagement. One notable initiative is the “Tie the Trash” campaign, which aims to tackle plastic waste by turning it into ropes. The goal of this campaign is to encircle the entire Ring Road of Kathmandu with a rope made from plastic waste, setting a world record while raising awareness about the importance of recycling and reducing plastic pollution. This campaign is ongoing and continues to inspire communities to take action.Additionally, Vajra Foundation is actively involved in tree planting and environmental cleanup efforts. We engage with local communities to restore forests, protect biodiversity, and improve the quality of life in rural areas. Through these initiatives, we aim to create a cleaner, greener Nepal.",
            "At Vajra Foundation Nepal, we are committed to promoting sustainable practices that protect the environment and enhance the well-being of Nepal’s people. Through innovative solutions like solar cooking, waste management campaigns, and community-driven environmental efforts, we are laying the foundation for a healthier planet. Our work is not just about tackling immediate challenges; it is about creating lasting change that will benefit future generations."
        ]
    }
];

  return (
    <>
        <div className='w-full flex items-center justify-center h-[60vh] relative' style={{background:"url('https://images.unsplash.com/photo-1668709078432-b4e07f7e63c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmdvfGVufDB8fDB8fHwy')",backgroundAttachment:"scroll",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
                <div className='absolute inset-0 bg-black/30'></div>
                <h1 className='text-white font-bold lg:text-6xl text-4xl z-[99]'>Our Programs</h1>   
        </div>
        <div className='flex flex-col gap-6'>
            {areasOfHelp.map((area, index) => (
                <>
                <div key={index} className='lg:px-16 px-4 lg:my-12 my-4'>
                    <section  className='flex lg:flex-row flex-col items-start justify-center gap-12 w-full '>
                        <div className=' lg:w-1/2 w-full flex flex-col'>
                            <SharedTitle title={area.title}/>
                            <h1 className={` font-semibold lg:text-4xl text-2xl`}>{area.miniTitle}</h1>
                            <LineDot className='justify-start'/>
                            <p className='text-gray-700 text-justify'>{area.description}</p>
                        </div>
                        <div className='lg:w-1/2 w-full relative'>
                            <div className='size-[4rem] absolute z-[10] top-1/2 lg:flex hidden -left-8 text-white bg-primary rounded-full shadow-md p-4'>{area.icon}</div>
                            <Image src={area.image} alt={area.title} height={1000} width={1000} className='object-cover h-full w-full shadow-md rounded-md group'/>
                        </div>
                    </section>
                    <section className=''>
                        <h1 className='font-semibold text-xl my-4'>{area?.heading?.h1}</h1>
                        <p className='text-gray-700 text-justify leading-7'>{area?.content?.[0]}</p>
                        <h1 className='font-semibold text-xl my-4'>{area?.heading?.h2}</h1>
                        <p className='text-gray-700 text-justify leading-7'>{area?.content?.[1]}</p>
                        {area?.heading?.h3 && area.heading?.h3 === "The Vajra Academy"?(
                            <div className='flex gap-4 items-center justify-start w-full'>
                                <h1 className='font-semibold text-2xl my-4 flex self-start'>The Vajra Academy</h1>
                                <Link href={'https://vajraacademy.edu.np/'} target='_blank'>
                                    <Button startContent={<CiGlobe size={20} className='text-white'/>} className='bg-primary text-sm text-white rounded-sm shadow-md px-8' size='md'>Visit the website</Button>
                                </Link>
                            </div>
                            ):(
                                <h1 className='font-semibold text-xl my-4'>{area?.heading?.h3}</h1>
                        )}
                        <p className='text-gray-700 text-justify leading-7'>{area?.content?.[2]}</p>
                        {area?.heading?.h4 && (
                                <h1 className='font-semibold text-xl my-4'>{area?.heading?.h4}</h1>
                            )}
                        {area?.content?.[3] && (
                            <p className='text-gray-700 text-justify leading-7'>{area?.content?.[3]}</p>
                        )}
                        {area?.heading?.h5 && (
                                <h1 className='font-semibold text-xl my-4'>{area?.heading?.h5}</h1>
                            )}
                            {area?.content?.[4] && (
                            <p className='text-gray-700 text-justify leading-7'>{area?.content?.[4]}</p>
                        )}
                        {area?.heading?.h6 && (
                                <h1 className='font-semibold text-xl my-4'>{area?.heading?.h6}</h1>
                            )}
                            {area?.content?.[5] && (
                            <p className='text-gray-700 text-justify leading-7'>{area?.content?.[5]}</p>
                        )}
                    </section>
                </div>
                </>
            ))}
        </div>
    </>
  )
}

export default Programs
