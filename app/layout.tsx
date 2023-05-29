import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import DarkModeToggle from '@/components/DarModeToggle'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fabio Rodriguez Porfolio',
  description: 'Previews of my projects and contact info.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-black dark:text-white`}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  )
}
