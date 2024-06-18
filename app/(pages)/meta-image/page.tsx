import Image from "next/image";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto overflow-clip">       
          <Image 
          src='/meta-owlweb-main.webp'
          alt='meta image'
          width={450}
          height={150}
          className="w-full h-auto"
         />
    </main>
  );
}
