import Link from 'next/link'
import { FooterItemsCredentials, FooterItemsIcons, FooterItemsPages, FooterItemsTerms } from '../global/footerItems'
import { footerItemsCredentials, footerItemsIcons, footerItemsPages, footerItemsPages2, footerItemsTerms } from '@/data'
import { FaLocationArrow } from 'react-icons/fa'
import dynamic from 'next/dynamic'
const Logo = dynamic(() => import('@/components/global/Logo'))
const MagicButton = dynamic(() => import('@/components/ui/MagicButton')) 

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

            <div className='w-full flex flex-col lg:flex-row'>
                <div className='sm:w-full flex flex-row  text-center lg:text-left justify-between gap-3 sm:gap-8 py-8 lg:px-2'>
                    <ul className='w-1/3 sm:w-full flex flex-col text-left md:w-full max-w-[150px] md:max-w-[300px] gap-2'>
                        <li className="w-full font-semibold uppercase my-2 px-0 pr-2 md:pr-8">
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
                <div className='w-full flex flex-row lg:flex-col justify-center lg:justify-start items-center lg:items-start gap-8 lg:gap-2 lg:mt-8 lg:ml-8'>
                    {/* <FooterItemsIcons footerItemsIcons={footerItemsIcons} /> */}
                    <ul className='w-full flex flex-col text-left md:w-full md:max-w-[250px] gap-2'>
                        <li className="w-full font-semibold uppercase my-2 px-0 pr-2 md:pr-8">
                            What is?
                            <hr className="my-2 border-black-400 md:mx-auto"/>
                        </li>
                        <FooterItemsPages footerItemsPages={footerItemsPages2} />
                    </ul>
                </div> 
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
        </div>
    </footer>
  )
}

export default Footer