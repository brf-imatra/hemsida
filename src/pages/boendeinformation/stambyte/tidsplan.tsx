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
          <GårdAktivitet title='Gård 1' items={gård1Tidslinje} />
          <GårdAktivitet title='Gård 2' items={gård2Tidslinje} />
          <GårdAktivitet title='Gård 3' items={gård3Tidslinje} />
          <GårdAktivitet title='Gård 4' items={gård4Tidslinje} />
          <GårdAktivitet title='Gård 5' items={gård5Tidslinje} />
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
    iconBackground: 'bg-yellow-500',
  },
  {
    content: 'Helsingforsgatan',
    target: '11, 13, 15, 17, 19, 21',
    href: '#G1',
    datetime: new Date(2023, 4, 18),
    endDatetime: new Date(2023, 11, 29),
    icon: CalendarDaysIcon,
    iconBackground: 'bg-gray-500',
  },
  {
    content: 'Helsingforsgatan',
    target: '23, 25, 27, 29, 31, 33',
    href: '#G2',
    datetime: new Date(2023, 9, 26),
    endDatetime: new Date(2024, 4, 24),
    icon: CalendarDaysIcon,
    iconBackground: 'bg-gray-500',
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

const gård1Tidslinje: Array<GårdTidslinje> = [
  {
    activity: 'Tillvalsmöten',
    from: new Date(2023, 5, 15),
    to: new Date(2023, 5, 21),
  },
  {
    activity: 'Provisorier trapphus',
    from: new Date(2023, 7, 14),
    to: new Date(2023, 7, 18),
  },
  {
    activity: 'Helsingforsgatan 11',
    from: new Date(2023, 7, 21),
    to: new Date(2023, 9, 6),
  },
  {
    activity: 'Helsingforsgatan 13',
    from: new Date(2023, 7, 21),
    to: new Date(2023, 9, 6),
  },
  {
    activity: 'Helsingforsgatan 15',
    from: new Date(2023, 8, 18),
    to: new Date(2023, 10, 3),
  },
  {
    activity: 'Helsingforsgatan 17',
    from: new Date(2023, 9, 2),
    to: new Date(2023, 10, 17),
  },
  {
    activity: 'Helsingforsgatan 19',
    from: new Date(2023, 9, 16),
    to: new Date(2023, 11, 1),
  },
  {
    activity: 'Helsingforsgatan 21',
    from: new Date(2023, 9, 30),
    to: new Date(2023, 11, 15),
  },
  {
    activity: 'Källare och allmänna utrymmen',
    from: new Date(2023, 7, 14),
    to: new Date(2023, 11, 29),
  },
];

const gård2Tidslinje: Array<GårdTidslinje> = [
  {
    activity: 'Tillvalsmöten',
    from: new Date(2023, 10, 23),
    to: new Date(2023, 11, 13),
  },
  {
    activity: 'Provisorier trapphus',
    from: new Date(2023, 11, 18),
    to: new Date(2023, 11, 22),
  },
  {
    activity: 'Helsingforsgatan 23',
    from: new Date(2024, 0, 8),
    to: new Date(2024, 1, 23),
  },
  {
    activity: 'Helsingforsgatan 25',
    from: new Date(2024, 0, 22),
    to: new Date(2024, 2, 8),
  },
  {
    activity: 'Helsingforsgatan 27',
    from: new Date(2024, 1, 5),
    to: new Date(2024, 2, 22),
  },
  {
    activity: 'Helsingforsgatan 29',
    from: new Date(2024, 1, 19),
    to: new Date(2024, 3, 5),
  },
  {
    activity: 'Helsingforsgatan 31',
    from: new Date(2024, 2, 4),
    to: new Date(2024, 3, 19),
  },
  {
    activity: 'Helsingforsgatan 33',
    from: new Date(2024, 2, 4),
    to: new Date(2024, 3, 19),
  },
  {
    activity: 'Källare och allmänna utrymmen',
    from: new Date(2024, 0, 8),
    to: new Date(2024, 4, 24),
  },
];

const gård3Tidslinje: Array<GårdTidslinje> = [
  {
    activity: 'Tillvalsmöten',
    from: new Date(2024, 2, 24),
    to: new Date(2024, 2, 25),
  },
  {
    activity: 'Provisorier trapphus',
    from: new Date(2024, 2, 25),
    to: new Date(2024, 2, 29),
  },
  {
    activity: 'Helsingforsgatan 49',
    from: new Date(2024, 3, 1),
    to: new Date(2024, 4, 17),
  },
  {
    activity: 'Helsingforsgatan 47',
    from: new Date(2024, 3, 1),
    to: new Date(2024, 4, 17),
  },
  {
    activity: 'Helsingforsgatan 45',
    from: new Date(2024, 3, 15),
    to: new Date(2024, 4, 31),
  },
  {
    activity: 'Helsingforsgatan 43',
    from: new Date(2024, 3, 29),
    to: new Date(2024, 5, 14),
  },
  {
    activity: 'Helsingforsgatan 41',
    from: new Date(2024, 7, 12),
    to: new Date(2024, 8, 27),
  },
  {
    activity: 'Helsingforsgatan 39',
    from: new Date(2024, 7, 26),
    to: new Date(2024, 9, 11),
  },
  {
    activity: 'Källare och allmänna utrymmen',
    from: new Date(2024, 1, 26),
    to: new Date(2024, 9, 11),
  },
];

const gård4Tidslinje: Array<GårdTidslinje> = [
  {
    activity: 'Tillvalsmöten',
    from: new Date(2024, 7, 28),
    to: new Date(2024, 8, 17),
  },
  {
    activity: 'Provisorier trapphus',
    from: new Date(2024, 8, 16),
    to: new Date(2024, 8, 20),
  },
  {
    activity: 'Helsingforsgatan 51',
    from: new Date(2024, 8, 23),
    to: new Date(2024, 10, 8),
  },
  {
    activity: 'Helsingforsgatan 53',
    from: new Date(2024, 9, 7),
    to: new Date(2024, 10, 22),
  },
  {
    activity: 'Helsingforsgatan 55',
    from: new Date(2024, 9, 21),
    to: new Date(2024, 11, 6),
  },
  {
    activity: 'Helsingforsgatan 57',
    from: new Date(2024, 10, 4),
    to: new Date(2024, 11, 20),
  },
  {
    activity: 'Helsingforsgatan 59',
    from: new Date(2025, 0, 13),
    to: new Date(2025, 1, 28),
  },
  {
    activity: 'Helsingforsgatan 61',
    from: new Date(2025, 0, 27),
    to: new Date(2025, 2, 14),
  },
  {
    activity: 'Källare och allmänna utrymmen',
    from: new Date(2024, 8, 9),
    to: new Date(2025, 2, 28),
  },
];

const gård5Tidslinje: Array<GårdTidslinje> = [
  {
    activity: 'Tillvalsmöten',
    from: new Date(2025, 0, 21),
    to: new Date(2025, 1, 10),
  },
  {
    activity: 'Provisorier trapphus',
    from: new Date(2025, 1, 17),
    to: new Date(2025, 1, 21),
  },
  {
    activity: 'Helsingforsgatan 75',
    from: new Date(2025, 1, 24),
    to: new Date(2025, 3, 11),
  },
  {
    activity: 'Helsingforsgatan 73',
    from: new Date(2025, 1, 24),
    to: new Date(2025, 3, 11),
  },
  {
    activity: 'Helsingforsgatan 71',
    from: new Date(2025, 2, 10),
    to: new Date(2025, 3, 26),
  },
  {
    activity: 'Helsingforsgatan 69',
    from: new Date(2025, 2, 24),
    to: new Date(2025, 4, 10),
  },
  {
    activity: 'Helsingforsgatan 67',
    from: new Date(2025, 3, 7),
    to: new Date(2025, 4, 23),
  },
  {
    activity: 'Helsingforsgatan 65',
    from: new Date(2025, 3, 28),
    to: new Date(2025, 5, 13),
  },
  {
    activity: 'Källare och allmänna utrymmen',
    from: new Date(2025, 1, 24),
    to: new Date(2025, 5, 20),
  },
];

type GårdTidslinje = {
  activity: string;
  from: Date;
  to: Date;
};

type GårdAktivitetProps = {
  title: string;
  items: Array<GårdTidslinje>;
};

function GårdAktivitet({ items, title }: GårdAktivitetProps) {
  return (
    <div className='pt-6'>
      <div className='container mx-auto sm:px-6 lg:px-8'>
        <CardEdgeToEdge>
          <div className='px-4 sm:px-6 lg:px-8'>
            <div className='sm:flex sm:items-center'>
              <div className='sm:flex-auto'>
                <h1
                  id={title.slice(0, 1) + title.slice(title.length - 1)}
                  className='text-base font-semibold leading-6 text-gray-900'
                >
                  {title}
                </h1>
                <p className='mt-2 text-sm text-gray-700'>
                  A list of all the users in your account including their name,
                  title, email and role.
                </p>
              </div>
            </div>
            <div className='mt-8 flow-root'>
              <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
                  <table className='min-w-full divide-y divide-gray-300'>
                    <thead>
                      <tr>
                        <th
                          scope='col'
                          className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0'
                        >
                          Aktivitet
                        </th>
                        <th
                          scope='col'
                          className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                        >
                          Startdatum
                        </th>
                        <th
                          scope='col'
                          className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                        >
                          Slutdatum
                        </th>
                      </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-200'>
                      {items.map((item) => (
                        <tr key={item.activity}>
                          <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0'>
                            {item.activity}
                          </td>
                          <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                            <time dateTime={item.from.toString()}>
                              {dateFormatter(item.from)}
                            </time>
                          </td>
                          <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                            <time dateTime={item.to.toString()}>
                              {dateFormatter(item.to)}
                            </time>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </CardEdgeToEdge>
      </div>
    </div>
  );
}
