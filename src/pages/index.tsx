import { InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import { Body, Card } from "../components";
import { News } from "../types";
import { readNews } from "../utils";


export default function Home({ news }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  return (
    <Body title="Information om BRF Imatra">
      <div className="flex flex-row w-full flex-wrap justify-start">
        <div
          className="w-40 pr-5"
          onClick={() => router.push("/imatranytt/sommar-2020")}
        >
          <h2>Imatra Nytt</h2>
          <p>Hej hej</p>
        </div>
        {news.slice(0, 5).map((post) => (
          <div
            key={post.id}
            className="pt-10 w-64 pr-5 flex-grow"
            onClick={() => console.log(`Post: ${post.id}`)}
          >
            <Card
              imageUrl="/undraw/undraw_news_go0e.png"
              imageAlt="Liten bild"
              published={post.published ? `Publiserad ${post.published}` : null}
              title={post.title}
              summary={post.body}
            />
          </div>
        ))}
      </div>
    </Body>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  const posts: News[] = await res.json();

  const news = readNews();

  // return {
  //   paths,
  //   fallback: false,
  // };
  console.log("Hemsida: ", news.length);

  return {
    props: {
      news: news.concat(posts),
    },
  };
};
