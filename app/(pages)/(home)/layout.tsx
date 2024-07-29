// import { FloatingNav } from "@/components/global/FloatingNav";
// import { navItems } from "@/data";
import NavigationStatic from "@/components/global/NavigationStatic";
import { navItemsStatic } from "@/data";
import dynamic from 'next/dynamic'
const Footer = dynamic(() => import('@/components/global/Footer') ) 


const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
        {/* <FloatingNav navItems={navItems} /> */}
        <NavigationStatic navItemsStatic={navItemsStatic}/>
        {children}
        <Footer />
    </>
  )
}

export default layout