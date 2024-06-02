import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">  

      <section className='w-full flex-center flex-col flex min-h-[100vh] pb-4 md:pb-2 xs:h-auto scroll-mt-16 snap-start text-black scroll-smooth md:scroll-auto gap-8' id='sections' >
        
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/besoll.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />

        <h1>We start...</h1>
      </section>    
    </main>
  );
}
