import React from 'react';
import { Body } from '../components';

const styrelsemedlemmar: People[] = [
  {
    name: 'Mimmi Wiktorsson',
    role: 'Ledamot / Ordförande',
    imageUrl: '/avatars/img_avatar_w.png',
  },
  {
    name: 'Linda Rebane',
    role: 'Ledamot / Vice Ordförande',
    imageUrl: '/avatars/img_avatar_w.png',
  },
  {
    name: 'Marcus Holmgren',
    role: 'Ledamot / Sekreterare',
    imageUrl: '/avatars/img_avatar_m.png',
  },
  {
    name: 'Maria Enander',
    role: 'Ledamot ',
    imageUrl: '/avatars/img_avatar_w.png',
  },
  {
    name: 'Emmelie Wiktorsson',
    role: 'Suppleant',
    imageUrl: '/avatars/img_avatar_w.png',
  },
  {
    name: 'Hayrullah Erdogan',
    role: 'Suppleant',
    imageUrl: '/avatars/img_avatar_m.png',
  },
];

const valberedningen: People[] = [
  {
    name: 'Lena Ringdahl',
    role: 'Sammankallande',
    imageUrl: '/avatars/img_avatar_w.png',
  },
  {
    name: 'Abdullah Kadir-Danzas',
    role: 'Ledamot',
    imageUrl: '/avatars/img_avatar_m.png',
  },
  {
    name: 'Aafreen Gillani Haji',
    role: 'Ledamot',
    imageUrl: '/avatars/img_avatar_m.png',
  },
];

export default function Styrelsen() {
  return (
    <Body>
      <TeamWithSmallImages
        title="Styrelsemedlemmar"
        summary="Verksamhetsåret maj 2020 till april/maj 2021."
        people={styrelsemedlemmar}
      />
      <TeamWithSmallImages
        title="Valberedningen"
        summary="Verksamhetsåret maj 2020 till april/maj 2021."
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
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              {title}
            </h2>
            <p className="text-xl text-gray-500">{summary}</p>
          </div>
          <div className="lg:col-span-2">
            <ul
              role="list"
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8"
            >
              {people.map((person) => (
                <li key={person.name}>
                  <div className="flex items-center space-x-4 lg:space-x-6">
                    <img
                      className="w-16 h-16 rounded-full lg:w-20 lg:h-20"
                      src={person.imageUrl}
                      alt=""
                    />
                    <div className="font-medium text-lg leading-6 space-y-1">
                      <h3>{person.name}</h3>
                      <p className="text-indigo-600">{person.role}</p>
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
