import Link from 'next/link'
import { FooterItemsCredentials, FooterItemsPages, FooterItemsTerms } from '../global/footerItems'
import { footerItemsCredentials, footerItemsPages, footerItemsPages2, footerItemsTerms } from '@/data'
import { FaLocationArrow } from 'react-icons/fa'
import dynamic from 'next/dynamic'
const Logo = dynamic(() => import('@/components/global/Logo'))
const MagicButton = dynamic(() => import('@/components/ui/MagicButton')) 
const LanguageSwitcher = dynamic(() => import('@/components/ui/LanguageSwitcher'))

// Helper function to format the current date
const getCurrentDate = () => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {      
      month: 'short',
      year: 'numeric',
    };
    return date.toLocaleDateString('nl-NL', options);
    };

const Footer = () => {
    const currentDateFooter = getCurrentDate();
  return (
    <footer className="w-full max-w-full overflow-hidden flex flex-col justify-center items-center shadow-lg bg-black text-gray-300 text-md md:text-base px-2 sm:px-4 py-16 md:py-20" >

        <div className="max-w-7xl flex flex-col lg:flex-row justify-center items-center lg:justify-between lg:items-start gap-8 md:gap-8 lg:gap-32">

            <div className='flex flex-col justify-center items-center w-[240px] h-[260px] sm:w-[380px] sm:h-[300px] md:w-[450px] md:h-[350px] xl:w-[400px] xl:h-[400px] md:mr-2 gap-4'>
                <Link className="flex justify-center items-center" href="/" aria-label="Write us now, navigate to form section">
                    <Logo className="w-full "/>
                </Link>
                <hr className="w-full border-black-300 md:mx-auto -mt-1"/>
                <p className='text-center text-white'> 
                    With OwlWeb Studio, you get a dedicated team of specialists focused on your project's success, all through a single subscription.
                </p>
                <hr className="w-full border-black-300 md:mx-auto"/>
                    <Link href="/contact" aria-label="navigate to contact page">
                      <MagicButton 
                        title='Write us now'
                        icon={<FaLocationArrow/>}
                        position='right'
                        otherClasses=""
                        otherClassesButton='mb-0 p-0 md:mt-1'
                        />
                    </Link>
            </div>
            
        </div>


        <hr className="my-6 border-black-400 sm:mx-auto lg:my-8" />
        
        <div className="flex justify-center text-center  pb-6 flex-col">
            <FooterItemsCredentials  footerItemsCredentials={footerItemsCredentials} />
            <hr className="w-full my-2 border-black-400 md:mx-auto"/>
            <div className='text-xs'>
                    Besoll | Copyright © {' '}
                    <span className='capitalize'>
                        {currentDateFooter}
                    </span>. {' '} All right reserved.
            </div>
            <div className='text-xs hover:'>
                Developed and continuously maintained by {' '} 

                    <Link 
                    href='https://besok.nl'
                    aria-label='navigate to the developers website'
                    className='nav-links cursor-pointer hover:scale-105 hover:text-[#0f90ae]  text-[#0f67ae] duration-300 ease-in-out'
                >
                    beSok.nl                  
                </Link>
            </div>

            
        </div>
    </footer>
  )
}

export default Footer