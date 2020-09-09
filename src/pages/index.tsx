import {useRouter} from "next/router"

interface HomeProps {
  posts: Post[];
}

export default function Home({ posts }: HomeProps) {
  const router = useRouter();

  return (
    <ol>
      <li onClick={() => router.push("/imatranytt/sommar-2020")}>
          <h2>Imatra Nytt</h2>
          <p>Hej hej</p>
      </li>
      {posts.slice(0, 5).map((post) => (
        <li
          key={post.id}
          className="pt-10"
          onClick={() => console.log(`Post: ${post.id}`)}
        >
          <h2 className="pb-2">{post.title}</h2>
          <p className="text-gray-600">{post.body}</p>
        </li>
      ))}
    </ol>
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
