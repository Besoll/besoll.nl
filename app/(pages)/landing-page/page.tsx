import { navItems } from '@/data';
import dynamic from 'next/dynamic'
const NavigationStatic = dynamic(() => import('@/components/global/NavigationStatic')) 
const SectionLP = dynamic(() => import('@/components/landing-page/SectionLP')) 

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col mx-auto overflow-clip ">
          <NavigationStatic navItems={navItems}/>       
          <SectionLP />
    </main>
  );
}
