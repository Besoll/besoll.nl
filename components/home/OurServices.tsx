import { ourServices } from "@/data"
import Image from "next/image"
import { Button } from "@/components/ui/MovingBorders"
import { FaLocationArrow } from 'react-icons/fa'
import { HoverEffect } from "@/components/ui/CardHoverEffect";

import dynamic from 'next/dynamic'
const MagicButton = dynamic(() => import('@/components/ui/MagicButton')) 
const Logo = dynamic(() => import('@/components/global/Logo')) 
const SpotlightDivs = dynamic(() => import('@/components/ui/SpotlightDivs')) 
const BgGrid = dynamic(() => import('@/components/ui/BgGrid')) 
const CtaSection = dynamic(() => import('@/components/global/CtaSection')) 

const OurServices = () => {
  return (
    <div className='w-full flex justify-center items-center py-20 bg-owlBrown/10 sm:px-4 px-4 relative flex-col'>
        <div className='max-w-7xl w-full flex justify-center flex-col gap-4 items-center'>

        <SpotlightDivs />
        <BgGrid />  
        
            <h1 className='heading z-30 md:py-10'>
                Our  {' '}
                <span className='text-owlOrange'>B2B services</span>
            </h1>
        
            <div className="w-full mx-auto px-0 md:px-8 z-30">
                <HoverEffect items={ourServices} />
            </div>
        </div>

        <div className='w-full max-w-7xl px-4 py-16 md:py-32'>
            <CtaSection title="Ready to Capture More Leads?" otherClasses="bg-blue_Light/30" />
         </div>
    </div>
  )
}

export default OurServices