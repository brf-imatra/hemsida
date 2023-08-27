import React from 'react';
import Image from 'next/image';

interface TwoColumnsWithImageProps {
  introducing?: string;
  title: string;
  content: any;
  leading?: string;
}

export function TwoColumnsWithImage({
  introducing,
  title,
  content,
  leading,
}: TwoColumnsWithImageProps) {
  return (
    <div className='overflow-hidden bg-white'>
      <div className='relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='absolute bottom-0 left-3/4 top-0 hidden w-screen bg-gray-50 lg:block' />
        <div className='mx-auto max-w-prose text-base lg:max-w-none'>
          <p className='text-base font-semibold uppercase leading-6 tracking-wide text-indigo-600'>
            {introducing}
          </p>
          <h2 className='mb-8 mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:leading-10'>
            {title}
          </h2>
        </div>
        <div className='lg:grid lg:grid-cols-2 lg:gap-8'>
          <div className='relative mb-8 lg:col-start-2 lg:row-start-1 lg:mb-0'>
            <svg
              className='absolute right-0 top-0 -mr-20 -mt-20 hidden lg:block'
              width='404'
              height='384'
              fill='none'
              viewBox='0 0 404 384'
            >
              <defs>
                <pattern
                  id='de316486-4a29-4312-bdfc-fbce2132a2c1'
                  x='0'
                  y='0'
                  width='20'
                  height='20'
                  patternUnits='userSpaceOnUse'
                >
                  <rect
                    x='0'
                    y='0'
                    width='4'
                    height='4'
                    className='text-gray-200'
                    fill='currentColor'
                  />
                </pattern>
              </defs>
              <rect
                width='404'
                height='384'
                fill='url(#de316486-4a29-4312-bdfc-fbce2132a2c1)'
              />
            </svg>
            <div className='relative mx-auto max-w-prose text-base lg:max-w-none'>
              <figure>
                <div className='pb-7/12 relative lg:pb-0'>
                  <Image
                    src='https://images.unsplash.com/photo-1546913199-55e06682967e?ixlib=rb-1.2.1&auto=format&fit=crop&crop=focalpoint&fp-x=.735&fp-y=.55&w=1184&h=1376&q=80'
                    alt=''
                    width={1184}
                    height={1376}
                    className='absolute inset-0 h-full w-full rounded-lg object-cover object-center shadow-lg lg:static lg:h-auto'
                    loading='lazy'
                  />
                </div>
                <figcaption className='mt-3 flex text-sm text-gray-500'>
                  {/* <!-- Heroicon name: camera --> */}
                  <svg
                    className='mr-2 h-5 w-5 flex-none text-gray-400'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z'
                      clipRule='evenodd'
                    />
                  </svg>
                  Photograph by Marcus O’Leary
                </figcaption>
              </figure>
            </div>
          </div>
          <div>
            <div className='mx-auto max-w-prose text-base lg:max-w-none'>
              <p className='mb-5 text-lg leading-7 text-gray-500'>{leading}</p>
            </div>
            <div
              className='prose prose-lg mx-auto text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none'
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
