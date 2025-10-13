import { NextResponse } from 'next/server';

export async function GET() {
  const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
  const PLACE_ID = process.env.GOOGLE_PLACE_ID;

  if (!API_KEY || !PLACE_ID) {
    return NextResponse.json({ error: 'Configuração inválida' }, { status: 500 });
  }

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,reviews,user_ratings_total&key=${API_KEY}`,
      { next: { revalidate: 86400 } }
    );

    const data = await response.json();

    if (data.status === 'OK') {
      return NextResponse.json({
        rating: data.result.rating,
        totalReviews: data.result.user_ratings_total,
        reviews: data.result.reviews?.slice(0, 6) || [],
      });
    }

    return NextResponse.json({ error: 'Erro ao buscar avaliações' }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ error: 'Erro na API' }, { status: 500 });
  }
}