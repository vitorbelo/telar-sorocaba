import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TELAR SOROCABA - Redes de Proteção | Segurança para sua Família",
  description:
    "Especialistas em redes de proteção em Sorocaba e região. Instalação profissional, materiais certificados e garantia estendida. Solicite seu orçamento grátis!",
  keywords:
    "redes de proteção, redes de proteção sorocaba, proteção janelas, proteção sacadas, redes para piscinas, segurança residencial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}