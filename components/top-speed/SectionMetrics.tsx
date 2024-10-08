import Link from "next/link";
import Image from "next/image";
import { StepsWithNumeric4row } from "../ui/StepsWithNumeric4row";
import { secMetricsNumeric, secMetricsSteps } from "@/data";
import { StepsWithoutNumeric } from "../ui/StepsWithoutNumeric";


import dynamic from 'next/dynamic'
const CtaSection = dynamic(() => import('@/components/global/CtaSection')) 
const Metrics = dynamic(() => import('@/components/global/lotties/Metrics')) 
const YoutubeSection = dynamic(() => import('@/components/global/YoutubeSection')) 

const SectionMetrics = () => {
  return (
    <div className="w-full flex justify-center items-center">
        <div className='w-full flex flex-col justify-center items-center py-20  text-black sm:px-8 xl:px-4 px-4 gap-4 md:gap-8 xl:gap-12'>
            <div className='relative max-w-7xl w-full flex justify-center md:justify-between flex-col-reverse md:flex-row gap-4 items-center'>
                <div className='w-full md:max-w-md xl:max-w-3xl flex flex-col items-center md:justify-start md:items-start gap-4 max-lg:mt-10'>
                    <h1 className='heading md:text-left'>
                        Unleash Your Website&apos;s Potential with {' '} <br></br>
                        <span className='text-owlBrown'> Top Performance</span>
                    </h1> 
                    <div className='w-full md:w-1/3 h-auto flex md:hidden -mt-[6rem] md:-mt-[8rem]'>
                        <Metrics />    
                    </div>               
                    <p className="text-md lg:text-base text-normal -mt-[4rem] md:mt-0">
                    At OwlWeb Studio, we ensure your website stands out with blazing-fast speed and seamless navigation. <span className="font-bold">Here&apos;s why it matters:</span>
                    </p>
                </div>
                <div className='w-full md:w-1/3 h-auto hidden md:flex'>
                    <Metrics />    
                </div>
            </div>

            <div className="max-w-7xl w-full h-full flex justify-center flex-col md:flex-row gap-4 items-stretch">
                <StepsWithoutNumeric steps={secMetricsSteps} otherClasses="bg-white" />    
            </div>


            <div className="w-full max-w-7xl flex justify-start items-start pt-8 flex-col gap-2 md:gap-4 ">
                <p className="heading">Our Promise:</p>

                <div className="w-full flex justify-center items-center flex-col md:flex-row-reverse gap-2 md:gap-6">

                    <div className="w-full md:w-2/3 px-4 md:px-6">
                        <Image 
                            src='/top-speed-white.webp'
                            alt='pagespeed'
                            width={1506}
                            height={2042}
                            className="w-full h-auto rounded-lg
                                    shadow-xl md:shadow-md md:hover:shadow-2xl
                                    hover:scale-110 hover:skew-y-1 transition duration-300 ease-in-out cursor-pointer hover:rotate-1"
                        />  
                    </div>
                    <div className="w-full h-full flex justify-center flex-col md:gap-4 items-stretch pt-8 md:pt-20">
                        <StepsWithNumeric4row steps={secMetricsNumeric} otherClasses="bg-white hover:bg-owlOrange hover:text-white mb-4" />
                    </div>

                </div>
                
            </div>

           

            <div className='relative max-w-7xl w-full flex justify-center md:justify-between flex-col md:flex-row-reverse gap-4 items-start py-6 md:py-32'>
                <div className='w-full md:max-w-md xl:max-w-3xl flex flex-col items-center md:justify-start md:items-start gap-4'>
                    <h1 className='text-3xl font-bold text-left text-owlBrown'>
                        See the Difference
                    </h1>                
                    <p className="text-md lg:text-base text-normal ">
                        Curious how your current site compares? Check any website&apos;s performance using Google Pagespeed: 
                    </p>

                    <div className="w-full flex flex-row items-start justify-start gap-4 ">
                        <p className="text-md lg:text-base text-normal -mt-1">
                            <span className="font-bold">Search: </span> 
                            Google "Pagespeed" and open first result "Pagespeed Insight" <br></br> - 
                            <Link href='https://pagespeed.web.dev/' aria-label='navigate to Pagespeed Insight' target='_blank'> or click here</Link>
                        </p>
                    </div>
                    <div className="w-full flex flex-row items-start justify-start gap-4 ">
                        <p className="text-md lg:text-base text-normal -mt-1">
                            <span className="font-bold">Enter your website&apos;s URL: </span> 
                            Copy and paste your favorite website&apos;s URL, which you want to test and click "Analyze" button.
                        </p>
                    </div>
                    <div className="w-full flex flex-row items-start justify-start gap-4 ">
                        
                        <p className="text-md lg:text-base text-normal -mt-1">
                            <span className="font-bold">View the Results: </span> 
                            See how your site scores on speed, mobile-friendliness, for SEO and more. Compare with what we guarantee for your new website!
                        </p>
                    </div> 
                </div>
                <div className='w-full md:w-1/3 h-auto  '>
                    <Image 
                        src='/portfolio/2.webp'
                        alt='pagespeed'
                        width={1182}
                        height={828}
                        className="w-full h-auto rounded-lg
                                shadow-xl md:shadow-md md:hover:shadow-2xl
                                hover:scale-110 hover:skew-y-1 transition duration-300 ease-in-out cursor-pointer hover:rotate-1"
                    />    
                </div>
            </div>

            <CtaSection title="Ready to upgrade?" otherClasses="bg-blue_Light/30" />
            <YoutubeSection />
        </div>
    </div>
  )
}

export default SectionMetrics