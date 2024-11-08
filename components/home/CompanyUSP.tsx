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
        <h2 className='heading'>
       Who we <span className='  tracking-wide'> ARE?</span> 
        </h2>
        <div className='relative max-w-7xl w-full flex justify-center md:justify-between flex-col-reverse md:flex-row gap-4 items-center'>
          <div className='w-full md:w-2/3 md:max-w-md xl:max-w-3xl flex flex-col items-center md:justify-start md:items-start gap-4'>
              <Tag title="Two Wings of the Same Owl" otherClass="text-owlBlue " icon="tagLineBlue.svg"/>                    
              <h1 className='heading md:text-left tracking-wide'>
                  From a {' '} Cozy Little Office to
                  <span className='text-owlBrown'></span> {' '}
                  <span className='text-owlBrown'> OwlWeb Agency</span> {' '} & {' '}
                  <span className='text-owlBrown'> OwlWeb Studio</span>                  
              </h1>                                   
              <p className="text-md lg:text-xl text-lg text-center md:text-left">
              So, it all started in this tiny office, just a handful of us with big dreams to help businesses succeed online. Now we’re OwlWeb Agency and Studio – one side connects companies with top remote talent, and the other dives into creative work like building websites and running smart marketing campaigns. We keep things simple, blend old-school values with fresh ideas, and make sure businesses shine—all while having a little fun along the way!
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