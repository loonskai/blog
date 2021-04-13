import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { Post } from '../types/Post';

const postsDirectory = join(process.cwd(), '_posts');

export function getPostsSlugs(): string[] {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields = []): Post {
  const realSlug = slug.replace(/.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items = {};

  fields.forEach(field => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }
    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields = []): Post[] {
  const slugs = getPostsSlugs();
  return slugs.map(slug => getPostBySlug(slug, fields))
    .sort((post1, post2) => post1.date > post2.date ? -1 : 1);
}