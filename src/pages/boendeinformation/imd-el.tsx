import React, {
  ForwardRefExoticComponent,
  RefAttributes,
  SVGProps,
} from 'react';
import {
  CheckIcon,
  DocumentIcon,
  CalendarIcon,
  CalendarDaysIcon,
  WrenchScrewdriverIcon,
  HandThumbUpIcon,
  UserIcon,
} from '@heroicons/react/20/solid';
import { CardEdgeToEdge } from '../../components/Card/CardEdgeToEdge';
import { Body } from '../../components';
import { DokumentGrupp, DokumentRadProps } from '../dokuments';

const dateFormatter = (number: number | Date) => {
  const seLong = new Intl.DateTimeFormat('sv-SE', {
    month: 'long',
    year: 'numeric',
    day: 'numeric',
  });
  return seLong.format(number);
};


export default function ImdEl() {
  return (
    <>
      <div className='bg-white py-24 sm:py-32'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:max-w-none'>
            <div className='text-center'>
              <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                IMD-el
              </h2>
              <p className='mt-4 text-lg leading-8 text-gray-600'>
                Installation av elcentraler kommer att pågå under slutet av mars
                till slutet av juni 2023.
              </p>
            </div>
            <div className='container mx-auto sm:px-6 lg:px-8'>
              <p className='mt-4 text-lg leading-8 text-gray-600'>
                Det här är en generell tidplan för installationen av
                elcentraler. Varje lägenhet och trapphus kommer att aviseras
                separat innan installationen i lägenheten.
              </p>
              <CardEdgeToEdge>
                <Feed items={timeline} />
              </CardEdgeToEdge>
            </div>
            <Dokuments />
          </div>
        </div>
      </div>
    </>
  );
}

const timeline: Array<FeadItem> = [
  {
    content: 'Helsingforsgatan',
    target: '65, 67, 69, 71, 73, 75',
    href: '#',
    datetime: new Date(2023, 2, 23),
    endDatetime: new Date(2023, 3, 12),
    icon: WrenchScrewdriverIcon,
    iconBackground: 'bg-green-400',
  },
  {
    content: 'Helsingforsgatan',
    target: '51, 53, 55, 57, 59, 61',
    href: '#',
    datetime: new Date(2023, 3, 13),
    endDatetime: new Date(2023, 4, 4),
    icon: WrenchScrewdriverIcon,
    iconBackground: 'bg-green-400',
  },
  {
    content: 'Helsingforsgatan',
    target: '39, 41, 43, 45, 47, 49',
    href: '#',
    datetime: new Date(2023, 4, 5),
    endDatetime: new Date(2023, 4, 26),
    icon: WrenchScrewdriverIcon,
    iconBackground: 'bg-green-400',
  },
  {
    content: 'Helsingforsgatan',
    target: '23, 25, 27, 29, 31, 33',
    href: '#',
    datetime: new Date(2023, 4, 29),
    endDatetime: new Date(2023, 5, 9),
    icon: WrenchScrewdriverIcon,
    iconBackground: 'bg-green-400',
  },
  {
    content: 'Helsingforsgatan',
    target: '11, 13, 15, 17, 19, 21',
    href: '#',
    datetime: new Date(2023, 5, 12),
    endDatetime: new Date(2023, 5, 21),
    icon: CalendarDaysIcon,
    iconBackground: 'bg-green-500',
  },
  {
    content: 'IMD-el slutförande',
    target: 'överlämning till föreningen',
    href: '#',
    datetime: new Date(2023, 5, 22),
    icon: HandThumbUpIcon,
    iconBackground: 'bg-green-500',
  },
];

function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(' ');
}

type FeadItem = {
  //id: number
  content: string;
  target: string;
  href: string;
  datetime: Date;
  endDatetime?: Date;
  icon: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & RefAttributes<SVGSVGElement>
  >;
  iconBackground: string;
};

type FeedProps = {
  items: FeadItem[];
};

function Feed({ items }: FeedProps) {
  return (
    <div className='flow-root'>
      <ul role='list' className='-mb-8'>
        {items.map((event, eventIdx) => (
          <li key={eventIdx}>
            <div className='relative pb-8'>
              {eventIdx !== timeline.length - 1 ? (
                <span
                  className='absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200'
                  aria-hidden='true'
                />
              ) : null}
              <div className='relative flex space-x-3'>
                <div>
                  <span
                    className={classNames(
                      event.iconBackground,
                      'flex h-8 w-8 items-center justify-center rounded-full ring-8 ring-white'
                    )}
                  >
                    <event.icon
                      className='h-5 w-5 text-white'
                      aria-hidden='true'
                    />
                  </span>
                </div>
                <div className='flex min-w-0 flex-1 justify-between space-x-4 pt-1.5'>
                  <div>
                    <p className='text-sm text-gray-500'>
                      {event.content}{' '}
                      <a
                        href={event.href}
                        className='font-medium text-gray-900'
                      >
                        {event.target}
                      </a>
                    </p>
                  </div>
                  <div className='whitespace-nowrap text-right text-sm text-gray-500'>
                    <time dateTime={event.datetime.toString()}>
                      {dateFormatter(event.datetime)}
                    </time>
                    {event.endDatetime ? (
                      <p className='text-sm text-gray-500'>
                        till och med&nbsp;
                        <time dateTime={event.endDatetime.toString()}>
                          {dateFormatter(event.endDatetime)}
                        </time>
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}



function Dokuments() {
  return (
      <div className='grid grid-cols-1 gap-6'>
        <DokumentGrupp title='2021' documents={Blanketter} />
      </div>
  );
}

const Blanketter: Array<DokumentRadProps> = [
  {
    documentName: 'Gruppforteckning_1-RoK.pdf',
    href: '/dokument/gruppforteckning/Gruppforteckning_1-RoK.pdf',
    tag: 'PDF',
    title: 'Gruppförteckning 1 RoK',
  },
  {
    documentName: 'Gruppforteckning_1o2-RoK.pdf',
    href: '/dokument/gruppforteckning/Gruppforteckning_1o2-RoK.pdf',
    tag: 'PDF',
    title: 'Gruppförteckning 1 och 2 RoK',
  },
  {
    documentName: 'Gruppforteckning_3-4-RoK.pdf',
    href: '/dokument/gruppforteckning/Gruppforteckning_3-4-RoK.pdf',
    tag: 'PDF',
    title: 'Gruppförteckning 3 och 4 RoK',
  },
];

