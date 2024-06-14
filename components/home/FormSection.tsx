import { FaArrowAltCircleDown } from 'react-icons/fa'
import { BackgroundGradientAnimation } from "@/components/ui/GradientBg";
import Link from 'next/link'

import dynamic from 'next/dynamic'
const FormMain = dynamic(() => import('@/components/ui/Form')) 
const BackgroundServices = dynamic(() => import('@/components/global/lotties/BackgroundServices')) 

const FormSection = () => {
  return (
    <div className='w-full flex justify-center items-center py-20 bg-owlBrown/90  sm:px-4 px-4 relative  scroll-mt-2 snap-start scroll-smooth md:scroll-auto' id='formSection'>
        <div className='max-w-7xl w-full flex justify-center flex-col gap-4 items-center'>


          <div className="z-20">
            <BackgroundGradientAnimation />
            <BackgroundServices />
          </div>
        
        <Link className="heading z-30 md:pt-10 md:pb-4 flex flex-row justify-center items-center gap-2 cursor-pointer" href="#fromStart">
                Let&apos;s  {' '}
                <span className='text-owlOrange'>start here</span>
                <FaArrowAltCircleDown />
        </Link>
            
        
            <div className="w-full mx-auto px-0 md:px-8 z-30">
                <FormMain />
            </div>
        </div>
    </div>
  )
}

export default FormSection