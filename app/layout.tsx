import { Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import { Header } from './components/header'
import { BackToTop } from './components/back-to-top'
import { Toaster } from './components/toaster'
import { ContactForm } from './components/contact-form'
import { Footer } from './components/footer'


const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plexMono.variable}`}>
      <head>  
        <meta name="description" content="Discover Gabriela Bianchini's portfolio, a collection showcasing the expertise of a skilled frontend developer. Explore a world of innovation and creativity in web development."></meta>
        <link rel="icon" href="/images/icon3.webp" type="image/webp"/>
        <title>Portifolio</title>
      </head>
      <body>
       <Toaster/>
       <BackToTop/>

        <Header/>
        {children}
        
      </body>
    </html>
  )
}
