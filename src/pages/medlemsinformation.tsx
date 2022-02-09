import React from 'react';
import Link from 'next/link';
import { InferGetStaticPropsType } from 'next';
//import matter from "gray-matter";
//import ReactMarkdown from "react-markdown";
import {
  Body,
  Card,
  Centered,
  SplitWithImage,
  TwoColumns,
  BasicCard,
  Well,
  WellOnGrey,
} from '../components';
import {
  MedlemsInformation,
  MedlemsInformationArticle,
  readMedlemsInformation,
} from '../utils';
import { PropsOf } from '@headlessui/react/dist/types';

interface MedlemsInfomationProps {
  articles: MedlemsInformation;
}

export default function MedlemsInfomation({
  articles,
}: MedlemsInfomationProps) {
  return (
    <Body title="Medlemsinformation">
      <BasicCard id="bostadsratt">
        <Bostadsrätt {...articles.bostadsratt} />
        <div className="bg-white overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <Link href="/styrelsen">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Styrelsemedlemmar & valberedningen
              </button>
            </Link>
          </div>
        </div>
        <div className="relative py-16 bg-white overflow-hidden">
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="text-lg max-w-prose mx-auto mb-6">
              {/*            <h1>INTRESSERAD AV STYRELSEARBETE?</h1>
          <p>Är du intresserad av att sitta i styrelsen i din bostadsrättsförening, men vet inte riktigt vad det innebär och vad du behöver kunna?
                  HSB Stockholm erbjuder en föreläsning med verksamhetschef Petrus Jansson som besvarar frågeställningar som:
              </p>
              <ul>
                  <li>Hur arbetar en bostadsrättsförenings styrelse och vilka roller finns?</li>
                  <li>Hur fungerar en bostadsrättsförenings ekonomi?</li>
                  <li>Vilka lagar och regler styr en bostadsrättsförening?</li>
                  <li>Vilket ansvar har styrelsen i en bostadsrättsföreningen?</li>
              </ul>*/}
              <div
                className="relative h-0 overflow-hidden max-w-full"
                style={{ paddingBottom: '56.25%' }}
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/G64_T709Bns"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <KonsekvensUtanStyrelse />
      </BasicCard>
      <WellOnGrey className="mt-6">
        <Historik />
      </WellOnGrey>
      <BasicCard className="mt-6">
        <Medlemskap />
      </BasicCard>
      <BasicCard id="hemforsakring" className="mt-6">
        <Hemförsäkring {...articles.hemforsakring} />
      </BasicCard>

      <WellOnGrey className="mt-6">
        <Cykel />
      </WellOnGrey>

      <BasicCard className="mt-6">
        <Förråd />
      </BasicCard>
      <WellOnGrey className="mt-6">
        <Garage />
      </WellOnGrey>
      <BasicCard className="mt-6">
        <Återvinning />
      </BasicCard>
      <WellOnGrey className="mt-6">
        <Tvättstugor />
      </WellOnGrey>
    </Body>
  );
}

function Bostadsrätt({
  content,
  title,
  introducing,
  summary,
}: MedlemsInformationArticle) {
  return (
    <Centered
      introducing={introducing}
      title={title}
      content={content}
      summary={summary}
    />
  );
}

function KonsekvensUtanStyrelse() {
  return (
    <Centered
      introducing="Hur gör vi utan styrelse?"
      title="Det saknas styrelseledamöter"
      summary="Konsekvensen av att inte få ihop en styrelse kan bli att bostadsrättsföreningen tvingas gå i likvidation. I en bostadsrättsförening måste styrelsen bestå av minst tre styrelseledamöter. Om det saknas en behörig styrelse är bostadsrättsföreningen likvidationspliktig."
      content="Om bostadsrättsföreningen skulle tvingas att gå i likvidation innebär det att bostadsrättsföreningen upplöses genom att fastigheter och andra tillgångar säljs, skulder betalas och eventuellt överskott fördelas mellan medlemmarna i enlighet med bestämmelser i bostadsrättsföreningens stadgar. För att undvika en likvidation är det viktigt att alla medlemmar i bostadsrättsföreningen förstår vikten av att engagera sig i föreningen."
    />
  );
}

function Medlemskap() {
  const text = `En grundprincip för alla ekonomiska föreningar är att de ska vara öppna. Den som vill bli medlem får inte stängas ute. I en bostadsrättsförening är denna princip inte riktigt lika uttalad.

  Styrelsen, som beviljar medlemskapet i bostadsrättsföreningen, prövar om köparen uppfyller de krav som finns i lag och stadgar. Exempelvis ska en medlem kunna fullgöra sina ekonomiska förpliktelser gentemot föreningen. Styrelsen får däremot inte vägra någon medlemskap med hänvisning till att han eller hon inte är svensk medborgare, kommmer från ett visst land eller saknar förmögenhet. Det är dock tillåtet att vägra juridiska personer medlemskap i en bostadsrättsförening. Villkoret för att ditt köp av bostadsrätten ska bli giltigt är att du blivit antagen som medlem.
  
  Styrelsen är skyldig att snarast, normalt inom en månad från ansökan, avgöra frågan och ge dig ett besked. Om styrelsen vägrar dig medlemskap blir överlåtelsen ogiltig och säljaren kvarstår som bostadsrättshavare. Du kan ansöka om prövning i hyresnämnden och hyresnämndens beslut kan överklagas.`;

  return (
    <Centered
      introducing="Medlemskap"
      title="Medlemskap"
      content={text}
      summary="Styrelsen beviljar dig medlemskap"
    />
  );
}

function Hemförsäkring({
  content,
  title,
  introducing,
  summary,
}: MedlemsInformationArticle) {
  // "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
  //const image = "/undraw/undraw_Documents_re_isxv.png";
  const image = '/imatra/foton/helsingforsgatan_autumn19.jpg';
  return (
    <SplitWithImage
      introducing={introducing}
      title={title}
      content={content}
      summary={summary}
      imageSrc={image}
    />
  );
}

function Historik() {
  return (
    <TwoColumns
      title="Historia"
      introducing="Föreningensursprung"
      leftContent="Brf Imatra och radhusen i trädgårdsstaden byggdes som hyreslägenheter av JM Mattsson och blev inflyttningsklart 1975-1976. HSB bildade 1979 två bostadsrättsföreningar som köpte husen."
      rightContent={`Brf Imatra arrenderar tre tomträtter från Stockholms stad där våra 15 hus står. Totalt har föreningen 254 lägenheter, 10 kommersiella lokaler och fem garage med ungefär 300 parkeringsplatser.\n\nFöreningens mål är att skapa en bra boendemiljö för våra medlemmar på lång sikt`}
    />
  );
}

function Cykel() {
  const left = `Låst cykelrum finns på varje gård. Detta hittar du i källaren i låghusen. Ha din cykel låst med godkänt lås även i cykel-rummet. Det krävs tagg med full behörighet att komma in. (Märkt 1 eller 2 i standarduppsättningen).

  Det går att rulla ut cykeln genom garaget om man tycker rampen är svår.`;

  const right = `Batterier till elcyklar laddas i din lägenhet, inte i källaren.

  Du kan ha cykeln på gården när det inte är vinterväglag. När snön kommer kommer även snöplogen, se till att ta bort dem först så de inte blir skadade. Lämpligt kan vara vid höstens städdag. Använd godkänt ramlås och använd gärna ett godkänt bygellås för att låsa fast i något.`;

  return (
    <TwoColumns
      title="Cykelförvaring"
      introducing="Cykel"
      leftContent={left}
      rightContent={right}
    />
  );
}

function Förråd() {
  return (
    <Centered
      introducing="Förvaring"
      title="Förråd"
      content="Till varje lägenhet hör ett källarförråd som är märkt med ditt lägenhetsnummer på vit skylt. Vänligen sätt dit hänglås även om du inte använder förrådet så ingen annan tar det."
      summary=""
    />
  );
}

function Garage() {
  const text = `Under varje gård finns det ett antal garageplatser för uthyrning.
  Våra varmgarage ger dig en garanterad plats, hög säkerhet och är tryggare än gatan. Kontakta HSB som hjälper dig med det praktiska.

  Gästparkering finns längs gatan mot p-skiva, betalparkering vid Lidl eller badhuset.

  Det går inte i dagsläget att ladda elbilar i våra garage. Det finns laddare vid husbybadet.`;

  return (
    <Centered introducing="Bil" title="Garage" content={text} summary="" />
  );
}

function Tvättstugor() {
  const left = `Det finns elva tvättstugor, två på varje gård i låghusen. Du kan boka vilken du vill av dessa och två åt gången.
  
  Tvättmedel tillsätts automatiskt men går att välja bort med ett knapptryck om du vill använda eget tvättmedel som då läggs in direkt i maskinen. Tänk på att vi har mjukt vatten och ta en mindre dos tvättmedel.`;

  const right = `_Före tvättpass_, töm fickor på innehåll och använd tvättpåse för bygel BH och och annat som kan fastna och skada maskinen.
  
  _Efter avslutat tvättpass_, vänligen torka av bord och maskiner med trasa, rensa torktumlarens luddfilter och sopa golvet. Torka golvet i torkskåpet om det behövs.`;

  return (
    <TwoColumns
      title="Tvättstuga"
      introducing="Tvättstugor"
      leftContent={left}
      rightContent={right}
    />
  );
}

function Återvinning() {
  const text = `I föreningen finns ett miljöhus, beläget vid vändplanen Helsingforsgatan 39-51, utrustat med kärl för bl.a. återvinning av tidningar, glas, elektronik och brännbart material.
  Det finns även en ”batteriholk” för mindre hushållsbatterier.
  
## Öppettider
Huset bemannas av boende i föreningen.

  * Onsdagar 18:00 - 19:00
  * Söndagar 17:00 - 18:00
  
__OBS!__ Ej vitvaror typ kyl, frys tvätt- och diskmaskiner o dyl., dessa måste forslas bort av lägenhetsinnehavaren.
  
## Renoveringsavfall

Överblivet renoveringsavfall/byggnadsmaterial och liknande får inte ställas i föreningens soputrymmen.
Observera att det inte är tillåtet ställda säckar med byggavfall på gångbanor, trottoarer, innegårdar och cykelbanor eftersom det innebär försämrad tillgänglighet för funktionsnedsatta och framkomlighet för alla våra boende.
Dessutom är de en sanitär olägenhet då förbipasserande slänger både hushållsavfall och grovsopor i säckarna och innebär brandfara då de står i anslutning till husfasader.
Detta material får Ni själva ta hand om och slänga gratis på [återvinningscentralen][Link1].

[Link1]: http://www.stockholm.se/avc "Återvinningscentraler"`;

  return (
    <Centered
      introducing="Återvinning"
      title="Återvinningsstugans"
      content={text}
      summary=""
    />
  );
}

export function getStaticProps(): { props: { articles: MedlemsInformation } } {
  const articles = readMedlemsInformation();

  return {
    props: {
      articles: articles,
    },
  };
}
