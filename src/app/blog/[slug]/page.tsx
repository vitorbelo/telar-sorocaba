import { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>  // ← Mudança aqui: Promise
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;  // ← Await aqui
  
  return {
    title: 'Título do Post',
    description: 'Descrição do post...',
    openGraph: {
      title: 'Título do Post',
      description: 'Descrição...',
      type: 'article',
      publishedTime: '2025-01-10',
      authors: ['TELAR SOROCABA'],
    },
  }
}

export default async function BlogPost({ params }: Props) {  // ← async aqui
  const { slug } = await params;  // ← Await aqui
  
  return (
    <article className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1>Post: {slug}</h1>
        {/* Conteúdo do post */}
      </div>
    </article>
  );
}