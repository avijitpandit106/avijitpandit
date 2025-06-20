import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import moment from 'moment';
import { remark } from 'remark';
import html from 'remark-html';

import type { ArticleItems } from '@/types/index';

const articlesDirectory = path.join(process.cwd(), 'src', 'articles');

const getSortedArticles = (): ArticleItems[] => {
  const fileNames = fs.readdirSync(articlesDirectory);

  const allArticles = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    return {
      id,
      title: matterResult.data.title as string,
      date: moment(matterResult.data.date).format('MMMM D, YYYY'),
      excerpt: matterResult.data.excerpt as string,
      image: matterResult.data.image as string,
      tag: matterResult.data.tag as string,
      featured: (matterResult.data.featured as boolean) || false,
    };
  });
  return allArticles.sort((a, b) => {
    const format = 'DD-MM-YYYY';
    const dateOne = moment(a.date, format);
    const dateTwo = moment(b.date, format);

    if (dateOne.isBefore(dateTwo)) {
      return -1;
    } else if (dateOne.isAfter(dateTwo)) {
      return 1;
    } else {
      return 0;
    }
  });
};

export const getCategorisedArticles = (): Record<string, ArticleItems[]> => {
  const sortedArticles = getSortedArticles();
  const categorisedArticles: Record<string, ArticleItems[]> = {};

  sortedArticles.forEach((article) => {
    if (!categorisedArticles[article.tag]) {
      categorisedArticles[article.tag] = [];
    }
    categorisedArticles[article.tag].push(article);
  });

  return categorisedArticles;
};


export const getArticleData = async (id: string) => {
    const fullPath = path.join(articlesDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);

    const contentHtml = processedContent.toString();

    return {
        id,
        contentHtml,
        title: matterResult.data.title,
        tag: matterResult.data.tag,
        excerpt: matterResult.data.excerpt,
        image: matterResult.data.image,
        featured: matterResult.data.featured || false,
        date: moment(matterResult.data.date, "DD-MM-YYYY").format('MMMM Do YYYY'),
    }
}