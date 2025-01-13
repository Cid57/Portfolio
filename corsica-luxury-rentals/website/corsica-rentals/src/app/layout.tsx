import type { Metadata } from 'next'
import { Playfair_Display, Poppins } from 'next/font/google'
import './globals.css'
import '@/styles/datepicker.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Corsica Luxury Rentals - Locations de villas de luxe en Corse',
  description: 'Découvrez nos villas de luxe en Corse pour des vacances inoubliables. Location saisonnière haut de gamme avec services personnalisés.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${poppins.variable}`}>
      <body className="font-poppins">
        {children}
      </body>
    </html>
  )
}
