import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/app/components/navBar.component";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import Link from 'next/link'

const inter = Inter({ subsets: ["latin"] });
const title = "Fiorella Velazco | UX/UI designer";
const description = `Passionate about user experience design with nearly four years of experience in crafting impactful digital solutions. My focus is on blending attractive aesthetics with intuitive functionality, always with the user at the heart of each design. Throughout my career, I've had the privilege of working on various projects that have transformed ideas into remarkable digital experiences.`;

const titleTemplate =  {
  template: "%s | Fiorella Velazco",
  default: title
}

export const metadata: Metadata = {
  metadataBase: new URL('https://fiorella-portfolio.vercel.app'),
  title: titleTemplate,
  description,
  openGraph: {
    siteName: title,
    title,
    description,
    images: ["/images/cover_img.jpeg"],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }} className="overflow-x-hidden">
      <body
        className={`${inter.className} flex items-center flex-col overflow-x-hidden bg-gradient-to-b from-[#2E3259] to-[#100F1C] from-0% to-10%`}
      >
        <nav className="w-full py-8 lg:justify-center lg:flex container  px-3">
          <div className="w-full flex flex-col lg:flex-row lg:px-0 justify-center lg:justify-between">
            <div className="mb-5 lg:mb-0">
              <Link href={"/"} className="text-2xl lg:text-3xl">
                Fiorella Velazco
              </Link>
            </div>
            <NavBar fontSize="text-1xl lg:text-2xl" />
          </div>
        </nav>
        {children}
        <Analytics />
        <footer className="w-full flex justify-center">
          <div className="w-full lg:w-11/12 lg:justify-center lg:flex lg:w-11/12 max-w-[300px] md:max-w-2xl lg:py-10 lg:flex-row-reverse lg:flex-row flex flex-col lg:justify-between items-center lg:px-0 mt-5 lg:mt-0">
            <NavBar />
            <span className="mt-5 lg:mt-0">
              © {new Date().getFullYear()} All rights reserved.
            </span>
          </div>
        </footer>
        <Script strategy="lazyOnload" id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
            });
          `}
        </Script>
      </body>
    </html>
  );
}
