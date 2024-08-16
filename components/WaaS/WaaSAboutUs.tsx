import Link from "next/link";
import { FaWpforms } from 'react-icons/fa'
import dynamic from 'next/dynamic'
const WebDevelopment = dynamic(() => import('@/components//global/lotties/WebDevelopment'))
const MagicButton = dynamic(() => import('@/components/ui/MagicButton')) 

const WaaSAboutUs = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center text-black px-4 gap-4 md:gap-8 xl:gap-12 pt-4 md:pt-32 pb-16 md:pb-8'>            
        <div className='relative max-w-7xl w-full flex justify-center flex-col-reverse md:flex-row-reverse gap-4 items-center pt-24'>
            <div className='w-full md:max-w-md xl:max-w-3xl flex flex-col items-center md:justify-start md:items-start gap-4 '>                                 
                
                <h1 className='heading md:text-left'>
                    Leave Website Management {' '} 
                    <span className='text-owlBrown'> to Us</span> {' '}                        
                </h1> 

                <p className="text-md lg:text-xl text-lg">
                    Born from our rich history in the industry, OwlWeb Studio has created a revolutionary solution: our Website as a Service (WaaS). You can fully focus on your core activities while we take care of your website. We ensure that your website is always up-to-date and reflects the latest trends and technologies. With our monthly check-ins, you stay perfectly informed about the latest developments. Choose our WaaS and invest in a solution that grows with you, every step of the way.
                </p>  

                <p className="text-md lg:text-xl text-lg text-right">
                    With <span className="text-owlBrown font-semibold">WaaS</span> starter package you will get:
                </p>

                <ul className="list-disc list-inside">
                    <li><strong>Leading Technology:</strong> Stay ahead with cutting-edge technologies.</li>
                    <li><strong>Top Security and Reliability:</strong> Your website is secure and reliable, protecting your business and customers.</li>
                    <li><strong>Dynamic Design and Custom Functionality:</strong> Tailored to meet your specific needs and industry standards.</li>
                    <li><strong>Advanced Plugins for Your Industry:</strong> Specialized plugins to enhance functionality and user experience.</li>
                    <li><strong>In-Depth Competitive Analysis:</strong> Gain an edge with insights that keep you ahead of the competition.</li>
                </ul>                 

                

                <Link href="/contact?package=waas-cta" aria-label='Start now - fill the form' className="w-full md:w-fit mt-12 md:mt-4">
                    <MagicButton 
                        title='Get started here'
                        icon={<FaWpforms/>}
                        position='right'
                    />
                </Link>                 
            </div>
            <div className='w-full h-auto -mt-32 -mb-24 md:-mt-6 md:-mb-6'>
                <WebDevelopment />
            </div>
        </div>
    </div>
  )
}

export default WaaSAboutUs