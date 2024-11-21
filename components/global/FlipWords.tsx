import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import { companyUSPData } from "@/data"; // Import the data

export function FlipWordsDemo({
  textPrefix, words 
}: { 
  textPrefix: string,        
  words: string[]; // Corrected type for words to string[] 
}) {
  return (
    <div className="flex justify-center items-center ">
      <div className="text-4xl mx-auto heading md:text-left tracking-wide">
        {textPrefix} <FlipWords words={words} /> <br />
      </div>
    </div>
  );
}
