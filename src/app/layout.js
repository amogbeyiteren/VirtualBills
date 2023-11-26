import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Virtual Bills',
  icons: {
    icon: '/favicon.png',
  },
  description: 'Automation Of Utility Operations And Revenue Collection Systems'
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>{children}</body>
    </html>
  )
}
