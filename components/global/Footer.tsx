import Link from 'next/link'
import Image from 'next/image'


import dynamic from 'next/dynamic'
import { FaLocationArrow } from 'react-icons/fa'
const MagicButton = dynamic(() => import('@/components/ui/MagicButton')) 
const HandIndex = dynamic(() => import('@/components/icons/HandIndex'))
const EmailIcon = dynamic(() => import('@/components/icons/EmailIcon'))
const MobileIcon = dynamic(() => import('@/components/icons/MobileIcon'))
const MapLocation = dynamic(() => import('@/components/icons/MapLocation'))
const IframeComponent = dynamic(() => import('@/components/ui/IframeProps'))
const Logo = dynamic(() => import('@/components/global/Logo'))


const Footer = () => {
  return (
    <footer className="w-full shadow-lg text-gray-200 text-base mt-20 md:mt-5">
        <hr className="my-6 border-black-400 md:mx-auto lg:my-8" />

        <div className="flex flex-col justify-center mx-6 ml-5
                        md:flex-row md:justify-between
                        md:mx-4 md:ml-10
                        max-w-7xl
                        ">
            <div className='!-mt-[10rem] gradient_special rounded-xl flex flex-col justify-center items-center px-4
                            md:-mt-[6rem] max-w-[300px] min-w-[200px] max-h-[300px] md:max-h-[340px] lg:max-h-[380px] shadow-xl gap-4 py-4 md:py-0 lg:py-4
                            z-50'>
                    <Link href="#formSection">
                      <Logo className=""/>
                    </Link>
                    <p className='text-center px-2'> Request no obligation contalncy with us, where we can listen and offer the best solutions for your business</p>
                    <Link href="#formSection">
                      <MagicButton 
                        title='Write us now'
                        icon={<FaLocationArrow/>}
                        position='right'
                        otherClasses=""
                        otherClassesButton='mb-0 p-0'
                    />
                </Link>
            </div>

            <div className='flex flex-col justify-center mx-6 ml-5 md:flex-row md:justify-between'>
              <ul className='mt-8 mb-2 ml-0 md:ml-5 lg:ml-12 md:mt-2 md:mb-6'>
                  <li className="font-semibold text-gray-500 uppercase">
                      Pages
                      <hr className="my-2 border-black-400 md:mx-auto"/>
                  </li>
                  <li className="mb-2">
                      <Link 
                          href="/zonnepanelen" 
                          className='nav-links cursor-pointer capitalize text-base text-gray-500  
                                  md:hover:scale-105 md:hover:text-owlOrange md:duration-300'
                      >
                          About                      
                      </Link>
                  </li>
                  <li className="mb-2">
                      <Link 
                          href="/projecten" 
                          className='nav-links cursor-pointer capitalize text-base text-gray-500  
                                  md:hover:scale-105 md:hover:text-owlOrange md:duration-300'
                      >
                          Projects                        
                      </Link>
                  </li>
                  <li className="mb-2">
                      <Link 
                          href="/" 
                          className='nav-links cursor-pointer capitalize text-base text-gray-500  
                                  md:hover:scale-105 md:hover:text-owlOrange md:duration-300'
                      >
                          Services                        
                      </Link>
                  </li>
                  <li className="mb-2">
                      <Link 
                          href="/overOns" 
                          className='nav-links cursor-pointer capitalize text-base text-gray-500  
                                  md:hover:scale-105 md:hover:text-owlOrange md:duration-300'
                      >
                          Testimonials                        
                      </Link>
                  </li>
                  <li className="mb-2">
                      <Link 
                          href="/schouwing" 
                          className='nav-links cursor-pointer capitalize text-base text-gray-500  
                                  md:hover:scale-105 md:hover:text-owlOrange md:duration-300'
                      >
                          Offers                      
                      </Link>
                  </li>
              </ul>
              <ul className='mt-8 mb-2 ml-0 md:ml-5 lg:ml-12 md:mt-2 md:mb-6'>
                  <li className="font-semibold text-gray-500 uppercase">
                      {/* Voorwaarden & Privacy */} Terms & Privacy
                      <hr className="my-2 border-black-400 md:mx-auto"/>
                  </li>
                  <li className='mb-2'>
                      <Link 
                          href='/' 
                          className='nav-links cursor-pointer text-base text-gray-500  
                                  md:hover:scale-105 md:hover:text-owlOrange md:duration-300'
                      >
                          {/* Algemene voorwaarden */} Terms and Conditions
                      </Link>
                  </li>
                  <li className='mb-2'>
                      <Link 
                          href='/' 
                          className='nav-links cursor-pointer capitalize text-base text-gray-500  
                                  md:hover:scale-105 md:hover:text-owlOrange md:duration-300'
                      >
                          Disclaimer                       
                      </Link>
                  </li>
                  <li className='mb-2'>
                      <Link 
                          href='/' 
                          className='nav-links cursor-pointer capitalize text-base text-gray-500  
                                  md:hover:scale-105 md:hover:text-owlOrange md:duration-300'
                      >
                          Imprint                       
                      </Link>
                  </li>
                  <li className='mb-2'>
                      <Link 
                          href='/' 
                          className='nav-links cursor-pointer capitalize text-base text-gray-500
                                  md:hover:scale-105 md:hover:text-owlOrange md:duration-300'
                      >
                          Cookie Policy (EU)                       
                      </Link>
                  </li>
                  <li className='mb-2'>
                      <Link 
                          href='/' 
                          className='nav-links cursor-pointer capitalize text-base text-gray-500  
                                  md:hover:scale-105 md:hover:text-owlOrange md:duration-300'
                      >
                          Privacy Statement (EU)                        
                      </Link>
                  </li>
              </ul>               
              <ul className='mt-8 mb-2 ml-4 md:ml-12 lg:ml-20 md:mt-8 md:mb-6'>
                  <li className='mb-2 '>
                              <Image 
                                  src='/icons/Guarantee10Years-Big.svg'
                                  alt='Guarantee 10 years'
                                  width={32}
                                  height={32}
                                  className="w-[45px] h-auto md:hover:rotate-1 md:hover:skew-3 
                                  md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer"
                              /> 
                  </li>                     
                  <li className='mb-2 max-w-[150px] -ml-2'>
                      <IframeComponent
                          src="https://www.klantenvertellen.nl/retrieve-widget.html?color=white&allowTransparency=false&button=true&lang=nl&tenantId=99&locationId=1066957"
                          width="160"
                          height="120"
                          title='klientreviews'
                      />
                  </li>
              </ul>  
            </div>


        </div>
        <hr className="my-6 border-black-400 sm:mx-auto lg:my-8" />
        <div className="flex justify-center text-center flex-wrap pb-6 flex-col">
            <ul className='flex flex-col justify-center text-center flex-wrap sm:flex-row'>
                <li className='mb-2 mr-5 sm:mr-5'>
                    <Link href='tel:0031165700130' className='flex justify-center items-center text-white hover:scale-105 hover:text-owlOrange duration-300'>
                        <MobileIcon />
                        <span className="ml-2" >+31 613 73 45 46</span>
                    </Link>
                </li>
                <li className='mb-2'>
                    <Link href='mailto:info@owlweb.nl' className='flex justify-center items-center hover:scale-105 hover:text-owlOrange duration-300'>
                        <EmailIcon />
                        <span className="ml-2" >info@owlweb.nl</span> 
                    </Link>
                </li>
                <li className='mb-2 ml-0 sm:ml-5'>
                    <Link 
                        href='https://www.google.com/maps/place/Mendelssohnstraat+1,+3281+VH+Numansdorp/@51.7369636,4.4336364,17z/data=!3m1!4b1!4m6!3m5!1s0x47c4399aa1cb360b:0x71b0380339d31d8d!8m2!3d51.7369636!4d4.4336364!16s%2Fg%2F11c5nqjmkg?entry=ttu' target='_blank' 
                        className='flex justify-center items-center hover:scale-105 hover:text-owlOrange duration-300'
                    >
                        <MapLocation />                        
                        <span className="ml-2" >Mendelssohnstraat 1, 3281VH Numansdorp</span> 
                    </Link>
                </li>
            </ul>
            <hr className="my-4 mb-2 border-gray-200 sm:mx-auto lg:mb-5 " />
            <ul className='text-sm'>
                <li>
                Besoll | Copyright © 2024. All right reserved.
                </li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer