import Hero from "@/components/home/Hero"
import Grid from "@/components/home/Grid"
import RecentProjects from "@/components/home/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import { navItems } from "@/data";

// import dynamic from 'next/dynamic'
// const Grid = dynamic(() => import('@/components/home/Grid')) 

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">       
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <Hero />
          <Grid />
          <RecentProjects />
        </div>
    </main>
  );
}
