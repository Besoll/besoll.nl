"use client";

import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from "@/data/owlweb.json";

export default function Home() {
  const animationContainer = useRef(null);

  useEffect(() => {
    // Load the animation only once
    const animationInstance = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData, // Directly using the imported JSON data
    });

    // Clean up the animation when the component unmounts
    return () => {
      animationInstance.destroy();
    };
  }, []);

  return (
    <main className="flex w-screen min-h-screen flex-col items-center justify-between p-24 bg-white ">
      {/* <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/besoll.svg"
        alt="Besoll.nl logo"
        width={180}
        height={37}
        priority
      /> */}

      <div className="w-full" ref={animationContainer}></div>
    </main>
  );
}
