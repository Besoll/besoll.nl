import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { NumberingP } from '../ui/NumberingP';
import { PeopleTags } from '../ui/PeopleTags';
import { peopleInvolvedDRM, peopleInvolvedWaaS, pNumberingWaaS } from '@/data';

import dynamic from 'next/dynamic'
const Tag = dynamic(() => import('@/components/global/Tag'))
const MagicButton = dynamic(() => import('@/components/ui/MagicButton')) 

const CompanyUSP = () => {
  return (
    <section className='w-full py-20 pb-40 px-4 md:px-8 flex justify-center items-center flex-col gap-16 md:gap-32' id='productUSP'>
      <div className='w-full flex flex-col gap-4 justify-center items-center'>
        <h1 className='heading'>
       Who we <span className='  tracking-wide'> ARE?</span> 
        </h1>
        <div className='relative max-w-7xl w-full flex justify-center md:justify-between flex-col-reverse md:flex-row gap-4 items-center'>
          <div className='w-full md:w-2/3 md:max-w-md xl:max-w-3xl flex flex-col items-center md:justify-start md:items-start gap-4'>
              <Tag title="OwlWeb Studio" otherClass="text-owlBrown font-bold" icon="tagLineBrown.svg"/>                    
              <h1 className='heading md:text-left tracking-wide'>
                  Multinational {' '} 
                  <span className='text-owlBrown'> Modern</span> {' '}
                  Agency with 17 years of the experience
              </h1>                                   
              <p className="text-md lg:text-xl text-lg text-center md:text-left">
                At OwlWeb Studio, we specialize in SEA and SEM within Direct Response Marketing, providing cutting-edge Website as a Service (WaaS) solutions. As the only agency offering seamless, subscription-based web management, we simplify your digital presence.
              </p>
              <p className="text-md lg:text-xl text-lg text-center md:text-left">
                Our expert team excels in both front-end and back-end development, leveraging the latest technologies to create high-performing, visually stunning websites. From generating qualified leads to optimizing Google Ads campaigns, we deliver innovative strategies that drive results.
              </p>
              <p className="text-md lg:text-xl text-lg text-center md:text-left">
                Experience the future of web development and marketing with OwlWeb Studio – your partner in digital excellence.
              </p>
              {/* <PeopleTags 
                Opener='People Involved: '
                Tags={peopleInvolvedDRM}
                OtherClasses='w-fit p-1 text-owlBrown/70 outline outline-offset-2 place-self-auto outline-owlOrange/40 bg-owlOrange/40 uppercase hover:text-owlBrown hover:outline-owlOrange flex justify-center items-center'
              /> */}

              <Link href="/our-team" aria-label='navigate to our-team page'>
                  <MagicButton 
                      title='More About Us'                            
                      position='right'
                      otherClassesButton='mt-4 md:mt-8'
                  />
              </Link>                    
          </div>
          <div className='w-full md:w-2/3 h-auto'>
              <Image
                  src='/owlweb-studio.webp'
                  alt='DRM - Direct response Marketing - 1'
                  width={800}
                  height={800}
                  className="w-full h-auto rounded-lg
                          mhover:scale-110 hover:skew-y-1 transition duration-300 ease-in-out cursor-pointer hover:rotate-1"
              />    
          </div>   
        </div>
      </div>
    </section>
  )
}

export default CompanyUSP