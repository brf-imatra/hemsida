import React, { PropsWithChildren } from 'react';

interface CenteredProps {
  introducing?: string;
  title: string;
  summary?: string;
}

export function Centered({
  introducing,
  title,
  summary,
  children,
}: PropsWithChildren<CenteredProps>) {
  const introducingElement = introducing ? (
    <span className='block text-center text-base font-semibold uppercase tracking-wide text-indigo-600'>
      {introducing}
    </span>
  ) : null;

  const leadingElement = summary ? (
    <p className='mt-8 text-xl leading-8 text-gray-500'>{summary}</p>
  ) : null;

  return (
    <div className='relative overflow-hidden bg-white py-16'>
      <div className='relative px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-prose text-lg'>
          <h1>
            {introducingElement}
            <span className='mt-2 block text-center text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl'>
              {title}
            </span>
          </h1>
          {leadingElement}
        </div>
        <div className='prose prose-lg prose-indigo mx-auto mt-6 text-gray-500'>
          {children}
        </div>
      </div>
    </div>
  );
}
