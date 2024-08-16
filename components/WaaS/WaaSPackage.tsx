import Link from "next/link";
import { FaWpforms } from 'react-icons/fa'
import dynamic from 'next/dynamic'
const MagicButton = dynamic(() => import('@/components/ui/MagicButton')) 

const WaaSPackage = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center  text-black sm:px-8 xl:px-4 px-4 gap-4 md:gap-8 xl:gap-12 my-16 py-16 md:py-32'>  

        <h1 className='heading font-bold text-left'>
            Choose the Perfect Package for <span className="text-owlBrown">Your Business</span>
        </h1>
        <div className='relative max-w-7xl w-full flex justify-center md:justify-between flex-col md:flex-row gap-4 items-start mt-8'>
            <div className='w-full md:w-1/2 md:max-w-md xl:max-w-3xl flex flex-col items-center md:justify-start md:items-stretch gap-4 p-8 bg-cean/50 hover:bg-cean/80 h-auto
            hover:scale-11 hover:skew-y-1 transition duration-300 ease-in-out cursor-pointer hover:rotate-1 hover:shadow-xl shadow-md rounded-lg'>
                <p className="text-xl font-semibold">
                    WaaS Package - Starter
                </p>
                <ul className="list-disc ml-6">
                    <li><span className="font-semibold">Price: </span>€1799/month</li>
                    <li><span className="font-semibold">Description: </span>
                        <li className="ml-6">
                            Deep analysis and content strategy creation
                        </li>
                        <li className="ml-6">
                            Foto shooting at your office for the digital content
                        </li>
                        <li className="ml-6">
                            Customised and personilised web design, which will match your marketing strategy
                        </li>
                        <li className="ml-6">
                            Build and maintain custom Website
                        </li>
                        <li className="ml-6">
                            Build and maintain fully optimized landing pages, up to 5, with the option to add more as needed
                        </li>
                        <li className="ml-6">
                            Build and maintain Form Submition and other Call Call functions and infrastructure
                        </li>
                        <li className="ml-6">
                            Both, website and landing pages are developed special for you, with the latest Next.js technolgoies, code will be written in super powerfull Typescript.
                        </li>
                        <li className="ml-6 font-semibold">
                            Mandatory 6-month period
                        </li>
                    </li>
                </ul>

                <Link href="/contact?package=waas" aria-label='Select the packla' className="w-full md:w-fit">
                    <MagicButton 
                        title='Contact us to Choose the package'
                        icon={<FaWpforms/>}
                        position='right'
                    />
                </Link>
            </div>
            <div className='w-full md:w-1/2 md:max-w-md xl:max-w-3xl flex flex-col items-center md:justify-start md:items-start gap-4 p-8 bg-cean/50 hover:bg-cean/80  
            hover:scale-11 hover:skew-y-1 transition duration-300 ease-in-out cursor-pointer hover:rotate-1 hover:shadow-xl shadow-md rounded-lg '>
                <p className="text-xl font-semibold">
                    DRM Package + WaaS Package
                </p>
                <ul className="list-disc ml-6">
                    <li><span className="font-semibold">Price: </span>€4099/month</li>
                    <li><span className="font-semibold">Description: </span>
                        <li className="ml-6">
                            Includes modern website                              
                        </li>
                        <li className="ml-6">
                            Includes modern website (Next.js + Typescript)
                            <li className="ml-6">
                                Each additional landing page: €120/month
                            </li>                               
                        </li>
                        <li className="ml-6">
                            Deep analysis and strategy creation                                
                        </li>
                        <li className="ml-6">
                            Development of up to 100 Google Ads campaigns
                        </li>
                        <li className="ml-6">
                            Google Analytics setup
                        </li>
                        <li className="ml-6">
                            Google Tag Management
                        </li>
                        <li className="ml-6">
                            Implementation of UTM parameters
                        </li>
                        <li className="ml-6">
                            Track and measure realistic ROI with conversion rates
                        </li>
                        <li className="ml-6">
                            Re-marketing for non-deal conversions
                        </li>
                        <li className="ml-6">
                            Enhances lead quality
                        </li>
                        <li className="ml-6">
                            Reduces average lead value to the lowest in the market
                        </li>
                        <li className="ml-6">
                            High-quality lead control and tracking
                        </li>
                        <li className="ml-6">
                            Achieves lowest Cost Per Click (CPC)
                        </li>
                        <li className="ml-6">
                            Combines tools for highest market results
                        </li>
                        <li className="ml-6">
                            Monthly reporting from the second month onward
                        </li>
                        <li className="ml-6 font-semibold">
                            Mandatory 6-month period
                        </li>
                    </li>
                </ul>

                <Link href="/contact?package=DRM+WaaS" aria-label='Select the packla' className="w-full md:w-fit">
                    <MagicButton 
                        title='Contact us to Choose the package'
                        icon={<FaWpforms/>}
                        position='right'
                    />
                </Link>
            </div>
        </div>  

    </div>
  )
}

export default WaaSPackage