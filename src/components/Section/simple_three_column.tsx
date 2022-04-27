import React from 'react';
import { ExternalLinkIcon } from '@heroicons/react/solid';
import {
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from '@heroicons/react/outline';

const features = [
  {
    name: 'Tvättstugebokning',
    descriptions: [
      <ExternalLink
        key="Aptusportal"
        text="Aptusportal"
        href="https://imatra.aptustotal.se/Aptusportal/"
      />,
    ],
    icon: GlobeAltIcon,
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
        key="Servicecenter"
        text="HSB Servicecenter"
        href="https://felanmalan.hsb.se/"
      />,
      'Här kan du göra en felanmälan för din bostadsrätt. Beteckningen på bostadsrättsförening är Imatra nr 193.',
    ],
    icon: LightningBoltIcon,
  },
];

export function SimpleThreeColumn() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">A better way to send money.</h2>
        <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {features.map((feature) => (
            <div key={feature.name}>
              <dt>
                {/*<div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">*/}
                {/*  <feature.icon className="h-6 w-6" aria-hidden="true" />*/}
                {/*</div>*/}
                <p className="mt-5 text-lg leading-6 font-medium text-gray-900">
                  {feature.name}
                </p>
              </dt>
              {feature.descriptions.map((description, i) => (
                <dd key={i} className="mt-2 text-base text-gray-500">
                  {description}
                </dd>
              ))}
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

interface ExternalLinkProps {
  text: string;
  href: string;
}

export function ExternalLink({ text, href }: ExternalLinkProps) {
  return (
    <div className="ml-2 flex flex-1 text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out">
      <ExternalLinkIcon
        className="flex-shrink-0 h-5 w-5 text-gray-400"
        aria-hidden="true"
      />
      <a href={href} target="_window" className="font-medium">
        {text}
      </a>
    </div>
  );
}
