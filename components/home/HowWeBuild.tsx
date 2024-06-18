import Link from "next/link";
import { FaLocationArrow } from 'react-icons/fa'

import dynamic from 'next/dynamic'
import { StepsHowWeBuild } from "../ui/StepsHowWeBuild";
import { buildSteps } from "@/data";
const MagicButton = dynamic(() => import('@/components/ui/MagicButton')) 
const Gads = dynamic(() => import('@/components/global/lotties/Gads')) 

const HowWeBuild = () => {
  return (
    <div className='w-full flex justify-center items-center py-20 bg-owlBrown/20 text-black sm:px-10 px-5 pb-40'>
        <div className='w-full max-w-7xl flex justify-center flex-col gap-4 items-center'>
            <div className="w-full flex justify-center items-center flex-col md:flex-row gap-4">
                <div className='w-full md:max-w-xl flex flex-col items-center md:justify-start md:items-start gap-4 max-lg:mt-10'>
                    <h1 className='heading md:text-left'>
                        How we {' '} <br></br>
                        <span className='text-owlBrown'> build Websites / Landing Pages?</span>
                    </h1>
                    <p className="text-md lg:text-base text-normal md:leading-3">
                    Steps We Follow to Build Your Dream Website:
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
                    <Link href="#stepsBuild" className="cursor-pointer">
                        <Gads />
                    </Link>
                </div>
            </div>
            <StepsHowWeBuild buildSteps={buildSteps} />
        </div>
    </div>
  )
}

export default HowWeBuild