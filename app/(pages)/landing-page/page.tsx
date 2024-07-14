import dynamic from 'next/dynamic'
const SectionLP = dynamic(() => import('@/components/landing-page/SectionLP')) 

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col mx-auto overflow-clip ">  
          <SectionLP />
    </main>
  );
}
