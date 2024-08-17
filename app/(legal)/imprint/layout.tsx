import NavigationStatic from "@/components/global/NavigationStatic";
import { navItemsStatic } from "@/data";
import dynamic from 'next/dynamic'
const Footer = dynamic(() => import('@/components/global/Footer') ) 

const titleBL = 'Imprint';
const colorBL = '#FDA800'; // orange
const urlBL = 'https://owlweb.nl/imprint';
const imageBL = 'https://www.owlweb.nl/_next/image?url=%2Fowlweb-studio.webp&w=1920&q=75';
const descriptionBL = 'Imprint - legal page';

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