import dynamic from 'next/dynamic'
const DRM = dynamic(() => import('@/components/direct-response-marketing/DRM')) 
const BgGrid = dynamic(() => import('@/components/ui/BgGrid')) 

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col mx-auto overflow-clip ">          
          <DRM />
    </main>
  );
}
