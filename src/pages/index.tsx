import { InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import {
  Body,
  Card,
  Well,
  ButtonWithIcon,
  MenuItemIcon,
  Centered,
} from '../components';
import { News } from '../types';
import { readNews } from '../utils';
import { SimpleThreeColumn } from '../components/Section/simple_three_column';
import React from 'react';
import SocialLinksFooter from '../components/MenuShell/footer';

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
            Välkommen till <span className="whitespace-nowrap">BRF Imatra</span>
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
          {/*<FläktByte />*/}
          <ImatraNytt />
          {/*<Städdag />*/}
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
      <SocialLinksFooter />
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
        published="2021-08-31"
        title="Brf Imatra Nyhetsbrev"
        summary="Runt den 23 augusti påbörjar vi arbete med att byta ut 24 branddörrar i våra garage. Leverantören heter Proloc och tillsamman med Aptus kommer de att arbeta i våra garage en tid framöver."
        hrefLink="/dokument/imatranytt/nyhetsbrev_2021-08.pdf"
      />
    </div>
  );
}

function FläktByte() {
  return (
    <div className="pt-10 w-64 pr-5 flex-grow">
      <Card
        imageUrl="/undraw/undraw_Online_calendar_re_wk3t.svg"
        imageAlt="Fläktbyte information"
        published="2021-05-11"
        title="Fläktbyte under v. 20"
        summary="Under v. 20 med start måndagen (17/5) sker de fysiska byten. Detta kan medföra störningar/avsaknad ventilation under några timmar sett per fläkt/port. Klicka här för att läsa mer om hur ventilationen fungerar i husen."
        hrefLink="/dokument/sa_funkar_er_ventilation.pdf"
      />
    </div>
  );
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
        imageAlt="Föreningsårsstämma för brf Imatra 2021"
        published="2021-05-01"
        title="Årsstämma 2021"
        summary="Inbjudan och dagordning till Brf. Imatras föreningsårsstämma torsdagen 22/4 i Akalla By"
        hrefLink="/arsstamma"
      />
    </div>
  );
}


function Städdag() {
  return (
    <div className="pt-10 w-64 pr-5 flex-grow">
      <Card
        imageUrl="/undraw/undraw_Online_calendar_re_wk3t.svg"
        imageAlt="Fläktbyte information"
        published="2021-09-30"
        title="Föreningen har gemensam städdag"
        summary="Föreningen har gemensam städdag lördagen den 9 oktober kl. 10.00-14.00!"
        hrefLink="/staddag"
      />
    </div>
  );
}

function HSBMeddlemsserviceCorona() {
  const text = `
Återgår till normal öppettider. Mer information om [HSB Medlemsservice](/kontakt) på sidan Kontakta oss.
`;

  return (
    <Centered
      introducing="HSB Kontoret"
      title="Normala öppettider"
      content={text}
      summary=""
    />
  );
}
