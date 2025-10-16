import { NextResponse } from 'next/server';

export async function GET() {
  const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
  const PLACE_ID = process.env.GOOGLE_PLACE_ID;

  if (!API_KEY) {
    return NextResponse.json({ error: 'API Key não configurada' }, { status: 500 });
  }

  // Se já tem Place ID válido configurado
  if (PLACE_ID && PLACE_ID.startsWith('ChIJ') && PLACE_ID.length > 20) {
    console.log('✅ Usando Place ID do .env:', PLACE_ID);
    
    try {
      const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,reviews,user_ratings_total&key=${API_KEY}`;
      
      const response = await fetch(detailsUrl, { 
        next: { revalidate: 86400 } 
      });
      
      const data = await response.json();
      
      if (data.status === 'OK') {
        console.log('✅ Avaliações carregadas:', data.result.name);
        console.log(`⭐ Rating: ${data.result.rating}`);
        console.log(`📝 Total: ${data.result.user_ratings_total}`);
        
        return NextResponse.json({
          rating: data.result.rating || 0,
          totalReviews: data.result.user_ratings_total || 0,
          reviews: data.result.reviews?.slice(0, 6) || [],
        });
      }
      
      console.error('❌ Place ID inválido:', data.status);
    } catch (error) {
      console.error('❌ Erro:', error);
    }
  }

  // Tentar encontrar usando o website (método mais confiável)
  try {
    console.log('🔍 Buscando pelo website: telarsorocaba.com.br');
    
    const websiteSearchUrl = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=telarsorocaba.com.br&inputtype=textquery&fields=place_id,name,formatted_address&key=${API_KEY}`;
    
    const websiteResponse = await fetch(websiteSearchUrl);
    const websiteData = await websiteResponse.json();
    
    console.log('📊 Busca por website:', websiteData.status);
    
    if (websiteData.status === 'OK' && websiteData.candidates?.[0]) {
      const place = websiteData.candidates[0];
      const placeId = place.place_id;
      
      console.log('✅ ENCONTRADO PELO WEBSITE!');
      console.log(`📍 Nome: ${place.name}`);
      console.log(`🆔 Place ID: ${placeId}`);
      console.log('');
      console.log('🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉');
      console.log('💡 COPIE E COLE NO SEU .env.local:');
      console.log(`   GOOGLE_PLACE_ID=${placeId}`);
      console.log('🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉');
      console.log('');
      
      // Buscar detalhes com o Place ID encontrado
      const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews,user_ratings_total&key=${API_KEY}`;
      
      const detailsResponse = await fetch(detailsUrl, { 
        next: { revalidate: 86400 } 
      });
      
      const detailsData = await detailsResponse.json();
      
      if (detailsData.status === 'OK') {
        console.log('✅ Avaliações carregadas!');
        console.log(`⭐ Rating: ${detailsData.result.rating}`);
        console.log(`📝 Total: ${detailsData.result.user_ratings_total}`);
        
        return NextResponse.json({
          rating: detailsData.result.rating || 0,
          totalReviews: detailsData.result.user_ratings_total || 0,
          reviews: detailsData.result.reviews?.slice(0, 6) || [],
        });
      }
    }
    
    // Tentar buscar pelo telefone formatado de outra forma
    console.log('🔍 Tentando buscar pelo telefone...');
    
    const phoneSearchUrl = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=(15)%2099167-6761&inputtype=phonenumber&fields=place_id,name,formatted_address&key=${API_KEY}`;
    
    const phoneResponse = await fetch(phoneSearchUrl);
    const phoneData = await phoneResponse.json();
    
    console.log('📊 Busca por telefone:', phoneData.status);
    
    if (phoneData.status === 'OK' && phoneData.candidates?.[0]) {
      const place = phoneData.candidates[0];
      const placeId = place.place_id;
      
      console.log('✅ ENCONTRADO PELO TELEFONE!');
      console.log(`📍 Nome: ${place.name}`);
      console.log(`🆔 Place ID: ${placeId}`);
      console.log('');
      console.log('💡 ADICIONE NO .env.local:');
      console.log(`   GOOGLE_PLACE_ID=${placeId}`);
      console.log('');
      
      // Buscar detalhes
      const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews,user_ratings_total&key=${API_KEY}`;
      
      const detailsResponse = await fetch(detailsUrl, { 
        next: { revalidate: 86400 } 
      });
      
      const detailsData = await detailsResponse.json();
      
      if (detailsData.status === 'OK') {
        return NextResponse.json({
          rating: detailsData.result.rating || 0,
          totalReviews: detailsData.result.user_ratings_total || 0,
          reviews: detailsData.result.reviews?.slice(0, 6) || [],
        });
      }
    }
    
    console.error('❌ Não encontrado por nenhum método');
    console.log('');
    console.log('📝 SOLUÇÃO MANUAL:');
    console.log('1. Abra: https://www.google.com/maps/place/TELAR+SOROCABA');
    console.log('2. No console do navegador (F12), cole:');
    console.log('   APP_INITIALIZATION_STATE[3][6].match(/ChIJ[\\w-]+/)[0]');
    console.log('3. Copie o Place ID e adicione no .env.local');
    
    return NextResponse.json({ 
      error: 'Place ID não encontrado automaticamente. Use o método manual.'
    }, { status: 404 });
    
  } catch (error) {
    console.error('❌ Erro:', error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}