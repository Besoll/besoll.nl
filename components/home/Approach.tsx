"use client"
import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect"

const Approach = () => {
  return (
    <section className='w-full py-20 pb-40 px-4 md:px-8' id='approach'>
        <h1 className='heading'>
        Recommended <span className='text-owlOrange'> Packages</span> 
        </h1>
        <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
            <Card 
                title="Website Creation Deluxe" 
                icon={<AceternityIcon order='Website' />}
                description="Create a custom-designed website with stunning animations, fully licensed content, and optimization nearing 100 on Google Lighthouse. Optionally include high-converting landing pages to boost your Google ranking and lead generation."
                // link='/services/package-website'
                ariaLabel='navigate to website package'
                >
                    <CanvasRevealEffect
                        animationSpeed={5.1}
                        containerClassName="bg-emerald-900"
                    />
            </Card>
            <Card 
                title="Social Media Mastery" 
                icon={<AceternityIcon order='Social Media' />}
                description="Manage your social media with business page creation, daily and weekly posts, and engaging activities to enhance your online presence."
                // link='/services/package-social-media'
                ariaLabel='navigate to Social Media package'
                >
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-black"
                        colors={[
                        [236, 72, 153],
                        [232, 121, 249],
                        ]}
                        dotSize={2}
                    />
                {/* Radial gradient for the cute fade */}
                {/* <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)]  bg-black/90" /> */}
            </Card>
            <Card 
                title="The Total Web Solution" 
                icon={<AceternityIcon order='Content Creator' />}
                description="Combine the Website Creation Deluxe and Social Media Mastery packages, plus personalized content creation such as office photos, aerial shoots, and specialized website content. Explore options for e-commerce, hotel reservation systems, and custom software applications."
                // link='/services/package-content-creator'
                ariaLabel='navigate to Content Creator package'
                >
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-sky-600"
                        colors={[[125, 211, 252]]}
                    />
            </Card>
      </div>
    </section>
  )
}

const Card = ({
    title,
    icon,
    children,
    description,
    link,
    ariaLabel,
  }: {
    title: string;
    icon: React.ReactNode;
    children?: React.ReactNode;
    description: string;
    link?: string;
    ariaLabel?: string;
  }) => {
    const [hovered, setHovered] = React.useState(false);
    return (
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="border border-white/[0.2] group/canvas-card flex items-center justify-center max-w-sm w-full mx-auto p-4 lg:h-[35rem] rounded-3xl relative"
      >
        <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />
   
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-full w-full absolute inset-0"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
   
        <Link href={link || '#'} aria-label={ariaLabel} className="relative z-20">
          <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
            {icon}
          </div>
          <h2 className="text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center text-3xl">
            {title}
          </h2>
          <h2 className="text-sm text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center" style={{color: '#e4ecff'}}>
            {description}
          </h2>
        </Link>
      </div>
    );
  };
   
  const AceternityIcon = ({ order }: { order: string }) => {
    return (
      <div>
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-white backdrop-blur-3xl text-2xl font-bold">
                {order}
            </span>
        </button>
      </div>
    );
  };
   
  export const Icon = ({ className, ...rest }: any) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={className}
        {...rest}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
      </svg>
    );
  };

export default Approach