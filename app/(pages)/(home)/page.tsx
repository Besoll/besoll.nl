import { Hero } from "@/components/home/Hero2"

import dynamic from 'next/dynamic'
const OurStudio = dynamic(() => import('@/components/home/OurStudio')) 
const OurServices = dynamic(() => import('@/components/home/OurServices')) 
const FormSection = dynamic(() => import('@/components/home/FormSection')) 
const HowWeBuild = dynamic(() => import('@/components/home/HowWeBuild')) 


export default function Home() {
  return (
    <main className="relative flex justify-center bg-white items-center flex-col mx-auto overflow-clip">       
          <Hero />
          <OurStudio />
          <OurServices />
          <FormSection />
          <HowWeBuild />
    </main>
  );
}
