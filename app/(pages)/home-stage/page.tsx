import {Hero} from "@/components/home/Hero2"
import Image from "next/image";

import dynamic from 'next/dynamic'
// const OurStudio = dynamic(() => import('@/components/home/OurStudio')) 
// const OurServices = dynamic(() => import('@/components/home/OurServices')) 
// const HowWeBuild = dynamic(() => import('@/components/home/HowWeBuild')) 
// const Grid = dynamic(() => import('@/components/home/Grid')) 
// const RecentProjects = dynamic(() => import('@/components/home/RecentProjects')) 
// const Exprerience = dynamic(() => import('@/components/home/Exprerience')) 
// const Approach = dynamic(() => import('@/components/home/Approach')) 
// const FormMain = dynamic(() => import('@/components/ui/Form')) 


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto overflow-clip"> 

    <div className="w-full p-8 h-screen flex justify-center items-center">

    <Image src="/owlweb-logo.png" alt="owl logo png" width={1500} height={526} className="w-[250px] h-auto" />
    </div>
          {/* <Hero />
          <OurStudio />
          <OurServices />
          <HowWeBuild /> */}

          {/* <Exprerience /> */}
          
          {/* <RecentProjects />
          <Grid />
          <Approach /> 
          <Clients /> */}
         
    </main>
  );
}
