
import Image from 'next/image';
import { StepsWithNumeric } from "../ui/StepsWithNumeric";
import { StepsWithoutNumeric } from "../ui/StepsWithoutNumeric";
import { drm5Steps, drmExamples } from "@/data";


import dynamic from 'next/dynamic'
const Tag = dynamic(() => import('@/components/global/Tag')) 
const CtaSection = dynamic(() => import('@/components/global/CtaSection')) 
const TechStack = dynamic(() => import('@/components//global/lotties/TechStack')) 
const Gads = dynamic(() => import('@/components/global/lotties/UserSearch')) 
const WaaSWhy = dynamic(() => import('@/components/WaaS/WaaSWhy'))
const WaaSTraditional = dynamic(() => import('@/components/WaaS/WaaSTraditional'))
const WaaSBenefits = dynamic(() => import('@/components/WaaS/WaaSBenefits'))
const WaaSAboutUs = dynamic(() => import('@/components/WaaS/WaaSAboutUs'))
const WaaSFAQ = dynamic(() => import('@/components/WaaS/WaaSFAQ'))
const WaaSPackage = dynamic(() => import('@/components/WaaS/WaaSPackage')) 
const WaaSWhat = dynamic(() => import('@/components/WaaS/WaaSWhat')) 
const WaaSMilestone = dynamic(() => import('@/components/WaaS/WaaSMilestone')) 

 

const WaaS = () => {
  return (
      <div className="w-full flex justify-center items-center bg-owlOrange/10 flex-col">

        {/* Hero on Desktop */}
        <div className='w-full lg:flex hidden relative flex-col justify-center items-center'>
            <Image
                src='/waas-main-landscape.webp'
                alt='DRM - Direct response Marketing - 1'
                width={800}
                height={800}
                className="w-full h-auto shadow-xl
                        transition duration-300 ease-in-out cursor-pointer "
            /> 

            <div className='w-[90%] absolute bottom-10 padding-5 bg-white/70 rounded-xl'>
                <div className='w-full flex flex-col justify-center items-center  text-black sm:px-8 xl:px-4 px-4 gap-4 md:gap-8 xl:gap-12'>
                    <div className="w-full px-4 flex flex-col justify-center items-center pt-2 pb-2 md:pb-12 text-center gap-4">
                        <Tag title="Start Package with €1499/month " otherClass="text-owlBrown font-bold" icon="tagLineBrown.svg"/>
                        <h1 className='heading'>
                            Website as a Service (WaaS)
                        </h1> 
                        <p className="text-md lg:text-xl text-lg  mt-2 max-w-7xl">
                            For your B2B business, our Website as a Service (WaaS) solution offers unique benefits that help you excel in both the consumer and business sectors. Discover how our services can strengthen your business and differentiate it from the competition.
                        </p>   
                    </div>
                </div>
            </div>

        </div> 

        {/* Hero on mobile */}
        <div className='w-full flex relative flex-col justify-center items-center lg:hidden gap-4'>
            <Image
                src='/waas-main-wide.webp'
                alt='DRM - Direct response Marketing - 1'
                width={800}
                height={800}
                className="w-full h-auto shadow-xl
                        transition duration-300 ease-in-out cursor-pointer mt-[5rem] md:mt-[4.2rem]"
            /> 

            <div className='w-[90%] flex bottom-10 padding-5  rounded-xl'>
                <div className='w-full flex flex-col justify-center items-center  text-black sm:px-8 xl:px-4 px-4 gap-4 md:gap-8 xl:gap-12'>
                    <div className="w-full px-4 flex flex-col justify-center items-center pt-2 pb-2 md:pb-12 text-center gap-4">
                        <Tag title="Start Package with €1499/month " otherClass="text-owlBrown font-bold" icon="tagLineBrown.svg"/>
                        <h1 className='heading'>
                            Website as a Service (WaaS)
                        </h1> 
                        <p className="text-md lg:text-xl text-lg  mt-2 max-w-7xl">
                            For your B2B business, our Website as a Service (WaaS) solution offers unique benefits that help you excel in both the consumer and business sectors. Discover how our services can strengthen your business and differentiate it from the competition.
                        </p>   
                    </div>
                </div>
            </div>

        </div>

        <WaaSWhy />
        <WaaSTraditional />
        <WaaSBenefits />
        <div className='w-full max-w-7xl px-4'>
            <CtaSection title="Ready to Capture More Leads?" otherClasses="bg-blue_Light/30" />
        </div>
        <WaaSAboutUs />
        <WaaSWhat /> 
        <WaaSPackage />
        <WaaSFAQ />          
        {/* <WaaSMilestone /> */}

    </div>
  )
}

export default WaaS