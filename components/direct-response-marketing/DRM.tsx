
import Link from "next/link";
import Image from 'next/image';
import { FaLocationArrow, FaWpforms } from 'react-icons/fa'
import { StepsWithNumeric } from "../ui/StepsWithNumeric";
import { StepsWithoutNumeric } from "../ui/StepsWithoutNumeric";
import { drm5Steps, secLPsteps, secLPsteps2, secLPsteps3 } from "@/data";


import dynamic from 'next/dynamic'
const Tag = dynamic(() => import('@/components/global/Tag')) 
const MagicButton = dynamic(() => import('@/components/ui/MagicButton')) 
const CtaSection = dynamic(() => import('@/components/global/CtaSection')) 
const DRMtable = dynamic(() => import('@/components//global/lotties/Search')) 
const QuestionMark = dynamic(() => import('@/components/global/lotties/QuestionMark')) 
const AngryUser = dynamic(() => import('@/components/global/lotties/AngryUser')) 
const PowerfulMagnet = dynamic(() => import('@/components/global/lotties/PowerfulMagnet')) 
 

const SectionLP = () => {
  return (
      <div className="w-full flex justify-center items-center bg-owlOrange/10 flex-col">        
      <Image
            src='/drm-page-hero.webp'
            alt='DRM - Direct response Marketing - 1'
            width={800}
            height={800}
            className="w-full h-auto
                    md:hover:scale-110 md:hover:skew-y-1 md:transition md:duration-300 md:ease-in-out md:cursor-pointer md:hover:rotate-1 mt-[5rem] md:mt-[4.2rem]"
        /> 
        <div className='w-full flex flex-col justify-center items-center  text-black sm:px-8 xl:px-4 px-4 gap-4 md:gap-8 xl:gap-12'>

            <div className="w-full px-4 flex flex-col justify-center items-center pb-2 md:pb-12">
                <Tag title="Start Package with 2499 €/month " otherClass="text-owlBrown font-bold" icon="tagLineBrown.svg"/>
                <h1 className='heading'>
                    Drive Immediate Results with Our Direct Response Marketing
                </h1> 
                <p className="text-md lg:text-xl text-lg  mt-2">
                    Transform Your Leads into High-Value Contracts with Precision Marketing
                </p>   
            </div>

            {/* Hero Section of the section */}
            
            <div className='relative max-w-7xl w-full flex justify-center flex-col-reverse md:flex-row gap-4 items-center'>
                <div className='w-full md:max-w-md xl:max-w-3xl flex flex-col items-center md:justify-start md:items-start gap-4 max-lg:mt-10'>                                 
                    
                    <h1 className='heading md:text-left'>
                        What is {' '} 
                        <span className='text-owlBrown'> Direct Response Marketing?</span> {' '}                        
                    </h1> 

                    <p className="text-md lg:text-xl text-lg">
                        Direct Response Marketing (DRM) is a strategy focused on eliciting immediate actions from your audience. Whether it&apos;s visiting your website, making a purchase, or engaging with your social media, our approach ensures your marketing efforts yield tangible, measurable results.
                    </p>                    
                </div>
                <div className='w-full h-auto -mt-24 -mb-32 md:-mt-6 md:-mb-6'>
                    <DRMtable />
                </div>
            </div>

            <div className="max-w-7xl w-full h-full flex justify-center items-center flex-col gap-4 bg-owlOrange/15 px-6 py-16 rounded-lg">

                    <h1 className='heading text-center'>
                        {' '} 
                        <span className='text-owlBrown'> 5</span> {' '}  Key Steps                      
                    </h1> 
                    <p className="text-center text-md lg:text-xl text-lg max-w-[500px]  md:mt-0">
                        At OwlWeb Studio, we specialize in crafting direct response marketing (DRM) campaigns that drive immediate and measurable results. Here&apos;s how we do it:
                    </p>  
                <StepsWithNumeric steps={drm5Steps}  otherClasses="bg-white hover:bg-owlOrange hover:text-white" />      
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
                    otherClassesButton="border-none bg-owlBrown mt-10"
                    otherClasses="bg-owlBrown/50"
                />
            </Link>

            <CtaSection title="Ready to Capture More Leads?" otherClasses="bg-blue_Light/30" />

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