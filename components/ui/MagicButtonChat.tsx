"use client"

import { useRouter } from 'next/navigation';
import React from 'react'

const MagicButtonChat = ({
    title, icon, position
}: {
    title: string;
    icon: React.ReactNode;
    position: string;
}) => {
  const router = useRouter();
   const handleClick = () => {
    // Construct the WhatsApp message
    const message = encodeURIComponent("Hey! I visited your website and I'm interested in your services. Let's chat!");

    // Replace '1234567890' with your actual WhatsApp number
    const whatsappUrl = `https://wa.me/31613734546/?text=${message}`;

    // Open the WhatsApp link
    window.open(whatsappUrl, '_blank');
};

  return (
    <button className='relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none w-full md:w-60 md:mt-10 text-white' onClick={handleClick}>
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#25D366_0%,green_50%,#25D366_100%)]" />
        <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg px-7 text-sm font-medium hover:bg-[#25D366] hover:text-black backdrop-blur-3xl gap-2'>
            {position === 'left' && icon}
            {title}
            {position === 'right' && icon}
        </span>
    </button>
  )
}

export default MagicButtonChat