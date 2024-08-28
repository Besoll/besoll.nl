import NavigationStatic from "@/components/global/NavigationStatic";
import { navItemsStatic } from "@/data";
import type { Metadata, Viewport  } from "next";
import dynamic from 'next/dynamic'
const Footer = dynamic(() => import('@/components/global/Footer') ) 

const titleBL = 'Our Services';
const urlBL = 'https://www.owlweb.nl/services';
const imageBL = 'https://www.owlweb.nl/_next/image?url=%2FwaasBenefits.webp&w=1920&q=75';
const descriptionBL = 'For your B2B business, our B2B Service solution offers unique benefits that help you excel in both the consumer and business sectors. Discover how our services can strengthen your business and differentiate it from the competition.';
const creatorBL = "B. Kavzharadze - OwlWeb";

export const metadata: Metadata = {
  applicationName: "Website",
  title: {
    default: titleBL,
    template: "%s | Owlweb.nl",
  },
  description: descriptionBL,
  alternates: { canonical: urlBL },
  openGraph: {
    type: "website",
    url: urlBL,
    title: titleBL,
    description: descriptionBL,
    siteName: titleBL,
    images: [{ url: imageBL, }],
  },
  other: {
    "twitter:card": imageBL,
    "twitter:site": urlBL,
    "twitter:creator": creatorBL,
    "twitter:title": titleBL,
    "twitter:description": descriptionBL,
    "twitter:image": imageBL,
    "apple-mobile-web-app-title": titleBL,
    
  }
};


const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
        <NavigationStatic navItemsStatic={navItemsStatic} />
        {children}
        <Footer />
    </>
  )
}

export default layout