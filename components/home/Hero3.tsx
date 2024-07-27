import Link from 'next/link'
import Image from 'next/image'
// import { TextGenerateEffect } from '@/components/ui/TextGenerateEffect'
// import { FaLocationArrow, FaWhatsapp } from 'react-icons/fa'
// import Logo from '@/components/global/Logo'

import dynamic from 'next/dynamic'
const SpotlightDivs = dynamic(() => import('@/components/ui/SpotlightDivs')) 
const BgGrid = dynamic(() => import('@/components/ui/BgGrid')) 
const Logo = dynamic(() => import('@/components/global/Logo')) 
const TextGenerateEffect = dynamic(() => import('@/components/ui/TextGenerateEffect').then(mod => mod.TextGenerateEffect));
const MagicButton = dynamic(() => import('@/components/ui/MagicButton')) 
const MagicButtonChat = dynamic(() => import('@/components/ui/MagicButtonChat')) 
const FaLocationArrow = dynamic(() => import('react-icons/fa').then(mod => mod.FaLocationArrow));
const FaWhatsapp = dynamic(() => import('react-icons/fa').then(mod => mod.FaWhatsapp));


const Hero3 = () => {
  return (
    <div className='relative w-full  pb-20 pt-36 '>
        <SpotlightDivs />
        <BgGrid />          

        <div className='flex justify-center relative my-5 z-10 '>
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col justify-center items-center'> 
                <div className='relative w-[240px] h-[92.9025543px] md:w-[350px] md:h-[135.482892px] lg:w-[450px] lg:h-[174.192289px] xl:w-[500px] xl:h-[193,546988px] aspect-[0.38709398] mb-6'>
                    <Logo className='absolute object-cover bg-center right-0 top-0 w-full h-auto'/>
                </div>      
                <h2 className='uppercase tracking-widest text-xs text-center text-owlOrange max-w-80'>
                    Lightning-fast modern Web technologies
                </h2>
                <TextGenerateEffect 
                    className='text-center text-[40px] md:text-5xl lg:text-6xl'
                    words='Custom Websites to fit any budget!'
                />                
            
                <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
                    Get a professional online presence without breaking the bank. 
                </p>

                <div className='w-full flex flex-row justify-center items-center gap-4 lg:gap-8'>
                    <Link href="#approach" aria-label='navigate to next section'>
                        <MagicButton 
                            title='Find out more'
                            icon={<FaLocationArrow/>}
                            position='right'
                            otherClassesButton='hidden md:flex mt-10'
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

                    {/* <div className='lg:absolute lg:inset-y-0 lg:right-0 h-56 w-full object-cover sm:h-72 md:h-96 lg:w-1/2 lg:h-full relative'>
                        <Image
                            layout='fill'
                            objectFit='cover'
                            objectPosition='center'
                            src=''
                            alt='sample image'
                        />
                    </div> */}
                </div>

                {/* <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl mt-12'>
                    Grab your free consultation now and discover your perfect fit!
                </p> */}

            </div>
        </div>
    </div>
  )
}

export default Hero3