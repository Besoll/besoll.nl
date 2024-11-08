import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import dynamic from 'next/dynamic'
// const Tag = dynamic(() => import('@/components/global/Tag'))
const MagicButton = dynamic(() => import('@/components/ui/MagicButton')) 

const ProductUSP = () => {
  return (
    <section className='w-full py-20 pb-4 px-4 md:px-8 flex justify-center items-center flex-col gap-16 md:gap-32' id='productUSP'>
      <div className='w-full flex flex-col gap-4 justify-center items-center pt-16'>
        <div className='relative max-w-7xl w-full flex justify-center flex-col-reverse  gap-4 items-center'>
          <div className='w-full flex flex-col items-center gap-4'>
              {/* <Tag title="OwlWeb Studio" otherClass="text-owlBrown font-bold" icon="tagLineBrown.svg"/>                     */}
              <h1 className='heading md:text-left tracking-wide mt-4'>
                  From a {' '} Cozy Little Office to
                  <span className='text-owlBrown'></span> {' '}
                  <span className='text-owlBrown'> OwlWeb Agency</span> {' '} & {' '}
                  <span className='text-owlBrown'> OwlWeb Studio</span>                  
              </h1>                                   
              <p className="text-md lg:text-xl text-lg text-center md:text-left">
                In a cozy little office with big dreams, a small team of passionate tech enthusiasts came together, united by one goal: to help businesses grow in ways they never imagined. The world was changing fast, with technology advancing at lightning speed, but they saw a common problem. Companies were either drowning in the complexities of digital marketing or struggling to make an impact online. There was no clear guide to help them navigate both the creative and technical landscapes, and that\’s where we knew we could help.
              </p>
              <p className="text-md lg:text-xl text-lg text-center md:text-left">
                Our founders envisioned OwlWeb not just as another agency or studio, but as a partner to bridge this gap, guiding businesses through the maze of modern marketing and digital development. With a mix of dramatic vision and a whole lot of humor, they embraced the owl as their mascot – wise, sharp, and always adaptable. And just like owls, we\’ve kept a sharp focus on our mission, delivering precise, impactful solutions, whether that means building beautiful websites, running powerful marketing campaigns, or simplifying complex processes.
              </p>
              <p className="text-md lg:text-xl text-lg text-center md:text-left">
                Fast-forward to today, and OwlWeb has grown beyond our wildest dreams. We\’re now OwlWeb Agency and OwlWeb Studio, two wings of the same owl, working together to provide a full suite of services. Our Agency side is your team\’s best friend in remote hiring, connecting you with world-class developers and designers without the hassle of relocation. Meanwhile, our Studio team dives into creative projects, from crafting captivating social media campaigns and designing landing pages to developing dynamic marketing strategies like Direct Response Marketing (DRM) and Website as a Service (WaaS).
              </p>
              <p className="text-md lg:text-xl text-lg text-center md:text-left">
                We love a good story, and we love creating one with our clients even more. Our values are rooted in tradition, but we\’re constantly innovating, blending time-tested principles with fresh, modern ideas. We believe in hard work, a good laugh, and always finding a new way to get the job done right. Together, let\’s build something remarkable – the kind of digital experience that leaves an impact, with a story worth telling.
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
                  src='/owlweb-studio2.webp'
                  alt='DRM - Direct response Marketing - 1'
                  width={800}
                  height={800}
                  className="w-full h-auto rounded-lg
                          hover:scale-110 hover:skew-y-1 transition duration-300 ease-in-out cursor-pointer hover:rotate-1"
              />    
          </div>   
        </div>
      </div>
    </section>
  )
}

export default ProductUSP