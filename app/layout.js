import './globals.css'
import { Plus_Jakarta_Sans } from 'next/font/google'
import Nav from './components/Nav'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jozi Port',
  description: "Mwangi Joseph's Portfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='font-Plus_Jakarta_Sans'>
        <Nav/>
          {children}
      </body>
    </html>
  )
}
