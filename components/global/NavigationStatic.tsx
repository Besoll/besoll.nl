"use client"

import Link from "next/link";
import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";

import dynamic from 'next/dynamic'
const Logo = dynamic(() => import('@/components/global/Logo'))
const MagicButton = dynamic(() => import('@/components/ui/MagicButton')) 
const HamburgerMenu = dynamic(() => import('@/components/icons/HamburgerMenu'))
const HamburgerMenuOpen = dynamic(() => import('@/components/icons/HamburgerMenuOpen'))
// const NavigationStaticMobile = dynamic(() => import('@/components/global/NavigationStaticMobile'))

const NavigationStatic = ({
    navItems,
}:{
    navItems: {
        name: string;
        link: string;
        icon?: JSX.Element;
        ariaLabel: string;
    }[];
}) => {

    const [nav, setNav] = useState(false);

    console.log("NavigationStatic component rendered");
  return (
    <nav className='w-full flex justify-center items-center h-20 text-primary bg-black-100 shadow-lg fixed nav z-10 '>
        <div className="w-full max-w-7xl flex justify-between items-center px-4">
            <Link href="/" aria-label="navigate to home page" className="h-16 flex">
            <Logo className="h-full w-auto hover:scale-105 transition duration-300 ease-in-out"/>
            </Link>
            <ul className="hidden lg:flex lg:justify-center lg:items-center">
                {navItems.map((navItem: any) => (  
                    <li
                        key={navItem.id}
                        className="nav-links px-2 cursor-pointer capitalize text-sm xl:text-base font-xl:font-semibold hover:scale-105 text-owlOrange hover:text-neutral-300 duration-300 link-underline
                        xl:px-6 lg:px-3 md:px-1 "
                    >
                        <Link 
                            href={navItem.link} 
                            aria-label={navItem.ariaLabel}
                            >
                            {navItem.name}
                        </Link>
                    </li>
                ))}
                
                <li >  
                    <Link href="/contact" className="ml-5 shadow-xl px-4 hover:scale-105 transition duration-300 ease-in-out" aria-label="Navigate to contact page">
                        <MagicButton 
                            title='Write Us Now'
                            icon={<FaLocationArrow/>}
                            position='right'
                            otherClassesButton="border-none bg-owlBrown "
                            otherClasses="bg-owlBrown/50"
                        />
                    </Link>
                </li>

            </ul>

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

            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen 
                                bg-black/90 text-neutral-300 ">
                    {navItems.map((navItem: any) => (  
                        <li
                            key={navItem.id}
                            className="px-4 cursor-pointer capitalize py-6 text-xl"
                        >
                            <Link 
                                onClick={() => setNav(!nav)} 
                                href={navItem.link} 
                                aria-label={navItem.ariaLabel}
                                >
                                {navItem.name}
                            </Link>
                        </li>
                    ))}
                    
                    <li className="mt-20 md:mt-10">                
                        <Link onClick={() => setNav(!nav)} href="/contact" className="shadow-xl py-4 hover:scale-105 transition duration-300 ease-in-out"  aria-label="navigate contact page">
                            <MagicButton 
                                title='Write Us Now'
                                icon={<FaLocationArrow/>}
                                position='right'
                                otherClassesButton="border-none bg-owlBrown"
                                otherClasses="bg-owlBrown/50"
                            />
                        </Link>

                        <Link onClick={() => setNav(!nav)} href="/" className="absolute bottom-10 mx-auto left-40 right-40 md:left-60 md:right-60" aria-label="navigate main page">
                            <Logo />
                        </Link>  
                    </li>

                </ul>
            )}
        </div>
    </nav>
  )
}

export default NavigationStatic