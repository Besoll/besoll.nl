// import { FloatingNav } from "@/components/global/FloatingNav";
// import { navItems } from "@/data";
import type { Metadata  } from "next";
// import NavigationStatic from "@/components/slaFabamaq/NavigationStatic";
// import { navItemsStatic } from "@/data";
import dynamic from 'next/dynamic'
const Footer = dynamic(() => import('@/components/slaFabamaq/Footer') ) 

const titleBL = 'SLA-FABAMAQ-WebSummit-24';
const urlBL = 'https://www.owlweb.nl/SLA-FABAMAQ-WebSummit-24';
const imageBL = 'https://www.owlweb.nl/_next/image?url=%2Ftop-speed-white.webp&w=3840&q=75';
const descriptionBL = 'Service Level Agreement (SLA) for FABAMAQ ';
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
        {/* <FloatingNav navItems={navItems} /> */}
        {children}
        <Footer />
    </>
  )
}

export default layout