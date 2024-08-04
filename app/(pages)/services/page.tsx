import dynamic from 'next/dynamic'
const OurServices = dynamic(() => import('@/components/home/OurServices'))
const CtaSection = dynamic(() => import('@/components/global/CtaSection')) 

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col mx-auto overflow-clip ">  
           <OurServices />
    </main>

  );
}
