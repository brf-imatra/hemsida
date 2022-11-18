import fs from 'fs';
import matter from 'gray-matter';
import { News } from '../types';
import markdownToHtml from "./markdownToHtml";

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
  const formattedDate = new Date(input).toLocaleDateString('sv-SE', options);

  return formattedDate;
}

export interface MedlemsInformationArticle {
  id: number;
  title: string;
  introducing: string;
  content: string;
  summary: string;
}

export type MedlemsInformation = {
  bostadsratt: MedlemsInformationArticle;
  hemforsakring: MedlemsInformationArticle;
};

export function readMedlemsInformation(): MedlemsInformation {
  const rootFolder = `${process.cwd()}/content/medlemsinformation`;
  const files = fs
    .readdirSync(rootFolder)
    .filter((filename) => filename.endsWith('.md'));

  // https://jfelix.info/blog/how-to-make-a-static-blog-with-next-js

  //@ts-ignore
  const medlemsInformation: MedlemsInformation = {};

  files.forEach(async (filename, index) => {
    const markdownWithMetadata = fs
      .readFileSync(`${rootFolder}/${filename}`)
      .toString();

    const { data, content } = matter(markdownWithMetadata);
    const title: string = data.title;
    const name: string = filename.split('.')[0];

    medlemsInformation[name] = {
      id: 1 + index,
      title: title,
      introducing: data.introducing,
      content: await markdownToHtml(content || ''),
      summary: data.summary,
    };
  });

  console.log(Object.keys(medlemsInformation));
  return medlemsInformation;
}
