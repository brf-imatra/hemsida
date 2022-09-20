import { InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import {
  Banner,
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
  const bannerEl = false ? (
      <Banner
          title="Extra föreningsstämma!"
          message="Missa inte extra föreningsstämman nu på tisdag 20 september i Folkets Husby"
        />
  ) : null;

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
        {bannerEl}
        <SimpleThreeColumn />

        <StambyteTider />
        {/*<HSBMeddlemsserviceCorona />*/}
        {/* <Well>
    <div className="flex-1 flex h-24 w-auto sm:h-32 md:h-48 lg:h-64">
        <img className="overflow-y-visible" src="/imatra/foton/helsingforsgatan_spring20.jpg" alt="Brf Imatra våren 2020" loading="eager" />
      </div>
      </Well> */}
        <div className="flex flex-row w-full flex-wrap justify-start">
          {/*<InbjudanFöreningsstämma />*/}
          {/*<Årsstämma />*/}
          {/*<FläktByte />*/}
          <ImatraNytt />
          {/*<Städdag />*/}
          <KommandeAvgiftshöjningar />
          <StambyteExtastämma />
          <StambyteMedlemsInformation />
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

function KommandeAvgiftshöjningar() {
  return (
    <div className="pt-10 w-64 pr-5 flex-grow">
      <Card
        imageUrl="/undraw/undraw_investing_re_bov7.svg"
        imageAlt="Plannerad avgiftshöjning 2023"
        published="2022-09-16"
        title="Ekonomi-info"
        summary="Brf Imatras kommer att behöva höja årsavgiften kraftigare än normalt under de kommande åren. Detta beror på att vi behöver göra stora investeringar i fastigheten. Vi kommer att behöva höja årsavgiften med 10% under 2023."
        hrefLink="/boendeinformation/stambyte-ekonomi-info-2022-09-16"
      />
    </div>
  );
}

function StambyteExtastämma() {
  return (
    <div className="pt-10 w-64 pr-5 flex-grow">
      <Card
        imageUrl="/undraw/undraw_public_discussion_re_w9up.svg"
        imageAlt="Extra föreningstämma för brf Imatra"
        published="2022-09-04"
        title="Extra föreningsstämma 2022"
        summary="Kallelse och dagordning för Brf. Imatras extra föreningstämma tisdag 20/9 i Folkets Husby."
        hrefLink="/boendeinformation/stambyte-foreningstamma"
      />
    </div>
  );
}

function StambyteMedlemsInformation() {
  return (
    <div className="pt-10 w-64 pr-5 flex-grow">
      <Card
        imageUrl="/undraw/undraw_Content_creator_re_pt5b.svg"
        imageAlt="Stambyte medlemsinformation"
        published="2022-06-18"
        title="Stambytesinformation"
        summary="Vårt hus är nu snart 50 år gammalt, byggda på 70-talet. Vi är en attraktiv bostadsrättsförening i ett trevligt område. Men visst märks det att husen åldrats! Styrelsen har under en tid undersökt vad som är bäst för just våra hus. Under våren har styrelsen arbetat tillsammans med Nabo och nu kommit fram till ett ställningstagande om hur vi ska gå vidare med den nödvändiga renoveringen av rörstammar och våtrum."
        hrefLink="/boendeinformation/stambyte-info-2022-06-16"
      />
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
        imageUrl="/undraw/undraw_year_2022_uci7.svg"
        imageAlt="Brf Imatra Nyhetsbrev"
        published="2022-06-19"
        title="Brf Imatra Nyhetsbrev"
        summary="Ny styrelse sedan 28 april. Helsingforsgatan har av Stockholms stad utvalts att ingå i pilotprojektet 'Stockholms Framtidsgator'. Mellan den 11 juli till 22 juli kommer Nova Städ att se till att våra våra trapphus blir grundligt städade och polerade. Klicka för att läsa mer..."
        hrefLink="/dokument/imatranytt/nyhetsbrev_2022-06.pdf"
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
        imageAlt="Föreningsårsstämma för brf Imatra"
        published="2021-04-03"
        title="Föreningsstämma 2022"
        summary="Kallelse till Brf. Imatras föreningsårsstämma torsdagen 28/4 i Akalla By"
        hrefLink="/foreningsstamma"
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

function InbjudanFöreningsstämma() {
  const text = `
Dagordning och årsredovisning kommer att delas ut till alla medlemmar senast 4 veckor innan föreningsstämman.
`;

  return (
    <Centered
      introducing="Föreningsstämma"
      title="Inbjudan för verksamhetsåret 2021"
      content={text}
      summary="Föreningsstämma kommer att genomföras torsdagen 28/4 i Akalla By"
    />
  );
}

function HSBMeddlemsserviceCorona() {
  const text = `
Receptionen är stäng för spontanbesök men boka gärna ditt besök så hjälper vi dig.
För att minska smittspridningen gäller nedan:
* Nödvändiga besök bokas
* Endast 1 person i lokalen åt gången
* Håll 1,5 m avstånd i kön utanför ingågnen
* Besök oss bara om du är symptomfri

## Kontakta oss gärna i våra andra kanaler
Felanmälan: [hsb.se/felanmalan](https://www.hsb.se/felanmalan)    
Övriga ärenden:     
  - [hsb.se/stockholm/kontakt](https://www.hsb.se/stockholm/kontakt)   
  - [010-442 11 00](tel:0104421100)
`;

  return (
    <Centered
      introducing="Tack för att du hjälper oss minska smittspridningen!"
      title="Ändrade öppettider HSB"
      content={text}
      summary=""
    />
  );
}

function StambyteTider() {
  const meetings = [
    {
      id: 4,
      title: 'Extra föreningsstämma',
      location: 'OBS! Ny plats Folkets Husby - https://folketshusby.se',
      date: new Date(2022, 8, 20, 18, 0, 0),
      endDate: new Date(2022, 8, 20, 20, 0, 0),
    },
  ];
  const seShort = new Intl.DateTimeFormat('sv-SE');
  const seLong = new Intl.DateTimeFormat('sv-SE', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });
  const seTid = new Intl.DateTimeFormat('sv-SE', {
    hour: 'numeric',
    minute: 'numeric',
  });
  return (
    <section className="mt-12">
      <h2 className="font-semibold text-gray-900">Kommande aktiviteter</h2>
      <ol className="mt-2 divide-y divide-gray-200 text-sm leading-6 text-gray-500">
        {meetings.map((m) => (
          <li key={m.id} className="py-4 sm:flex">
            <time dateTime={seShort.format(m.date)} className="w-28 flex-none">
              {seLong.format(m.date)}
            </time>
            <p className="mt-2 flex-auto font-semibold text-gray-900 sm:mt-0">
              {m.title}
            </p>
            <p className="flex-none sm:ml-6">{m.location}</p>
            <p className="flex-none sm:ml-6">
              start{' '}
              <time dateTime={m.date.toISOString()}>
                {seTid.format(m.date)}
              </time>{' '}
              - slut{' '}
              <time dateTime={m.endDate.toISOString()}>
                {seTid.format(m.endDate)}
              </time>
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
