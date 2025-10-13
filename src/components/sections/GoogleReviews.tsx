"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Review {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  profile_photo_url: string;
  relative_time_description: string;
}

interface GoogleReviewsData {
  rating: number;
  totalReviews: number;
  reviews: Review[];
}

export default function GoogleReviews() {
  const [reviewsData, setReviewsData] = useState<GoogleReviewsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/google-reviews')
      .then(res => res.json())
      .then(data => {
        setReviewsData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Erro ao carregar avaliações:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="py-20 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto" />
      </div>
    );
  }

  if (!reviewsData) return null;

  return (
    <section id="avaliacoes" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      {/* ... resto do código do componente ... */}
    </section>
  );
}