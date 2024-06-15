// import Footer from '@/components/Footer'
import Navbar from '@/components/global/Navbar'
import dynamic from 'next/dynamic'
const Footer = dynamic(() => import('@/components/global/Footer') ) 
import type { Metadata } from "next";


const titleBL = 'OwlWeb Studio - we create web';
const urlBL = 'https://owlweb.nl/over-ons';
const imageBL = 'https://www.owlweb.nl/_next/image?url=%2Fmeta-owlweb-main.webp&w=1080&q=75';
const descriptionBL = 'At OwlWeb Studio, we specialize in creating high-performance websites and landing pages using the latest technologies. Our team of experts ensures your site is fast, optimized, and ranks higher on search engines.';

export const metadata: Metadata = {
  title: titleBL,
  description: descriptionBL,
  alternates: { canonical: urlBL },
  openGraph: {    
    url: urlBL,
    title: titleBL,
    description: descriptionBL,
    siteName: titleBL,
    images: [{ url: imageBL, }],
  },  
  other: {
    "twitter:card": imageBL,
    "twitter:site": urlBL,
    "twitter:title": titleBL,
    "twitter:description": descriptionBL,
    "twitter:image": imageBL,
    "apple-mobile-web-app-title": titleBL,
  }
};


const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
        <Navbar />
        {children}
        <Footer />
    </>
  )
}

export default layout