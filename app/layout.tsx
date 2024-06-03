import type { Metadata, Viewport  } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'
 

const inter = Inter({ subsets: ["latin"] });
const titleBL = 'Besoll - we create web';
const colorBL = '#FF1DCE'; // magenta
const urlBL = 'https://besoll.nl';
const imageBL = 'https://besoll.nl/_next/image?url=%2FheroImages%2Fdakkapel.webp&w=384&q=75';
const descriptionBL = 'At Besoll, we specialize in creating high-performance websites and landing pages using the latest technologies. Our team of experts ensures your site is fast, optimized, and ranks higher on search engines.';
const creatorBL = "B. Kavzharadze - Besoll";

export const metadata: Metadata = {
  manifest: "/manifest.json",
  applicationName: "Landing Page",
  authors: [{ name: "Zongericht", url: "https://zongericht.nl/" }],
  generator: "Next.js",
  title: {
    default: titleBL,
    template: "%s | Besoll.nl",
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
    <html lang="nl">   
      <Script id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/489a29e11f553b3aa1c0e08d/script.js" strategy="beforeInteractive" />   
      <GoogleTagManager gtmId="GTM-5TDL8DP8" />
      <body className={inter.className}>      
        {children}
      </body>
    </html>
  );
}
