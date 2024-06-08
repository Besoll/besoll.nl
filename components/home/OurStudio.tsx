import Logo from "../global/Logo";
import { FaLocationArrow } from 'react-icons/fa'

import dynamic from 'next/dynamic'
const MagicButton = dynamic(() => import('@/components/ui/MagicButton')) 
const Development = dynamic(() => import('@/components/global/lotties/Development')) 

const OurStudio = () => {
  return (
    <div className='w-full flex justify-center items-center py-20 bg-white text-black sm:px-10 px-5'>
        <div className='max-w-7xl w-full flex justify-center flex-col md:flex-row gap-4 items-center'>
            <div className='w-full md:max-w-xl flex flex-col items-center md:justify-start md:items-start gap-4 max-lg:mt-10'>
                <h1 className='heading md:text-left'>
                    OwlWeb Studio {' '}
                    <span className='text-owlBrown'> satisfied clients</span>
                </h1>
                <p className="text-sm md:text-md lg:text-base text-normal leading-3">
                At OwlWeb, our design strategy focuses on creating high-performance, user-centered websites that align with your business goals. By understanding your brand and target audience, we craft visually stunning and highly functional sites using the latest technologies like Next.js and TailwindCSS. Our approach ensures fast loading times, accessibility, and top-tier SEO, providing a competitive edge in the digital marketplace. We prioritize scalability and flexibility, allowing your site to grow with your business, and make data-driven decisions to continuously enhance user experience. Through close collaboration and communication, we deliver exceptional websites that drive success.
                </p>
            </div>
            <div className='w-full md:w-1/3 h-auto'>
                <Development />

            </div>

        </div>
    </div>
  )
}

export default OurStudio