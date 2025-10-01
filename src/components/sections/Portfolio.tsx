"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = ["Todos", "Residencial", "Comercial", "Piscinas", "Quadras"];

  // Placeholder - Você adicionará as imagens reais depois
  const portfolioItems = [
    {
      id: 1,
      category: "Residencial",
      image: "/images/portfolio/residencial/placeholder1.jpg",
      title: "Proteção de Sacada",
      description: "Apartamento em Sorocaba",
    },
    {
      id: 2,
      category: "Residencial",
      image: "/images/portfolio/residencial/placeholder2.jpg",
      title: "Proteção de Janelas",
      description: "Casa residencial",
    },
    {
      id: 3,
      category: "Comercial",
      image: "/images/portfolio/comercial/placeholder1.jpg",
      title: "Edifício Comercial",
      description: "Centro de Sorocaba",
    },
    {
      id: 4,
      category: "Piscinas",
      image: "/images/portfolio/piscinas/placeholder1.jpg",
      title: "Proteção de Piscina",
      description: "Área de lazer",
    },
    {
      id: 5,
      category: "Quadras",
      image: "/images/portfolio/quadras/placeholder1.jpg",
      title: "Quadra Esportiva",
      description: "Rede para contenção",
    },
    {
      id: 6,
      category: "Residencial",
      image: "/images/portfolio/residencial/placeholder3.jpg",
      title: "Varanda Gourmet",
      description: "Apartamento de alto padrão",
    },
  ];

  const filteredItems =
    selectedCategory === "Todos"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="trabalhos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Portfólio
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos <span className="text-primary-700">Trabalhos Realizados</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Confira alguns dos projetos que já realizamos com excelência e
            qualidade
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary-600 text-white shadow-lg scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={() => setSelectedImage(item.image)}
            >
              {/* Placeholder Image - Substitua pelas imagens reais */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-secondary-200 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <p className="text-sm font-semibold">{item.category}</p>
                  <p className="text-xs mt-1">Imagem em breve</p>
                </div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-xl mb-1">
                  {item.title}
                </h3>
                <p className="text-white/90 text-sm">{item.description}</p>
                <div className="mt-3 flex items-center text-white text-sm">
                  <span className="mr-2">Ver detalhes</span>
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
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary-700">
                {item.category}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              Nenhum trabalho encontrado nesta categoria.
            </p>
          </div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Quer ver seu projeto aqui também?
          </p>
          <a href="#contato">
            <button className="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-lg font-bold transition-colors">
              Solicitar Orçamento
            </button>
          </a>
        </motion.div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          {selectedImage && (
            <div className="relative aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Imagem em breve</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}