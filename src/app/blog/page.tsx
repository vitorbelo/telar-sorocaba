import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog - Dicas sobre Redes de Proteção',
  description: 'Artigos e dicas sobre segurança, instalação e manutenção de redes de proteção em Sorocaba',
};

// Defina o tipo do post
type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

const blogPosts: BlogPost[] = [  // ← Adicione `: BlogPost[]` aqui
  {
    slug: 'importancia-redes-protecao-apartamento',
    title: 'A Importância das Redes de Proteção em Apartamentos',
    excerpt: 'Descubra por que instalar redes de proteção é essencial para a segurança da sua família...',
    date: '2025-01-10',
    image: '/blog/apartamento.jpg'
  },
  {
    slug: 'como-escolher-rede-protecao-qualidade',
    title: 'Como Escolher uma Rede de Proteção de Qualidade',
    excerpt: 'Aprenda os critérios essenciais para escolher a melhor rede de proteção...',
    date: '2025-01-08',
    image: '/blog/qualidade.jpg'
  },
  {
    slug: 'rede-protecao-gatos-caes',
    title: 'Redes de Proteção para Gatos e Cães: Guia Completo',
    excerpt: 'Proteja seus pets com as melhores soluções em redes de proteção...',
    date: '2025-01-05',
    image: '/blog/pets.jpg'
  },
  {
    slug: 'manutencao-redes-protecao',
    title: 'Manutenção de Redes de Proteção: Dicas Essenciais',
    excerpt: 'Saiba como manter suas redes sempre em perfeito estado...',
    date: '2025-01-03',
    image: '/blog/manutencao.jpg'
  },
  {
    slug: 'redes-protecao-normas-abnt',
    title: 'Normas ABNT para Redes de Proteção',
    excerpt: 'Conheça as normas técnicas que garantem a segurança das instalações...',
    date: '2025-01-01',
    image: '/blog/normas.jpg'
  }
];

export default function BlogPage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Blog TELAR SOROCABA</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <article className="border rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="aspect-video bg-gray-200" />
                <div className="p-6">
                  <time className="text-sm text-gray-500">{post.date}</time>
                  <h2 className="text-xl font-bold mt-2 mb-3">{post.title}</h2>
                  <p className="text-gray-600">{post.excerpt}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}