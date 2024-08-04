import Link from "next/link";
import Image from "next/image";
import { FaWpforms } from 'react-icons/fa'
import { StepsWithoutNumeric } from "../ui/StepsWithoutNumeric";
import { waasBenefits } from "@/data";
import dynamic from 'next/dynamic'
const MagicButton = dynamic(() => import('@/components/ui/MagicButton')) 

const WaaSBenefits = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center text-black px-4 gap-4 md:gap-8 xl:gap-12 pt-4 md:pt-32 md:pb-32 pb-16'>
        
                    
        <div className='relative max-w-7xl w-full flex justify-center flex-col-reverse md:flex-row-reverse  gap-4 items-center pt-24'>


            <div className='w-full md:max-w-md xl:max-w-3xl flex flex-col items-center md:justify-start md:items-start gap-4 '>                                 
                
                <h1 className='heading text-center '>
                    Benefits of {' '} 
                    <span className='text-owlBrown'> WaaS</span> {' '}                      
                </h1> 
                <p className="text-center md:text-left text-md lg:text-xl text-lg ">
                    Our WaaS solution provides a wide range of advantages that ensure your website remains modern, efficient, and aligned with your business objectives. Here are some of the key benefits you can expect:
                </p>  
                             

                {/* <Link href="/contact?package=waas-cta" aria-label='Start now - fill the form' className="w-full md:w-fit mt-12 md:mt-4">
                    <MagicButton 
                        title='Get started here'
                        icon={<FaWpforms/>}
                        position='right'
                    />
                </Link>                  */}
            </div>
            <div className='w-full flex flex-col justify-center items-center md:justify-start md:items-start gap-4 md:mr-6'>
                <Image
                    src='/waasBenefits.webp'
                    alt='DRM - Direct response Marketing - 2'
                    width={800}
                    height={800}
                    className="w-full  h-auto shadow-md hover:shadow-xl rounded-lg 
                            hover:scale-11 hover:skew-y-1 transition duration-300 ease-in-out cursor-pointer hover:rotate-1 "
                />                 
            </div>
        </div>

        <div className="w-full max-w-7xl flex flex-col justify-center items-stretch gap-4 pb-4">
            <StepsWithoutNumeric steps={waasBenefits} otherClasses="bg-blue_Light/10 " /> 
        </div> 

       
    </div>
  )
}

export default WaaSBenefits