
import dynamic from 'next/dynamic'
const OurTeam = dynamic(() => import('@/components/our-team/OurTeam')) 
const CompanyUSP = dynamic(() => import('@/components/our-team/CompanyUSP')) 
const BgGrid = dynamic(() => import('@/components/ui/BgGrid')) 

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col mx-auto overflow-clip">
          <BgGrid />
          <CompanyUSP />
          <OurTeam />
    </main>
  );
}
