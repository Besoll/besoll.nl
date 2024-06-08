import Link from 'next/link'
import { TextGenerateEffect } from '@/components/ui/TextGenerateEffect'
import { FaLocationArrow } from 'react-icons/fa'
import Logo from '@/components/global/Logo'

import dynamic from 'next/dynamic'
const MagicButton = dynamic(() => import('@/components/ui/MagicButton')) 
const SpotlightDivs = dynamic(() => import('@/components/ui/SpotlightDivs')) 
const BgGrid = dynamic(() => import('@/components/ui/BgGrid')) 
// const Logo = dynamic(() => import('@/components/global/Logo')) 


const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
        <SpotlightDivs />
        <BgGrid />         

        

        <div className='flex justify-center relative my-5 z-10'>
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col justify-center items-center'>
                <Logo className='w-full mb-4'/>
                <h2 className='uppercase tracking-widest text-xs text-center text-owlOrange max-w-80'>
                    Dynamic Web Magic with Next.js
                </h2>
                <TextGenerateEffect 
                    className='text-center text-[40px] md:text-5xl lg:text-6xl'
                    words='Transforming Concepts into Seamless User Experiences'
                />
                <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
                    Hi, we are OwlWeb agency, Website and Landing pages developers, SEO and SEA specialists, based in the Netherlands
                </p>

                <Link href="#about">
                    <MagicButton 
                        title='Find out more'
                        icon={<FaLocationArrow/>}
                        position='right'
                    />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero