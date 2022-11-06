import React from 'react';

const bredbandFaq: FrågaProps[] = [
  {
    fråga: 'Vilket uttag skall jag koppla in mit bredband från Banhof?',
    svar: 'Anslutningen av bredband från Banhof skall göras i det uttag som är i närheten av det första telefonuttaget för lägenheten. Vanligen är detta uttag placerat i hallen.',
  },
  {
    fråga: 'Jag hittar inte något bredbandsuttag i hallen. Vad kan jag göra?',
    svar: 'Om din lägenhet är renoverad efter 2002 kan det vara att detta uttag har tagits bort. Installationskostnad för att återinstallera datauttaget är något den boende står för. Det spelar ingen roll om det är en tidigare medlem som tagit bort uttaget.',
    svar2:
      'Det går att ordna egen elektriker som får kontakta styrelsen för dokumentation. Det går också att beställa installationen från föreningen så ordnar vi en elektriker som kan göra jobbet.',
  },
  {
    fråga: 'Vad är grundhastigheten på bredbandet från Banhof?',
    svar: 'Den är 1000 MBit/s. Går att uppgradera till 10 GBit.',
  },
];

const telfoniFaq: FrågaProps[] = [
  {
    fråga:
      'Jag har fast telefoni idag, kan jag behålla mitt telefonnummer om jag ansluter telefonin med Banhof?',
    svar: 'Ja, Banhof erbjuder portering av ditt befintliga telefonnummer. Kontakta deras kundtjäst för mer information och prisuppgifter om denna tjänst.',
  },
  {
    fråga:
      'Jag använder bara fast telefoni för trygghetslarm. Är det bra att byta abonnemang?',
    svar: 'Nej, IP-telefoni rekommenderas inte för trygghetslarm.',
  },
];

const televisionFaq: FrågaProps[] = [
  {
    fråga: 'Vad behövs för att ta emot signalen?',
    svar: 'Comhem sänder digital-TV (DVB-C). I princip alla TV-apparater sålda efter 2008 stöder denna teknik, box krävs ej.',
  },
  {
    fråga: 'Jag har en tjock-TV. Kan jag ändå se på TV?',
    svar: 'Ja, men du behöver en box/kanalväljare. Går att köpa från Comhem utan abonnemang eller hos elektronikbutiker. Samma gäller äldre platta TV-apparater som inte har stöd för DVC-C.',
  },
];

export default function BanhofFaq() {
  return (
    <>
      <Header />
      <BredbandFrågor />
      <TelefoniFrågor />
      <TelevisionFrågor />
      <Kostnad />
    </>
  );
}

function Header() {
  return (
    <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative max-w-lg mx-auto lg:max-w-7xl">
        <div>
          <h1 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
            Gruppanslutning av internet, vanliga frågor (FAQ)
          </h1>
          <p className="mt-3 text-xl leading-7 text-gray-500 sm:mt-4">
            Föreningen har kollektiv uppkoppling till internet från Bahnhof via
            datauttag i hallen. Lösenord till Wifi står på undersidan av
            routern.
          </p>
          <p className="mt-3 text-xl leading-7 text-gray-500 sm:mt-4">
            Här hittar du Banhofs sida för{' '}
            <a
              className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
              href="https://bahnhof.se/privat/kundservice/"
            >
              Kundservice &amp; Hjälp
            </a>
            . Där kan du felanmäla, hitta guider och se svar på vanliga frågor.
            <br />
            Kundservice{' '}
            <a
              className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
              href="tel:010-510 00 00"
            >
              010-510 00 00
            </a>{' '}
            .
          </p>
          <p className="mt-3 text-xl leading-7 text-gray-500 sm:mt-4">
            Om du saknar router, maila{' '}
            <a
              className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
              href="mailto:info@brfimatra.se"
            >
              info@brfimatra.se
            </a>{' '}
            så ordnar vi det. Notera att routern tillhör lägenheten och ska
            lämnas inkopplad vid avflyttning.
          </p>
          <p className="mt-3 text-xl leading-7 text-gray-500 sm:mt-4">
            Du kan köpa andra alternativ: - Comhem har uttag i vardagsrummet.
            Ring deras kundservice för att teckna abonnemang.
            <br />
            Telenor kan leverera på uttaget i hallen. Maila{' '}
            <a
              className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
              href="mailto:info@brfimatra.se?subject=Anslutn%20Banhof%20internet"
            >
              info@brfimatra.se
            </a>{' '}
            för att ordna detta.
          </p>
        </div>
      </div>
    </div>
  );
}

type FrågaProps = {
  fråga: string;
  svar: string;
  svar2?: string | undefined;
  first?: boolean;
};

function FrågaSvar({ fråga, svar, svar2, first }: FrågaProps) {
  const firstStyle = first
    ? 'md:grid md:grid-cols-12 md:gap-8'
    : 'mt-8 border-t border-gray-200 pt-6 md:grid md:grid-cols-12 md:gap-8';

  const svar2Element = svar2 ? (
    <p className="text-base leading-6 text-gray-500 pt-3">{svar2}</p>
  ) : null;

  return (
    <div className={firstStyle}>
      <dt className="text-base leading-6 font-medium text-gray-900 md:col-span-5">
        {fråga}
      </dt>
      <dd className="mt-2 md:mt-0 md:col-span-7">
        <p className="text-base leading-6 text-gray-500">{svar}</p>
        {svar2Element}
      </dd>
    </div>
  );
}

function BredbandFrågor() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
          Vanliga frågor om bredband
        </h2>
        <div className="mt-6 border-t-2 border-gray-200 pt-6">
          <dl>
            {bredbandFaq.map((text, i) => (
              <FrågaSvar key={i} {...text} first={i === 0} />
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

function TelefoniFrågor() {
  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
          Vanliga frågor om telefoni
        </h2>
        <p className="mt-3 text-xl leading-7 text-gray-500 sm:mt-4">
          Abonnemangskostnad för fast IP-telefoni från Bahnhof ingår i avgiften
          till föreningen. Du betalar för de samtal du gör. Beställ via{' '}
          <a href="https://www.bahnhof.se/minasidor/">Bahnhof mina sidor</a>{' '}
          eller via Bahnhof kundservice.
        </p>
        <p className="mt-3 text-xl leading-7 text-gray-500 sm:mt-4">
          Det är ändå möjligt att köpa streaming via{' '}
          <a
            className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
            href="http://www.sappa.se/"
          >
            Sappa
          </a>{' '}
          om du så önskar. Sappa levereras via Bahnhof router.
        </p>
        <div className="mt-6 border-t-2 border-gray-200 pt-6">
          <dl>
            {televisionFaq.map((text, i) => (
              <FrågaSvar key={i} {...text} first={i === 0} />
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

function TelevisionFrågor() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
          Vanliga frågor om TV &amp; streaming
        </h2>
        <p className="mt-3 text-xl leading-7 text-gray-500 sm:mt-4">
          Comhem levererar den TV som ingår i avgiften till föreningen. Det
          levereras via uttag i vardagsrummet (inte via uttaget i hallen).
          Streaming via Comhem Play ingår också. Kontakta{' '}
          <a
            className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
            href="https://www.comhem.se/kundservice"
          >
            Comhem kundservice
          </a>{' '}
          för hjälp, utökande av kanalpaket eller köp av digitalbox.
        </p>
        <div className="mt-6 border-t-2 border-gray-200 pt-6">
          <dl>
            {televisionFaq.map((text, i) => (
              <FrågaSvar key={i} {...text} first={i === 0} />
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

function Kostnad() {
  return (
    <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative max-w-lg mx-auto lg:max-w-7xl">
        <div>
          <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
            Kostnad
          </h2>
          <p className="mt-3 text-xl leading-7 text-gray-500 sm:mt-4">
            Kostnaden för internet och TV ingår i avgiften till föreningen, men
            redovisas sedan 2020-07-01 separat på fakturan från HSB. Kostnaden
            är lika för alla medlemmar, oavsett om man använder tjänsterna eller
            inte, likt andra saker som ingår i avgiften.
          </p>
        </div>
      </div>
    </div>
  );
}
