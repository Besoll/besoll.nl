
import dynamic from 'next/dynamic'
const OurTeam = dynamic(() => import('@/components/our-team/OurTeam')) 

export default function Home() {
  return (
    <main className="relative flex bg-white justify-center items-center flex-col mx-auto overflow-clip">
          <OurTeam />
    </main>
  );
}
