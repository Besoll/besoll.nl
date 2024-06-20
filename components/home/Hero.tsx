import Link from 'next/link'
import { TextGenerateEffect } from '@/components/ui/TextGenerateEffect'
import { FaLocationArrow, FaWhatsapp } from 'react-icons/fa'
import Logo from '@/components/global/Logo'

import dynamic from 'next/dynamic'
const MagicButton = dynamic(() => import('@/components/ui/MagicButton')) 
const MagicButtonChat = dynamic(() => import('@/components/ui/MagicButtonChat')) 
const SpotlightDivs = dynamic(() => import('@/components/ui/SpotlightDivs')) 
const BgGrid = dynamic(() => import('@/components/ui/BgGrid')) 
// const Logo = dynamic(() => import('@/components/global/Logo')) 


const Hero = () => {
  return (
    <div className='relative w-full h-screen pb-20 pt-36'>
        <SpotlightDivs />
        <BgGrid />          

        <div className='flex justify-center relative my-5 z-10'>
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col justify-center items-center'>       
                <Logo className='w-full lg:max-w-[60vw] mb-4'/>
                <h2 className='uppercase tracking-widest text-xs text-center text-owlOrange max-w-80'>
                    Lightning-fast modern Web technologies
                </h2>
                <TextGenerateEffect 
                    className='text-center text-[40px] md:text-5xl lg:text-6xl'
                    words='Custom Websites to fit any budget!'
                />                
            
                <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
                    Get a professional online presence without breaking the bank. <br></br>
                    Grab your free consultation now and discover your perfect fit!
                </p>

                <div className='w-full flex flex-row justify-center items-center gap-4 lg:gap-8'>
                    <Link href="#about">
                        <MagicButton 
                            title='Find out more'
                            icon={<FaLocationArrow/>}
                            position='right'
                            otherClassesButton='hidden md:flex'
                        />
                        <MagicButton 
                            title='More'
                            icon={<FaLocationArrow/>}
                            position='right'
                            otherClassesButton='flex md:hidden'
                        />
                    </Link>
                    <MagicButtonChat 
                        title='Let&apos;s chat now'
                        icon={<FaWhatsapp/>}
                        position='right'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero