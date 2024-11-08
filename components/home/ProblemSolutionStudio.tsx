"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiSad } from "react-icons/bi"; // Sad face icon for problems
import { FiCheckCircle } from "react-icons/fi"; // Check circle icon for solutions
import { psProblemsStudio, psSolutionsStudio, psHeadingsStudio } from "@/data"; // Importing data from studioData.ts

export default function ProblemsAndSolutionsStudio() {
  const [hoveredProblemIndex, setHoveredProblemIndex] = useState<number | null>(null);
  const [hoveredSolutionIndex, setHoveredSolutionIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Detect screen size to switch between hover and click interactions
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint in Tailwind is 768px
    };
    handleResize(); // Set initial value based on the current screen size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggleProblem = (index: number) => {
    setHoveredProblemIndex(hoveredProblemIndex === index ? null : index);
  };

  const handleToggleSolution = (index: number) => {
    setHoveredSolutionIndex(hoveredSolutionIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col gap-2 md:gap-4 space-y-8 p-2 justify-center items-center">
      <motion.div 
        className="flex flex-col md:flex-row gap-1 md:gap-4 justify-center items-center pt-8"
        whileHover={{ scale: 1.05 }}>
        <div className="flex items-center cursor-pointer heading">
          {psHeadingsStudio.mainTitle}
        </div>
        <div className="flex items-center cursor-pointer heading text-owlRed">
          {psHeadingsStudio.highlightTitle}
        </div>
      </motion.div>

      {/* Added friendly description below the title */}
      <div className="text-center text-lg text-gray-700 max-w-3xl mx-auto mt-4 px-4 ">
        {psHeadingsStudio.description}
      </div>
      
      <div className="w-full mx-auto flex flex-col md:flex-row gap-2 md:gap-4 space-y-8 p-2 justify-center items-center md:items-start md:min-h-[700px]">
        {/* Problems Section */}
        <div className="w-full max-w-[400px] xl:max-w-[600px] bg-owlRed/10 rounded-lg p-8">
          <h2 className="text-2xl font-bold owlRed mb-4">{psHeadingsStudio.problemsTitle}</h2>
          <div className="space-y-4">
            {psProblemsStudio.map((problem, index) => (
              <div
                key={index}
                className="border-b border-owlRed pb-2"
                onMouseEnter={() => !isMobile && setHoveredProblemIndex(index)}
                onMouseLeave={() => !isMobile && setHoveredProblemIndex(null)}
                onClick={() => isMobile && handleToggleProblem(index)}
              >
                <motion.div
                  className="flex items-center text-left text-xl font-semibold bg-owlRed/55 cursor-pointer rounded-xl  text-white p-2 shadow-xl"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-[30px]">
                    <BiSad className="mr-2 text-2xl transition-transform transform hover:rotate-12 hover:scale-110" />
                  </div>
                  <p className="w-full text-left">{problem.title}</p>
                </motion.div>
                <AnimatePresence>
                  {hoveredProblemIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden text-black"
                    >
                      <p className="mt-2 ml-2">{problem.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Solutions Section */}
        <div className="w-full max-w-[400px] xl:max-w-[600px] bg-owlBlue/10 rounded-lg p-8">
          <h2 className="text-2xl font-bold owlBlue mb-4">{psHeadingsStudio.solutionsTitle}</h2>
          <div className="space-y-4">
            {psSolutionsStudio.map((solution, index) => (
              <div
                key={index}
                className="border-b border-owlBlue pb-2"
                onMouseEnter={() => !isMobile && setHoveredSolutionIndex(index)}
                onMouseLeave={() => !isMobile && setHoveredSolutionIndex(null)}
                onClick={() => isMobile && handleToggleSolution(index)}
              >
                <motion.div
                  className="flex items-center text-left text-xl font-semibold bg-owlBlue cursor-pointer rounded-xl  text-white p-2 shadow-xl"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-[30px]">
                    <FiCheckCircle className="mr-2 text-2xl transition-transform transform hover:rotate-12 hover:scale-110" />
                  </div>
                  <p className="w-full text-left">{solution.title}</p>
                </motion.div>
                <AnimatePresence>
                  {hoveredSolutionIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden text-black"
                    >
                      <p className="mt-2 ml-2">{solution.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
