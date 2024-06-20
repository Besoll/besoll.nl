import Link from "next/link";
import { FaLocationArrow } from 'react-icons/fa'

import dynamic from 'next/dynamic'
const MagicButton = dynamic(() => import('@/components/ui/MagicButton')) 
const Development = dynamic(() => import('@/components/global/lotties/Development')) 

const OurStudio = () => {
  return (
    <div className='w-full bg-white flex justify-center items-center py-20 bg-owlBrown/20 text-black sm:px-10 px-5'>
        <div className='max-w-7xl w-full flex justify-center flex-col md:flex-row gap-4 items-center'>
            <div className='w-full md:max-w-xl flex flex-col items-center md:justify-start md:items-start gap-4 max-lg:mt-10'>
                <h1 className='heading md:text-left'>
                    Unleash Your Website’s Potential with {' '} <br></br>
                    <span className='text-owlBrown'> Top Performance</span>
                </h1>
                <Development />
                <p className="text-md lg:text-base text-normal md:leading-3">
                At OwlWeb Studio, we ensure your website stands out with blazing-fast speed and seamless navigation. Here’s why it matters:
                </p>
                <Link href="#formSection">
                    <MagicButton 
                        title='Write us now'
                        icon={<FaLocationArrow/>}
                        position='right'
                        otherClassesButton="border-none bg-owlBrown"
                        otherClasses="bg-owlBrown/50"
                    />
                </Link>
            </div>
            <div className='w-full md:w-1/3 h-auto'>
                {/* <Image /> */}
    
            </div>
        </div>
    </div>
  )
}

export default OurStudio