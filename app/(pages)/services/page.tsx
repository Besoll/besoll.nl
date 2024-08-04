import dynamic from 'next/dynamic'
const WaaS = dynamic(() => import('@/components/WaaS/WaaS')) 

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col mx-auto overflow-clip ">  
          <WaaS />
    </main>
  );
}
