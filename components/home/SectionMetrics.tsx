import Link from "next/link";
import Image from "next/image";
import { FaLocationArrow } from 'react-icons/fa'


import dynamic from 'next/dynamic'
import { StepsHowWeBuild } from "../ui/StepsHowWeBuild";
import { ourPromise } from "@/data";
const MagicButton = dynamic(() => import('@/components/ui/MagicButton')) 
const Metrics = dynamic(() => import('@/components/global/lotties/Metrics')) 

const SectionMetrics = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center md:py-20 bg-owlBrown/20 text-black sm:px-8 xl:px-4 px-4 gap-4 xl:gap-0'>
        <div className='relative max-w-7xl w-full flex justify-center md:justify-between flex-col-reverse md:flex-row gap-4 items-center'>
            <div className='w-full md:max-w-md xl:max-w-3xl flex flex-col items-center md:justify-start md:items-start gap-4 max-lg:mt-10 -mt-40'>
                <h1 className='heading md:text-left'>
                    Unleash Your Website’s Potential with {' '} <br></br>
                    <span className='text-owlBrown'> Top Performance</span>
                </h1>                
                <p className="text-md lg:text-base text-normal ">
                At OwlWeb Studio, we ensure your website stands out with blazing-fast speed and seamless navigation. <span className="font-bold">Here&apos;s why it matters:</span>
                </p>
                {/* <Link href="#formSection">
                    <MagicButton 
                        title='Write us now'
                        icon={<FaLocationArrow/>}
                        position='right'
                        otherClassesButton="border-none bg-owlBrown"
                        otherClasses="bg-owlBrown/50"
                    />
                </Link> */}
            </div>
            <div className='w-full md:w-1/3 h-auto absolute md:static z-50'>
                <Metrics />    
            </div>
        </div>

        <div className="max-w-7xl w-full h-full flex justify-center flex-col md:flex-row gap-4 items-stretch">
            <div className="md:w-1/3 w-full h-auto flex flex-col justify-center items-stretch gap-2 bg-white rounded-lg 
                            p-8 shadow-xl md:shadow-md md:hover:shadow-2xl
                            md:hover:scale-110 md:hover:skew-y-1 md:transition md:duration-300 md:ease-in-out md:cursor-pointer md:hover:rotate-1">
                <p className="text-xl font-bold">Higher Google Rankings:</p>
                <p className="text-base">Get found easily on Google with our websites that score near-perfect on speed and user experience.</p>
            </div>
            <div className="md:w-1/3 w-full h-auto flex flex-col justify-center items-stretch gap-2 bg-white rounded-lg 
                            p-8 shadow-xl md:shadow-md md:hover:shadow-2xl
                            md:hover:scale-110 md:hover:skew-y-1 md:transition md:duration-300 md:ease-in-out md:cursor-pointer md:hover:rotate-1">
                <p className="text-xl font-bold">Save on Ads:</p>
                <p className="text-base">Spend less on advertising with a fast website that keeps visitors engaged.</p>
            </div>
            <div className="md:w-1/3 w-full h-auto flex flex-col justify-center items-stretch gap-2 bg-white rounded-lg 
                            p-8 shadow-xl md:shadow-md md:hover:shadow-2xl
                            md:hover:scale-110 md:hover:skew-y-1 md:transition md:duration-300 md:ease-in-out md:cursor-pointer md:hover:rotate-1">
                <p className="text-xl font-bold">Happy Visitors:</p>
                <p className="text-base">Users love our easy-to-use sites that work perfectly on phones, tablets, and computers.</p>
            </div>          
        </div>

        <div className="max-w-7xl w-full h-full flex justify-center flex-col  gap-4 items-stretch pt-20">
            <p className="heading">Our Promise:</p>
            <StepsHowWeBuild buildSteps={ourPromise} />
        </div>

        <div className='relative max-w-7xl w-full flex justify-center md:justify-between flex-col-reverse md:flex-row gap-4 items-center'>
            <div className='w-full md:max-w-md xl:max-w-3xl flex flex-col items-center md:justify-start md:items-start gap-4'>
                <h1 className='heading md:text-left'>
                    See the Difference
                </h1>                
                <p className="text-md lg:text-base text-normal ">
                    Curious how your current site compares? Check any website&apos;s performance using Google Pagespeed: 
                </p>
                {/* <Link href="#formSection">
                    <MagicButton 
                        title='Write us now'
                        icon={<FaLocationArrow/>}
                        position='right'
                        otherClassesButton="border-none bg-owlBrown"
                        otherClasses="bg-owlBrown/50"
                    />
                </Link> */}
            </div>
            <div className='w-full md:w-1/3 h-auto absolute md:static z-50'>
                <Image 
                    src='/portfolio/2.webp'
                    alt='pagespeed'
                    width={250}
                    height={120}
                    className="w-full h-auto"
                />    
            </div>
        </div>

    </div>
  )
}

export default SectionMetrics