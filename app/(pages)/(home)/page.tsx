// import { LogoCarousel } from "@/components/global/LogoCarousel"
import Hero from "@/components/home/Hero"

import dynamic from 'next/dynamic'

const SectionMetrics = dynamic(() => import('@/components/home/SectionMetrics')) 
const SectionLP = dynamic(() => import('@/components/home/SectionLP')) 
const OurServices = dynamic(() => import('@/components/home/OurServices')) 
const FormSection = dynamic(() => import('@/components/home/FormSection')) 
const HowWeBuild = dynamic(() => import('@/components/home/HowWeBuild')) 
const Approach = dynamic(() => import('@/components/home/Approach')) 
const CompanyUSP = dynamic(() => import('@/components/home/CompanyUSP')) 
const ProductUSP = dynamic(() => import('@/components/home/ProductUSP')) 
const CaseStudy = dynamic(() => import('@/components/home/CaseStudy')) 


export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col mx-auto overflow-clip ">       
          <Hero />
          {/* <LogoCarousel /> */}
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
