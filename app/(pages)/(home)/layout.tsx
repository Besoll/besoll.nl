import { FloatingNav } from "@/components/global/FloatingNav";
import { navItems } from "@/data";
import dynamic from 'next/dynamic'
const Footer = dynamic(() => import('@/components/global/Footer') ) 


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