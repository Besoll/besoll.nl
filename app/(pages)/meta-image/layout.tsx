// import Footer from '@/components/Footer'
import Navbar from '@/components/global/Navbar'
import dynamic from 'next/dynamic'
const Footer = dynamic(() => import('@/components/global/Footer') ) 


const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
        {/* <Navbar /> */}
        {children}
        {/* <Footer /> */}
    </>
  )
}

export default layout