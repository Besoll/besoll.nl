import { ourServices } from "@/data"
import Image from "next/image"
import { Button } from "@/components/ui/MovingBorders"
import { FaLocationArrow } from 'react-icons/fa'
import { HoverEffect } from "@/components/ui/CardHoverEffect";
import { BackgroundGradientAnimation } from "@/components/ui/GradientBg";

import dynamic from 'next/dynamic'
const MagicButton = dynamic(() => import('@/components/ui/MagicButton')) 
const Logo = dynamic(() => import('@/components/global/Logo')) 
const SpotlightDivs = dynamic(() => import('@/components/ui/SpotlightDivs')) 
const BgGrid = dynamic(() => import('@/components/ui/BgGrid')) 
const FormMain = dynamic(() => import('@/components/ui/Form')) 
const BackgroundServices = dynamic(() => import('@/components/global/lotties/BackgroundServices')) 

const FormSection = () => {
  return (
    <div className='w-full flex justify-center items-center py-20 bg-owlBrown/90  sm:px-4 px-4 relative' id='formSection'>
        <div className='max-w-7xl w-full flex justify-center flex-col gap-4 items-center'>


          <div className="z-20">
            <BackgroundGradientAnimation />
            <BackgroundServices />
          </div>
        
            <h1 className='heading z-30 md:py-10'>
                Let&apos;s  {' '}
                <span className='text-owlOrange'>start here:</span>
            </h1>
        
            <div className="w-full mx-auto px-0 md:px-8 z-30">
                <FormMain />
            </div>
        </div>
    </div>
  )
}

export default FormSection