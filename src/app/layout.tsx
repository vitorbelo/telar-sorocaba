import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://telar-sorocaba.vercel.app'),
  title: {
    default: "TELAR SOROCABA - Redes de Proteção | Instalação Profissional em Sorocaba",
    template: "%s | TELAR SOROCABA"
  },
  description: "Especialistas em redes de proteção em Sorocaba e região. Instalação profissional, materiais certificados, 10 anos de experiência. Orçamento grátis! ☎ (15) 9 9167-6761",
  keywords: [
    "redes de proteção sorocaba",
    "rede de proteção",
    "instalação rede proteção sorocaba",
    "rede janela sorocaba",
    "rede sacada sorocaba",
    "proteção janela",
    "proteção sacada",
    "telar sorocaba",
    "rede piscina",
    "tela mosquiteiro",
    "rede segurança",
  ],
  authors: [{ name: "TELAR SOROCABA" }],
  creator: "TELAR SOROCABA",
  publisher: "TELAR SOROCABA",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://telar-sorocaba.vercel.app',
    title: 'TELAR SOROCABA - Redes de Proteção em Sorocaba',
    description: 'Especialistas em redes de proteção com 10 anos de experiência. Instalação profissional em Sorocaba e região. Orçamento grátis!',
    siteName: 'TELAR SOROCABA',
    images: [
      {
        url: '/logo-telar.png',
        width: 1200,
        height: 630,
        alt: 'TELAR SOROCABA - Redes de Proteção',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TELAR SOROCABA - Redes de Proteção',
    description: 'Especialistas em redes de proteção em Sorocaba. 10 anos de experiência. Orçamento grátis!',
    images: ['/logo-telar.png'],
  },
  verification: {
    google: 'seu-codigo-google-search-console-aqui',
  },
  alternates: {
    canonical: 'https://telar-sorocaba.vercel.app',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo-telar.png" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "TELAR SOROCABA",
              "image": "https://telar-sorocaba.vercel.app/logo-telar.png",
              "description": "Especialistas em redes de proteção em Sorocaba e região com 10 anos de experiência",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Sorocaba",
                "addressRegion": "SP",
                "addressCountry": "BR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -23.5015,
                "longitude": -47.4526
              },
              "url": "https://telar-sorocaba.vercel.app",
              "telephone": "+5515991676761",
              "priceRange": "$$",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "18:00"
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "6"
              },
              "sameAs": [
                "https://www.instagram.com/telarsorocaba"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}