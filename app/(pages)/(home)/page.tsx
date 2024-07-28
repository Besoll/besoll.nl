import Hero from "@/components/home/Hero"
import { logoCarousel } from "@/data"

import dynamic from 'next/dynamic'
const LogoCarousel = dynamic(() => import('@/components/global/LogoCarousel')) 
const SectionMetrics = dynamic(() => import('@/components/home/SectionMetrics')) 
const SectionLP = dynamic(() => import('@/components/home/SectionLP')) 
const OurServices = dynamic(() => import('@/components/home/OurServices')) 
const FormSection = dynamic(() => import('@/components/home/FormSection')) 
const HowWeBuild = dynamic(() => import('@/components/home/HowWeBuild')) 
const Approach = dynamic(() => import('@/components/home/Approach')) 
const ProductUSP = dynamic(() => import('@/components/home/ProductUSP')) 


export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col mx-auto overflow-clip ">       
          <Hero />
          <LogoCarousel />
          <ProductUSP />
          <Approach />
          <SectionMetrics />
          <SectionLP />
          {/* 
          <OurServices />
          <FormSection />
          <HowWeBuild /> */}
    </main>
  );
}
