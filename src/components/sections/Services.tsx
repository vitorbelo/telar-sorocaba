"use client";

import { motion } from "framer-motion";
import { Home, Building2, Waves, Dribbble, Shield, Bug } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Services() {
  const services = [
    {
      icon: Home,
      title: "Redes para Janelas",
      description:
        "Proteção completa para janelas residenciais e comerciais, evitando acidentes e garantindo segurança.",
      color: "from-primary-500 to-primary-600",
    },
    {
      icon: Building2,
      title: "Redes para Sacadas",
      description:
        "Instalação de redes em sacadas de apartamentos e casas, proporcionando tranquilidade para toda família.",
      color: "from-secondary-500 to-secondary-600",
    },
    {
      icon: Waves,
      title: "Redes para Piscinas",
      description:
        "Segurança em áreas de piscina, protegendo crianças e animais de estimação com materiais resistentes.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Dribbble,
      title: "Redes para Quadras",
      description:
        "Redes esportivas para quadras de futebol, tênis, vôlei e outros esportes com alta durabilidade.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Shield,
      title: "Proteção Residencial",
      description:
        "Soluções completas de proteção para residências, incluindo varandas, escadas e áreas de risco.",
      color: "from-purple-500 to-purple-600",
    },
    // ,
    // {
    //   icon: Bug,
    //   title: "Telas Mosquiteiras",
    //   description:
    //     "Instalação de telas mosquiteiras para janelas e portas, mantendo insetos afastados.",
    //   color: "from-orange-500 to-orange-600",
    // },
  ];

  return (
    <section id="servicos" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-secondary-100 text-secondary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Nossos Serviços
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Soluções Completas em{" "}
            <span className="text-primary-700">Proteção</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma ampla gama de serviços especializados em redes de
            proteção para atender todas as suas necessidades
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group h-full border-2 border-gray-100 hover:border-primary-300 hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6">
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Hover Arrow */}
                    <div className="mt-4 flex items-center text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm font-semibold mr-2">
                        Saiba mais
                      </span>
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-500 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Não encontrou o serviço que procura?
            </h3>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
              Entre em contato conosco! Temos soluções personalizadas para
              atender suas necessidades específicas.
            </p>
            <a href="#contato">
              <button className="bg-white text-primary-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                Falar com Especialista
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}