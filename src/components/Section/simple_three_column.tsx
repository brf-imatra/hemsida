import React from 'react';
import {
  ArrowTopRightOnSquareIcon,
  GlobeAltIcon,
  ScaleIcon,
  BoltIcon,
} from '@heroicons/react/24/outline';


const features = [
  {
    name: 'Tvättstugebokning',
    descriptions: [
      <ExternalLink
        key='Aptusportal'
        text='Aptusportal'
        href='https://imatra.aptustotal.se/Aptusportal/'
      />,
    ],
    icon: GlobeAltIcon,
  },
  {
    name: 'Elförbrukning',
    descriptions: [
      <ExternalLink
        key='Infometric'
        text='Infometric - Panoramic Home'
        href='https://lgh.infometric.se/'
      />,
    ],
  },
  {
    name: 'Återvinningsstugan',
    descriptions: [
      'Öppen och bemannad följande tider:',
      'Onsdagar 18:00 - 19:00',
      'Söndagar 17:00 - 18:00',
    ],
    icon: ScaleIcon,
    link: null,
  },
  {
    name: 'Felanmälan',
    descriptions: [
      <ExternalLink
        key='Servicecenter'
        text='HSB Servicecenter'
        href='https://felanmalan.hsb.se/'
      />,
      'Här kan du göra en felanmälan för din bostadsrätt. Beteckningen på bostadsrättsförening är Imatra nr 193.',
    ],
    icon: BoltIcon,
  },
];

export function SimpleThreeColumn() {
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h2 className='sr-only'>Länkar till externa tjänster för brf Imatra.</h2>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  {/*<div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">*/}
                  {/*  <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />*/}
                  {/*</div>*/}
                  {feature.name}
                </dt>
                {feature.descriptions.map((description, i) => (
                <dd key={i} className='mt-2 text-base leading-7 text-gray-600'>
                  {description}
                </dd>
              ))}
              </div>
            ))}
          </dl>
        </div>
        {/*<dl className='space-y-10 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0'>
          {features.map((feature) => (
            <div key={feature.name}>
              <dt>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className='mt-5 text-lg font-medium leading-6 text-gray-900'>
                  {feature.name}
                </p>
              </dt>
              {feature.descriptions.map((description, i) => (
                <dd key={i} className='mt-2 text-base text-gray-500'>
                  {description}
                </dd>
              ))}
            </div>
          ))}
        </dl>*/}
      </div>
    </div>
  );
}

type ExternalLinkProps = {
  text: string;
  href: string;
}

export function ExternalLink({ text, href }: ExternalLinkProps) {
  return (
    <div className='ml-2 flex flex-1 text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500'>
      <ArrowTopRightOnSquareIcon
        className='h-5 w-5 flex-shrink-0 text-gray-400'
        aria-hidden='true'
      />
      <a href={href} target='_window' className='font-medium'>
        {text}
      </a>
    </div>
  );
}
