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

const dateFormatter = (number: number | Date) => {
  const seLong = new Intl.DateTimeFormat('sv-SE', {
    month: 'long',
    year: 'numeric',
    day: 'numeric',
  });
  return seLong.format(number);
};

const gård5 = [
  { id: 75, name: 'Helsingforsgatan 75', value: '3%' },
  { id: 73, name: 'Helsingforsgatan 73', value: '99.9%' },
  { id: 71, name: 'Helsingforsgatan 71', value: '$70M' },
  { id: 69, name: 'Helsingforsgatan 69', value: '$60M' },
  { id: 67, name: 'Helsingforsgatan 67', value: '$50M' },
  { id: 65, name: 'Helsingforsgatan 65', value: '$50M' },
];

const gård4 = [
  { id: 61, name: 'Helsingforsgatan 65', value: '3%' },
  { id: 59, name: 'Helsingforsgatan 59', value: '99.9%' },
  { id: 57, name: 'Helsingforsgatan 57', value: '$70M' },
  { id: 55, name: 'Helsingforsgatan 55', value: '$60M' },
  { id: 53, name: 'Helsingforsgatan 53', value: '$50M' },
  { id: 51, name: 'Helsingforsgatan 51', value: '$50M' },
];

const gård3 = [
  { id: 49, name: 'Helsingforsgatan 49', value: '3%' },
  { id: 47, name: 'Helsingforsgatan 47', value: '99.9%' },
  { id: 45, name: 'Helsingforsgatan 45', value: '$70M' },
  { id: 43, name: 'Helsingforsgatan 43', value: '$60M' },
  { id: 41, name: 'Helsingforsgatan 41', value: '$50M' },
  { id: 39, name: 'Helsingforsgatan 39', value: '$50M' },
];

const gård2 = [
  { id: 33, name: 'Helsingforsgatan 33', value: '3%' },
  { id: 31, name: 'Helsingforsgatan 31', value: '99.9%' },
  { id: 29, name: 'Helsingforsgatan 29', value: '$70M' },
  { id: 27, name: 'Helsingforsgatan 27', value: '$60M' },
  { id: 25, name: 'Helsingforsgatan 25', value: '$50M' },
  { id: 23, name: 'Helsingforsgatan 23', value: '$50M' },
];

const gård1 = [
  { id: 21, name: 'Helsingforsgatan 21', value: '3%' },
  { id: 19, name: 'Helsingforsgatan 19', value: '99.9%' },
  { id: 17, name: 'Helsingforsgatan 17', value: '$70M' },
  { id: 15, name: 'Helsingforsgatan 15', value: '$60M' },
  { id: 13, name: 'Helsingforsgatan 13', value: '$50M' },
  { id: 11, name: 'Helsingforsgatan 11', value: '$50M' },
];

export default function ImdEl() {
  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                IMD-el
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Installation av elcentraler kommer att pågå under slutet av mars
                till slutet av juni 2023.
              </p>
            </div>
            <div className="container mx-auto sm:px-6 lg:px-8">
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Det här är en generell tidplan för installationen av
                elcentraler. Varje lägenhet och trapphus kommer att aviseras
                separat innan installationen i lägenheten.
              </p>
              <CardEdgeToEdge>
                <Feed items={timeline} />
              </CardEdgeToEdge>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-3">
              {gård5.map((stat) => (
                <div key={stat.id} className="flex flex-col bg-gray-400/5 p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-600">
                    Helsingforsgatan {stat.id}
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-3">
              {gård4.map((stat) => (
                <div key={stat.id} className="flex flex-col bg-gray-400/5 p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-600">
                    {stat.name}
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-3">
              {gård3.map((stat) => (
                <div key={stat.id} className="flex flex-col bg-gray-400/5 p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-600">
                    {stat.name}
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-3">
              {gård2.map((stat) => (
                <div key={stat.id} className="flex flex-col bg-gray-400/5 p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-600">
                    {stat.name}
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-3">
              {gård1.map((stat) => (
                <div key={stat.id} className="flex flex-col bg-gray-400/5 p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-600">
                    {stat.name}
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}

export function ImdElTidplan() {
  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                IMD-el
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Installation av elcentraler kommer att startas under slutet av
                mars och pågär därefter till slutet av juni 2023.
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Den nya elcentralen som ersätter den befintliga innehåller även
                en jordfelsbrytare. Detta kan innebära att t ex spis inte kan
                användas efter installlation om jordfelsbrytaren löser ut pga
                elfel i den befintliga utrustningen. Detta är en åtgärd som den
                boende får bekosta för att åtgärda. Se Stambyte FAQ för mer
                information.
              </p>
            </div>
            <div className="container mx-auto sm:px-6 lg:px-8">
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Det här är en generell tidplan för installationen av
                elcentraler. Varje lägenhet och trapphus kommer att aviseras
                separat senast 2 veckor innan installationen i lägenheten.
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
    iconBackground: 'bg-yellow-500',
  },
  {
    content: 'Helsingforsgatan',
    target: '11, 13, 15, 17, 19, 21',
    href: '#',
    datetime: new Date(2023, 5,12),
    endDatetime: new Date(2023, 5, 21),
    icon: CalendarDaysIcon,
    iconBackground: 'bg-gray-500',
  },
  {
    content: 'IMD-el slutförande',
    target: 'överlämning till föreningen',
    href: '#',
    datetime: new Date(2023, 5, 22),
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
    <div className="flow-root">
      <ul role="list" className="-mb-8">
        {items.map((event, eventIdx) => (
          <li key={eventIdx}>
            <div className="relative pb-8">
              {eventIdx !== timeline.length - 1 ? (
                <span
                  className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span
                    className={classNames(
                      event.iconBackground,
                      'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white',
                    )}
                  >
                    <event.icon
                      className="h-5 w-5 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                  <div>
                    <p className="text-sm text-gray-500">
                      {event.content}{' '}
                      <a
                        href={event.href}
                        className="font-medium text-gray-900"
                      >
                        {event.target}
                      </a>
                    </p>
                  </div>
                  <div className="whitespace-nowrap text-right text-sm text-gray-500">
                    <time dateTime={event.datetime.toString()}>
                      {dateFormatter(event.datetime)}
                    </time>
                    {event.endDatetime ? (
                      <p className="text-sm text-gray-500">
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
