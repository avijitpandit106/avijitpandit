// app/blog/[slug]/page.tsx
import { getArticleData } from '@/app/lib/articles';
import BlogPost from '@/components/blogpost';
import type { Metadata } from 'next';

type Params = {
  params: {
    slug: string;
  };
};

// ✅ FIXED: No Promise<Params>, no await on props
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const article = await getArticleData(params.slug);
  return {
    title: `${article.title} | Avijit Pandit`,
    description: article.excerpt,
  };
}

// ✅ FIXED: Same here
export default async function BlogSlugPage({ params }: Params) {
  const article = await getArticleData(params.slug);
  return <BlogPost article={article} />;
}
