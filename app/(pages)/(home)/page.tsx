import {Hero} from "@/components/home/Hero2"

import dynamic from 'next/dynamic'

import { LogoCarousel } from "@/components/global/LogoCarousel"
const SectionMetrics = dynamic(() => import('@/components/home/SectionMetrics')) 
const SectionLP = dynamic(() => import('@/components/home/SectionLP')) 
const Approach = dynamic(() => import('@/components/home/Approach')) 
const ProblemSolution = dynamic(() => import('@/components/home/ProblemSolution'))  
const CompanyUSP = dynamic(() => import('@/components/home/CompanyUSP')) 
const ProductUSP = dynamic(() => import('@/components/home/ProductUSP')) 
const CaseStudy = dynamic(() => import('@/components/home/CaseStudy')) 


export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col mx-auto overflow-clip ">       
          <Hero />
          <LogoCarousel />
          <CompanyUSP />
          <ProblemSolution type="agency" idDiv="problemSolution"/>
          <ProblemSolution type="studio" />
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
