// import Footer from '@/components/Footer'
import { FloatingNav } from "@/components/global/FloatingNav";
import { navItems } from "@/data";
import dynamic from 'next/dynamic'
const Footer = dynamic(() => import('@/components/contact/Footer') ) 

const titleBL = 'OwlWeb - contact';
const colorBL = '#FDA800'; // orange
const urlBL = 'https://owlweb.nl/contact';
const imageBL = 'https://www.owlweb.nl/_next/image?url=%2Fmeta-owlweb-main.webp&w=1080&q=75';
const descriptionBL = 'Welcome to OwlWeb Studio! Meet the fun-loving crew who turn your web dreams into reality. We are a quirky bunch of tech enthusiasts and creative geniuses dedicated to crafting awesome web experiences.';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
        <FloatingNav navItems={navItems} />
        {children}
        <Footer />
    </>
  )
}

export default layout