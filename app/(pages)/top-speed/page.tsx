import dynamic from 'next/dynamic'
const SectionMetrics = dynamic(() => import('@/components/top-speed/SectionMetrics')) 

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col mx-auto overflow-clip ">              
          <SectionMetrics />
    </main>
  );
}
