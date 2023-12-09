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
import { CardEdgeToEdge } from '../../../components/Card/CardEdgeToEdge';

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
                Stambyte
              </h2>
              <p className='mt-4 text-lg leading-8 text-gray-600'>
                Det här är den övergripande produktionsplanen. Stambytet startar
                med projektering och etablering i maj och juni 2023. I augusti
                2023 påbörjas stambytet vid Helsingforsgatan 11-21 för att
                därefter fortsätta till Helsingforsgatan 65-75 där projektet
                avslutas augusti 2025.
              </p>
            </div>
            <div className='container mx-auto sm:px-6 lg:px-8'>
              <p className='mt-4 text-lg leading-8 text-gray-600'>
                Gårdsvis kommer medlemmar att kallas till trapphusmöte i god tid
                innan stambytet påbörjas på respektive gård. Där kommer ni att
                få mer information om vad som gäller för just er gård.
              </p>
              <p className='mt-4 text-lg leading-8 text-gray-600'>
                Därefter kommer varje medlem att kallas till ett tillvalsmöte
                där ni får välja material och färger till ert badrum.
              </p>
              <p className='mt-4 text-lg leading-8 text-gray-600'>
                Innan arbetet med stambytet påbörjas kommer kallvatten och slask
                att installeras i trapphuset. Detta kommer att säkerställa att
                arbetet kan utföras smidigt och utan störningar för medlemmarna.
                Vi ser fram emot att ge er en förbättrad och mer bekväm
                boendemiljö när projektet är klart!
              </p>
              <p>
                Det här är en övergripande produktionsplan för stambyte som
                kommer att ske på Helsingforsgatan 11-21 och 65-75 mellan maj
                2023 och augusti 2025. Planering och förberedelser kommer att
                göras under maj och juni 2023 och själva stambytet påbörjas i
                augusti 2023. Varje gård kommer att kallas till ett trapphusmöte
                där mer information kommer att ges om vad som gäller för just
                den specifika gården. Därefter kommer varje medlem att kallas
                till ett tillvalsmöte där ni kan välja material och färger till
                ert badrum. Innan arbetet med stambytet påbörjas kommer
                kallvatten och slask att installeras i trapphuset. Detta kommer
                att säkerställa att arbetet kan utföras smidigt och utan
                störningar för medlemmarna. Vi ser fram emot att ge er en
                förbättrad och mer bekväm boendemiljö när projektet är klart!
              </p>
              <CardEdgeToEdge>
                <Feed items={timeline} />
              </CardEdgeToEdge>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const timeline: Array<FeadItem> = [
  {
    content: 'Projektering',
    target: '',
    href: '#',
    datetime: new Date(2023, 4, 4),
    endDatetime: new Date(2023, 7, 29),
    icon: WrenchScrewdriverIcon,
    iconBackground: 'bg-green-500',
  },
  {
    content: 'Helsingforsgatan',
    target: '11, 13, 15, 17, 19, 21',
    href: '#G1',
    datetime: new Date(2023, 4, 18),
    endDatetime: new Date(2023, 11, 29),
    icon: CalendarDaysIcon,
    iconBackground: 'bg-yellow-500',
  },
  {
    content: 'Helsingforsgatan',
    target: '23, 25, 27, 29, 31, 33',
    href: '#G2',
    datetime: new Date(2023, 9, 26),
    endDatetime: new Date(2024, 4, 24),
    icon: CalendarDaysIcon,
    iconBackground: 'bg-yellow-500',
  },
  {
    content: 'Helsingforsgatan',
    target: '39, 41, 43, 45, 47, 49',
    href: '#G3',
    datetime: new Date(2024, 1, 5),
    endDatetime: new Date(2024, 9, 11),
    icon: CalendarDaysIcon,
    iconBackground: 'bg-gray-500',
  },

  {
    content: 'Helsingforsgatan',
    target: '51, 53, 55, 57, 59, 61',
    href: '#G4',
    datetime: new Date(2024, 5, 11),
    endDatetime: new Date(2025, 2, 28),
    icon: CalendarDaysIcon,
    iconBackground: 'bg-gray-500',
  },
  {
    content: 'Helsingforsgatan',
    target: '65, 67, 69, 71, 73, 75',
    href: '#G5',
    datetime: new Date(2024, 11, 4),
    endDatetime: new Date(2025, 5, 20),
    icon: CalendarDaysIcon,
    iconBackground: 'bg-gray-500',
  },
  {
    content: 'Stambyte slutförande',
    target: 'överlämning till föreningen',
    href: '#',
    datetime: new Date(2025, 7, 29),
    icon: HandThumbUpIcon,
    iconBackground: 'bg-gray-500',
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

export function Feed({ items }: FeedProps) {
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
