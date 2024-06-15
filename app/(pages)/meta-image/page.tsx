import {Hero} from "@/components/home/Hero2"
import { FloatingNav } from "@/components/global/FloatingNav";
import { navItems } from "@/data";
import Image from "next/image";

import dynamic from 'next/dynamic'
const OurStudio = dynamic(() => import('@/components/home/OurStudio')) 
const OurServices = dynamic(() => import('@/components/home/OurServices')) 
const FormSection = dynamic(() => import('@/components/home/FormSection')) 
const HowWeBuild = dynamic(() => import('@/components/home/HowWeBuild')) 
const Grid = dynamic(() => import('@/components/home/Grid')) 
const RecentProjects = dynamic(() => import('@/components/home/RecentProjects')) 
const Clients = dynamic(() => import('@/components/home/Clients')) 
const Exprerience = dynamic(() => import('@/components/home/Exprerience')) 
const Approach = dynamic(() => import('@/components/home/Approach')) 
const Footer = dynamic(() => import('@/components/global/Footer')) 
const FormMain = dynamic(() => import('@/components/ui/Form')) 



// import dynamic from 'next/dynamic'
// const Grid = dynamic(() => import('@/components/home/Grid')) 

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto overflow-clip">       
        
          <Image 
          src='/meta-owlweb-main.webp'
          alt='meta image'
          width={450}
          height={150}
          className="w-full h-auto"

          
         />



          {/* <RecentProjects /> */}
          {/* <Grid />
          <Clients />
          <Exprerience />
          <Approach /> */}
          <Footer />
    </main>
  );
}
