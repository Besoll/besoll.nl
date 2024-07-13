import Link from "next/link";
import { FaLocationArrow, FaWpforms } from 'react-icons/fa'
import { StepsWithNumeric } from "../ui/StepsWithNumeric";
import { StepsWithoutNumeric } from "../ui/StepsWithoutNumeric";
import { secLPsteps, secLPsteps2, secLPsteps3 } from "@/data";


import dynamic from 'next/dynamic'
import Tag from "../global/Tag";
const MagicButton = dynamic(() => import('@/components/ui/MagicButton')) 
const SwiperLP = dynamic(() => import('@/components/ui/SwiperLP')) 
const QuestionMark = dynamic(() => import('@/components/global/lotties/QuestionMark')) 
const AngryUser = dynamic(() => import('@/components/global/lotties/AngryUser')) 
const PowerfulMagnet = dynamic(() => import('@/components/global/lotties/PowerfulMagnet')) 
 

const SectionLP = () => {
  return (
    <div className="w-full flex justify-center items-center bg-white">        
        <div className='w-full flex flex-col justify-center items-center py-20 md:py-32 bg-cean/20 text-black sm:px-8 xl:px-4 px-4 gap-4 md:gap-8 xl:gap-12'>


            <div className="w-full px-4 flex flex-col justify-center items-center pb-2 md:pb-12">
                <Tag title="Your Key to New Leads" otherClass="text-owlBrown font-bold" icon="tagLineBrown.svg"/>
                <h1 className='heading'>
                    The Power of Landing Pages
                </h1> 
            </div>

            {/* Hero Section of the section */}
            <div className='relative max-w-7xl w-full flex justify-center md:justify-between flex-col-reverse md:flex-row gap-4 items-center'>
                <div className='w-full md:max-w-md xl:max-w-3xl flex flex-col items-center md:justify-start md:items-start gap-4 max-lg:mt-10'>
                    <div className='w-full md:w-1/3 h-auto max-h-[280px] md:max-h-full flex md:hidden md:-mt-[8rem]'>
                        <SwiperLP />     
                    </div>               
                    
                    <h1 className='heading md:text-left'>
                        Why {' '} 
                        <span className='text-owlBrown'> Landing Pages</span> {' '}
                        Matter
                    </h1> 

                    <p className="text-md lg:text-xl text-lg  md:mt-0">
                        Landing pages are like a secret weapon for your business. They&apos;re designed to capture attention, drive conversions, and bring in qualified leads. Here&apos;s why they&apos;re essential:
                    </p>                    
                </div>
                <div className='w-full md:w-2/3 h-auto hidden md:flex'>
                    <SwiperLP />    
                </div>
            </div>

            <div className="max-w-7xl w-full h-full flex justify-center items-center flex-col md:flex-row gap-4 md:items-stretch">
                <StepsWithNumeric steps={secLPsteps}  otherClasses="bg-white hover:bg-owlOrange hover:text-white" />      
            </div>           



            <div className="max-w-7xl w-full h-full flex justify-center flex-col gap-4 bg-owlBrown/10 rounded-lg pt-40 px-8 relative ">

                <div className="absolute w-64 h-auto -top-12 right-0">
                    <QuestionMark />
                </div>
                <p className="text-3xl font-bold text-right">
                    How Landing Pages Bring in New Leads
                </p>

                <div className="w-full flex flex-row gap-4 relative justify-end items-end">
                    <p className=" text-md lg:text-xl text-lg text-right pl-12">
                        Imagine a customer searching for "Red Mountain Electric Bicycle." They find your website but are overwhelmed by all the other products you offer. Frustrated, they leave and look elsewhere.
                    </p>
                    <div className="w-28 absolute -top-6 -left-8">
                        <AngryUser />
                    </div>
                </div>


                <p className="text-md lg:text-xl text-lg text-right">
                    But with a dedicated landing page:
                </p>

                <div className="w-full flex flex-col md:flex-row justify-center items-stretch gap-4 pb-20">
                    <StepsWithoutNumeric steps={secLPsteps2} otherClasses="bg-owlBrown/10" /> 
                </div>
            </div>


            <Link href="/contact" className="mt-8 w-full md:w-fit md:-mt-8">
                <MagicButton 
                    title='Write us now'
                    icon={<FaLocationArrow/>}
                    position='right'
                    otherClassesButton="border-none bg-owlBrown"
                    otherClasses="bg-owlBrown/50"
                />
            </Link>



            <div className='relative max-w-7xl w-full flex justify-center md:justify-between flex-col md:flex-row gap-4 items-start mt-8'>
                <div className='w-full md:max-w-md xl:max-w-3xl flex flex-col items-center md:justify-start md:items-start gap-4'>    
                    <h1 className='heading font-bold text-left'>
                    The OwlWeb Studio Advantage
                    </h1>                
                    <p className="text-md lg:text-base text-normal ">
                        Our landing pages combine high performance with targeted content to create a powerful magnet for new customers:
                    </p>

                    <div className="w-full flex flex-col md:flex-row justify-center items-stretch gap-4 pb-20">
                        <StepsWithoutNumeric steps={secLPsteps3} otherClasses="bg-owlBrown/10" /> 
                    </div>

                    


                    <h1 className='text-3xl font-bold text-left text-blue_Night mt-1 md:mt-2 lg:mt-3'>
                        Ready to Capture More Leads?
                    </h1>                
                    <p className="text-md lg:text-base text-normal ">
                        Contact us today for a free consultation. Let&apos;s create high-performing landing pages that attract, engage, and convert your ideal customers.
                    </p>
                    <Link href="/contact" aria-label='navigate to contact page' className="hidden md:flex">
                        <MagicButton 
                            title='Contact us'
                            icon={<FaWpforms/>}
                            position='right'
                        />
                    </Link>
                    
                </div>
                <div className='w-full md:w-1/3 h-auto md:py-20'>
                    {/* <Logo /> */}
                    <PowerfulMagnet />
                </div>

                <Link href="/contact" aria-label='navigate to contact page' className="flex md:hidden justify-center items-center w-full">
                    <MagicButton 
                        title='Contact us'
                        icon={<FaWpforms/>}
                        position='right'
                    />
                </Link>
            </div>

        </div>
    </div>
  )
}

export default SectionLP