import Link from "next/link";
import Image from "next/image";
import { FaWpforms } from 'react-icons/fa'
import dynamic from 'next/dynamic'
const MagicButton = dynamic(() => import('@/components/ui/MagicButton')) 

const DrmWhy = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center  text-black sm:px-8 xl:px-4 px-4 gap-24 md:gap-24 xl:gap-24 my-0 md:my-16 py-4 md:py-32'>  

        <div className='relative max-w-7xl w-full flex justify-center md:justify-between flex-col-reverse md:flex-row gap-4 items-center'>
            <div className='w-full  flex flex-col justify-center items-center md:justify-start md:items-start gap-4'>
                <p className='text-5xl font-bold text-center md:text-left'>
                    Why Our Direct Response Marketing <span className="text-owlBrown">Stands Out?</span>
                </p>
                <ul className="list-disc ml-6">
                    <li className="ml-6">
                        Immediate consumer reaction
                    </li>
                    <li className="ml-6">
                        Easily trackable ROI                        
                    </li>
                    <li className="ml-6">
                        Tailored Google Ads campaigns                        
                    </li>
                    <li className="ml-6">
                        Comprehensive tracking with Google Analytics and Tag Manager                        
                    </li>
                    <li className="ml-6">
                        Strategic re-marketing efforts                        
                    </li>
                    <li className="ml-6">
                        Monthly performance reports                        
                    </li>
                </ul>

                <Link href="/contact?package=DRM" aria-label='Select the packla' className="w-full md:w-fit">
                    <MagicButton 
                        title='Contact Us'
                        icon={<FaWpforms/>}
                        position='right'
                    />
                </Link>
            </div>

            <div className='w-full flex flex-col justify-center items-center md:justify-start md:items-start gap-4'>
                <Image
                    src='/DRM-Why.webp'
                    alt='DRM - Direct response Marketing - 2'
                    width={800}
                    height={800}
                    className="w-full  h-auto shadow-md hover:shadow-xl rounded-lg 
                            hover:scale-11 hover:skew-y-1 transition duration-300 ease-in-out cursor-pointer hover:rotate-1 "
                />                 
            </div>

        </div>  

        <div className='relative max-w-7xl w-full flex justify-center md:justify-between flex-col-reverse md:flex-row-reverse gap-4 items-center'>
            <div className='w-full  flex flex-col justify-center items-center md:justify-start md:items-start gap-4'>
                <p className='text-5xl font-bold text-center md:text-left'>
                    See the Results for <span className="text-owlBrown">Yourself</span>
                </p>
                <p>
                    <span className="font-semibold">Case Study: </span> Zongericht
                </p>                
                <ul className="list-disc ml-6">
                    <li className="font-semibold ml-6">
                        Background:
                        <li className="font-normal ml-6">
                            Zongericht faced profitability issues despite decent sales.                                              
                        </li>
                    </li>
                    <li className="font-semibold ml-6">
                        Background:
                        <li className="font-normal ml-6">
                            Implemented our DRM and WaaS package.                                             
                        </li>
                    </li>
                    <li className="font-semibold ml-6">
                        Results:
                        <li className="font-normal ml-6">
                            Monthly revenue increased from €60,000 to €1,210,000.                                           
                        </li>
                        <li className="font-normal ml-6">
                            Improved lead quality and conversion rates.                                              
                        </li>
                        <li className="font-normal ml-6">
                            Achieved a contract rate of one in three leads.                                             
                        </li>
                    </li>
                </ul>

                <Image
                    src='/caseStudy/case-happy-clients.webp'
                    alt='DRM - Direct response Marketing - Case study'
                    width={800}
                    height={800}
                    className="w-full  h-auto flex md:hidden
                            hover:scale-11 hover:skew-y-1 transition duration-300 ease-in-out cursor-pointer hover:rotate-1 "
                />
                
                <p>
                    <span className="font-semibold">Testimonial:</span> 
                    <br/>
                    <blockquote className="italic text-gray-600 ">
                        <p>"Zongericht's transformation was remarkable. With OwlWeb's DRM and WaaS, we saw immediate improvements in lead quality and conversion rates."</p>
                    </blockquote>
                        Dave Sigmund - Head of Sales, Zongericht
                </p>

                <Link href="/case-study-zongericht" aria-label='navigate to zongericht case study' className="w-full md:w-fit">
                    <MagicButton 
                        title='See how we did it'
                        icon={<FaWpforms/>}
                        position='right'
                    />
                </Link>
            </div>

            <div className='w-full md:flex flex-col justify-center items-center md:justify-start md:items-start gap-4 hidden'>
                <Image
                    src='/caseStudy/case-happy-clients.webp'
                    alt='DRM - Direct response Marketing - Case study'
                    width={800}
                    height={800}
                    className="w-full  h-auto 
                            hover:scale-11 hover:skew-y-1 transition duration-300 ease-in-out cursor-pointer hover:rotate-1 "
                />                 
            </div>

        </div> 

        

    </div>
  )
}

export default DrmWhy