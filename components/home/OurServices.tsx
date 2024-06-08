import { ourServices } from "@/data"
import Image from "next/image"
import { Button } from "@/components/ui/MovingBorders"
import { FaLocationArrow } from 'react-icons/fa'
import { TabsServices } from "@/components/ui/TabsServices"
import { HoverEffect } from "@/components/ui/CardHoverEffect";

import dynamic from 'next/dynamic'
const MagicButton = dynamic(() => import('@/components/ui/MagicButton')) 
const Logo = dynamic(() => import('@/components/global/Logo')) 

const OurServices = () => {
  return (
    <div className='w-full flex justify-center items-center py-20 bg-owlBrown sm:px-10 px-5'>
        <div className='max-w-7xl w-full flex justify-center flex-col md:flex-row gap-4 items-center'>
        <div className='py-20' id='experiance'>
        <h1 className='heading'>
            Our  {' '}
            <span className='text-owlOrange'>B2B services</span>
        </h1>
        <TabsServices />
        {/* <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-4'> */}
        <div className="w-full mx-auto px-8">
            <HoverEffect items={ourServices} />
        </div>


            {/* {ourServices.map((card) => (
                <Button 
                    key={card.id}
                    duration={Math.floor(Math.random() * 10000) + 10000}
                    borderRadius='1.75rem'
                    className="flex-1 text-white border-neutral-200 dark:border-slate-800"
                >
                    <div className="flex lg:flex-row flex-col lg:items-center p-3 py-3 md:p-5 lg:p-6 gap-2">
                        <Image 
                            src={card.thumbnail}
                            alt={card.thumbnail}
                            width={32}
                            height={32}
                            className="lg:w-8 md:w-6 w-6"
                        />
                        <div className="lg:ms-5">
                            <h1 className="text-start text-xl md:text-2xl font-bold">
                                {card.title}
                            </h1>
                            <p className="text-start text-white-100 mt-3 font-semibold">
                                {card.desc}
                            </p>
                        </div>
                    </div>
                </Button>
            ))} */}
        {/* </div> */}
    </div>

        </div>
    </div>
  )
}

export default OurServices