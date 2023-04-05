import { InferGetStaticPropsType } from 'next';

import { Banner, Body, Card, Centered } from '../components';
import { News } from '../types';
import { readNews } from '../utils';
import { SimpleThreeColumn } from '../components/Section/simple_three_column';
import React from 'react';
import SocialLinksFooter from '../components/MenuShell/footer';
import {ImdElTidplan} from "./boendeinformation/imd-el";

export default function Home({
  news,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const bannerEl = false ? (
    <Banner
      title="Ändrade öppettider!"
      message="Återvinningstugan kommer att hållas stängd söndag 25 december och söndag 1 januari."
    />
  ) : null;

  return (
    <>
      <div className="relative overflow-hidden">
        <img
          className="w-full h-48 object-cover"
          src="/imatra/foton/helsingforsgatan_spring20.jpg"
          alt="Brf Imatra vinter 2022"
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

        {/*<KommandeAktiviteter />*/}
        {/*<HSBMeddlemsserviceCorona />*/}
        {/*  <StatusBesiktningBalkonger />*/}
          <ImdElTidplan />
        {/* <Well>
    <div className="flex-1 flex h-24 w-auto sm:h-32 md:h-48 lg:h-64">
        <img className="overflow-y-visible" src="/imatra/foton/helsingforsgatan_spring20.jpg" alt="Brf Imatra våren 2020" loading="eager" />
      </div>
      </Well> */}
        <div className="flex flex-row w-full flex-wrap justify-start">
          {/*<InbjudanFöreningsstämma />*/}
          <Årsstämma />
          {/*<FläktByte />*/}
          <ImatraNytt />
          <StambyteFaq />
          <EkonomiGrafer />

          {/*<Städdag />*/}
          <ElSparTips />
          <StambyteSamtyckesblankett />
          <StambyteExtastämma />
          <KommandeAvgiftshöjningar />

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
        imageAlt="Protokoll från den extra föreningstämman för brf Imatra"
        published="2022-10-10"
        title="Protokoll"
        summary="Protokoll från extra föreningsstämma 2022-09-04 i Fokets Husby är nu justerat och godkännt. Protokollet finns att läsa här eller under fliken 'Dokument' i menyn."
        hrefLink="/dokument/arsredovisning/2022/protokoll_brf_imatra_extra_stamma_2022-09-20.pdf"
      />
    </div>
  );
}

function StambyteSamtyckesblankett() {
  return (
    <div className="pt-10 w-64 pr-5 flex-grow">
      <Card
        imageUrl="/undraw/undraw_Documents_re_isxv.png"
        imageAlt="Protokoll från den extra föreningstämman för brf Imatra"
        published="2022-10-10"
        title="Samtyckesblankett"
        summary="Här hittar du samtyckesblanketten för stambyte. Styrelsen rekommenderar att du lämnar samtycke till genomförande av stambyte. Utan samtycke blir du som medlem motpart i hyresnämnden. Samtyckesblanketten ska vara ifylld och undertecknad senast den 24 oktober 2022."
        hrefLink="/dokument/mallar/stambyte_samtyckesblankett.pdf"
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
        imageUrl="/undraw/undraw_new_year_2023_pfnc.svg"
        imageAlt="Brf Imatra Nyhetsbrev"
        published="2023-03-03"
        title="Brf Imatra Nyhetsbrev"
        summary="Nyhetsbrev där du kan läsa om individuell elmätning projektet som startas upp nu, status på stambytetsprojektet, förstudie solceller. Klicka för att läsa mer..."
        hrefLink="/imatranytt/2023-mars"
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
        published="2023-04-01"
        title="Föreningsstämma 2023"
        summary="Kallelse till Brf. Imatras föreningsstämma torsdagen 4/5 i Folkets Husby. Länkar till  2022 årsredovisning, valberedningensförslag samt motioner."
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

function StatusBesiktningBalkonger() {
  const text = `
HSB Stockholm har fått i uppdrag av styrelsen att undersöka bostadsrättsföreningens balkonger.
Detta gör man för att få en uppfattning av dess skick och kunna planera eventuella underhållsåtgärder.

<br />
Berörda lägenheter har blivit informerade via utskick.
`;

  return (
    <Centered
      introducing="Statusbesiktning"
      title="Balkonger"
      content={text}
      summary="20 balkonger kommer att besiktas onsdag 22/3 mellan 09.00-15.00."
    />
  );
}

function KommandeAktiviteter() {
  const meetings = [
      {
      id: 0,
      title: 'Medlemsmöte',
      location: 'Folkets Husby - https://folketshusby.se',
      date: new Date(2023, 3, 20, 18, 0, 0),
      endDate: new Date(2023, 3, 20, 20, 0, 0),
    },
    {
      id: 4,
      title: 'Föreningsstämma',
      location: 'Folkets Husby - https://folketshusby.se',
      date: new Date(2023, 4, 4, 17, 45, 0),
      endDate: new Date(2023, 4, 4, 20, 0, 0),
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

function ElSparTips() {
  return (
    <div className="pt-10 w-64 pr-5 flex-grow">
      <Card
        imageUrl="/undraw/undraw_checklist__re_2w7v.svg"
        imageAlt="Tips för att hålla nere elförbrukningen"
        published="2022-11-12"
        title="Elförbrukningstips"
        summary="Med de höga elpriserna behöver alla hjälpas åt att hålla nere elförbrukningen så att vi kan spara pengar och påverka hur mycket av månadsavgifterna som ska gå till vår gemensamma elräkning"
        hrefLink="/boendeinformation/el-spar-tips"
      />
    </div>
  );
}

function EkonomiGrafer() {
  return (
    <div className="pt-10 w-64 pr-5 flex-grow">
      <Card
        imageUrl="/undraw/undraw_visual_data_re_mxxo.svg"
        imageAlt="Årsredovisning tabell"
        published="2022-11-30"
        title="Årsredovisningsanalys"
        summary="Föreningen drabbas av en kraftigt ökad försäkringspremie för år 2023. En grafisk presentation av försäkringspremie, samt nettoomsättning och drift, från de senaste två deceniernas årsredovisningar kan du se här."
        hrefLink="/boendeinformation/arsredovisning-analys"
      />
    </div>
  );
}

function StambyteFaq() {
  return (
    <div className="pt-10 w-64 pr-5 flex-grow">
      <Card
        imageUrl="/undraw/undraw_questions_re_1fy7.svg"
        imageAlt="Frågor och svar om stambyte"
        published="2022-12-30"
        title="Stambyte FAQ"
        summary="Vanliga frågor och svar om stambyte hittar du här. Denna kommer att uppdateras löpande."
        hrefLink="/boendeinformation/stambyte/faq"
      />
    </div>
  );
}
