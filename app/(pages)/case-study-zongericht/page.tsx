import dynamic from 'next/dynamic'
const CaseZongericht = dynamic(() => import('@/components/case-study/CaseZongericht')) 

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col mx-auto overflow-clip ">              
          <CaseZongericht />
    </main>
  );
}
