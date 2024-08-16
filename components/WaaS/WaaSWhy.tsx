import Link from "next/link";
import { FaWpforms } from 'react-icons/fa'
import dynamic from 'next/dynamic'
const TechStack = dynamic(() => import('@/components//global/lotties/TechStack'))
const MagicButton = dynamic(() => import('@/components/ui/MagicButton')) 

const WaaSWhy = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center text-black px-4 gap-4 md:gap-8 xl:gap-12 pt-4 md:pt-32'>            
        <div className='relative max-w-7xl w-full flex justify-center flex-col-reverse md:flex-row gap-4 items-center pt-24'>
            <div className='w-full md:max-w-md xl:max-w-3xl flex flex-col items-center md:justify-start md:items-start gap-4 '>                                 
                
                <h1 className='heading md:text-left'>
                    Why {' '} 
                    <span className='text-owlBrown'> WaaS?</span> {' '}                        
                </h1> 

                <p className="text-md lg:text-xl text-lg">
                    With WaaS, you receive a state-of-the-art, custom-designed website featuring at least 5 tailored landing pages. Your site will always be up-to-date, fully optimized, and designed to achieve high search engine rankings, ensuring maximum visibility and engagement.
                </p>   
                <p className='text-3xl font-semibold md:text-left -mb-4'>
                    WaaS: {' '} 
                    <span className='text-owlBrown'> A Living Solution</span> {' '}                        
                </p> 

                <p className="text-md lg:text-xl text-lg">Our WaaS solution offers a radical alternative to a static website that becomes outdated as soon as it goes live. WaaS offers a dynamic platform that grows with your business. Here are some of the benefits:</p>
                    <ul className="list-disc list-inside">
                        <li><strong>Always Up to Date:</strong> Our team ensures that your website reflects the latest technologies and trends. Your website evolves without you having to pay extra for it.</li>
                        <li><strong>Your Growth, Our Management:</strong> Leave the management of your website to us, giving you the freedom to focus on what really matters: growing your business.</li>
                    </ul>  

                <Link href="/contact?package=waas-cta" aria-label='Start now - fill the form' className="w-full md:w-fit mt-12 md:mt-4">
                    <MagicButton 
                        title='Get started here'
                        icon={<FaWpforms/>}
                        position='right'
                    />
                </Link>                 
            </div>
            <div className='w-full h-auto -mt-32 -mb-24 md:-mt-6 md:-mb-6'>
                <TechStack />
            </div>
        </div>

       
    </div>
  )
}

export default WaaSWhy