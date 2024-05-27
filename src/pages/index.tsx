import { Porttelefon, KommandeAktiviteter } from '../components/Startsida';
import { Banner, Body, Card, Centered } from '../components';
import { SimpleThreeColumn } from '../components/Section/simple_three_column';
import React from 'react';
import SocialLinksFooter from '../components/MenuShell/footer';
import Image from 'next/image';

export default function Home() {
  const bannerEl = false ? (
    <Banner
      title='Föreningsstämman onsdag 15;e maj'
      message='Föreningsstämman onsdag 15;e maj från kl 18:00 uppe i Folkets Husby och därför är återvinningsstugan stängd denna onsdag.'
    />
  ) : null;

  return (
    <>
      <div className='relative overflow-hidden'>
        <Image
          className='h-48 w-full object-cover'
          src='/imatra/foton/helsingforsgatan_spring20.jpg'
          alt='Brf Imatra'
          loading='eager'
          priority={true}
          height={300}
          width={1920}
        />
        <div className='absolute left-0 top-0 px-6 py-4'>
          <p className='font-pacifico text-2xl leading-normal text-gray-100 subpixel-antialiased md:text-5xl lg:text-6xl'>
            Välkommen till <span className='whitespace-nowrap'>BRF Imatra</span>
          </p>
        </div>
      </div>
      <Body>
        {bannerEl}
        <SimpleThreeColumn />

        {/*<KommandeAktiviteter />*/}
        {/*<StillaståendeHissar2023 />*/}
        {/*  <StatusBesiktningBalkonger />*/}
        {/* <Well>
    <div className="flex-1 flex h-24 w-auto sm:h-32 md:h-48 lg:h-64">
        <img className="overflow-y-visible" src="/imatra/foton/helsingforsgatan_spring20.jpg" alt="Brf Imatra våren 2020" loading="eager" />
      </div>
      </Well> */}
        <div className='flex w-full flex-row flex-wrap justify-start'>
          <ProtokollStämma2024 />
          {/*<InbjudanFöreningsstämma />*/}
          {/*<Badrum />*/}
          {/*<Avgiftshöjning2024 />*/}
          <ImatraNytt />
          {/* <Årsstämma />*/}
          {/*<Årsstämma2024 />*/}
          <Släckljusen />
          <NyttLokalkontorHSB />
          <Årsstämma2023 />
          <StambyteFaq />
          <EkonomiGrafer />
          <ImdEl />

          {/*<Städdag />*/}
          <ElSparTips />
          {/*<StambyteSamtyckesblankett />*/}
          <StambyteExtrastämma />
          <KommandeAvgiftshöjningar />

          <StambyteMedlemsInformation />
          <Garageplatser />
          <GruppanslutningCard />
          <Porttelefon />

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

function KommandeAvgiftshöjningar() {
  return (
    <div className='w-64 flex-grow pr-5 pt-10'>
      <Card
        imageUrl='/undraw/undraw_investing_re_bov7.svg'
        imageAlt='Plannerad avgiftshöjning 2023'
        published='2022-09-16'
        title='Ekonomi-info'
        summary='Brf Imatras kommer att behöva höja årsavgiften kraftigare än normalt under de kommande åren. Detta beror på att vi behöver göra stora investeringar i fastigheten. Vi kommer att behöva höja årsavgiften med 10% under 2023.'
        hrefLink='/boendeinformation/stambyte-ekonomi-info-2022-09-16'
      />
    </div>
  );
}

function ProtokollStämma2024() {
  return (
    <div className='w-64 flex-grow pr-5 pt-10'>
      <Card
        imageUrl='/undraw/undraw_public_discussion_re_w9up.svg'
        imageAlt='Protokoll från ordinarie föreningstämman för brf Imatra'
        published='2024-05-27'
        title='Protokoll'
        summary="Protokoll från ordinarie föreningsstämma 2024-05-14 i Fokets Husby är nu justerat och godkännt. Protokollet finns att läsa här eller under fliken 'Dokument' i menyn."
        hrefLink='/dokument/arsredovisning/2024/protokoll_brf_imatra_stamma_2024-05-15.pdf'
      />
    </div>
  );
}

function StambyteExtrastämma() {
  return (
    <div className='w-64 flex-grow pr-5 pt-10'>
      <Card
        imageUrl='/undraw/undraw_public_discussion_re_w9up.svg'
        imageAlt='Protokoll från den extra föreningstämman för brf Imatra'
        published='2022-10-10'
        title='Protokoll'
        summary="Protokoll från extra föreningsstämma 2022-09-04 i Fokets Husby är nu justerat och godkännt. Protokollet finns att läsa här eller under fliken 'Dokument' i menyn."
        hrefLink='/dokument/arsredovisning/2022/protokoll_brf_imatra_extra_stamma_2022-09-20.pdf'
      />
    </div>
  );
}

function Släckljusen() {
  return (
    <div className='w-64 flex-grow pr-5 pt-10'>
      <Card
        imageUrl='/undraw/undraw_at_home_re_1m0v.svg'
        imageAlt='Glöm inte att släcka ljusen'
        title='Släcka ljusen'
        summary='FRIS (Föreningen Räddningskörer i Samverkan) har med stöd av MSB tagit fram ett utbildnings och informationsmaterial Glöm inte släcka ljusen'
        hrefLink='/boendeinformation/slacka-ljusen'
      />
    </div>
  );
}

function StambyteMedlemsInformation() {
  return (
    <div className='w-64 flex-grow pr-5 pt-10'>
      <Card
        imageUrl='/undraw/undraw_Content_creator_re_pt5b.svg'
        imageAlt='Stambyte medlemsinformation'
        published='2022-06-18'
        title='Stambytesinformation'
        summary='Vårt hus är nu snart 50 år gammalt, byggda på 70-talet. Vi är en attraktiv bostadsrättsförening i ett trevligt område. Men visst märks det att husen åldrats! Styrelsen har under en tid undersökt vad som är bäst för just våra hus. Under våren har styrelsen arbetat tillsammans med Nabo och nu kommit fram till ett ställningstagande om hur vi ska gå vidare med den nödvändiga renoveringen av rörstammar och våtrum.'
        hrefLink='/boendeinformation/stambyte-info-2022-06-16'
      />
    </div>
  );
}

function GruppanslutningCard() {
  return (
    <div className='w-64 flex-grow pr-5 pt-10'>
      <Card
        imageUrl='/undraw/undraw_Documents_re_isxv.png'
        imageAlt='Internet vanliga frågor'
        title='Internet'
        summary='Föreningen har kollektiv uppkoppling till internet från Bahnhof via datauttag i hallen.'
        hrefLink='/banhof-faq'
      />
    </div>
  );
}

function Garageplatser() {
  return (
    <div className='w-64 flex-grow pr-5 pt-10'>
      <Card
        imageUrl='/undraw/undraw_newspaper_k72w.png'
        imageAlt='Garageplatser'
        published='2020-12-23'
        title='Garageplatser'
        summary='Fr.o.m den 2021-01-01 flyttas din bostadsrättsförening Imatra över till den digitala tjänsten och du som boende kan ställa dig i kö och göra intresseanmälningar via Mitt HSB.'
        hrefLink='/garage'
      />
    </div>
  );
}

function ImatraNytt() {
  return (
    <div className='w-64 flex-grow pr-5 pt-10'>
      <Card
        imageUrl='/undraw/undraw_newspaper_re_syf5.svg'
        imageAlt='Brf Imatra Nyhetsbrev'
        published='2024-04-18'
        title='Brf Imatra Nyhetsbrev'
        summary='IMD-el med kvartalsvis debitering. Returrunda där du kan lämna saker för återvinning. Beab utför vårstädning, beskärning och reparationer. Grilla försiktigt och tänk på brandrisken. Föreningsstämma och nya ledamöter till styrelsen efterlyses! Klicka för att läsa mer...'
        hrefLink='/imatranytt/2024-april'
      />
    </div>
  );
}

function Avgiftshöjning2024() {
  const text = `
På rekommendation av HSBs ekonomer har styrelsen beslutat att höja månadsavgiften med 
20% från 1 januari 2024.  Avgiftshöjningen blir dock i praktiken 14% när elen nu kommer att 
mätas individuellt. De boendes elförbrukningen i lägenheterna har uppskattats till 6% av 
årsavgiften.

Höjningen blir större än det som bedömdes nödvändigt vid den ekonomiska genomgången i 
samband med extrastämman. Den nya höjningen är dock vad som krävs för att vi ska kunna 
hantera räntor, försäkringar och kostnader som föreningen har liten möjlighet att påverka i 
den rådande ekonomiska situationen i Sverige.`;

  return (
    <div className='w-64 flex-grow pr-5 pt-10'>
      <Card
        imageUrl='/undraw/undraw_building_re_xfcm.svg'
        imageAlt='Avgiftshöjning 2024'
        published='2023-12-12'
        title='Avgiftshöjning 2024'
        summary={text}
        hrefLink=''
      />
    </div>
  );
}

function Motioner() {
  return (
    <div className='w-64 flex-grow pr-5 pt-10'>
      <Card
        imageUrl='/undraw/undraw_Content_creator_re_pt5b.svg'
        imageAlt='Motioner'
        published='2022-02-01'
        title='Motion för 2022'
        summary='Måndag den 28 februari är sista dagen att komma in med motioner till årets föreningsstämma.'
        hrefLink='/motion'
      />
    </div>
  );
}

function Årsstämma() {
  return (
    <div className='w-64 flex-grow pr-5 pt-10'>
      <Card
        imageUrl='/undraw/undraw_Content_creator_re_pt5b.svg'
        imageAlt='Föreningsårsstämma för brf Imatra'
        published='2024-04-27'
        title='Föreningsstämma 2024'
        summary='Kallelse till Brf. Imatras föreningsstämma onsdag 15/5 i Folkets Husby. Här hittar du 2023 årsredovisning, valberedningensförslag samt motioner. Klicka för att läsa mer...'
        hrefLink='/foreningsstamma'
      />
    </div>
  );
}

function Årsstämma2024() {
  return (
    <div className='w-64 flex-grow pr-5 pt-10'>
      <Card
        imageUrl='/undraw/undraw_public_discussion_re_w9up.svg'
        imageAlt='Protokoll från föreningstämman 2024 för brf Imatra'
        published='2024-05-xx'
        title='Föreningsstämma 2024'
        summary="Protokoll från föreningsstämma 2024-05-15 i Fokets Husby är nu justerat och godkännt. Protokollet finns att läsa här eller under fliken 'Dokument' i menyn."
        hrefLink='/dokument/arsredovisning/2024/protokoll_brf_imatra_stamma_2024-2024-05-15.pdf'
      />
    </div>
  );
}

function Årsstämma2023() {
  return (
    <div className='w-64 flex-grow pr-5 pt-10'>
      <Card
        imageUrl='/undraw/undraw_public_discussion_re_w9up.svg'
        imageAlt='Protokoll från föreningstämman 2023 för brf Imatra'
        published='2023-05-28'
        title='Föreningsstämma 2023'
        summary="Protokoll från föreningsstämma 2023-05-04 i Fokets Husby är nu justerat och godkännt. Protokollet finns att läsa här eller under fliken 'Dokument' i menyn."
        hrefLink='/dokument/arsredovisning/2023/protokoll_brf_imatra_stamma_2023-2023-05-04.pdf'
      />
    </div>
  );
}

function Städdag() {
  return (
    <div className='w-64 flex-grow pr-5 pt-10'>
      <Card
        imageUrl='/undraw/undraw_Online_calendar_re_wk3t.svg'
        imageAlt='Fläktbyte information'
        published='2021-09-30'
        title='Föreningen har gemensam städdag'
        summary='Föreningen har gemensam städdag lördagen den 9 oktober kl. 10.00-14.00!'
        hrefLink='/staddag'
      />
    </div>
  );
}

function InbjudanFöreningsstämma() {
  const text = `
Dagordning och årsredovisning hittar du här på hemsidan under fliken Dokument. Tryckt material kommer att delas ut under vecka 19.
Vi ser fram emot att träffa dig!
`;

  return (
    <Centered
      introducing='Välkommen'
      title='Brf Imatras årsstämma'
      summary='Onsdagen den 15 maj bjuder vi in alla medlemmar till vår årliga föreningsstämma på Folkets Husby. Under stämman får du information om föreningens verksamhet under det gångna året, och du har möjlighet att påverka föreningens framtid.'
    >
      <p className='mt-8 text-xl leading-8 text-gray-500'>{text}</p>
    </Centered>
  );
}

function StillaståendeHissar2023() {
  const text = `
<p>Det är verkligen beklagligt att detta har hänt och det påverkar boende på ett negativt sätt. Vi förstår att det är frustrerande att behöva ta trapporna istället för hissen, särskilt för de som bor högre upp i byggnaden.</p>
<p>Vi vill dock försäkra er om att vi arbetar för att lösa problemet så snabbt som möjligt.</p>
<p>Vi ber om er förståelse och tålamod medan vi arbetar för att få hissarna i drift igen. Vi är fast beslutna att lösa problemet så snabbt som möjligt och se till att hissarn fungerar som vanligt.</p>
<p>Trasiga hissar på följande adresser</p>
      <ul>
        <li>Helsingforsgatan 21</li>
        <li>Helsingforsgatan 43</li>
      </ul>
  <i>Publiserad fredag 2023-04-28 - uppdaterad 2023-05-29</i>
  `;
  return (
    <Centered
      introducing='Trasiga hissar'
      title='Reparation av hissar'
      summary='Tyvärr är det flera hissar som är ur funktion i vår förening. Anledningen till detta är att frekvensrikarna har gått sönder och det är både svårt att få tag på dem och dyrt att byta ut dem. Detta innebär att det kommer att ta tid att få hissarna i drift igen.'
    />
  );
}

function ElSparTips() {
  return (
    <div className='w-64 flex-grow pr-5 pt-10'>
      <Card
        imageUrl='/undraw/undraw_checklist__re_2w7v.svg'
        imageAlt='Tips för att hålla nere elförbrukningen'
        published='2022-11-12'
        title='Elförbrukningstips'
        summary='Med de höga elpriserna behöver alla hjälpas åt att hålla nere elförbrukningen så att vi kan spara pengar och påverka hur mycket av månadsavgifterna som ska gå till vår gemensamma elräkning'
        hrefLink='/boendeinformation/el-spar-tips'
      />
    </div>
  );
}

function ImdEl() {
  return (
    <div className='w-64 flex-grow pr-5 pt-10'>
      <Card
        imageUrl='/undraw/undraw_building_re_xfcm.svg'
        imageAlt='Installation av nya elcentraler'
        published='2023-07-04'
        title='IMD-el'
        summary='Nya elcentralen som ersätter den befintliga innehåller en jordfelsbrytare och mätare för att kunna mäta elanvändningen i varje lägenhet.'
        hrefLink='/boendeinformation/imd-el'
      />
    </div>
  );
}

function EkonomiGrafer() {
  return (
    <div className='w-64 flex-grow pr-5 pt-10'>
      <Card
        imageUrl='/undraw/undraw_visual_data_re_mxxo.svg'
        imageAlt='Årsredovisning tabell'
        published='2023-12-07'
        title='Årsredovisningsanalys'
        summary='Föreningen drabbas även 2024 av en kraftigt ökad försäkringspremie. En grafisk presentation av försäkringspremie, samt nettoomsättning och drift, från de senaste två deceniernas årsredovisningar kan du se här.'
        hrefLink='/boendeinformation/arsredovisning-analys'
      />
    </div>
  );
}

function StambyteFaq() {
  return (
    <div className='w-64 flex-grow pr-5 pt-10'>
      <Card
        imageUrl='/undraw/undraw_questions_re_1fy7.svg'
        imageAlt='Frågor och svar om stambyte'
        published='2022-12-30'
        title='Stambyte FAQ'
        summary='Vanliga frågor och svar om stambyte hittar du här.'
        hrefLink='/boendeinformation/stambyte/faq'
      />
    </div>
  );
}

export function NyttLokalkontorHSB() {
  return (
    <div className='w-64 flex-grow pr-5 pt-10'>
      <Card
        imageUrl='/undraw/undraw_road_sign_re_3kc3.svg'
        imageAlt='HSB Stockholm nytt lokalkontor i Kista'
        published='2023-11-30'
        title='HSB lokalkontor i Kista'
        summary='HSB Stockholm har sedan tidigare kommunicerat att kontoret på
Finlandsgatan 10 i Akalla stänger i slutet av 2023 i samband med att
hyresavtalet löper ut. Kontoret på Finlandsgatan i Akalla stänger för
besök den 5 december, därefter finns tillgång till nedanstående
tjänsteutbud. Läs mer...'
        hrefLink='/medlemsinformation/hsb-lokalkontor-2023'
      />
    </div>
  );
}
