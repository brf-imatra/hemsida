import React from 'react';
import { ExternalLinkIcon } from '@heroicons/react/solid'

export function SimpleThreeColumn() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-screen-xl lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            {/* <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
               <!-- Heroicon name: globe-alt --> 
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
            </div> */}
            <div className="mt-5">
              <h5 className="text-lg leading-6 font-medium text-gray-900">
                Tvättstugebokning
              </h5>
              <p className="mt-2 text-base leading-6 text-gray-500">
                <ExternalLink
                  text="Aptusportal"
                  href="https://imatra.aptustotal.se/Aptusportal/"
                />
              </p>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            {/* <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
               <!-- Heroicon name: scale -->
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                />
              </svg>
            </div> */}
            <div className="mt-5">
              <h5 className="text-lg leading-6 font-medium text-gray-900">
                Återvinningsstugan
              </h5>
              <p className="mt-2 text-base leading-6 text-gray-500">
                Öppen och bemannad följande tider:
                <ul>
                  <li>Onsdagar 18:00 - 19:00</li>
                  <li>Söndagar 17:00 - 18:00</li>
                </ul>
              </p>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            {/* <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
               <!-- Heroicon name: lightning-bolt -->
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div> */}
            <div className="mt-5">
              <h5 className="text-lg leading-6 font-medium text-gray-900">
                Felanmälan
              </h5>
              <p className="mt-2 text-base leading-6 text-gray-500">
                <ExternalLink
                  text="HSB Servicecenter"
                  href="http://www.hsb.se/stockholm/felanmalan"
                />
              </p>
              <p className="mt-2 text-base leading-6 text-gray-500">
                Beteckningen på bostadsförening är Imatra nr 193.
              </p>
            </div>
          </div>
        </div>
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
      <ExternalLinkIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
      <a href={href} target="_window" className="font-medium">
        {text}
      </a>
    </div>
  );
}
