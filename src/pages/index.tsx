import { InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import {Body, Card, Well, ButtonWithIcon, MenuItemIcon, Centered} from '../components';
import { News } from '../types';
import { readNews } from '../utils';
import { SimpleThreeColumn } from '../components/Section/simple_three_column';
import React from "react";

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

        <HSBMeddlemsserviceCorona />
        {/* <Well>
    <div className="flex-1 flex h-24 w-auto sm:h-32 md:h-48 lg:h-64">
        <img className="overflow-y-visible" src="/imatra/foton/helsingforsgatan_spring20.jpg" alt="Brf Imatra våren 2020" loading="eager" />
      </div>
      </Well> */}
        <div className="flex flex-row w-full flex-wrap justify-start">
          <Årsstämma />
          <ImatraNytt />
          <Garageplatser />
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

function Garageplatser() {
  return (
    <div className="pt-10 w-64 pr-5 flex-grow">
      <Card
        imageUrl="/undraw/undraw_newspaper_k72w.png"
        imageAlt="Garageplatser"
        published="2020-12-23"
        title="Garageplatser"
        summary="Fr.o.m den 2021-01-01 flyttas din bostadsrättsförening Imatra över till den digitala tjänsten och du som boende kan ställa dig i kö och göra intresseanmälningar via Mitt HSB."
        hrefLink="/garage"
      />
    </div>
  );
}

function ImatraNytt() {
  return (
      <div className="pt-10 w-64 pr-5 flex-grow">
      <Card
        imageUrl="/undraw/undraw_news_go0e.png"
        imageAlt="Brf Imatra Nyhetsbrev"
        published="2020-12-31"
        title="Brf Imatra Nyhetsbrev"
        summary="Vad har hänt under året? Det här året har inte varit sig likt för någon vare sig i Världen, Europa, Sverige eller i i vår förening."
        hrefLink="/dokument/imatranytt/nyhetsbrev_2020-12.pdf"
      />
    </div>
  )
}


function Motioner() {
  return (
    <div className="pt-10 w-64 pr-5 flex-grow">
      <Card
        imageUrl="/undraw/undraw_Content_creator_re_pt5b.svg"
        imageAlt="Motioner"
        published="2022-02-01"
        title="Motion för 2022"
        summary="Måndag den 28 februari är sista dagen att komma in med motioner till årets föreningsstämma."
        hrefLink="/motion"
      />
    </div>
  );
}


function Årsstämma() {
  return (
    <div className="pt-10 w-64 pr-5 flex-grow">
      <Card
        imageUrl="/undraw/undraw_Content_creator_re_pt5b.svg"
        imageAlt="Kallelse brf Imatra föreningsårsstämma"
        published="2021-03-30"
        title="Kallelse årsstämma"
        summary="Kallelse och dagordning till brf Imatras årsstämma torsdagen 22/4 i Akalla By"
        hrefLink="/arsstamma"
      />
    </div>
  );
}


function HSBMeddlemsserviceCorona() {
  const text = `
Vi värnar om både våra besökares och våra medarbetares hälsa och har därför under en tid haft receptionen på Finlandsgatan 10 stängd. Vi har nu genomfört en rad åtgärder utifrån den nya pandemilagen och kan glädjande berätta att vi kommer att öppna receptionen på ett säkert sätt den 3 februari.

Öppettiderna är korrigerade och vi har öppet för drop-in besök:

Onsdagar 08:00 – 12:00    
Torsdagar 13:00 – 17:00

__VID BESÖKET ÄR DET VIKTIGT ATT TÄNKA PÅ ATT__:

- man bara besöker oss om man är symtomfri.
- vi tar bara emot en besökare åt gången och eventuellt sällskap får vänta utanför oavsett väder.
- bokade besök har förtur under öppettiderna, så alla uppmanas att boka sitt besök då bokade besök även kan ske utanför öppettiderna.
- besök bokas enbart under receptionens öppettider på 010-442 13 23.
- man kan behöva köa utanför om det redan finns en besökare på kontoret.
- alla möten sker med plexiglas mellan personerna som träffas.
- besökare behöver använda handsprit och munskydd (finns på plats) vid besöket.
  `;

  return (
      <Centered
      introducing="HSB Kontoret"
      title="Information om att vi nu öppnar receptionen"
      content={text}
      summary=""
    />
  )
}
