import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from '@/app/components/navBar.component';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fiorella Velazco',
  description: 'UX/UI designer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex items-center flex-col`}>
        <nav className='w-full py-8 lg:justify-center lg:flex lg:w-11/12 max-w-[300px] md:max-w-2xl lg:max-w-screen-xl'>
          <div className='w-full flex flex-col lg:flex-row lg:px-0 justify-center lg:justify-between'>
            <div className='mb-5 lg:mb-0'>
              <span className='text-2xl lg:text-3xl'>Fiorella Velazco</span>
            </div>
            <NavBar
              fontSize='text-1xl lg:text-2xl'
            />
          </div>
        </nav>
        {children}
        <footer className='w-full bg-[#232323] flex justify-center'>
          <div className='w-full lg:w-11/12 lg:justify-center lg:flex lg:w-11/12 max-w-[300px] md:max-w-2xl lg:py-10 lg:flex-row-reverse lg:flex-row flex flex-col lg:justify-between items-center lg:px-0 mt-5 lg:mt-0'>
            <NavBar/>
            <span className='mt-5 lg:mt-0'>
              © 2023  All rights reserved.
            </span>
          </div>
        </footer>
      </body>
    </html>
  )
}
