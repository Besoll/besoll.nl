import NavigationStatic from "@/components/global/NavigationStatic";
import { navItemsStatic } from "@/data";
import dynamic from 'next/dynamic'
const Footer = dynamic(() => import('@/components/global/Footer') ) 

const titleBL = 'Privacy Policy';
const colorBL = '#FDA800'; // orange
const urlBL = 'https://www.owlweb.nl/privacy-policy';
const imageBL = 'https://www.owlweb.nl/_next/image?url=%2Fowlweb-studio.webp&w=1920&q=75';
const descriptionBL = 'Privacy Policy - legal page';

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