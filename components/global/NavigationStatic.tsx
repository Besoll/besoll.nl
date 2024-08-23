"use client"

import Link from "next/link";
import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";

import dynamic from 'next/dynamic'
import { navItemsStatic } from "@/data";
const Logo = dynamic(() => import('@/components/global/Logo'))
const MagicButton = dynamic(() => import('@/components/ui/MagicButton')) 
const HamburgerMenu = dynamic(() => import('@/components/icons/HamburgerMenu'))
const HamburgerMenuOpen = dynamic(() => import('@/components/icons/HamburgerMenuOpen'))
const NavigationStaticMobile = dynamic(() => import('@/components/global/NavigationStaticMobile'))

const NavigationStatic = ({
    navItemsStatic,
}:{
    navItemsStatic: {
        name: string;
        link: string;
        icon?: JSX.Element;
        ariaLabel: string;
    }[];
}) => {

    const [nav, setNav] = useState(false);

  return (
    <nav className='w-full flex justify-center items-center h-20 text-primary bg-black-100 shadow-lg fixed nav z-50 '>
        <div className="w-full max-w-7xl flex justify-between items-center px-4">
            <Link href="/" aria-label="navigate to home page" className="h-16 flex">
            <Logo className="h-full w-auto hover:scale-105 transition duration-300 ease-in-out"/>
            </Link>
            <ul className="hidden lg:flex lg:justify-center lg:items-center">
                {navItemsStatic.map((navItem: any) => (  
                    <li
                        key={navItem.id}
                        className="nav-links mx-[-.63rem] cursor-pointer capitalize text-base font-bold hover:outline outline-1 outline-offset-1 rounded-md px-1 py-1 hover:scale-105 text-neutral-400 hover:text-neutral-100 outline-neutral-100 duration-300 link-underline
                        xl:mx-2 lg:mx-2 md:mx-2"
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
                            otherClasses=""
                        />
                    </Link>
                </li>

            </ul>

            <div onClick={() => setNav(!nav)}>
                {nav && (
                    <NavigationStaticMobile navItemsStatic={navItemsStatic} />
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