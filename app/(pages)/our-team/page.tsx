
import dynamic from 'next/dynamic'
const OurTeam = dynamic(() => import('@/components/our-team/OurTeam')) 
const CompanyUSP = dynamic(() => import('@/components/our-team/CompanyUSP')) 

export default function Home() {
  return (
    <main className="relative flex bg-white justify-center items-center flex-col mx-auto overflow-clip">
          <CompanyUSP />
          <OurTeam />
    </main>
  );
}
