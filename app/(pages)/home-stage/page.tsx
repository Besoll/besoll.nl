import Hero from "@/components/home/Hero"
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

import Grid from "@/components/home/Grid"
import RecentProjects from "@/components/home/RecentProjects";
import Clients from "@/components/home/Clients"
import Exprerience from "@/components/home/Exprerience";
import Approach from "@/components/home/Approach";
import Footer from "@/components/home/Footer";

// import dynamic from 'next/dynamic'
// const Grid = dynamic(() => import('@/components/home/Grid')) 

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">       
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <Hero />
          <Grid />
          <RecentProjects />
          <Clients />
          <Exprerience />
          <Approach />
          <Footer />
        </div>
    </main>
  );
}
