import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

// Schema.org completo e otimizado
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "TELAR SOROCABA - Redes de Proteção",
  "image": [
    "https://telar-sorocaba.vercel.app/logo-telar.jpg",
    "https://telar-sorocaba.vercel.app/telar-casa.png"
  ],
  "@id": "https://telar-sorocaba.vercel.app",
  "url": "https://telar-sorocaba.vercel.app",
  "telephone": "+5515991676761",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Atendimento em toda região",
    "addressLocality": "Sorocaba",
    "addressRegion": "SP",
    "postalCode": "18000-000",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -23.5015,
    "longitude": -47.4526
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "13:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "50",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Cliente Satisfeito"
      },
      "reviewBody": "Excelente serviço de instalação de redes de proteção. Equipe profissional e material de qualidade."
    }
  ],
  "sameAs": [
    "https://www.instagram.com/telarsorocaba",
    "https://www.facebook.com/telarsorocaba"
  ],
  "areaServed": [
    {
      "@type": "City",
      "name": "Sorocaba"
    },
    {
      "@type": "City",
      "name": "Votorantim"
    },
    {
      "@type": "City",
      "name": "Salto de Pirapora"
    },
    {
      "@type": "City",
      "name": "Piedade"
    },
    {
      "@type": "City",
      "name": "Ibiúna"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Serviços de Redes de Proteção",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Instalação de Redes para Janelas",
          "description": "Instalação profissional de redes de proteção para janelas"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Instalação de Redes para Sacadas",
          "description": "Proteção completa para sacadas de apartamentos e casas"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Instalação de Redes para Piscinas",
          "description": "Redes de segurança para áreas de piscina"
        }
      }
    ]
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Início",
      "item": "https://telar-sorocaba.vercel.app"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Sobre",
      "item": "https://telar-sorocaba.vercel.app/#sobre"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Serviços",
      "item": "https://telar-sorocaba.vercel.app/#servicos"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Contato",
      "item": "https://telar-sorocaba.vercel.app/#contato"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Qual o prazo de instalação das redes de proteção?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O prazo médio de instalação varia de acordo com o tamanho do projeto, mas geralmente conseguimos realizar a instalação em até 24 horas após a aprovação do orçamento."
      }
    },
    {
      "@type": "Question",
      "name": "As redes de proteção são resistentes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim! Trabalhamos apenas com redes certificadas e de alta qualidade, fabricadas com polietileno de alta densidade. Nossas redes suportam grandes impactos e são resistentes às condições climáticas."
      }
    },
    {
      "@type": "Question",
      "name": "Qual a garantia oferecida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oferecemos garantia estendida de 3 anos contra defeitos de fabricação e 1 ano para a instalação."
      }
    }
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL('https://telar-sorocaba.vercel.app'),
  title: {
    default: "TELAR SOROCABA - Redes de Proteção | Instalação Profissional em Sorocaba e Região",
    template: "%s | TELAR SOROCABA"
  },
  description: "★ Especialistas em redes de proteção em Sorocaba ★ 10 anos de experiência ★ Instalação profissional ★ Materiais certificados ★ Orçamento grátis! ☎ (15) 9 9167-6761",
  keywords: [
    // Keywords principais
    "redes de proteção sorocaba",
    "rede de proteção sorocaba",
    "tela de proteção sorocaba",
    "instalação rede proteção sorocaba",
    
    // Long-tail keywords
    "rede de proteção para janela sorocaba",
    "rede de proteção para sacada sorocaba",
    "rede de proteção para piscina sorocaba",
    "rede de proteção para gatos sorocaba",
    "rede de proteção para crianças sorocaba",
    
    // Serviços específicos
    "instalador de rede de proteção sorocaba",
    "empresa de rede de proteção sorocaba",
    "rede de segurança sorocaba",
    "telar sorocaba",
    
    // Localização
    "rede proteção votorantim",
    "rede proteção salto pirapora",
    "rede proteção piedade",
    "rede proteção ibiúna",
    
    // Variações
    "tela janela sorocaba",
    "tela sacada sorocaba",
    "proteção janela apartamento",
    "rede anti queda",
  ],
  authors: [{ name: "TELAR SOROCABA", url: "https://telar-sorocaba.vercel.app" }],
  creator: "TELAR SOROCABA",
  publisher: "TELAR SOROCABA",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
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
    siteName: 'TELAR SOROCABA',
    title: '🛡️ TELAR SOROCABA - Redes de Proteção em Sorocaba | Orçamento Grátis',
    description: '★ 10 anos protegendo famílias ★ Instalação profissional ★ Materiais certificados ★ Atendimento em Sorocaba e região ★ Ligue: (15) 9 9167-6761',
    images: [
      {
        url: '/logo-telar.jpg',
        width: 1200,
        height: 630,
        alt: 'TELAR SOROCABA - Redes de Proteção em Sorocaba e Região',
        type: 'image/jpeg',
      },
      {
        url: '/telar-casa.png',
        width: 1200,
        height: 630,
        alt: 'Instalação de Redes de Proteção TELAR SOROCABA',
        type: 'image/png',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '🛡️ TELAR SOROCABA - Redes de Proteção',
    description: '★ 10 anos de experiência ★ Instalação profissional em Sorocaba ★ Orçamento grátis: (15) 9 9167-6761',
    images: ['/logo-telar.jpg'],
    creator: '@telarsorocaba',
  },
  verification: {
    google: 'seu-codigo-google-search-console-aqui',
    // Adicione também:
    // yandex: 'seu-codigo-yandex',
    // bing: 'seu-codigo-bing',
  },
  alternates: {
    canonical: 'https://telar-sorocaba.vercel.app',
    languages: {
      'pt-BR': 'https://telar-sorocaba.vercel.app',
    },
  },
  category: 'Serviços',
  classification: 'Redes de Proteção',
  other: {
    'geo.region': 'BR-SP',
    'geo.placename': 'Sorocaba',
    'geo.position': '-23.5015;-47.4526',
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
        {/* Preconnect para melhor performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo-telar.jpg" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#1e40af" />
        <meta name="msapplication-TileColor" content="#1e40af" />
        
        {/* Geo Tags */}
        <meta name="geo.region" content="BR-SP" />
        <meta name="geo.placename" content="Sorocaba" />
        <meta name="geo.position" content="-23.5015;-47.4526" />
        <meta name="ICBM" content="-23.5015, -47.4526" />
        
        {/* JSON-LD Schema - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
        
        {/* JSON-LD Schema - Breadcrumb */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema)
          }}
        />
        
        {/* JSON-LD Schema - FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema)
          }}
        />
      </head>
      <body className={inter.className}>
        {/* Schema.org para Article (opcional) */}
        <article itemScope itemType="https://schema.org/Article" style={{ display: 'none' }}>
          <meta itemProp="headline" content="Redes de Proteção em Sorocaba - TELAR SOROCABA" />
          <meta itemProp="description" content="Especialistas em instalação de redes de proteção em Sorocaba e região" />
        </article>
        
        {children}
      </body>
    </html>
  );
}