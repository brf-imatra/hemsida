import React from 'react';
import { Body } from '../components';
import { PaperClipIcon } from '@heroicons/react/20/solid';

export default function Dokuments() {
  return (
    <Body title='Dokument'>
      <div className='grid grid-cols-1 gap-6'>
        <DokumentGrupp
          title='Bostadsrättsförening Imatra'
          documents={ForeningsDokument}
        />
        <DokumentGrupp title='2024' documents={Dokument2024} />
        <DokumentGrupp title='2023' documents={Dokument2023} />
        <DokumentGrupp title='2022' documents={Dokument2022} />
        <DokumentGrupp title='2021' documents={Dokument2021} />
        <DokumentGrupp title='2020' documents={Dokument2020} />
        <DokumentGrupp title='2019' documents={Dokument2019} />
        <DokumentGrupp title='2018' documents={Dokument2018} />
        <DokumentGrupp title='2017' documents={Dokument2017} />
        <DokumentGrupp title='2016' documents={Dokument2016} />
        <DokumentGrupp title='2015' documents={Dokument2015} />
        <DokumentGrupp title='2014' documents={Dokument2014} />
        <DokumentGrupp title='2013' documents={Dokument2013} />
        <DokumentGrupp title='2012' documents={Dokument2012} />
        <DokumentGrupp title='2007' documents={Dokument2007} />
      </div>
    </Body>
  );
}

export type DokumentRadProps = {
  title?: string;
  tag?: string;
  documentName: string;
  href: string;
};

type YearDocumentProps = {
  title: string;
  documents: Array<DokumentRadProps>;
};

function DokumentRad({ href, title, tag, documentName }: DokumentRadProps) {
  const headerElement =
    title || tag ? (
      <div className='flex items-center justify-between'>
        <div className='truncate text-sm font-medium leading-5 text-indigo-600'>
          {title}
        </div>
        <div className='ml-2 flex flex-shrink-0'>
          <span className='inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800'>
            {tag}
          </span>
        </div>
      </div>
    ) : null;

  return (
    <>
      <div className='px-4 py-4 sm:px-6'>
        {headerElement}

        <div className='mt-2 sm:flex sm:justify-between'>
          <div className='flex w-0 flex-1 items-center'>
            <PaperClipIcon
              className='h-5 w-5 flex-shrink-0 text-gray-400'
              aria-hidden='true'
            />
            <a
              href={href}
              className='block transition duration-150 ease-in-out hover:bg-gray-50 focus:bg-gray-50 focus:outline-none'
            >
              <span className='ml-2 w-0 flex-1 truncate'>{documentName}</span>
            </a>
          </div>

          <div className='ml-4 flex-shrink-0'>
            <a
              href={href}
              download={documentName}
              className='font-medium text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500'
            >
              Ladda ner
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export function DokumentGrupp({ documents, title }: YearDocumentProps) {
  return (
    <div className='overflow-hidden bg-white shadow sm:rounded-md'>
      <div className='border-b border-gray-200 bg-white px-4 py-5 sm:px-6'>
        <h2 className='text-lg font-medium leading-6 text-gray-900'>{title}</h2>
      </div>
      <ul>
        {documents.map((document) => (
          <li className='border-gray-200' key={document.documentName}>
            <DokumentRad
              documentName={document.documentName}
              href={document.href}
              tag={document.tag}
              title={document.title}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

const ForeningsDokument: Array<DokumentRadProps> = [
  {
    documentName: 'HSB_brf_Imatra_Normalstadgar_2011-version_5.pdf',
    href: '/dokument/2018-05-04_HSB_brf_Imatra_Normalstadgar_2011-version_5.pdf',
    tag: 'PDF',
    title: 'HSB brf Imatra Normalstadgar',
  },
];

const Dokument2024: Array<DokumentRadProps> = [
  {
    documentName: 'årsredovisning_2023_imatra.pdf',
    href: '/dokument/arsredovisning/2024/arsredovisning_2023_imatra.pdf',
    tag: 'PDF',
    title: 'Årsredovisning',
  },
  {
    documentName: 'protokoll_brf_imatra_stamma_2024-05-15.pdf',
    href: '/dokument/arsredovisning/2024/protokoll_brf_imatra_stamma_2024-05-15.pdf',
    tag: 'PDF',
    title: 'Föreningsstämma',
  },
];

const Dokument2023: Array<DokumentRadProps> = [
  {
    documentName: 'årsredovisning_2022_imatra.pdf',
    href: '/dokument/arsredovisning/2023/arsredovisning_2022_imatra.pdf',
    tag: 'PDF',
    title: 'Årsredovisning',
  },
  {
    documentName: 'valberedningen_2023.pdf',
    href: '/dokument/arsredovisning/2023/valberedningen_2023.pdf',
    tag: 'PDF',
    title: 'Valberednings förslag 2023',
  },
  {
    documentName: 'imatra_motioner_2023.pdf',
    href: '/dokument/arsredovisning/2023/imatra_motioner_2023.pdf',
    tag: 'PDF',
    title: 'Motioner 2023',
  },
  {
    documentName: 'protokoll_brf_imatra_stämma_2023-05-04.pdf',
    href: '/dokument/arsredovisning/2023/protokoll_brf_imatra_stamma_2023-2023-05-04.pdf',
    tag: 'PDF',
    title: 'Föreningsstämma',
  },
];

const Dokument2022: Array<DokumentRadProps> = [
  {
    documentName: 'årsredovisning_2021_imatra.pdf',
    href: '/dokument/arsredovisning/2022/arsredovisning_2021_imatra.pdf',
    tag: 'PDF',
    title: 'Årsredovisning',
  },
  {
    documentName: 'protokoll_brf_imatra_stämma_2022-04-28.pdf',
    href: '/dokument/arsredovisning/2022/protokoll_brf_imatra_stamma_2022-04-28.pdf',
    tag: 'PDF',
    title: 'Föreningsstämma',
  },
  {
    documentName: 'protokoll_brf_imatra_extra_stämma_2022-09-20.pdf',
    href: '/dokument/arsredovisning/2022/protokoll_brf_imatra_extra_stamma_2022-09-20.pdf',
    tag: 'PDF',
    title: 'Extra föreningsstämma',
  },
];

const Dokument2021: Array<DokumentRadProps> = [
  {
    documentName: 'årsredovisning_2020_imatra.pdf',
    href: '/dokument/arsredovisning/2021/arsredovisning_2020_imatra.pdf',
    tag: 'PDF',
    title: 'Årsredovisning',
  },
  {
    documentName: 'protokoll_brf_imatra_stämma_2021-04-22.pdf',
    href: '/dokument/arsredovisning/2021/protokoll_brf_imatra_stamma_2021-04-22.pdf',
    tag: 'PDF',
    title: 'Föreningsstämma',
  },
];

const Dokument2020: Array<DokumentRadProps> = [
  {
    documentName: 'årsredovisning_2019_imatra.pdf',
    href: '/dokument/arsredovisning/2020/arsredovisning_2019_imatra.pdf',
    tag: 'PDF',
    title: 'Årsredovisning',
  },
  {
    documentName: 'protokoll_brf_imatra_stämma_2020-04-23.pdf',
    href: '/dokument/arsredovisning/2020/protokoll_brf_imatra_stamma_2020-04-23.pdf',
    tag: 'PDF',
    title: 'Föreningsstämma',
  },
];

const Dokument2019: Array<DokumentRadProps> = [
  {
    documentName: 'årsredovisning_2018_imatra.pdf',
    href: '/dokument/arsredovisning/2019/arsredovisning_2018_imatra.pdf',
    tag: 'PDF',
    title: 'Årsredovisning',
  },
  {
    documentName: 'protokoll_brf_imatra_stämma_2019-04-25.pdf',
    href: '/dokument/arsredovisning/2019/protokoll_brf_imatra_stamma_2019-04-25.pdf',
    tag: 'PDF',
    title: 'Föreningsstämma',
  },
];

const Dokument2018: Array<DokumentRadProps> = [
  {
    documentName: 'årsredovisning_2017_imatra.pdf',
    href: '/dokument/arsredovisning/2018/arsredovisning_2017_imatra.pdf',
    tag: 'PDF',
    title: 'Årsredovisning',
  },
  {
    documentName: 'protokoll_brf_imatra_stämma_2018-04-26.pdf',
    href: '/dokument/arsredovisning/2018/protokoll_brf_imatra_stamma_2018-04-26.pdf',
    tag: 'PDF',
    title: 'Föreningsstämma',
  },
];

const Dokument2017: Array<DokumentRadProps> = [
  {
    documentName: 'årsredovisning_2016_imatra.pdf',
    href: '/dokument/arsredovisning/2017/arsredovisning_2016_imatra.pdf',
    tag: 'PDF',
    title: 'Årsredovisning',
  },
  {
    documentName: 'protokoll_brf_imatra_stämma_2017-04-27.pdf',
    href: '/dokument/arsredovisning/2017/protokoll_brf_imatra_stamma_2017-04-27.pdf',
    tag: 'PDF',
    title: 'Föreningsstämma',
  },
];

const Dokument2016: Array<DokumentRadProps> = [
  {
    documentName: 'årsredovisning_2015_imatra.pdf',
    href: '/dokument/arsredovisning/2016/arsredovisning_2015_imatra.pdf',
    tag: 'PDF',
    title: 'Årsredovisning',
  },
  {
    documentName: 'protokoll_brf_imatra_stämma_2016-04-28.pdf',
    href: '/dokument/arsredovisning/2016/protokoll_brf_imatra_stamma_2016-04-28.pdf',
    tag: 'PDF',
    title: 'Föreningsstämma',
  },
];

const Dokument2015: Array<DokumentRadProps> = [
  {
    documentName: 'årsredovisning_2014_imatra.pdf',
    href: '/dokument/arsredovisning/2015/arsredovisning_2014_imatra.pdf',
    tag: 'PDF',
    title: 'Årsredovisning',
  },
  {
    documentName: 'protokoll_brf_imatra_stämma_2015-04-28.pdf',
    href: '/dokument/arsredovisning/2015/protokoll_brf_imatra_stamma_2015-04-28.pdf',
    tag: 'PDF',
    title: 'Föreningsstämma',
  },
  {
    documentName: 'protokoll_brf_imatra_extra_stämma_2015-10-14.pdf',
    href: '/dokument/arsredovisning/2015/protokoll_brf_imatra_extra_stamma_2015-10-14.pdf',
    tag: 'PDF',
    title: 'Extra föreningsstämma',
  },
];

const Dokument2014: Array<DokumentRadProps> = [
  {
    documentName: 'årsredovisning_2013_imatra.pdf',
    href: '/dokument/arsredovisning/2014/arsredovisning_2013_imatra.pdf',
    tag: 'PDF',
    title: 'Årsredovisning',
  },
  {
    documentName: 'protokoll_brf_imatra_stämma_2014-04-28.pdf',
    href: '/dokument/arsredovisning/2014/protokoll_brf_imatra_stamma_2014-04-28.pdf',
    tag: 'PDF',
    title: 'Föreningsstämma',
  },
];

const Dokument2013: Array<DokumentRadProps> = [
  {
    documentName: 'årsredovisning_2012_imatra.pdf',
    href: '/dokument/arsredovisning/2013/arsredovisning_2012_imatra.pdf',
    tag: 'PDF',
    title: 'Årsredovisning',
  },
  {
    documentName: 'protokoll_brf_imatra_stämma_2013-04-24.pdf',
    href: '/dokument/arsredovisning/2013/protokoll_brf_imatra_stamma_2013-04-24.pdf',
    tag: 'PDF',
    title: 'Föreningsstämma',
  },
];

const Dokument2012: Array<DokumentRadProps> = [
  {
    documentName: 'årsredovisning_2011_imatra.pdf',
    href: '/dokument/arsredovisning/2012/arsredovisning_2011_imatra.pdf',
    tag: 'PDF',
    title: 'Årsredovisning',
  },
];

const Dokument2007: Array<DokumentRadProps> = [
  {
    documentName: 'årsredovisning_2007_imatra.pdf',
    href: '/dokument/arsredovisning/2007/arsredovisning_2007_imatra.pdf',
    tag: 'PDF',
    title: 'Årsredovisning',
  },
];
