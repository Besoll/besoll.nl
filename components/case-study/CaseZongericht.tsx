import Link from "next/link";
import Image from "next/image";
import { FaCheckCircle} from 'react-icons/fa'
import { StepsWithNumeric4row } from "../ui/StepsWithNumeric4row";
import { caseZongerichtChallenge, secCaseStudyZongerichtStrategy} from "@/data";
import { StepsWithoutNumeric } from "../ui/StepsWithoutNumeric";

import dynamic from 'next/dynamic'
const CtaSection = dynamic(() => import('@/components/global/CtaSection')) 
const YouTubeEmbed = dynamic(() => import('@/components/global/YouTubeEmbed')) 

const CaseZongericht = () => {
  return (
    <div className="w-full flex justify-center items-center bg-white">
        <div className='w-full flex flex-col justify-center items-center py-20 bg-owlBrown/20 text-black sm:px-8 xl:px-4 px-4 gap-4 md:gap-8 xl:gap-12'>
            <div className='relative max-w-7xl w-full flex justify-center md:justify-between flex-col-reverse pt-16 md:flex-row gap-4 items-center'>
                <div className='w-full md:max-w-md xl:max-w-3xl flex flex-col items-center md:justify-start md:items-start gap-4 max-lg:mt-10'>
                    <h1 className='heading md:text-left'>                        
                        
                        <span className='text-owlBrown'> Case Study:</span> 
                        Transforming Zongericht&apos;s Sales through Direct Response Marketing and WaaS {' '}
                    </h1>               
                    <p className="text-md lg:text-base text-normal md:mt-0">
                    When Zongericht, a specialized solar panel installation company in the Netherlands, joined OwlWeb Studio, they were already generating sales but struggling with profitability due to unnecessary expenses. Despite having well-equipped technicians capable of handling complex projects, the management couldn't make the company profitable.
                    </p>
                </div>
                <div className='w-full  h-auto hidden md:flex'>                    
                    <Image 
                        src='/caseStudy/case-happy-clients.webp'
                        alt='pagespeed'
                        width={1200}
                        height={912}
                        className="w-full h-auto                               
                                md:hover:scale-110 md:hover:skew-y-1 md:transition md:duration-300 md:ease-in-out md:cursor-pointer md:hover:rotate-1"
                    />   
            </div>
            </div>

                    <p className="text-xl  font-semibold md:text-left">
                        Challenge: Zongericht's main issues included:
                    </p>
            <div className="max-w-7xl w-full h-full flex justify-center flex-col md:flex-row gap-4 items-stretch">
                <StepsWithoutNumeric steps={caseZongerichtChallenge} otherClasses="bg-orange_Light/20 hover:bg-orange_Light/60" />    
            </div>


            <div className="w-full max-w-7xl flex justify-start items-start pt-8 flex-col gap-2 md:gap-4 ">
                <p className="heading">Strategy and Implementation:</p>
                <p className="text-md lg:text-base text-normal md:mt-0">
                    We implemented our All-in-One package, which includes Direct Response Marketing (DRM) with Website as a Service (WaaS) for an 18-month period.
                </p>

                <div className="w-full flex justify-center items-center flex-col md:flex-row-reverse gap-2 md:gap-6">

                    <div className="w-full md:w-2/3 px-4 md:px-6">
                        <Image 
                            src='/caseStudy/case-zong-1.webp'
                            alt='pagespeed'
                            width={1506}
                            height={2042}
                            className="w-full h-auto rounded-lg
                                    md:hover:scale-110 md:hover:skew-y-1 md:transition md:duration-300 md:ease-in-out md:cursor-pointer md:hover:rotate-1"
                        />  
                    </div>
                    <div className="w-full h-full flex justify-center flex-col md:gap-4 items-stretch md:pt-20">
                        <StepsWithNumeric4row steps={secCaseStudyZongerichtStrategy} otherClasses="hover:bg-green_Dark/5" />
                    </div>

                </div>
                
            </div>

           

            <div className='relative max-w-7xl w-full flex justify-center md:justify-between flex-col md:flex-row-reverse gap-4 items-start'>
                <div className='w-full md:max-w-md xl:max-w-3xl flex flex-col items-center md:justify-start md:items-start gap-4'>
                    <h1 className='text-3xl font-bold text-left text-owlBrown'>
                        Results:
                    </h1>

                    <div className="w-full flex flex-col gap-2">
                        <p className="text-xl font-semibold ">
                            Lead Quality and Conversion:
                        </p>
                        <div className="w-full flex flex-col items-start justify-start gap-2 ml-2">
                            <div className="text-md lg:text-base text-normal flex flex-row gap-2 justify-start items-start">
                                <FaCheckCircle className="pt-1 text-green_Dark" />
                                <p className="">
                                    <span className="font-bold text-green_Dark"> Initial improvement (1-3 month): </span> 
                                    From 1 contract per 30-35 leads to 1 contract per 6 leads within three months.
                                </p>
                            </div>
                            <div className="text-md lg:text-base text-normal flex flex-row gap-2 justify-start items-start">
                                <FaCheckCircle className="pt-1 text-green_Dark" />
                                <p className="">
                                    <span className="font-bold text-green_Dark"> Further enhancement (3+ month): </span> 
                                    Achieved a conversion rate of 1 contract per 3 leads, with an average contract value of €8,000.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <p className="text-xl font-semibold ">
                            Revenue Growth:
                        </p>
                        <div className="w-full flex flex-col items-start justify-start gap-2 ml-2">
                            <div className="text-md lg:text-base text-normal flex flex-row gap-2 justify-start items-start">
                                <FaCheckCircle className="pt-1 text-green_Dark" />
                                <p className="">
                                    <span className="font-bold text-green_Dark"> Monthly revenue increased </span> 
                                    from €60,000 to €700,000 within three months.
                                </p>
                            </div>
                            <div className="text-md lg:text-base text-normal flex flex-row gap-2 justify-start items-start">
                                <FaCheckCircle className="pt-1 text-green_Dark" />
                                <p className="">
                                    <span className="font-bold text-green_Dark"> Eventually surpassed </span> 
                                    €1,210,000 per month in revenue.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <p className="text-xl font-semibold ">
                            Cost Efficiency:
                        </p>
                        <div className="w-full flex flex-col items-start justify-start gap-2 ml-2">
                            <div className="text-md lg:text-base text-normal flex flex-row gap-2 justify-start items-start">
                                <FaCheckCircle className="pt-1 text-green_Dark" />
                                <p className="">
                                    <span className="font-bold text-green_Dark"> Significantly decreased Cost per Click (CPC) </span> 
                                    compared to competitors.
                                </p>
                            </div>
                            <div className="text-md lg:text-base text-normal flex flex-row gap-2 justify-start items-start">
                                <FaCheckCircle className="pt-1 text-green_Dark" />
                                <p className="">
                                    <span className="font-bold text-green_Dark"> Enhanced lead quality </span> 
                                    and reduced lead price, ranging between €150 - €450 per high-quality lead.
                                </p>
                            </div>
                        </div>
                    </div>     

                    <Image 
                        src='/portfolio/4.webp'
                        alt='pagespeed'
                        width={1182}
                        height={828}
                        className="w-full h-auto rounded-lg shadow-xl flex md:hidden"
                    />  

                    <h1 className='text-3xl font-bold text-left mt-1 md:mt-2 lg:mt-3'>
                        Conlusion
                    </h1> 
                    <p className="text-md lg:text-base text-normal ">
                        Through our comprehensive approach combining Direct Response Marketing, Website as a Service, and a strategic Testimonials project, we successfully transformed Zongericht's lead quality and profitability. By leveraging advanced digital marketing strategies, optimizing their web presence, and enhancing trust through real client stories, we helped them achieve substantial revenue growth and operational efficiency.
                    </p>                    
                </div>
                <div className='w-full md:w-1/3 h-auto md:py-20 hidden md:flex'>
                    <Image 
                        src='/portfolio/4.webp'
                        alt='pagespeed'
                        width={1182}
                        height={828}
                        className="w-full h-auto rounded-lg
                                shadow-xl md:shadow-md md:hover:shadow-2xl
                                md:hover:scale-110 md:hover:skew-y-1 md:transition md:duration-300 md:ease-in-out md:cursor-pointer md:hover:rotate-1"
                    />    
                </div>
            </div>

            <CtaSection title="Ready to upgrade?" otherClasses="bg-blue_Light/30" />

            




            <div className='relative max-w-7xl w-full flex justify-center gap-4 items-center py-32 flex-col md:flex-row px-2'>

                <div className="w-full md:w-1/3 flex justify-center items-center md:items-start flex-col gap-2">
                    <h1 className='text-xl md:text-3xl font-bold text-center md:text-left  mt-1 md:mt-2 lg:mt-3'>
                        Want to easily measure your website&apos;s performance?
                    </h1> 
                    <p className="text-md lg:text-base text-normal items-center md:items-start md:text-left text-center ">
                    Watch the video to learn how. Also, compare your competitors&apos; website performance, and imagine if your performance could be the highest, all 100s. How highly could you be ranked by search engines compared to your competitors?
                    </p> 
                </div>
                <YouTubeEmbed videoId="KU8i9Xp33sI" />
               
            </div>
        </div>
    </div>
  )
}

export default CaseZongericht