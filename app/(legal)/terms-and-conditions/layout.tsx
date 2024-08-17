import NavigationStatic from "@/components/global/NavigationStatic";
import { navItemsStatic } from "@/data";
import dynamic from 'next/dynamic'
const Footer = dynamic(() => import('@/components/global/Footer') ) 

const titleBL = 'Terms and Conditions';
const colorBL = '#FDA800'; // orange
const urlBL = 'https://owlweb.nl/terms-and-conditions';
const imageBL = 'https://www.owlweb.nl/_next/image?url=%2Fowlweb-studio.webp&w=1920&q=75';
const descriptionBL = 'Welcome to OwlWeb Studio! Meet the fun-loving crew who turn your web dreams into reality. We are a quirky bunch of tech enthusiasts and creative geniuses dedicated to crafting awesome web experiences.';

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