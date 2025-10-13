"use client";

import { Button } from "@/components/ui/button";
import { Shield, Star, Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-24 px-4 sm:px-6 lg:px-8"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e40af' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm mb-4">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-semibold text-gray-700">
                5.0 - Avaliação Google
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Segurança e{" "}
              <span className="text-primary-700">Tranquilidade</span>
              <br />
              para Sua{" "}
              <span className="text-secondary-500">Família</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
              Redes de proteção de alta qualidade com instalação profissional em
              Sorocaba e região. Proteja quem você ama com quem entende do
              assunto.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {[
                "Instalação Rápida",
                "Materiais Certificados",
                "Garantia Estendida",
                "Equipe Especializada",
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <span className="text-sm text-gray-700 font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#contato" className="flex-1">
                <Button
                  size="lg"
                  className="w-full bg-secondary-500 hover:bg-secondary-600 text-white"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Solicitar Orçamento Grátis
                </Button>
              </a>
              <a href="#trabalhos" className="flex-1">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-2 border-primary-600 text-primary-700 hover:bg-primary-50"
                >
                  Ver Trabalhos Realizados
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-md w-full">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center">
                <Image 
                  src="/telar-casa.png" 
                  alt="TELAR SOROCABA - Redes de Proteção em Sorocaba" 
                  width={400} 
                  height={300} 
                  priority
                  className="w-full object-cover" 
                />
              </div>

              {/* Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl p-3 sm:p-4 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Clientes Satisfeitos
                    </p>
                    <p className="text-lg sm:text-2xl font-bold text-primary-800">
                      7000+
                    </p>
                  </div>
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 border-2 border-white"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Glow circles */}
            <div className="absolute -top-4 -right-4 w-16 sm:w-24 h-16 sm:h-24 bg-secondary-500 rounded-full opacity-20 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-24 sm:w-32 h-24 sm:h-32 bg-primary-500 rounded-full opacity-20 blur-2xl" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-500 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}
