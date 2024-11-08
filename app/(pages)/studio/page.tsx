import Hero from "@/components/studio/Hero"

import dynamic from 'next/dynamic'

import { LogoCarousel } from "@/components/global/LogoCarousel"
const SectionMetrics = dynamic(() => import('@/components/studio/SectionMetrics')) 
const SectionLP = dynamic(() => import('@/components/studio/SectionLP')) 
const Approach = dynamic(() => import('@/components/studio/Approach')) 
const CompanyUSP = dynamic(() => import('@/components/studio/CompanyUSP')) 
const ProductUSP = dynamic(() => import('@/components/studio/ProductUSP')) 
const CaseStudy = dynamic(() => import('@/components/studio/CaseStudy')) 


export default function studio() {
  return (
    <main className="relative flex justify-center items-center flex-col mx-auto overflow-clip ">       
          <Hero />
          <LogoCarousel />
          <CompanyUSP />
          <ProductUSP />
          <Approach />
          <CaseStudy />
          <SectionMetrics />
          <SectionLP />
          {/* 
          <OurServices />
          <FormSection />
          <HowWeBuild /> */}
    </main>
  );
}
