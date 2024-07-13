import NavigationStatic  from "@/components/global/NavigationStatic";
import { navItemsStatic } from "@/data";
import type { Metadata, Viewport  } from "next";
import dynamic from 'next/dynamic'
const Footer = dynamic(() => import('@/components/global/Footer') ) 

const titleBL = 'Top Speed';
const urlBL = 'https://owlweb.nl/top-speed';
const imageBL = 'https://owlweb.nl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.52d0400a.webp&w=1080&q=75';
const descriptionBL = 'At OwlWeb Studio, we ensure your website stands out with blazing-fast speed and seamless navigation.';
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
        <NavigationStatic navItems={navItemsStatic} />
        {children}
        <Footer />
    </>
  )
}

export default layout