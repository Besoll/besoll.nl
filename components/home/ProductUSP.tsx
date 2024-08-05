import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { NumberingP } from '../ui/NumberingP';
import { PeopleTags } from '../ui/PeopleTags';
import { peopleInvolvedDRM, peopleInvolvedWaaS, pNumberingWaaS } from '@/data';

import dynamic from 'next/dynamic'
const Tag = dynamic(() => import('@/components/global/Tag'))
const MagicButton = dynamic(() => import('@/components/ui/MagicButton')) 

const ProductUSP = () => {
  return (
    <section className='w-full py-20 pb-40 px-4 md:px-8 flex justify-center items-center flex-col gap-16 md:gap-32' id='productUSP'>
      <div className='w-full flex flex-col gap-4 justify-center items-center'>
        <h1 className='heading'>
        What is <span className='text-owlBrown  tracking-wide'> DRM?</span> 
        </h1>
        <div className='relative max-w-7xl w-full flex justify-center md:justify-between flex-col-reverse md:flex-row gap-4 items-center'>
          <div className='w-full md:w-2/3 md:max-w-md xl:max-w-3xl flex flex-col items-center md:justify-start md:items-start gap-4'>
              <Tag title="Direct Response Marketing" otherClass="text-owlBrown font-bold" icon="tagLineBrown.svg"/>                    
              <h1 className='heading md:text-left tracking-wide'>
                  immediate reaction {' '} 
                  <span className='text-owlBrown'> from</span> {' '}
                  consumers
              </h1>                                   
              <p className="text-md lg:text-xl text-lg text-center md:text-left">
                Direct response marketing is a strategy focused on getting an immediate reaction from consumers, like visiting a website, making a purchase, or sharing a social media post. Unlike long-term brand building or awareness campaigns, direct response marketing aims for quick, specific actions. This approach makes it easier to track the return on investment (ROI) since the results are immediate and measurable.
              </p>
              <PeopleTags 
                Opener='People Involved: '
                Tags={peopleInvolvedDRM}
                OtherClasses='w-fit p-1 text-black outline outline-offset-2 place-self-auto outline-owlBrown/10 bg-owlBrown/20 uppercase hover:text-white hover:outline-owlBrown flex justify-center items-center'
              />

              <Link href="/direct-response-marketing" aria-label='navigate to DRM page'>
                  <MagicButton 
                      title='See more about DRM'                            
                      position='right'
                      otherClassesButton='mt-4 md:mt-8'
                  />
              </Link>                    
          </div>
          <div className='w-full md:w-2/3 h-auto'>
              <Image
                  src='/drm-1.webp'
                  alt='DRM - Direct response Marketing - 1'
                  width={800}
                  height={800}
                  className="w-full h-auto rounded-lg
                          md:hover:scale-110 md:hover:skew-y-1 md:transition md:duration-300 md:ease-in-out md:cursor-pointer md:hover:rotate-1"
              />    
          </div>                
        </div>
      </div>

      <div className='w-full flex flex-col gap-4 justify-center items-center md:mt-10'>
        <h1 className='heading tracking-wide'>
        What is <span className='text-owlBrown'> WaaS?</span> 
        </h1>
        <div className='relative max-w-7xl w-full flex justify-center md:justify-between flex-col-reverse md:flex-row-reverse gap-4 items-center'>
          <div className='w-full md:w-2/3 md:max-w-md xl:max-w-3xl flex flex-col items-center md:justify-start md:items-start gap-4'>
              <Tag title="Website as a Service" otherClass="text-owlBrown font-bold" icon="tagLineBrown.svg"/>
              <h1 className='heading md:text-left tracking-wide '>
                  Website {' '} 
                  <span className='text-owlBrown'> plus </span> {' '}
                  up to 30 Landing Pages
              </h1> 
              <NumberingP 
                Opener='We craft bespoke websites tailored to your business with an ultra-personalized design. Here&apos;s our process:'
                Closer='Experience a website that not only reflects your brand but also drives results.'
                OtherClasses='text-left'
                NumberItems={pNumberingWaaS}
              />
              <PeopleTags 
                Opener='People Involved: '
                Tags={peopleInvolvedWaaS}
                OtherClasses='w-fit p-1 text-black outline outline-offset-2 place-self-auto outline-owlBrown/10 bg-owlBrown/20 uppercase font-semibold hover:outline-owlBrown flex justify-center items-center'
              />
              <Link href="/website-as-a-service" aria-label='navigate to WaaS page'>
                  <MagicButton 
                      title='See more about WaaS'                            
                      position='right'
                      otherClassesButton='mt-4 md:mt-8'
                  />
              </Link>                     
          </div>
          <div className='w-full md:w-2/3 h-auto'>
              <Image
                  src='/waas-2.webp'
                  alt='WaaS - website as a service - 2'
                  width={1500}
                  height={998}
                  className="w-full h-auto rounded-lg flex md:hidden
                          md:hover:scale-110 md:hover:skew-y-1 md:transition md:duration-300 md:ease-in-out md:cursor-pointer md:hover:rotate-1"
              />  
              <Image
                  src='/waas-2-long.webp'
                  alt='WaaS - website as a service - 2'
                  width={1000}
                  height={1724}
                  className="w-full h-auto rounded-lg hidden md:flex
                          md:hover:scale-110 md:hover:skew-y-1 md:transition md:duration-300 md:ease-in-out md:cursor-pointer md:hover:rotate-1"
              />    
          </div>                
        </div>        
      </div>
    </section>
  )
}

export default ProductUSP