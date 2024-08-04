import Link from "next/link";
import Image from "next/image";
import { FaWpforms } from 'react-icons/fa'
import dynamic from 'next/dynamic'
const MagicButton = dynamic(() => import('@/components/ui/MagicButton')) 

const WaaSFAQ = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center   text-black sm:px-8 xl:px-4 px-4 gap-24 md:gap-24 xl:gap-24 my-0 md:my-16 py-4 md:py-16'>  

        <div className='relative max-w-7xl w-full flex justify-center md:justify-between flex-col  gap-4 items-center'>
                <h2 className="text-3xl font-semibold mb-4">Frequently Asked Questions</h2>
                <div className="w-full faq-item mb-4">
                    <h3 className="text-2xl font-semibold">1. How quickly can my website be online?</h3>
                    <p>Normally, your website will be live within four weeks after the start of the assignment, provided you provide the necessary texts and photos. If you do not have this content, we can provide it for you. We can perform this process parallel to the website development, so that your site is online complete with text and content within four weeks.</p>
                </div>
                <div className="w-full faq-item mb-4">
                    <h3 className="text-2xl font-semibold">2. Who decides on the design of the website?</h3>
                    <p>The design of the website is based on an analysis of your target group, taking into account your specific wishes that we determined during our initial strategic discussion.</p>
                </div>
                <div className="w-full faq-item mb-4">
                    <h3 className="text-2xl font-semibold">3. How does payment for the WaaS work?</h3>
                    <p>With our WaaS website, you start with a one-time fixed starting fee that covers only 10% of the total costs. After that, you pay a monthly fee that includes not only maintenance and updates, but also the integration of plugins and any improvements to the design. This way, your website will always be provided with the latest features.</p>
                </div>
                <div className="faq-item">
                    <h3 className="text-2xl font-semibold">4. What is the duration of a subscription?</h3>
                    <p>With us, the WaaS website subscription is set up as an annual contract. This year gives us the opportunity to work closely together and tailor the service perfectly to your needs, with room for possible adjustments.</p>
                </div>         

        </div> 
    </div>
  )
}

export default WaaSFAQ