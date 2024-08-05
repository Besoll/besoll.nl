import { FaArrowAltCircleDown } from 'react-icons/fa'
// import { BackgroundGradientAnimation } from "@/components/ui/GradientBg";
import Link from 'next/link'

import dynamic from 'next/dynamic'
const FormMain = dynamic(() => import('@/components/ui/Form')) 
const GetStarted = dynamic(() => import('@/components/global/lotties/GetStarted')) 

const FormSection = () => {
  return (
    <div className='w-full flex justify-center items-center py-20 sm:px-4 px-4 relative  scroll-mt-2 snap-start scroll-smooth md:scroll-auto' id='formSection'>
        <div className='max-w-7xl w-full flex justify-center flex-col gap-4 items-center'>

            <GetStarted className='max-w-[300px]'/>
        
        <h1 className="heading z-30 md:pt-10 md:pb-4 flex flex-row justify-center items-center gap-2 cursor-pointer">
                Get  {' '}
                <span className='text-owlBrown'>Started Here:</span>
                
        </h1>
        <p className='text-xl'>
          Request a no-obligation consultation to learn how our products and services can be tailored to your specific needs. Share your details, and our account manager will contact you to schedule a meeting. We'll discuss your requirements and ensure you meet with the right experts from our team.
        </p>
        <p className='text-xl'>
          With OwlWeb Studio, you gain access to a professional and experienced staff dedicated to your project's success. Our B2B service provides you with a team of 6-12 specialists, all focused on achieving your goals, all through a single subscription.
        </p>
            
        
            <div className="w-full mx-auto px-0 md:px-8 z-30 py-12 ">
                <FormMain />
            </div>
        </div>
    </div>
  )
}

export default FormSection