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