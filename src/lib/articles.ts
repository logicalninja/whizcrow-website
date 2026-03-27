import fs from 'fs';
import path from 'path';

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags?: string[];
  featured?: boolean;
}

export async function getArticles(): Promise<Article[]> {
  try {
    const filePath = path.join(process.cwd(), 'src', 'data', 'articles.json');
    if (fs.existsSync(filePath)) {
      const fileContents = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(fileContents);
    }
  } catch (err) {
    console.error('Failed to read articles.json:', err);
  }
  return [];
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const filePath = path.join(process.cwd(), 'src', 'data', 'blogs', `${slug}.json`);
    if (fs.existsSync(filePath)) {
      const fileContents = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(fileContents);
    }
  } catch (err) {
    console.error(`Failed to read blog ${slug}.json:`, err);
  }
  return null;
}
