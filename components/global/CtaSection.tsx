import Link from "next/link";
import Image from "next/image";
import { FaWpforms } from "react-icons/fa";

import dynamic from 'next/dynamic'
const MagicButton = dynamic(() => import('@/components/ui/MagicButton')) 
const ReadyUpgrade = dynamic(() => import('@/components/global/lotties/ReadyUpgrade')) 

const CtaSection = ({
    otherClasses,
    title,
} : {
    otherClasses?: string;
    title?: string;
}) => {
  return (
    <div className={`w-full px-4 rounded-xl flex justify-center items-center ${otherClasses}`}>
        <div className="w-full max-w-7xl flex flex-col md:flex-row gap-4 justify-center items-center px-4 py-16 md:py-24">
            <div className="w-full md:w-1/3 flex flex-col justify-center items-center gap-4 md:items-start">
                <h1 className='text-3xl font-bold text-left mt-1 md:mt-2 lg:mt-3'>
                    {title}
                </h1>        

                <p className="text-md lg:text-base text-normal ">
                    Contact us today for a free consultation and learn how we can elevate your online presence. Let us create a website with landing pages that impress and deliver results, backed by exceptional marketing strategies that produce rapid outcomes.
                </p>
                <Link href="/contact" aria-label='navigate to contact page' className="w-full md:w-fit">
                    <MagicButton 
                        title='Contact us'
                        icon={<FaWpforms/>}
                        position='right'
                    />
                </Link>
            </div>

            <ReadyUpgrade />  

        </div>
    </div>
  )
}

export default CtaSection