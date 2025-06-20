import React from 'react';
import BlogContent from '@/components/blogcontent';
import { getCategorisedArticles } from '@/app/lib/articles';
import type { ArticleItems } from '@/types/index';

export default function Blog() {
  const categorisedArticles: Record<string, ArticleItems[]> = getCategorisedArticles();
  return <BlogContent articles={categorisedArticles} />;
}
