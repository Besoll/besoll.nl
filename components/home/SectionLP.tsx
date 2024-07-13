import Link from "next/link";
import Image from "next/image";
import { FaCheckCircle, FaLocationArrow, FaWpforms } from 'react-icons/fa'
import { StepsWithNumeric } from "../ui/StepsWithNumeric";
import { StepsWithoutNumeric } from "../ui/StepsWithoutNumeric";
import { secLPsteps, secLPsteps2, secLPsteps3, secLPstepsMain } from "@/data";


import dynamic from 'next/dynamic'
const MagicButton = dynamic(() => import('@/components/ui/MagicButton')) 
const SwiperLP = dynamic(() => import('@/components/ui/SwiperLP')) 
const QuestionMark = dynamic(() => import('@/components/global/lotties/QuestionMark')) 
const AngryUser = dynamic(() => import('@/components/global/lotties/AngryUser')) 
const PowerfulMagnet = dynamic(() => import('@/components/global/lotties/PowerfulMagnet'))
const Tag = dynamic(() => import('@/components/global/Tag'))  
const Logo = dynamic(() => import('@/components/global/Logo')) 
// const Metrics = dynamic(() => import('@/components/global/lotties/Metrics')) 

const SectionLP = () => {
  return (
    <div className="w-full flex justify-center items-center bg-white">
        <div className='w-full flex flex-col justify-center items-center py-20 md:py-32 bg-cean/20 text-black sm:px-8 xl:px-4 px-4 gap-4 md:gap-8 xl:gap-12'>



            {/* Hero Section of the section */}
            <div className='relative max-w-7xl w-full flex justify-center md:justify-between flex-col-reverse md:flex-row-reverse gap-4 md:gap-8 items-center'>
                <div className='w-full md:w-2/3 md:max-w-md xl:max-w-3xl flex flex-col items-center md:justify-start md:items-start gap-4 max-lg:mt-10 pl-0 md:pl-12'>

                    <Tag title="Landing Page" otherClass="text-owlBrown font-bold" icon="tagLineBrown.svg"/>
                    
                    <h1 className='heading md:text-left'>
                        Your visitors gets exactly {' '} 
                        <span className='text-owlBrown'> exactly</span> {' '}
                        what they are looking for.
                    </h1> 

                                  
                    <p className="text-md lg:text-xl text-lg text-center md:text-left">
                        We develop targeted landing pages to boost your conversion rate. Within a few months, you will gain insight into the conversion of leads to orders, which enables optimization and helps you determine how many leads you need for a full work bus of installations.
                    </p>                    
                </div>

                <div className='w-full md:w-2/3 h-auto'>
                    <Image
                        src='/portfolio/1.webp'
                        alt='Landing page screenshot'
                        width={250}
                        height={120}
                        className="w-full h-auto rounded-lg
                                shadow-xl md:shadow-md md:hover:shadow-2xl
                                md:hover:scale-110 md:hover:skew-y-1 md:transition md:duration-300 md:ease-in-out md:cursor-pointer md:hover:rotate-1"
                    />    
                </div>                
            </div>

            <div className="max-w-7xl w-full h-full flex justify-center flex-col md:flex-row gap-4 items-stretch">
                <StepsWithoutNumeric steps={secLPstepsMain}  otherClasses="bg-white hover:bg-owlOrange hover:text-owlBrown" />      
            </div>  

            <div className='w-full h-auto mt-16 md:mt-12'>
                    <SwiperLP />    
            </div>



            <Link href="/landing-page" className="md:-mt-28">
                <MagicButton 
                    title='Learn more about Landing Pages'
                    icon={<FaLocationArrow/>}
                    position='right'
                    otherClassesButton="border-none bg-owlBrown"
                    otherClasses="bg-owlBrown/50"
                />
            </Link>

        </div>
    </div>
  )
}

export default SectionLP