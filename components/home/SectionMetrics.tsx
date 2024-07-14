import Link from "next/link";
import Image from "next/image";
import { FaCheckCircle, FaLocationArrow, FaStepForward, FaWpforms } from 'react-icons/fa'


import dynamic from 'next/dynamic'
import { StepsWithNumeric } from "../ui/StepsWithNumeric";
import { secMetricsNumeric, secMetricsSteps, secMetricsStepsMain } from "@/data";
import { StepsWithoutNumeric } from "../ui/StepsWithoutNumeric";
const MagicButton = dynamic(() => import('@/components/ui/MagicButton')) 
const Metrics = dynamic(() => import('@/components/global/lotties/Metrics')) 
const Tag = dynamic(() => import('@/components/global/Tag'))  

const SectionMetrics = () => {
  return (
    <div className="w-full flex justify-center items-center bg-white">
        <div className='w-full flex flex-col justify-center items-center py-20 bg-owlBrown/20 text-black sm:px-8 xl:px-4 px-4 gap-4 md:gap-8 xl:gap-12'>
            <div className='relative max-w-7xl w-full flex justify-center md:justify-between flex-col-reverse md:flex-row gap-4 items-center'>
                <div className='w-full md:max-w-md xl:max-w-3xl flex flex-col items-center md:justify-start md:items-start gap-4 max-lg:mt-10'>
                    <Tag title="Top speed" otherClass="text-owlBrown font-bold" icon="tagLineBrown.svg"/>
                    <h1 className='heading md:text-left'>
                        First impressions {' '} <br></br>
                        <span className='text-owlBrown'> count!</span>
                    </h1> 
                    <p className="text-md lg:text-base text-normal text-center md:text-left md:mt-0 z-12 flex ">
                    By focusing on these factors, your website will not only rank higher on Google but also provide a better user experience, leading to more traffic, trust, and conversions.
                    </p>
                    <div className='w-full md:w-1/3 h-auto flex md:hidden  md:-mt-[8rem]'>
                        <Image 
                            src='/top-speed.webp'
                            alt='pagespeed'
                            width={250}
                            height={120}
                            className="w-full h-auto rounded-lg
                                    shadow-xl md:shadow-md md:hover:shadow-2xl
                                    md:hover:scale-110 md:hover:skew-y-1 md:transition md:duration-300 md:ease-in-out md:cursor-pointer md:hover:rotate-1"
                        />      
                    </div> 
                    <div className="w-full flex flex-col items-center justify-start gap-4 px-4 py-12 md:px-2 md:py-2 md:items-start ">
                        <p className="">
                            <span className="font-bold">Performance: </span> 
                            High performance scores indicate a fast and efficient website.
                        </p>
                    
                        <p className="">
                            <span className="font-bold">Accessibility: </span> 
                            Ensuring everyone, including those with disabilities, can use your site boosts your ranking.
                        </p>
                        <p className="">
                            <span className="font-bold">Best Practices: </span> 
                            Following the latest web standards improves user experience.
                        </p>
                        <p className="">
                            <span className="font-bold">SEO: </span> 
                            Optimized content and structure enhance visibility and search rankings.
                        </p>
                    </div>                 
                </div>
                <div className='w-full md:w-1/3 h-auto hidden md:flex'>
                    <Image 
                        src='/top-speed.webp'
                        alt='pagespeed'
                        width={1500}
                        height={1916}
                        className="w-full h-auto rounded-lg
                                shadow-xl md:shadow-md md:hover:shadow-2xl
                                md:hover:scale-110 md:hover:skew-y-1 md:transition md:duration-300 md:ease-in-out md:cursor-pointer md:hover:rotate-1"
                    />     
                </div>
            </div>

            <p className="text-lg font-bold text-left md:-mb-8 w-full max-w-7xl px-4 ">Why high rankings matter?</p>
            <div className="max-w-7xl w-full h-full flex justify-center flex-col md:flex-row gap-4 items-stretch mt-2">
                <StepsWithoutNumeric steps={secMetricsStepsMain} otherClasses="bg-white" />    
            </div>

            <Link href="/top-speed" aria-label='navigate to top-speed page' className="mt-4 md:mt-0 w-full md:w-fit">
                <MagicButton 
                    title='Learn more about top performance'
                    icon={<FaWpforms/>}
                    position='right'
                    otherClassesButton="mt-10"
                />
            </Link>

        </div>
    </div>
  )
}

export default SectionMetrics