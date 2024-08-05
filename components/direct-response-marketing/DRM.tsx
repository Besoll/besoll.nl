
import Image from 'next/image';
import { StepsWithNumeric } from "../ui/StepsWithNumeric";
import { StepsWithoutNumeric } from "../ui/StepsWithoutNumeric";
import { drm5Steps, drmExamples } from "@/data";


import dynamic from 'next/dynamic'
const Tag = dynamic(() => import('@/components/global/Tag')) 
const CtaSection = dynamic(() => import('@/components/global/CtaSection')) 
const DRMtable = dynamic(() => import('@/components//global/lotties/Search')) 
const Gads = dynamic(() => import('@/components/global/lotties/UserSearch')) 
const DrmPackage = dynamic(() => import('@/components/direct-response-marketing/DrmPackage')) 
const DrmWhy = dynamic(() => import('@/components/direct-response-marketing/DrmWhy')) 
const DrmMilestone = dynamic(() => import('@/components/direct-response-marketing/DrmMilestone')) 

 

const DRM = () => {
  return (
      <div className="w-full flex justify-center items-center flex-col">        
        <Image
            src='/drm-page-hero.webp'
            alt='DRM - Direct response Marketing - 1'
            width={800}
            height={800}
            className="w-full h-auto
                    hover:scale-11 hover:skew-y-1 transition duration-300 ease-in-out cursor-pointer hover:rotate-1 mt-[5rem] md:mt-[4.2rem]"
        /> 
        <div className='w-full flex flex-col justify-center items-center text-black sm:px-8 xl:px-4 px-4 gap-4 md:gap-8 xl:gap-12'>

            <div className="w-full px-4 flex flex-col justify-center items-center pb-2 md:pb-12 text-center gap-4">
                <Tag 
                    title="Start Package with €2499/month" 
                    otherClass="text-owlBrown font-bold" 
                    icon="tagLineBrown.svg"/>
                <h1 className='heading'>
                    Drive Immediate Results with Our Direct Response Marketing
                </h1> 
                <p className="text-md lg:text-xl text-lg mt-2  max-w-7xl">
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
                <StepsWithNumeric steps={drm5Steps}  otherClasses="bg-white hover:bg-owlOrange hover:text-white mt-4" />      
            </div>


            <CtaSection title="Ready to Capture More Leads?" otherClasses="bg-blue_Light/30" />

            <div className="max-w-7xl w-full h-full flex justify-center flex-col gap-4 pt-40 px-2 relative ">
                <div className="absolute w-64 h-auto -top-12 right-0 py-12">
                    <Gads />
                </div>
                <p className="text-3xl font-bold text-right mt-16 px-4">
                    Direct Response Marketing Examples by OwlWeb Studio
                </p>
                <div className="w-full flex flex-row gap-4 relative justify-end items-end">
                    <p className=" text-md lg:text-xl text-lg text-right px-4">
                        Direct response marketing (DRM) campaigns are designed to elicit an immediate action from your audience, regardless of the channel used. Whether it&apos;s social media, email, print, TV, or even influencer marketing, the key is to include a compelling call to action that directs consumers towards your campaign goals. 
                    </p>
                </div>
                <p className="text-md lg:text-xl text-lg text-right px-4">
                    Here are some powerful examples of how we implement DRM at OwlWeb Studio:
                </p>
                <div className="w-full flex flex-col justify-center items-stretch gap-4 pb-4">
                    <StepsWithoutNumeric steps={drmExamples} otherClasses="bg-white" /> 
                </div>
                <div className="w-full flex flex-row gap-4 relative justify-end items-end px-4">
                    <p className="text-md lg:text-xl text-lg text-right">
                        At OwlWeb Studio, we tailor each direct response marketing campaign to your unique goals, leveraging various channels and techniques to drive immediate and measurable results. Whether through targeted search engine campaigns, personalized social media ads, engaging referral programs, interactive contests, strategic chatbot interactions, or streamlined landing pages, we ensure your campaigns are effective and impactful.
                    </p>
                </div>
            </div>
        </div>

        <DrmPackage />
        <DrmWhy />
        <DrmMilestone />

    </div>
  )
}

export default DRM