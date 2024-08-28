import NavigationStatic from "@/components/global/NavigationStatic";
import { navItemsStatic } from "@/data";
import type { Metadata, Viewport  } from "next";
import dynamic from 'next/dynamic'
const Footer = dynamic(() => import('@/components/global/Footer') ) 

const titleBL = 'Direct Response Marketing';
const urlBL = 'https://www.owlweb.nl/direct-response-marketing';
const imageBL = 'https://www.owlweb.nl/_next/image?url=%2FDRM-Why.webp&w=1920&q=75';
const descriptionBL = 'Direct response marketing is a strategy focused on getting an immediate reaction from consumers, like visiting a website, making a purchase, or sharing a social media post. Unlike long-term brand building or awareness campaigns, direct response marketing aims for quick, specific actions. This approach makes it easier to track the return on investment (ROI) since the results are immediate and measurable.';
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