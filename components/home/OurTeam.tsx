import Link from "next/link";
import { FaLocationArrow } from 'react-icons/fa'

import dynamic from 'next/dynamic'
import { ThreeDCard } from "@/components/ui/ThreeDCard";
import { buildSteps } from "@/data";
const Seo = dynamic(() => import('@/components/global/lotties/Seo')) 

const OurTeam = () => {
  return (
    <div className='w-full flex justify-center items-center py-20 bg-white text-black sm:px-10 px-5 pb-40'>
        <div className='w-full max-w-7xl flex justify-center flex-col gap-4 items-center'>
            <div className="w-full flex justify-center items-center flex-col md:flex-row gap-4">
                <div className='w-full md:max-w-xl flex flex-col items-center md:justify-start md:items-start gap-4 max-lg:mt-10'>
                    <h1 className='heading md:text-left'>
                        Our {' '} <br></br>
                        <span className='text-owlBrown'> Team</span>
                    </h1>
                    <p className="text-md lg:text-base text-normal md:leading-3">
                    Welcome to OwlWeb Studio! Meet the fun-loving crew who turn your web dreams into reality. We're a quirky bunch of tech enthusiasts and creative geniuses dedicated to crafting awesome web experiences. Here's a bit about us:
                    </p>
                </div>
                <div className='w-full md:w-1/3 h-auto'>
                    <Link href="#stepsBuild" className="cursor-pointer">
                        <Seo />
                    </Link>
                </div>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-2 mb-2">
                <ThreeDCard  />
                <ThreeDCard  />
                <ThreeDCard  />
                <ThreeDCard  />
                <ThreeDCard  />
                <ThreeDCard  />
                <ThreeDCard  />
                <ThreeDCard  />
            </div>
        </div>
    </div>
  )
}

export default OurTeam