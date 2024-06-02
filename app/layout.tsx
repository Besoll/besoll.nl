import type { Metadata, Viewport  } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google'
import Head from "next/head";


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
  title: titleBL,
  description: descriptionBL,
  themeColor: colorBL,
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
      <Head>
      <link rel="manifest" href="https://progressier.app/cUuSrk53U7c922ZgPl9U/progressier.json"/><script defer src="https://progressier.app/cUuSrk53U7c922ZgPl9U/script.js"></script> 
      </Head>
      <GoogleTagManager gtmId="GTM-5TDL8DP8" />
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
