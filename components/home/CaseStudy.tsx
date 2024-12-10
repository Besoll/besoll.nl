import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { NumberingP } from '../ui/NumberingP';
import { PeopleTags } from '../ui/PeopleTags';
import { peopleInvolvedDRM, peopleInvolvedWaaS, pNumberingWaaS } from '@/data';

import dynamic from 'next/dynamic'
const Tag = dynamic(() => import('@/components/global/Tag'))
const MagicButton = dynamic(() => import('@/components/ui/MagicButton')) 

const CaseStudy = () => {
  return (
    <section className='w-full py-20 pb-40 px-4 md:px-8 flex justify-center items-center flex-col gap-16 md:gap-32' id='productUSP'>
      <div className='w-full flex flex-col gap-4 justify-center items-center md:mt-10'>
        <h1 className='heading tracking-wide'>
        Case <span className=''> Study</span> 
        </h1>
        <div className='relative max-w-7xl w-full flex justify-center md:justify-between flex-col-reverse md:flex-row gap-4 items-center'>
          <div className='w-full md:w-2/3 md:max-w-md xl:max-w-3xl flex flex-col items-center md:justify-start md:items-start gap-4'>
              <Tag title="1 deal in 3 leads" otherClass="text-owlBrown font-bold" icon="tagLineBrown.svg"/>
              <h1 className='heading md:text-left tracking-wide '>
                  Zongericht&apos;s {' '} 
                  <span className='text-owlBrown'> Success </span> {' '}
                  Story
              </h1>
              <p className="text-md lg:text-xl text-lg text-center md:text-left">
                At OwlWeb Studio, we specialize in Direct Response Marketing (DRM) and Website as a Service (WaaS). We are the only agency offering WaaS as a seamless subscription, ensuring businesses benefit from cutting-edge front-end and back-end development using the latest technologies.
              </p>
              <p className="text-md lg:text-xl text-lg text-center md:text-left">
                Discover how we helped Zongericht, a solar panel installation company in the Netherlands, overcome profitability challenges. By implementing our All-in-One package, we boosted their revenue from €60,000 to €1,210,000 per month, significantly improved lead quality, and optimized their digital marketing strategies.
              </p>
              
              <Link href="/case-study-zongericht" aria-label='navigate to case study Zongericht'>
                  <MagicButton 
                      title='See Full Case'                            
                      position='right'
                      otherClassesButton='mt-4 md:mt-8'
                  />
              </Link>                     
          </div>
          <div className='w-full md:w-2/3 h-auto'>
              <Image
                  src='/caseStudy/case-main.webp'
                  alt='WaaS - website as a service - 2'
                  width={1200}
                  height={1141}
                  className="w-full h-auto rounded-lg 
                          hover:scale-110 hover:skew-y-1 transition duration-300 ease-in-out cursor-pointer hover:rotate-1"
              />    
          </div>                
        </div>        
      </div>
    </section>
  )
}

export default CaseStudy