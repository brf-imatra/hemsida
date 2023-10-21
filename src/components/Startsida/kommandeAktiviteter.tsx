import React from 'react';

export function KommandeAktiviteter() {
  const meetings = [
    {
      id: 0,
      title: 'Medlemsmöte',
      location: 'Folkets Husby - https://folketshusby.se',
      date: new Date(2023, 3, 20, 18, 0, 0),
      endDate: new Date(2023, 3, 20, 20, 0, 0),
    },
    {
      id: 4,
      title: 'Föreningsstämma',
      location: 'Folkets Husby - https://folketshusby.se',
      date: new Date(2023, 4, 4, 17, 45, 0),
      endDate: new Date(2023, 4, 4, 20, 0, 0),
    },
  ];
  const seShort = new Intl.DateTimeFormat('sv-SE');
  const seLong = new Intl.DateTimeFormat('sv-SE', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });
  const seTid = new Intl.DateTimeFormat('sv-SE', {
    hour: 'numeric',
    minute: 'numeric',
  });
  return (
    <section className='mt-12'>
      <h2 className='font-semibold text-gray-900'>Kommande aktiviteter</h2>
      <ol className='mt-2 divide-y divide-gray-200 text-sm leading-6 text-gray-500'>
        {meetings.map((m) => (
          <li key={m.id} className='py-4 sm:flex'>
            <time dateTime={seShort.format(m.date)} className='w-28 flex-none'>
              {seLong.format(m.date)}
            </time>
            <p className='mt-2 flex-auto font-semibold text-gray-900 sm:mt-0'>
              {m.title}
            </p>
            <p className='flex-none sm:ml-6'>{m.location}</p>
            <p className='flex-none sm:ml-6'>
              start{' '}
              <time dateTime={m.date.toISOString()}>
                {seTid.format(m.date)}
              </time>{' '}
              - slut{' '}
              <time dateTime={m.endDate.toISOString()}>
                {seTid.format(m.endDate)}
              </time>
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
