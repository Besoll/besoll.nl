import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NumberingP } from "@/components/ui/NumberingP";
import { PeopleTags } from "@/components/ui/PeopleTags";
import { productUSPData } from "@/data";

import dynamic from "next/dynamic";
const Tag = dynamic(() => import("@/components/global/Tag"));
const MagicButton = dynamic(() => import("@/components/ui/MagicButton"));

const ProductUSP = () => {
  const { drm, waas } = productUSPData;

  return (
    <section
      className="w-full py-20 pb-40 px-4 md:px-8 flex justify-center items-center flex-col gap-16 md:gap-32"
      id="productUSP"
    >
      {/* DRM Section */}
      <div className="w-full flex flex-col gap-4 justify-center items-center">
        <h1 className="heading">{drm.heading}</h1>
        <div className="relative max-w-7xl w-full flex justify-center md:justify-between flex-col-reverse md:flex-row gap-4 items-center">
          <div className="w-full md:w-2/3 md:max-w-md xl:max-w-3xl flex flex-col items-center md:justify-start md:items-start gap-4">
            <Tag title={drm.tagline.title} otherClass="text-owlBrown font-bold" icon={drm.tagline.icon} />
            <h1 className="heading md:text-left tracking-wide">{drm.subheading}</h1>
            <p className="text-md lg:text-xl text-lg text-center md:text-left">{drm.description}</p>
            <PeopleTags
              Opener={drm.peopleTags.opener}
              Tags={drm.peopleTags.tags}
              OtherClasses="w-fit p-1 text-black outline outline-offset-2 place-self-auto outline-owlBrown/10 bg-owlBrown/20 uppercase hover:text-white hover:outline-owlBrown flex justify-center items-center"
            />
            <Link href={drm.button.link} aria-label={drm.button.ariaLabel}>
              <MagicButton title={drm.button.title} position="right" otherClassesButton="mt-4 md:mt-8" />
            </Link>
          </div>
          <div className="w-full md:w-2/3 h-auto">
            <Image
              src={drm.image.src}
              alt={drm.image.alt}
              width={800}
              height={800}
              className="w-full h-auto rounded-lg md:hover:scale-110 md:hover:skew-y-1 md:transition md:duration-300 md:ease-in-out md:cursor-pointer md:hover:rotate-1"
            />
          </div>
        </div>
      </div>

      {/* WaaS Section */}
      <div className="w-full flex flex-col gap-4 justify-center items-center md:mt-10">
        <h1 className="heading tracking-wide">{waas.heading}</h1>
        <div className="relative max-w-7xl w-full flex justify-center md:justify-between flex-col-reverse md:flex-row-reverse gap-4 items-center">
          <div className="w-full md:w-2/3 md:max-w-md xl:max-w-3xl flex flex-col items-center md:justify-start md:items-start gap-4">
            <Tag title={waas.tagline.title} otherClass="text-owlBrown font-bold" icon={waas.tagline.icon} />
            <h1 className="heading md:text-left tracking-wide">{waas.subheading}</h1>
            <NumberingP
              Opener={waas.numberingP.opener}
              Closer={waas.numberingP.closer}
              OtherClasses="text-left"
              NumberItems={waas.numberingP.items}
            />
            <PeopleTags
              Opener={waas.peopleTags.opener}
              Tags={waas.peopleTags.tags}
              OtherClasses="w-fit p-1 text-black outline outline-offset-2 place-self-auto outline-owlBrown/10 bg-owlBrown/20 uppercase font-semibold hover:outline-owlBrown flex justify-center items-center"
            />
            <Link href={waas.button.link} aria-label={waas.button.ariaLabel}>
              <MagicButton title={waas.button.title} position="right" otherClassesButton="mt-4 md:mt-8" />
            </Link>
          </div>
          <div className="w-full md:w-2/3 h-auto">
            <Image
              src={waas.images[0].src}
              alt={waas.images[0].alt}
              width={waas.images[0].width}
              height={waas.images[0].height}
              className="w-full h-auto rounded-lg flex md:hidden hover:scale-110 hover:skew-y-1 transition duration-300 ease-in-out cursor-pointer hover:rotate-1"
            />
            <Image
              src={waas.images[1].src}
              alt={waas.images[1].alt}
              width={waas.images[1].width}
              height={waas.images[1].height}
              className="w-full h-auto rounded-lg hidden md:flex hover:scale-110 hover:skew-y-1 transition duration-300 ease-in-out cursor-pointer hover:rotate-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductUSP;
