"use client"

import Link from "next/link";
import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";

import dynamic from 'next/dynamic'
const Logo = dynamic(() => import('@/components/global/Logo'))
const MagicButton = dynamic(() => import('@/components/ui/MagicButton')) 

const NavigationStaticMobile = ({
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
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen 
                        bg-black/90 text-neutral-300 ">
            {navItemsStatic.map((navItem: any) => (  
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
  )
}

export default NavigationStaticMobile