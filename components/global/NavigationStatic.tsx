"use client"

import { navButtonTitle } from '@/data'
import Link from "next/link";
import { useState } from "react";
import { FaHandshake } from 'react-icons/fa';


import Image from "next/image";

import dynamic from 'next/dynamic'
const Logo = dynamic(() => import('@/components/global/Logo'))
const MagicButton = dynamic(() => import('@/components/ui/MagicButton')) 
const HamburgerMenu = dynamic(() => import('@/components/icons/HamburgerMenu'))
const HamburgerMenuOpen = dynamic(() => import('@/components/icons/HamburgerMenuOpen'))
const NavigationStaticMobile = dynamic(() => import('@/components/global/NavigationStaticMobile'))
const LanguageSwitcherNav = dynamic(() => import('@/components/ui/LanguageSwitcherNav'))

const NavigationStatic = ({
    navItemsStatic,
}:{
    navItemsStatic: {
        id: number;
        name: string;
        link: string;
        ariaLabel: string;
    } [];
}) => {

    const [nav, setNav] = useState(false);


  return (
    <nav className='w-full flex justify-center items-center h-20 text-primary bg-black/65 shadow-lg fixed nav z-[1500] reference'>
        <div className="w-full max-w-7xl flex justify-between items-center px-4">
            {/* <Logo otherClass="h-12" src='../logo/logo-white.svg'/> */}
            
            <div className="flex flex-row gap-4 h-12 justify-center items-center">
                
                <Logo otherClass="h-12" />
                <Link 
                    href='/#websummit'
                    aria-label='navigate to websummit' 
                    className='h-5'
                    >
                    <Image 
                        src='/websummit/WS24-white.svg'
                        alt='logo websummit'
                        width={1000}
                        height={500}
                        className='h-full w-auto
                                transition duration-300 ease-in-out cursor-pointer 
                                hover:scale-110 hover:skew-y-1 hover:rotate-1'
                    />
                </Link>
            </div>
            <ul className="hidden lg:flex lg:justify-center lg:items-center">
                {navItemsStatic.map((i) => (  
                    <li
                        key={i.id}
                        className="nav-links mx-[0.63rem] cursor-pointer capitalize text-base font-bold hover:outline outline-1 outline-offset-1 rounded-md px-1 py-1 ease-in text-white opacity-70 hover:opacity-100 duration-300 link-underline  hover:bg-white-100/30 hover:backdrop-blur-xl
                        "
                    >
                        <Link  
                            href={i.link} 
                            aria-label={i.ariaLabel}
                        >
                            {i.name}
                        </Link>
                    </li>
                ))}

                <li
                    className="nav-links mx-[0.63rem] cursor-pointer capitalize text-base font-bold hover:outline outline-1 outline-offset-1 rounded-md px-1 py-1 hover:scale-105 text-MainColor hover:text-neutral-100 outline-neutral-100 duration-300 link-underline"
                >   
                <LanguageSwitcherNav />                    
                </li>
                
                <li >  
                    <Link href="#contact-us" className="ml-5 shadow-xl px-4 hover:scale-105 transition duration-300 ease-in-out" aria-label="Navigate to contact page">
                        <MagicButton 
                            title={navButtonTitle}
                            icon={<FaHandshake/>}
                            position='right'
                            otherClassesButton="border-none bg-MainColor "
                            otherClasses=""
                        />
                    </Link>
                </li>  
            </ul>
            
            {/* <div className="absolute top-0 right-2">
                <LanguageSwitcherNav />
            </div> */}

            <div onClick={() => setNav(!nav)}>
                {nav && (
                    <NavigationStaticMobile navItemsStatic={navItemsStatic} navButtonTitle={navButtonTitle}/>
                )}

            </div>
            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-10 lg:hidden"
            >
                {nav ? 
                <HamburgerMenuOpen />  
                : 
                <HamburgerMenu />  
                }
            </div>


        </div>
    </nav>
  )
}

export default NavigationStatic

