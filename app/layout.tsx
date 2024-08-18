import type { Metadata, Viewport  } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import dynamic from 'next/dynamic';
import { GoogleTagManager } from '@next/third-parties/google'
import CookieConsentBanner from "@/components/ui/CookieConsentBanner";
// const ScriptCookies = dynamic(() => import('next/script'))


const inter = Inter({ subsets: ["latin"] });
const titleBL = 'OwlWeb - we create web';
const colorBL = '#FDA800'; // orange
const urlBL = 'https://owlweb.nl';
const imageBL = 'https://www.owlweb.nl/_next/image?url=%2Fhero-1.webp&w=3840&q=75';
const descriptionBL = 'At OwlWeb, we specialize in creating high-performance websites and landing pages using the latest technologies. Our team of experts ensures your site is fast, optimized, and ranks higher on search engines.';
const creatorBL = "B. Kavzharadze - OwlWeb";

export const metadata: Metadata = {
  manifest: "/manifest.json",
  applicationName: "Website",
  authors: [{ name: "owlweb.nl", url: "https://owlweb.nl/" }],
  generator: "Next.js",
  title: {
    default: titleBL,
    template: "%s | Owlweb.nl",
  },
  description: descriptionBL,
  creator: creatorBL,
  publisher: "Vercel",
  robots: "index, follow",
  alternates: { canonical: urlBL },

  openGraph: {
    type: "website",
    url: urlBL,
    title: titleBL,
    description: descriptionBL,
    siteName: titleBL,
    images: [{ url: imageBL, }],
  },
  
  other: {
    "color-scheme": "dark only",
    "twitter:card": imageBL,
    "twitter:site": urlBL,
    "twitter:creator": creatorBL,
    "twitter:title": titleBL,
    "twitter:description": descriptionBL,
    "twitter:image": imageBL,
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-title": titleBL,
    
  }
};

export const viewport: Viewport = {
  themeColor: colorBL,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">   
      {/* <ScriptCookies 
          src="https://cdn-cookieyes.com/client_data/489a29e11f553b3aa1c0e08d/script.js" 
          strategy="beforeInteractive" 
      />    */}
      <GoogleTagManager gtmId="GTM-5MZFBJFC" />
      <body className={`${inter.className} bg-owlOrange/10 text-black`}> 
          {children}     
          <CookieConsentBanner />   
      </body>
    </html>
  );
}
