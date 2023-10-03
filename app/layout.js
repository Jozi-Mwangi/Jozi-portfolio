import PropProvider from './context-provider'
import './globals.css'
import { Plus_Jakarta_Sans } from 'next/font/google'
import Nav from './components/Nav'
import LeftPanel from './components/LeftPanel'
import RightPanel from './components/RightPanel'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jozi Port',
  description: "Mwangi Joseph's Portfolio",
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body style={{font: "Plus_Jakarta_Sans" }} className='bg-white' >
        <div className='relative h-full w-full mx-auto' >
          <PropProvider>
            <Nav />
            <LeftPanel />
            {children}
            <RightPanel />
          </PropProvider>
        </div>
      </body>
    </html>
  )
}
