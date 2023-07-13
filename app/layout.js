import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mythical Buddies',
  description: 'Mythical Buddies Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link
          href='https://fonts.googleapis.com/css2?family=Bubblegum+Sans&display=swap'
          rel='stylesheet'
        />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        <link rel='manifest' href='/manifest.json' />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
