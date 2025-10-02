"use client";

import { motion } from "framer-motion";
import { Award, Users, Clock, ThumbsUp } from "lucide-react";

export default function About() {
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Clientes Satisfeitos",
    },
    {
      icon: Clock,
      value: "10+",
      label: "Anos de Experiência",
    },
    {
      icon: Award,
      value: "100%",
      label: "Materiais Certificados",
    },
    {
      icon: ThumbsUp,
      value: "5.0",
      label: "Avaliação Google",
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              {/* Placeholder - Substitua pela imagem real */}
              <div className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                <Award className="w-32 h-32 text-primary-600 opacity-30" />
              </div>
            </div>

            {/* Decorative badge */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-secondary-500 text-white rounded-2xl p-4 sm:p-6 shadow-xl max-w-[120px] sm:max-w-none">
              <p className="text-2xl sm:text-4xl font-bold">10+</p>
              <p className="text-xs sm:text-sm">Anos no mercado</p>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Sobre Nós
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Referência em{" "}
              <span className="text-primary-700">Redes de Proteção</span> em
              Sorocaba
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              A <strong className="text-primary-700">TELAR SOROCABA</strong> é
              especializada em instalação de redes de proteção, oferecendo
              segurança e tranquilidade para famílias e empresas em toda a
              região de Sorocaba.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Com mais de <strong>10 anos de experiência</strong> no mercado,
              utilizamos apenas materiais certificados e de alta qualidade,
              garantindo a proteção que você e sua família merecem.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-primary-50 rounded-xl p-6 border border-gray-100"
                  >
                    <Icon className="w-8 h-8 text-primary-600 mb-3" />
                    <p className="text-3xl font-bold text-gray-900 mb-1">
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Nossos Valores
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trabalhamos com compromisso, qualidade e dedicação em cada
              projeto
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Qualidade",
                description:
                  "Utilizamos apenas materiais certificados e de primeira linha para garantir a segurança total.",
              },
              {
                title: "Profissionalismo",
                description:
                  "Equipe treinada e capacitada para realizar instalações com excelência e pontualidade.",
              },
              {
                title: "Compromisso",
                description:
                  "Garantia estendida e suporte completo após a instalação para sua total tranquilidade.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-white rounded" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}