import Image from "next/image"

import dynamic from 'next/dynamic'
const CtaButton = dynamic(() => import('@/components/global/CtaButton1'))


const Navbar = () => {
   
  return (
    <div className="flex mx-auto justify-center items-center w-full h-20  bg-white shadow-lg z-10 dark:invert">
      <div className="flex justify-between items-center w-full px-4 text-primary max-w-[1440px]">
          <Image 
              src='/besoll.svg'
              alt='Logo Zongericht'
              width={180}
              height={37}
              priority
              className="md:hover:scale-105 transition duration-300 ease-in-out dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          />          
          <CtaButton />
      </div>
    </div>
  );
};

export default Navbar;