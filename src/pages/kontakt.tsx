import React, { PropsWithChildren } from 'react';
import Head from 'next/head';
import { Body } from '../components';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function MedlemsInfomation() {
  return (
    <>
      <Head>
        <meta
          property="og:description"
          content="Kontakta Brf Imatra"
          key="description"
        />
        <meta
          property="og:keywords"
          content="HSB medlemsservice, kontakt, styrelsen, varberedning"
          key="keywords"
        />
      </Head>
      <Body title="Kontakta oss">
        <div className="mt-6 grid gap-16 border-t-2 border-gray-100 pt-10 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
          <HSBMedlemsservice />
          <HSBFastighetsskotare />
          <Securitas />
          <Anticimex />

          <Styrelsen />
          {/*<Valberedning />*/}
        </div>
      </Body>
    </>
  );
}

function HSBMedlemsservice() {
  return (
    <DescriptionList
      title="HSB Medlemsservice"
      description="Vår förvaltare HSB tar hand om administrativa ärenden som fakturafrågor, felanmälan, nyckelhantering och andra löpande ärenden."
    >
      <DescriptionListRow title="Telefon kl 9-17" borderless={true}>
        <div className="flex flex-1">
          <PhoneIcon
            className="flex-shrink-0 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          <span className="pl-2">
            <a
              href="tel:010-442 11 00"
              className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
            >
              010-442 11 00
            </a>
          </span>
        </div>
      </DescriptionListRow>
      <DescriptionListRow title="Epost">
        <div className="flex flex-1">
          <EnvelopeIcon
            className="flex-shrink-0 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          <span className="pl-2">
            <a
              href="mailto:service.stockholm@hsb.se"
              className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
            >
              service.stockholm@hsb.se
            </a>
          </span>
        </div>
      </DescriptionListRow>
      <DescriptionListRow title="Besök">Finlandsgatan 10</DescriptionListRow>
      <DescriptionListRow title="Öppettider">
        <dl>
          <dt className="text-sm leading-5 font-medium text-gray-500 pb-2">
            1 september - 30 juni
          </dt>
          <dt>Måndag & onsdag 8-12</dt>
          <dt>Tisdag & torsdag 13-18</dt>
        </dl>
      </DescriptionListRow>

      <DescriptionListRow borderless={true}>
        <dl>
          <dt className="text-sm leading-5 font-medium text-gray-500 pb-2">
            1 juli - 31 augusti
          </dt>
          <dt>Måndag 8-12</dt>
          <dt>Torsdag 13-18</dt>
        </dl>
      </DescriptionListRow>

      <DescriptionListRow title="Akut felanmälan dygnet runt">
        <div className="flex flex-1">
          <PhoneIcon
            className="flex-shrink-0 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          <span className="ml-2">
            <a
              href="tel:08-695 00 00"
              className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
            >
              08-695 00 00
            </a>
          </span>
        </div>
      </DescriptionListRow>
    </DescriptionList>
  );
}

function HSBFastighetsskotare() {
  return (
    <DescriptionList
      title="HSB Fastighetsskötaren"
      description="Vår fastighetsskötare tar hand om teknisk drift i våra hus. Prata med dem innan renovering om vatten, el, etc."
    >
      <DescriptionListRow title="Telefon vardagar kl 7-8" borderless={true}>
        <div className="flex flex-1">
          <PhoneIcon
            className="flex-shrink-0 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          <span className="pl-2">
            <a
              href="tel:08-751 11 12"
              className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
            >
              08-751 11 12
            </a>
          </span>
        </div>
      </DescriptionListRow>
      <DescriptionListRow title="Besök vardagar kl 7-8">
        Helsingforsgatan 45
      </DescriptionListRow>
    </DescriptionList>
  );
}

function Securitas() {
  return (
    <DescriptionList
      title="Securitas"
      description="Styr upp ordningsproblem och utför parkeringsövervakning på gårdar, garage och vändplaner."
    >
      <DescriptionListRow title="Störningsjour" borderless={true}>
        <div className="flex flex-1">
          <PhoneIcon
            className="flex-shrink-0 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          <span className="pl-2">
            <a
              href="tel:010-470 55 10"
              className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
            >
              010-470 55 10
            </a>
          </span>
        </div>
      </DescriptionListRow>
      <DescriptionListRow title="Felparkering">
        <div className="flex flex-1">
          <PhoneIcon
            className="flex-shrink-0 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          <span className="pl-2">
            <a
              href="tel:08-657 77 75"
              className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
            >
              08-657 77 75
            </a>
          </span>
        </div>
      </DescriptionListRow>
    </DescriptionList>
  );
}

function Anticimex() {
  return (
    <DescriptionList
      title="Anticimex"
      description="Tar hand om skadedjur. Glöm inte bort att även kontakta HSB."
    >
      <DescriptionListRow
        title="Kundservice vardagar kl 7-18"
        borderless={true}
      >
        <div className="flex flex-1">
          <PhoneIcon
            className="flex-shrink-0 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          <span className="pl-2">
            <a
              href="tel:075-2451000"
              className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
            >
              075-245 10 00
            </a>
          </span>
        </div>
      </DescriptionListRow>
    </DescriptionList>
  );
}

function Styrelsen() {
  return (
    <DescriptionList
      title="Styrelsen BRF Imatra"
      description="Varje år väljs några boenden att representera de övriga i strategiska frågor. Styrelsen lyssnar gärna på förslag och synpunkter från medlemmar."
    >
      <DescriptionListRow title="Epost" borderless={true}>
        <div className="flex flex-1">
          <EnvelopeIcon
            className="flex-shrink-0 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          <span className="pl-2">
            <a
              href="mailto:styrelsen@brfimatra.se"
              className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
            >
              styrelsen@brfimatra.se
            </a>
          </span>
        </div>
      </DescriptionListRow>
    </DescriptionList>
  );
}

function Valberedning() {
  return (
    <DescriptionList
      title="Valberedning BRF Imatra"
      description="Är du intresserad av att vara delaktig och jobba i styrelsen är du välkommen att kontakta valberedningen och berätta lite om dig själv."
    >
      <DescriptionListRow title="Epost" borderless={true}>
        <div className="flex flex-1">
          <EnvelopeIcon
            className="flex-shrink-0 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          <span className="pl-2">
            <a
              href="mailto:valberedning@brfimatra.se"
              className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
            >
              valberedning@brfimatra.se
            </a>
          </span>
        </div>
      </DescriptionListRow>
    </DescriptionList>
  );
}

interface Card2Props {
  title: string;
}

function Card2({ title, children }: PropsWithChildren<Card2Props>) {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
        <div className="grid gap-16 border-t-2 border-gray-100 pt-10">
          {children}
        </div>
      </div>
    </div>
  );
}

interface DescriptionListProps {
  title: string;
  description: string;
}

function DescriptionList({
  title,
  description,
  children,
}: PropsWithChildren<DescriptionListProps>) {
  return (
    <div className="bg-white shadow pb-4 overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
        <h2 className="text-lg leading-6 font-medium text-gray-900">{title}</h2>
        <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
          {description}
        </p>
      </div>
      <div className="px-4 py-5 sm:p-0">
        <dl>{children}</dl>
      </div>
    </div>
  );
}

interface DescriptionListRowProps {
  title?: string;
  borderless?: boolean;
}

function DescriptionListRow({
  title,
  borderless = false,
  children,
}: PropsWithChildren<DescriptionListRowProps>) {
  const blah = borderless
    ? 'sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5'
    : 'mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5';

  return (
    <div className={blah}>
      <dt className="text-sm leading-5 font-medium text-gray-500">{title}</dt>
      <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
        {children}
      </dd>
    </div>
  );
}
