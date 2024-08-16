"use client"
import Link from "next/link";
import { FaLocationArrow } from 'react-icons/fa'
import { ThreeDCard } from "@/components/ui/ThreeDCard";
import { ourTeam } from "@/data";
import { usePathname } from 'next/navigation'; // Import usePathname from next/navigation


import dynamic from 'next/dynamic'
const Seo = dynamic(() => import('@/components/global/lotties/Seo')) 
const MagicButton = dynamic(() => import('@/components/ui/MagicButton')) 

const OurTeam = () => {
    const pathname = usePathname(); // Get the current path
    const isHomePage = pathname === '/'; // Check if the current path is the home page

  return (
    <div className='w-full flex justify-center items-center py-20  text-black pb-40' id='ourTeam'>
        <div className='w-full flex justify-center flex-col gap-4 items-center'>
            <div className="w-full max-w-7xl sm:px-10 px-5 flex justify-center items-center flex-col md:flex-row gap-4">
                <div className='w-full md:max-w-xl flex flex-col items-center md:justify-start md:items-start gap-4 max-lg:mt-10 py-20'>
                    <h1 className='heading md:text-left'>
                        Our {' '} 
                        <span className='text-owlOrange'> Team</span>
                    </h1>
                    <p className="text-md lg:text-base text-normal md:leading-3">
                    Welcome to OwlWeb Studio! Meet the fun-loving crew who turn your web dreams into reality. We're a quirky bunch of tech enthusiasts and creative geniuses dedicated to crafting awesome web experiences. Here's a bit about us:
                    </p>
                    <p className="text-md lg:text-base text-normal md:leading-3">
                        Here&apos;s a glimpse of who we are:                        
                    </p>
                    <ul className="list-disc ml-6">
                        <li className="ml-6">
                            <span className="font-bold">Innovative Designers: </span>We craft visually engaging websites that captivate and convert.
                        </li>
                        <li className="ml-6">
                            <span className="font-bold">Tech Wizards: </span> Our developers use cutting-edge technology to build powerful, high-performing platforms.
                        </li>
                        <li className="ml-6">
                            <span className="font-bold">Marketing Gurus:  </span>We implement effective strategies to boost your online presence and drive results.
                        </li>
                        <li className="ml-6">
                            <span className="font-bold">Creative Thinkers: </span> From brainstorming sessions to the final product, we infuse creativity into every aspect of our work.
                        </li>
                        <li className="ml-6">
                            <span className="font-bold">Customer Champions:  </span> Our dedicated team ensures your needs are met with personalized support and exceptional service.
                        </li>
                    </ul>
                    <p className="text-md lg:text-base text-normal md:leading-3">
                        At OwlWeb Studio, we blend expertise with enthusiasm to create web solutions that not only meet your expectations but exceed them. Let&apos;s make magic happen together!
                    </p>
                </div>
                <div className='w-full md:w-1/3 h-auto'>
                    <Link href="#stepsBuild" className="cursor-pointer">
                        <Seo />
                    </Link>
                </div>
            </div>
            <div className="w-full  flex justify-center items-center mt-20">
                <div className="w-full max-w-7xl sm:px-10 px-5 py-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mb-2">
                    <ThreeDCard ourTeam={ourTeam} />
                </div>
            </div>

            <div className='w-full md:max-w-7xl px-4 flex flex-col items-center md:justify-start md:items-start gap-4 max-lg:mt-10 pt-40'>
                <h1 className='heading md:text-left'>
                    Why Work With {' '} 
                    <span className='text-owlBrown'> Us?</span>
                </h1>
                <p className="text-md lg:text-base text-normal md:leading-3">
                    At OwlWeb Studio, we thrive on the power of collaboration and creativity. Our dedicated team is passionate about transforming your vision into reality using cutting-edge technology and innovative design. We are committed to delivering exceptional results and exceeding your expectations.
                </p>
                <p className="text-md lg:text-base text-normal md:leading-3 mt-4">
                    <span className=" text-owlBrown">Ready to get started?</span> Give us a hoot and let's create something amazing together!
                </p>
            </div>
            <div className="w-full max-w-7xl px-4 flex justify-center items-center md:justify-start mt-2">
                <Link href={isHomePage ? "#formSection" : "/contact"}>
                    <MagicButton 
                        title='Write us now'
                        icon={<FaLocationArrow/>}
                        position='right'
                        otherClassesButton="border-none bg-owlBrown"
                        otherClasses="bg-owlBrown/50"
                    />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default OurTeam