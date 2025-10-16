"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Instagram, ExternalLink, Heart, MessageCircle } from "lucide-react";
import Image from "next/image";

interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
  permalink: string;
}

export default function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const mockPosts: InstagramPost[] = [
      { id: "1", imageUrl: "/instagram/post1.jpg", caption: "Instalacao", likes: 245, comments: 18, permalink: "https://www.instagram.com/telarsorocaba" },
      { id: "2", imageUrl: "/instagram/post2.jpg", caption: "Pets", likes: 312, comments: 24, permalink: "https://www.instagram.com/telarsorocaba" },
      { id: "3", imageUrl: "/instagram/post3.jpg", caption: "Sacadas", likes: 189, comments: 15, permalink: "https://www.instagram.com/telarsorocaba" },
      { id: "4", imageUrl: "/instagram/post4.jpg", caption: "Qualidade", likes: 267, comments: 21, permalink: "https://www.instagram.com/telarsorocaba" },
      { id: "5", imageUrl: "/instagram/post5.jpg", caption: "Familia", likes: 198, comments: 12, permalink: "https://www.instagram.com/telarsorocaba" },
      { id: "6", imageUrl: "/instagram/post6.jpg", caption: "Rapido", likes: 223, comments: 16, permalink: "https://www.instagram.com/telarsorocaba" }
    ];
    setTimeout(() => { setPosts(mockPosts); setLoading(false); }, 500);
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="instagram" className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Instagram className="w-4 h-4 mr-2" />
            <span>telarsorocaba</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Acompanhe Nossos <span className="text-primary-700">Trabalhos</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">Veja nossos projetos no Instagram</p>
          <a href="https://www.instagram.com/telarsorocaba" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors">
            <span>Seguir no Instagram</span>
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {posts.map((post, index) => (
            <motion.a key={post.id} href={post.permalink} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: true }} className="group relative aspect-square rounded-lg overflow-hidden bg-gray-200 hover:shadow-xl transition-all duration-300">
              <Image src={post.imageUrl} alt={post.caption} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <div className="flex items-center justify-between text-white text-sm">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <Heart className="w-4 h-4 mr-1" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
              <div className="absolute top-2 right-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Instagram className="w-4 h-4 text-white" />
              </div>
            </motion.a>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mt-12">
          <a href="https://www.instagram.com/telarsorocaba" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl">
            <Instagram className="w-5 h-5 mr-2" />
            <span>Ver Mais no Instagram</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}