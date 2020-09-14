import { useRouter } from "next/router";
import { Card } from "../components";

interface HomeProps {
  posts: Post[];
}

export default function Home({ posts }: HomeProps) {
  const router = useRouter();

  return (
    <div className="flex flex-row w-full flex-wrap justify-start">
      <div className="w-40 pr-5" onClick={() => router.push("/imatranytt/sommar-2020")}>
        <h2>Imatra Nytt</h2>
        <p>Hej hej</p>
      </div>
      {posts.slice(0, 5).map((post) => (
        <div
          key={post.id}
          className="pt-10 w-64 pr-5 flex-grow"
          onClick={() => console.log(`Post: ${post.id}`)}
        >
          <Card
            imageUrl="/undraw/undraw_news_go0e.png"
            imageAlt="Liten bild"
            published="Publiserad 2020-09-14"
            title={post.title}
            summary={post.body}
          />
        </div>
      ))}
    </div>
  );
}

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  const posts: Post[] = await res.json();

  return {
    props: {
      posts,
    },
  };
};
