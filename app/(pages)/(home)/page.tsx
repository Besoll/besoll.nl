import Hero from "@/components/home/Hero"

import dynamic from 'next/dynamic'
const SectionMetrics = dynamic(() => import('@/components/home/SectionMetrics')) 
const OurServices = dynamic(() => import('@/components/home/OurServices')) 
const FormSection = dynamic(() => import('@/components/home/FormSection')) 
const HowWeBuild = dynamic(() => import('@/components/home/HowWeBuild')) 
const Approach = dynamic(() => import('@/components/home/Approach')) 


export default function Home() {
  return (
    <main className="relative flex justify-center bg-white items-center flex-col mx-auto overflow-clip">       
          <Hero />
          <Approach />
          <SectionMetrics />
          <OurServices />
          <FormSection />
          <HowWeBuild />
    </main>
  );
}
