"use client";

import Link from "next/link";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Trabalhos", href: "#trabalhos" },
    { label: "Avaliações", href: "#avaliacoes" },
    { label: "Contato", href: "#contato" },
  ];

  const services = [
    "Redes para Janelas",
    "Redes para Sacadas",
    "Redes para Piscinas",
    "Redes para Quadras",
    // "Telas Mosquiteiras",
    "Proteção Residencial",
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <h3 className="text-2xl font-bold">
                <span className="text-white">TELAR</span>
                <span className="text-secondary-500"> SOROCABA</span>
              </h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Especialistas em redes de proteção com mais de 10 anos de experiência. Segurança e qualidade para sua família.
            </p>
            <div className="flex space-x-4">
              <a href="https://web.facebook.com/p/Telar-Sorocaba-Telas-e-Redes-De-Proteção-Em-Sorocaba-e-Região-61553593048091/?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/telarsorocaba" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-secondary-500 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-secondary-500 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Nossos Serviços</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-secondary-500 flex-shrink-0 mt-0.5" />
                <div>
                <a href="tel:+5515991676761" className="text-gray-400 hover:text-secondary-500 transition-colors">
                  (15) 9 9167-6761
                </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-secondary-500 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:contato@telarsorocaba.com.br" className="text-gray-400 hover:text-secondary-500 transition-colors break-all">
                    contato@telarsorocaba.com.br
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-secondary-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-400">Sorocaba - SP<br />Atendemos toda a região</span>
                </div>
              </li>
            </ul>

            <div className="mt-6 p-4 bg-white/5 rounded-lg">
              <p className="text-sm font-semibold mb-2">Horário de Atendimento</p>
              <p className="text-gray-400 text-sm">Seg - Sex: 8h às 18h</p>
              <p className="text-gray-400 text-sm">Sábado: 8h às 13h</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} TELAR SOROCABA. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm text-center md:text-right">
              Desenvolvido por <a href="http://vabweb.com.br/" target="_blank" className="text-secondary-500 font-semibold ">VAB WEB /&gt;</a>
            </p>
          </div>
        </div>
      </div>

      <a href="https://wa.me/5515991676761" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50 group" aria-label="WhatsApp">
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping" />
      </a>
    </footer>
  );
}