import fs from 'fs';
import matter from 'gray-matter';
import { News } from '../types';

export function readNews(): News[] {
  const files = fs
    .readdirSync(`${process.cwd()}/content/news`)
    .filter((filename) => filename.endsWith('.md'));

  // https://jfelix.info/blog/how-to-make-a-static-blog-with-next-js

  const news: News[] = files.map((filename, index) => {
    const markdownWithMetadata = fs
      .readFileSync(`${process.cwd()}/content/news/${filename}`)
      .toString();

    const { data, content } = matter(markdownWithMetadata);
    //const { title: string, layout, pubdate, active } = data;

    const formattedDate = toSwedishDateString(data.pubdate);
    console.log(filename, data.pubdate, formattedDate);
    const title: string = data.title;
    const active: boolean = data.active;

    return {
      id: 1234 + index,
      title: title,
      body: content.slice(0, 140) + '...',
      userId: 1 + index,
      published: formattedDate,
      active: active,
    };
  });

  /*
    const news: Post[] = files.map((filename, index) => ({
        id: 1234+index,
        title: filename.replace(".md", ""),
        body: "Hej hej " + filename,
        userId: 1+index
      }));
      */

  //console.log(posts);

  return news.filter((article) => article.active);
}

export function toSwedishDateString(input: string): string {
  // Convert post date to format: Month day, Year
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(input).toLocaleDateString('sv-SE', options);
}




