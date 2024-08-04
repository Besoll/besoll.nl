import Link from "next/link";
import Image from "next/image";
import { FaWpforms } from 'react-icons/fa'
import dynamic from 'next/dynamic'
const TechStack = dynamic(() => import('@/components//global/lotties/TechStack'))
const MagicButton = dynamic(() => import('@/components/ui/MagicButton')) 

const WaaSTraditional = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center text-black px-4 gap-4 md:gap-8 xl:gap-12 pt-4 md:pt-32'>            
        <div className='relative max-w-7xl w-full flex justify-center flex-col-reverse md:flex-row gap-4 items-center pt-24'>
            <div className='w-full md:max-w-md xl:max-w-3xl flex flex-col items-center md:justify-start md:items-start gap-4 '>                                 
                
                <h1 className='heading md:text-left'>
                Traditional Websites: {' '} 
                    <span className='text-owlBrown'> A Snapshot in Time</span> {' '}                        
                </h1> 

                <p className="text-md lg:text-xl text-lg">
                    Many businesses choose to have a website developed, a process that often takes months and requires significant investment. However, as soon as these websites are launched, they begin to become outdated. Technologies evolve, design trends change, and content needs constant updates to stay relevant. This leads to a cycle of constant redevelopment and additional costs, without ever really being <span className="font-bold">'up to date'</span>.
                </p>                   

                {/* <Link href="/contact?package=waas-cta" aria-label='Start now - fill the form' className="w-full md:w-fit mt-12 md:mt-4">
                    <MagicButton 
                        title='Get started here'
                        icon={<FaWpforms/>}
                        position='right'
                    />
                </Link>                  */}
            </div>
            <div className='w-full flex flex-col justify-center items-center md:justify-start md:items-start gap-4'>
                <Image
                    src='/WaaSTradiotionalWebsite.webp'
                    alt='DRM - Direct response Marketing - 2'
                    width={800}
                    height={800}
                    className="w-full  h-auto shadow-md hover:shadow-xl rounded-lg 
                            hover:scale-11 hover:skew-y-1 transition duration-300 ease-in-out cursor-pointer hover:rotate-1 "
                />                 
            </div>
        </div>

       
    </div>
  )
}

export default WaaSTraditional