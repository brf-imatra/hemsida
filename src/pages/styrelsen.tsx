import React from 'react';
import { Body } from '../components';
import Image from 'next/image';
import Link from 'next/link';

const summaryText = 'Verksamhetsåret maj 2023 till april/maj 2024.';
const styrelsemedlemmar: People[] = [
  {
    name: 'Marcus Holmgren',
    role: 'Ledamot / Ordförande',
    imageUrl: '/avatars/img_avatar_m.png',
  },
  {
    name: 'Maria Enander',
    role: 'Ledamot / Sekreterare',
    imageUrl: '/avatars/img_avatar_w.png',
  },
  {
    name: 'Alexandra Leyton',
    role: 'Ledamot',
    imageUrl: '/avatars/img_avatar_w.png',
  },
  {
    name: 'Pedram Ghorbani Damavandian',
    role: 'Ledamot',
    imageUrl: '/avatars/img_avatar_m.png',
  },
  {
    name: 'Demosthenes Giannatos',
    role: 'Ledamot',
    imageUrl: '/avatars/img_avatar_m.png',
  },
  {
    name: 'Hayrullah Erdogan',
    role: 'Suppleant',
    imageUrl: '/avatars/img_avatar_m.png',
  },
];

const valberedningen: People[] = [
  {
    name: 'Abdulla Rahem',
    role: 'Sammankallande',
    imageUrl: '/avatars/img_avatar_m.png',
  },
  // {
  //   name: '?',
  //   role: 'Ledamot',
  //   imageUrl: '/avatars/img_avatar_w.png',
  // },
];


export default function Styrelsen() {
  return (
    <Body>
      <p className="mt-6 text-lg leading-8 text-gray-600">Se protokoll från senaste årets föreningstämma för nuvarande styrelsesammanstättning.</p>
      <Link href="/dokuments" className="font-semibold text-indigo-600 hover:text-indigo-500 underline">Länk till dokument</Link>
    </Body>
  );
}

export function Styrelsen_old() {
  return (
    <Body>
      <TeamWithSmallImages
        title='Styrelsen'
        summary={summaryText}
        people={styrelsemedlemmar}
      />
      <TeamWithSmallImages
        title='Valberedningen'
        summary={summaryText}
        people={valberedningen}
      />
    </Body>
  );
}

type People = {
  name: string;
  role: string;
  imageUrl: string;
};

interface TeamProps {
  title: string;
  summary: string;
  people: People[];
}

function TeamWithSmallImages({ title, summary, people }: TeamProps) {
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-24'>
        <div className='grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8'>
          <div className='space-y-5 sm:space-y-4'>
            <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl'>
              {title}
            </h2>
            <p className='text-xl text-gray-500'>{summary}</p>
          </div>
          <div className='lg:col-span-2'>
            <ul
              role='list'
              className='space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8'
            >
              {people.map((person) => (
                <li key={person.name}>
                  <div className='flex items-center space-x-4 lg:space-x-6'>
                    <Image
                      className='h-16 w-16 rounded-full lg:h-20 lg:w-20'
                      src={person.imageUrl}
                      alt=''
                      width={80}
                      height={80}
                    />
                    <div className='space-y-1 text-lg font-medium leading-6'>
                      <h3>{person.name}</h3>
                      <p className='text-indigo-600'>{person.role}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
