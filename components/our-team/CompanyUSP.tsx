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
    <section className='w-full py-20 pb-4 px-4 md:px-8 flex justify-center items-center flex-col gap-16 md:gap-32' id='productUSP'>
      <div className='w-full flex flex-col gap-4 justify-center items-center pt-16'>
        <div className='relative max-w-7xl w-full flex justify-center flex-col-reverse  gap-4 items-center'>
          <div className='w-full md:w-2/3 md:max-w-md xl:max-w-3xl flex flex-col items-center md:justify-start md:items-start gap-4'>
              {/* <Tag title="OwlWeb Studio" otherClass="text-owlBrown font-bold" icon="tagLineBrown.svg"/>                     */}
              <h1 className='heading md:text-left tracking-wide'>
                  OwlWeb {' '} 
                  <span className='text-owlBrown'> Studio</span> {' '}                  
              </h1>                                   
              <p className="text-md lg:text-xl text-lg text-center md:text-left">
                At OwlWeb Studio, we are pioneers in delivering advanced digital solutions with a focus on SEA and SEM within Direct Response Marketing. As the only agency offering seamless Website as a Service (WaaS), we provide businesses with an easy, subscription-based web management system that takes the hassle out of maintaining a high-performing digital presence.
              </p>
              <p className="text-md lg:text-xl text-lg text-center md:text-left">
                Our team of seasoned experts excels in both front-end and back-end development, utilizing the latest technologies to build websites that are not only visually stunning but also optimized for performance. We pride ourselves on our technical skills and our ability to integrate modern technologies to create platforms that stand out in both functionality and design.
              </p>
              <p className="text-md lg:text-xl text-lg text-center md:text-left">
                We specialize in generating qualified leads through effective Google Ads campaigns, ensuring that every marketing dollar you spend brings you closer to your business goals. Our expertise in SEO and SEA enables us to craft strategies that drive traffic, increase conversions, and enhance your overall digital footprint.
              </p>
              <p className="text-md lg:text-xl text-lg text-center md:text-left">
              At OwlWeb Studio, we understand the importance of a cohesive digital strategy. Our multidisciplinary team includes developers, content creators, designers, and marketing specialists who work together to bring your vision to life. We are passionate about delivering creative solutions that meet business objectives and enhance user experiences.
              </p>
              <p className="text-md lg:text-xl text-lg text-center md:text-left">
              With our WaaS model, we make web management as simple as subscribing to a service. This innovative approach allows us to provide continuous updates, maintenance, and improvements, ensuring your website remains at the forefront of technological advancements without any effort on your part.
              </p>
              <p className="text-md lg:text-xl text-lg text-center md:text-left">
              Join us at OwlWeb Studio, where we combine creativity, technology, and a deep understanding of digital marketing to help your business thrive in the digital age. Experience the difference with our cutting-edge solutions and dedicated team, committed to your success.
              </p>
              {/* <PeopleTags 
                Opener='People Involved: '
                Tags={peopleInvolvedDRM}
                OtherClasses='w-fit p-1 text-owlBrown/70 outline outline-offset-2 place-self-auto outline-owlOrange/40 bg-owlOrange/40 uppercase hover:text-owlBrown hover:outline-owlOrange flex justify-center items-center'
              /> */}

              <Link href="/contact" aria-label='navigate to our-team page'>
                  <MagicButton 
                      title='get started'                            
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
                          md:hover:scale-110 md:hover:skew-y-1 md:transition md:duration-300 md:ease-in-out md:cursor-pointer md:hover:rotate-1"
              />    
          </div>   
        </div>
      </div>
    </section>
  )
}

export default ProductUSP