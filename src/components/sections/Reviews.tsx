"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Maria Silva",
      rating: 5,
      date: "Há 2 meses",
      comment: "Excelente serviço! Equipe pontual, profissional e muito cuidadosa. A instalação ficou perfeita e agora tenho total tranquilidade com meus filhos em casa.",
      avatar: "MS",
    },
    {
      id: 2,
      name: "João Santos",
      rating: 5,
      date: "Há 1 mês",
      comment: "Melhor custo-benefício da região. Material de primeira qualidade e instalação impecável. Recomendo de olhos fechados!",
      avatar: "JS",
    },
    {
      id: 3,
      name: "Ana Paula",
      rating: 5,
      date: "Há 3 semanas",
      comment: "Fiquei muito satisfeita com o atendimento desde o primeiro contato. Orçamento justo, prazo cumprido e trabalho bem feito. Parabéns!",
      avatar: "AP",
    },
    {
      id: 4,
      name: "Carlos Eduardo",
      rating: 5,
      date: "Há 1 semana",
      comment: "Profissionais super capacitados. Fizeram a instalação em toda minha casa em apenas um dia. Qualidade excepcional!",
      avatar: "CE",
    },
    {
      id: 5,
      name: "Fernanda Lima",
      rating: 5,
      date: "Há 2 semanas",
      comment: "Atendimento nota 10! Tiraram todas minhas dúvidas e me deram as melhores opções. Trabalho impecável e preço justo.",
      avatar: "FL",
    },
    {
      id: 6,
      name: "Roberto Alves",
      rating: 5,
      date: "Há 1 mês",
      comment: "Empresa séria e confiável. Material de excelente qualidade e garantia que realmente vale. Super indico!",
      avatar: "RA",
    },
  ];

  const totalReviews = reviews.length;
  const averageRating = 5.0;

  return (
    <section id="avaliacoes" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="inline-flex flex-col sm:flex-row items-center bg-white rounded-2xl shadow-lg px-4 sm:px-8 py-4 sm:py-6 border-2 border-primary-100 max-w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="inline-block bg-secondary-100 text-secondary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">Avaliações</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">O Que Nossos <span className="text-primary-700">Clientes Dizem</span></h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">Confira os depoimentos reais de quem já confiou na TELAR SOROCABA</p>

          <div className="inline-flex items-center bg-white rounded-2xl shadow-lg px-8 py-6 border-2 border-primary-100">
            <div className="flex items-center mr-6">
              <svg className="h-6 mr-3" viewBox="0 0 272 92" xmlns="http://www.w3.org/2000/svg">
                <path fill="#EA4335" d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
                <path fill="#FBBC05" d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
                <path fill="#4285F4" d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"/>
                <path fill="#34A853" d="M225 3v65h-9.5V3h9.5z"/>
                <path fill="#EA4335" d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"/>
                <path fill="#4285F4" d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"/>
              </svg>
              <span className="text-gray-600 font-semibold">Reviews</span>
            </div>
            <div className="border-l-2 border-gray-200 pl-6">
              <div className="flex items-center mb-1">
                <span className="text-4xl font-bold text-gray-900 mr-2">{averageRating.toFixed(1)}</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-600">Baseado em {totalReviews}+ avaliações</p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, index) => (
            <motion.div key={review.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
              <Card className="h-full border-2 border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <Quote className="w-10 h-10 text-primary-200 mb-4" />
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">&ldquo;{review.comment}&rdquo;</p>
                  <div className="flex items-center pt-4 border-t border-gray-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold mr-3">{review.avatar}</div>
                    <div>
                      <p className="font-semibold text-gray-900">{review.name}</p>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center">
          <a href="https://www.google.com/search?q=telar+sorocaba" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-white border-2 border-primary-600 text-primary-700 px-8 py-4 rounded-lg font-bold hover:bg-primary-50 transition-colors">
            <span className="mr-3">📍</span>
            Ver Todas as Avaliações no Google
          </a>
        </motion.div>
      </div>
    </section>
  );
}