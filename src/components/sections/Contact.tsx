"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const whatsappMessage = `Olá! Gostaria de solicitar um orçamento.%0A%0ANome: ${formData.name}%0ATelefone: ${formData.phone}%0AEmail: ${formData.email}%0AServiço: ${formData.service}%0AMensagem: ${formData.message}`;
    window.open(
      `https://wa.me/5515991676761?text=${whatsappMessage}`,
      "_blank"
    );    setIsSubmitting(false);
    setFormData({ name: "", phone: "", email: "", service: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(15) 9 9167-6761",
      link: "tel:+5515991676761",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "(15) 9 9167-6761",
      link: "https://wa.me/5515991676761",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@telarsorocaba.com.br",
      link: "mailto:contato@telarsorocaba.com.br",
    },
    {
      icon: MapPin,
      title: "Atendimento",
      content: "Sorocaba e Região",
      link: "#",
    },
  ];

  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-12">
          <div className="inline-block bg-secondary-100 text-secondary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">Entre em Contato</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Solicite Seu <span className="text-primary-700">Orçamento Gratuito</span></h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Preencha o formulário ou entre em contato diretamente pelo WhatsApp</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 text-white h-full relative">
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              <p className="text-white/90 mb-8">Estamos prontos para atender você e oferecer a melhor solução em redes de proteção.</p>
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a key={index} href={info.link} className="flex items-start space-x-4 hover:translate-x-2 transition-transform duration-300">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">{info.title}</p>
                        <p className="text-white/80">{info.content}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
              <div className="border-t border-white/20 pt-6">
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-2">Horário de Atendimento</p>
                    <p className="text-white/80 text-sm">Segunda a Sexta: 8h às 18h</p>
                    <p className="text-white/80 text-sm">Sábado: 8h às 13h</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100">
              <div className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-gray-700 font-semibold">Nome Completo *</Label>
                  <Input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="Seu nome" className="mt-2 border-gray-300 focus:border-primary-500" />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-gray-700 font-semibold">Telefone/WhatsApp *</Label>
                  <Input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange} placeholder="(15) 99999-9999" className="mt-2 border-gray-300 focus:border-primary-500" />
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-700 font-semibold">E-mail</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="seu@email.com" className="mt-2 border-gray-300 focus:border-primary-500" />
                </div>
                <div>
                  <Label htmlFor="service" className="text-gray-700 font-semibold">Tipo de Serviço *</Label>
                  <select id="service" name="service" required value={formData.service} onChange={handleChange} className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500">
                    <option value="">Selecione um serviço</option>
                    <option value="Redes para Janelas">Redes para Janelas</option>
                    <option value="Redes para Sacadas">Redes para Sacadas</option>
                    <option value="Redes para Piscinas">Redes para Piscinas</option>
                    <option value="Redes para Quadras">Redes para Quadras</option>
                    <option value="Telas Mosquiteiras">Telas Mosquiteiras</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="message" className="text-gray-700 font-semibold">Mensagem</Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Conte-nos mais sobre o que você precisa..." rows={4} className="mt-2 border-gray-300 focus:border-primary-500" />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full bg-secondary-500 hover:bg-secondary-600 text-white py-6 text-lg font-bold">
                  {isSubmitting ? "Enviando..." : <><Send className="w-5 h-5 mr-2" />Enviar Solicitação</>}
                </Button>
                <p className="text-sm text-gray-500 text-center">Ao enviar, você será redirecionado para o WhatsApp</p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}