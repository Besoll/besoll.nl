"use client";
import { motion } from "framer-motion";
import { founders, headings } from "@/data";
import "flag-icons/css/flag-icons.min.css"; // Import flag-icons CSS

const languageFlags: { [key: string]: string } = {
  en: "fi fi-gb",  // English (USA)
  ru: "fi fi-ru",  // Russian
  ge: "fi fi-ge",  // Georgian
  ua: "fi fi-ua",  // Ukrainian
  ro: "fi fi-ro",  // Romanian
  md: "fi fi-md",  // Moldovian
  nl: "fi fi-nl",  // Dutch
  fr: "fi fi-fr",  // French
  it: "fi fi-it",  // Italian
};

export default function FoundersSection() {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col items-center gap-8 p-4">
      {/* Section Heading */}
      <motion.h2 
        className="text-3xl font-bold text-center text-owlRed mb-8" 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {headings.sectionTitle}
      </motion.h2>

      {/* Founders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {founders.map((founder, index) => (
          <FounderCard key={index} founder={founder} />
        ))}
      </div>
    </div>
  );
}

// Founder Card Component
type FounderCardProps = {
  founder: typeof founders[0];
};

function FounderCard({ founder }: FounderCardProps) {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center max-w-sm mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Image */}
      <motion.img 
        src={founder.imageSrc} 
        alt={founder.name} 
        className="w-auto h-32  mb-4   "
        whileHover={{ scale: 1.1 }}
      />

      {/* Name and Position */}
      <h3 className="text-2xl font-semibold text-owlBlue mb-1">{founder.name}</h3>
      <p className="text-sm text-gray-600 mb-2">{founder.position}</p>

      {/* Headline */}
      <p className="text-lg font-medium text-gray-800">{founder.headline}</p>

      {/* Story */}
      <p className="text-gray-700 mt-4">{founder.story}</p>

      {/* Language Icons */}
      <div className="flex space-x-4 mt-4 flex-wrap gap-4 justify-center">
        {founder.languages.map((langCode, idx) => (
          <span key={idx} className={`${languageFlags[langCode]} text-2xl`}></span>
        ))}
      </div>

      {/* YouTube Embed */}
      <motion.div 
        className="w-full mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <iframe 
          width="100%" 
          height="200" 
          src={founder.youtubeLink}
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen 
          className="rounded-lg"
        ></iframe>
      </motion.div>

      {/* Button */}
      {/* <motion.button 
        className="bg-owlBlue text-white px-6 py-2 rounded-full mt-6 hover:bg-owlRed transition-colors"
        whileHover={{ scale: 1.1 }}
      >
        {headings.buttonText}
      </motion.button> */}
    </motion.div>
  );
}
