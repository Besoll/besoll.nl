import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FlipWordsDemo } from "@/components/global/FlipWords";
import { companyUSPData } from "@/data";
import dynamic from "next/dynamic";

const Tag = dynamic(() => import("@/components/global/Tag"));
const MagicButton = dynamic(() => import("@/components/ui/MagicButton"));

const CompanyUSP = () => {
  const { heading, tagline, flipWordsText, description, image, button } = companyUSPData;

  return (
    <section
      className="w-full py-20 pb-40 px-4 md:px-8 flex justify-center items-center flex-col gap-16 md:gap-32"
      id="productUSP"
    >
      <div className="w-full flex flex-col gap-4 justify-center items-center">
        <h2 className="heading">{heading}</h2>
        <div className="relative max-w-7xl w-full flex justify-center md:justify-between flex-col-reverse md:flex-row gap-4 items-center">
          <div className="w-full md:w-2/3 md:max-w-md xl:max-w-3xl flex flex-col items-center md:justify-start md:items-start gap-4">
            <Tag title={tagline.title} otherClass="text-owlGreen " icon={tagline.icon} />
            <FlipWordsDemo textPrefix={flipWordsText.textPrefix} words={flipWordsText.words} />
            <p className="text-md lg:text-xl text-lg text-center md:text-left">{description}</p>
            <Link href={button.link} aria-label={button.ariaLabel}>
              <MagicButton title={button.title} position="right" otherClassesButton="mt-4 md:mt-8" />
            </Link>
          </div>
          <div className="w-full md:w-2/3 h-auto">
            <Image
              src={image.src}
              alt={image.alt}
              width={800}
              height={800}
              className="w-full h-auto rounded-lg hover:scale-110 hover:skew-y-1 transition duration-300 ease-in-out cursor-pointer hover:rotate-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyUSP;
