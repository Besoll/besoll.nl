import {Hero} from "@/components/home/Hero2"

import dynamic from 'next/dynamic'
const OurStudio = dynamic(() => import('@/components/home/OurStudio')) 
const OurServices = dynamic(() => import('@/components/home/OurServices')) 
const HowWeBuild = dynamic(() => import('@/components/home/HowWeBuild')) 
// const Grid = dynamic(() => import('@/components/home/Grid')) 
// const RecentProjects = dynamic(() => import('@/components/home/RecentProjects')) 
// const Clients = dynamic(() => import('@/components/home/Clients')) 
// const Exprerience = dynamic(() => import('@/components/home/Exprerience')) 
// const Approach = dynamic(() => import('@/components/home/Approach')) 
// const FormMain = dynamic(() => import('@/components/ui/Form')) 


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto overflow-clip"> 
          <Hero />
          <OurStudio />
          <OurServices />
          <HowWeBuild />

          {/* 
          <RecentProjects />
          <Grid />
          <Exprerience />
          <Approach /> 
          <Clients />
          */}
    </main>
  );
}
