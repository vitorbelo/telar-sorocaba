"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: "Qual o prazo de instalação das redes de proteção?",
      answer:
        "O prazo médio de instalação varia de acordo com o tamanho do projeto, mas geralmente conseguimos realizar a instalação em até 24 horas após a aprovação do orçamento. Para projetos maiores, o prazo pode ser de 2 a 3 dias úteis.",
    },
    {
      question: "As redes de proteção são resistentes?",
      answer:
        "Sim! Trabalhamos apenas com redes certificadas e de alta qualidade, fabricadas com polietileno de alta densidade. Nossas redes suportam grandes impactos e são resistentes às condições climáticas, garantindo durabilidade por muitos anos.",
    },
    {
      question: "Qual a garantia oferecida?",
      answer:
        "Oferecemos garantia estendida de 3 anos contra defeitos de fabricação e 1 ano para a instalação. Além disso, fazemos manutenção preventiva gratuita no primeiro ano após a instalação.",
    },
    {
      question: "Como solicitar um orçamento?",
      answer:
        "Você pode solicitar um orçamento através do nosso formulário de contato no site, pelo WhatsApp ou ligando diretamente para (15) 99999-9999. Nossa equipe fará uma visita técnica gratuita para avaliar o local e apresentar a melhor solução.",
    },
    {
      question: "Atendem em quais regiões?",
      answer:
        "Atendemos toda a cidade de Sorocaba e região metropolitana, incluindo Votorantim, Salto de Pirapora, Piedade, Ibiúna, Alumínio e outras cidades próximas. Consulte-nos para verificar disponibilidade em sua localidade.",
    },
    {
      question: "As redes interferem na estética do ambiente?",
      answer:
        "Nossas redes são discretas e disponíveis em diversas cores para combinar com seu ambiente. Utilizamos técnicas de instalação que minimizam o impacto visual, preservando a estética do local.",
    },
    {
      question: "Posso remover as redes depois de instaladas?",
      answer:
        "Sim, as redes podem ser removidas caso necessário. No entanto, recomendamos que a remoção seja feita por profissionais para evitar danos à estrutura e garantir que o material possa ser reutilizado se necessário.",
    },
    {
      question: "As redes protegem contra queda de pets?",
      answer:
        "Sim! Nossas redes são especialmente eficazes para proteger animais de estimação, principalmente gatos e cães de pequeno porte. Utilizamos malhas com espaçamento adequado que impedem a passagem dos pets.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <HelpCircle className="w-4 h-4 mr-2" />
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Perguntas <span className="text-primary-700">Frequentes</span>
          </h2>
          <p className="text-lg text-gray-600">
            Tire suas dúvidas sobre nossos serviços e redes de proteção
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gray-50 border-2 border-gray-100 rounded-lg px-6 hover:border-primary-300 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-primary-700 py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Ainda tem dúvidas?
          </h3>
          <p className="text-gray-600 mb-6">
            Nossa equipe está pronta para ajudar você!
          </p>
          <a href="#contato">
            <button className="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-3 rounded-lg font-bold transition-colors">
              Entrar em Contato
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}