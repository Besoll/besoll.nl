import dynamic from 'next/dynamic'
const DRM = dynamic(() => import('@/components/direct-response-marketing/DRM')) 

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col mx-auto overflow-clip ">  
          <DRM />
    </main>
  );
}
