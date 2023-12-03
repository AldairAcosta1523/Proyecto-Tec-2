import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import Navbar  from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tecshop',
  description: 'Eccomerce de Tecsup',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}> 
      <Navbar />
        <div className="flex flex-col">
          <div className="flex-1"> 
            {children}
          </div>
        <Footer /> 
        </div>
      </body>
    </html>
  )
}
