import { ourServices } from "@/data"
import Image from "next/image"
import { Button } from "@/components/ui/MovingBorders"
import { FaLocationArrow } from 'react-icons/fa'
import { HoverEffect } from "@/components/ui/CardHoverEffect";

import dynamic from 'next/dynamic'
const MagicButton = dynamic(() => import('@/components/ui/MagicButton')) 
const Logo = dynamic(() => import('@/components/global/Logo')) 

const OurServices = () => {
  return (
    <div className='w-full flex justify-center items-center py-20 bg-owlBrown sm:px-4 px-4'>
        <div className='max-w-7xl w-full flex justify-center flex-col gap-4 items-center'>
        
            <h1 className='heading'>
                Our  {' '}
                <span className='text-owlOrange'>B2B services</span>
            </h1>
        
            <div className="w-full mx-auto px-0 md:px-8">
                <HoverEffect items={ourServices} />
            </div>
        </div>
    </div>
  )
}

export default OurServices