import { navItems } from '@/data';
import dynamic from 'next/dynamic'
const NavigationStatic = dynamic(() => import('@/components/global/NavigationStatic')) 
const SectionMetrics = dynamic(() => import('@/components/top-speed/SectionMetrics')) 

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col mx-auto overflow-clip ">
          <NavigationStatic navItems={navItems}/>       
          <SectionMetrics />
    </main>
  );
}
