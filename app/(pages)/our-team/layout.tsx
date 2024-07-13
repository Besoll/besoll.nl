import NavigationStatic from "@/components/global/NavigationStatic";
import { navItemsStatic } from "@/data";
import dynamic from 'next/dynamic'
const Footer = dynamic(() => import('@/components/global/Footer') ) 

const titleBL = 'OwlWeb - our team';
const colorBL = '#FDA800'; // orange
const urlBL = 'https://owlweb.nl/our-team';
const imageBL = 'https://www.owlweb.nl/_next/image?url=%2Fmeta-owlweb-main.webp&w=1080&q=75';
const descriptionBL = 'Welcome to OwlWeb Studio! Meet the fun-loving crew who turn your web dreams into reality. We are a quirky bunch of tech enthusiasts and creative geniuses dedicated to crafting awesome web experiences.';

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