import NavigationStatic from "@/components/global/NavigationStatic";
import { navItemsStatic } from "@/data";
import dynamic from 'next/dynamic'
const Footer = dynamic(() => import('@/components/global/Footer') ) 

const titleBL = 'Lead Form';
const colorBL = '#FDA800'; // orange
const urlBL = 'https://www.owlweb.nl/contact';
const imageBL = 'https://www.owlweb.nl/_next/image?url=%2Fmeta-owlweb-main.webp&w=1080&q=75';
const descriptionBL = 'Submit your details';

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