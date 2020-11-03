import { InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import { Body, Card, Well, ButtonWithIcon, MenuItemIcon } from '../components';
import { News } from '../types';
import { readNews } from '../utils';
import { SimpleThreeColumn } from '../components/Section/simple_three_column';

export default function Home({
  news,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <div className="relative overflow-hidden">
        <img
          className="w-full h-48 object-cover"
          src="/imatra/foton/helsingforsgatan_spring20.jpg"
          alt="Brf Imatra våren 2020"
        />
        <div className="px-6 py-4 absolute left-0 top-0">
          <p className="text-gray-100 font-pacifico subpixel-antialiased text-2xl md:text-5xl lg:text-6xl leading-normal">
            Välkommen till{' '}
            <span className="whitespace-no-wrap">BRF Imatra</span>
          </p>
        </div>
      </div>
      <Body>
        <SimpleThreeColumn />

        {/* <Well>
    <div className="flex-1 flex h-24 w-auto sm:h-32 md:h-48 lg:h-64">
        <img className="overflow-y-visible" src="/imatra/foton/helsingforsgatan_spring20.jpg" alt="Brf Imatra våren 2020" loading="eager" />
      </div>
      </Well> */}
        <div className="flex flex-row w-full flex-wrap justify-start">
          <Test />
          <GruppanslutningCard />
          {/* {news.slice(0, 5).map((post) => (
            <div
              key={post.id}
              className="pt-10 w-64 pr-5 flex-grow"
              onClick={() => console.log(`Post: ${post.id}`)}
            >
              <Card
                imageUrl="/undraw/undraw_news_go0e.png"
                imageAlt="Liten bild"
                published={
                  post.published ? `Publiserad ${post.published}` : null
                }
                title={post.title}
                summary={post.body}
                hrefLink="/"
              />
            </div>
          ))} */}
        </div>
      </Body>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  const posts: News[] = await res.json();

  const news = readNews();

  // return {
  //   paths,
  //   fallback: false,
  // };
  console.log('Hemsida: ', news.length);

  return {
    props: {
      news: news.concat(posts),
    },
  };
};

function ExperimentCard() {
  const router = useRouter();
  return (
    <div
      className="w-40 pr-5"
      onClick={() => router.push('/imatranytt/sommar-2020')}
    >
      <div className="h-24 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500">
        <h2>Imatra Nytt</h2>
        <p>Hej hej</p>
        <ButtonWithIcon primary={false} icon={MenuItemIcon.externalLink}>
          <a href="http://brfimatra.se" target="_window">
            Brf Imatra
          </a>
        </ButtonWithIcon>
      </div>
    </div>
  );
}

function GruppanslutningCard() {
  return (
    <div className="pt-10 w-64 pr-5 flex-grow">
      <Card
        imageUrl="/undraw/undraw_Documents_re_isxv.png"
        imageAlt="Internet vanliga frågor"
        published={null}
        title="Internet"
        summary="Föreningen har kollektiv uppkoppling till internet från Bahnhof via datauttag i hallen."
        hrefLink="/banhof-faq"
      />
    </div>
  );
}

function Test() {
  return (
    <div className="pt-10 w-64 pr-5 flex-grow">
      <Card
        imageUrl="/undraw/undraw_newspaper_k72w.png"
        imageAlt="Nya hemsidan"
        published={null}
        title="Mer information kommer"
        summary="Under dom kommande veckorna kommer mer information från nyhetsbrev och boendeinformation att publiseras."
        hrefLink="#"
      />
    </div>
  );
}
