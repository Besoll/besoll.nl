import Link from 'next/link'
import { FooterItemsCredentials, FooterItemsIcons, FooterItemsPages, FooterItemsTerms } from '../global/footerItems'
import { footerItemsCredentials, footerItemsIcons, footerItemsPages, footerItemsTerms } from '@/data'
import { FaLocationArrow } from 'react-icons/fa'
import dynamic from 'next/dynamic'
const Logo = dynamic(() => import('@/components/global/Logo'))
const MagicButton = dynamic(() => import('@/components/ui/MagicButton')) 


const Footer = () => {
  return (
    <footer className="w-full max-w-full overflow-hidden flex flex-col justify-center items-center shadow-lg text-gray-300 text-md md:text-base mt-20 md:mt-5 px-2 sm:px-4 md:px-6 lg:px-8 py-10 md:py-20">

        <div className="max-w-7xl flex flex-col md:flex-row justify-center items-center md:justify-between md:items-start gap-8 md:gap-8 lg:gap-32">

            <div className='flex flex-col justify-center items-center w-[240px] h-[260px] md:w-[260px] md:h-[280px] xl:w-[300px] xl:h-[300px] md:mr-2 gap-2'>
                <Link className="flex justify-center items-center" href="#formSection" aria-label="Write us now, navigate to form section">
                    <Logo className="w-full min-w-[100px] md:min-w-[250px] lg:min-w-[350px] xl:min-w-[450px] max-w-[450px]"/>
                </Link>
                <hr className="w-full border-black-400 md:mx-auto -mt-2"/>
                <p className='text-center text-white'> 
                    Request no obligation contalncy with us, where we can listen and offer the best solutions for your business
                </p>
                <hr className="w-full border-black-400 md:mx-auto"/>
                    <Link href="#formSection" aria-label="Write us now, navigate to form section">
                      <MagicButton 
                        title='Write us now'
                        icon={<FaLocationArrow/>}
                        position='right'
                        otherClassesButton='mb-0 p-0 md:mt-1'
                        />
                    </Link>
            </div>

            <div className='flex flex-col lg:flex-row md:ml-[10px]'>
                <div className='sm:w-fit flex flex-row justify-center text-center md:text-left md:justify-between gap-3 sm:gap-8 py-8 md:px-2'>
                    <ul className='w-1/3 sm:w-full flex flex-col text-left md:w-full max-w-[150px] md:max-w-[250px] gap-2'>
                        <li className="w-full font-semibold uppercase my-2 px-2">
                            Pages
                            <hr className="my-2 border-black-400 md:mx-auto"/>
                        </li>
                        <FooterItemsPages footerItemsPages={footerItemsPages} />
                    </ul>
                    <ul className='w-full flex flex-col text-right sm:min-w-[200px] md:w-full gap-2 '>
                        <li className="font-semibold uppercase my-2 px-2">
                            {/* Voorwaarden & Privacy */} Terms & Privacy
                            <hr className="my-2 border-black-400 md:mx-auto"/>
                        </li>
                        <FooterItemsTerms footerItemsTerms={footerItemsTerms} />                 
                    </ul> 
                </div>
                <div className='w-full flex flex-row lg:flex-col justify-center md:justify-start items-center md:items-start gap-8 md:gap-2 md:mt-8 md:ml-8'>
                    <FooterItemsIcons footerItemsIcons={footerItemsIcons} />
                </div> 
            </div>
            
        </div>

        <hr className="my-6 border-black-400 sm:mx-auto lg:my-8" />
        
        <div className="flex justify-center text-center  pb-6 flex-col">
            <FooterItemsCredentials  footerItemsCredentials={footerItemsCredentials} />
            <hr className="w-full my-2 border-black-400 md:mx-auto"/>
            <div className='text-xs'>
                    Besoll | Copyright © 2024. All right reserved.
            </div>
        </div>
    </footer>
  )
}

export default Footer