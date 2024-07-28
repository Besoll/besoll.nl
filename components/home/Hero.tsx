import Link from 'next/link'
import Image from 'next/image'
// import { TextGenerateEffect } from '@/components/ui/TextGenerateEffect'
// import { FaLocationArrow, FaWhatsapp } from 'react-icons/fa'
// import Logo from '@/components/global/Logo'

import dynamic from 'next/dynamic'
import { IoArrowDownCircleOutline } from 'react-icons/io5'

const SpotlightDivs = dynamic(() => import('@/components/ui/SpotlightDivs')) 
const BgGrid = dynamic(() => import('@/components/ui/BgGrid')) 
const Logo = dynamic(() => import('@/components/global/Logo')) 
const TextGenerateEffect = dynamic(() => import('@/components/ui/TextGenerateEffect').then(mod => mod.TextGenerateEffect));
const MagicButton = dynamic(() => import('@/components/ui/MagicButton')) 
const ScrollDown = dynamic(() => import('@/components/global/lotties/ScrollDown')) 
const MagicButtonChat = dynamic(() => import('@/components/ui/MagicButtonChat')) 
const FaLocationArrow = dynamic(() => import('react-icons/fa').then(mod => mod.FaLocationArrow));
const FaWhatsapp = dynamic(() => import('react-icons/fa').then(mod => mod.FaWhatsapp));


const Hero = () => {
  return (
    <div className='relative w-full pb-20 pt-16 sm:pt-36 min-h-screen flex justify-center items-start xs:items-center
    '>
        <SpotlightDivs />
        <BgGrid />          

        <div className='flex justify-center relative my-5 z-10 flex-col items-center gap-8 md:gap-0'>
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col justify-center items-center'> 
                <div className='relative w-[240px] h-[92.9025543px] md:w-[350px] md:h-[135.482892px] lg:w-[450px] lg:h-[174.192289px] xl:w-[500px] xl:h-[193,546988px] aspect-[0.38709398] mb-6'>
                    <Logo className='absolute object-cover bg-center right-0 top-0 w-full h-auto'/>
                </div>      
                <h2 className='uppercase tracking-widest text-xs text-center text-owlOrange max-w-80'>
                    The first time ever
                </h2>

                {/* <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
                Do you need quick massive sales in short period of time?
                </p> */}

                <TextGenerateEffect 
                    className='text-center text-[30px] sm:text-[40px] md:text-5xl lg:text-6xl'
                    words='Introducing DRM and WaaS Techniques to Boost Your Sales Rapidly'
                />  

                <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
                Achieve Remarkable Sales Growth with Direct Response Marketing (DRM) and Revolutionary Website as a Service (WaaS) – From Zero to €500,000, Depending on Your Case.
                </p>

                <div className='w-full flex flex-row justify-center items-center gap-4 lg:gap-8'>
                    <Link href="#productUSP" aria-label='navigate to next section'>
                        <MagicButton 
                            title='Scroll down to see how?'
                            icon={<IoArrowDownCircleOutline/>}
                            position='right'
                            otherClassesButton='hidden md:flex mt-10'
                        />
                        <MagicButton 
                            title='Scroll Down'
                            icon={<IoArrowDownCircleOutline/>}
                            position='right'
                            otherClassesButton='hidden sm:flex md:hidden'
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

            <Link 
                href="#productUSP" 
                aria-label='scroll to product USP section' 
                className='w-16 md:w-28 h-auto animate-bounce md:absolute md:bottom-2 sm:bottom-5 mx-auto md:hidden'
                >
                <ScrollDown className='w-16 md:w-28 h-auto animate-bounce md:absolute md:bottom-5 mx-auto' />
            </Link>
        </div>
        <Link 
            href="#productUSP" 
            aria-label='scroll to product USP section' 
            className='w-16 md:w-28 h-auto animate-bounce md:absolute md:bottom-2 sm:bottom-5 mx-auto hidden md:flex'
            >
            <ScrollDown className='w-16 md:w-28 h-auto animate-bounce md:absolute md:bottom-5 mx-auto' />
        </Link>
    </div>
  )
}

export default Hero