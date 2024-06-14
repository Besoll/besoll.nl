"use client"
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image"
import { Button } from "@/components/ui/MovingBorders"

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description?: string;
    link: string;
    id: number;
    desc?: string;
    className?: string;
    thumbnail: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          
          className="relative group  block p-2 h-fit w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >        
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-owlOrange/[0.4] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Button 
                key={item.id}
                duration={Math.floor(Math.random() * 10000) + 10000}
                borderRadius='1.75rem'
                className="flex-1 "
                >
          <Card>
            
                <div className="w-full flex flex-row justify-between items-center gap-1">
                    <CardTitle>{item.title}</CardTitle>
                    <Image 
                        src={item.thumbnail}
                        alt={item.title}
                        width={32}
                        height={32}
                        className="lg:w-12 md:w-8 w-8 md:hover:scale-110 md:hover:skew-y-1  md:transition md:duration-300 md:ease-in-out md:cursor-pointer md:hover:rotate-1"
                    />
                </div>

                <CardDescription>{item.desc}</CardDescription>
          </Card>
            </Button>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        " h-full w-full p-2 md:p-1 overflow-hidden  border border-transparent relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-2 md:p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h2 className={cn("text-zinc-100 font-start text-left font-bold tracking-wide text-lg md:text-xl lg:text-2xl mt-1 ", className)}>
      {children}
    </h2>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-6 md:mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm text-left",
        className
      )}
    >
      {children}
    </p>
  );
};
