import dynamic from "next/dynamic";
const Logo = dynamic(() => import('@/components/global/Logo'))


export default function Home() {  

  return (
    <main className="flex w-full h-full flex-col items-center justify-between p-24">
      <Logo className="w-[400px] h-auto md:w-full md:h-full" />
    </main>
  );
}
