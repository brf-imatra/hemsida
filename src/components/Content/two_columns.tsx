import React from 'react';

interface TwoColumnsProps {
  introducing?: string;
  title: string;
  leftContent: any;
  rightContent: any;
}

export function TwoColumns({
  introducing,
  title,
  leftContent,
  rightContent,
}: TwoColumnsProps) {
  return (
    <div className='overflow-hidden bg-white px-4 py-16 sm:px-6 lg:px-8 xl:py-36'>
      <div className='max-w-max-content mx-auto lg:max-w-7xl'>
        <div className='relative z-10 mb-8 md:mb-2 md:px-6'>
          <div className='max-w-prose text-base lg:max-w-none'>
            <p className='font-semibold uppercase leading-6 tracking-wide text-indigo-600'>
              {introducing}
            </p>
            <h2 className='mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:leading-10'>
              {title}
            </h2>
          </div>
        </div>
        <div className='relative'>
          <div className='relative md:bg-white md:p-6'>
            <div className='mb-8 lg:grid lg:grid-cols-2 lg:gap-6'>
              <div
                className='prose prose-lg mb-6 text-gray-500 lg:mb-0 lg:max-w-none'
                dangerouslySetInnerHTML={{ __html: leftContent }}
              />
              <div
                className='prose prose-lg text-gray-500'
                dangerouslySetInnerHTML={{ __html: rightContent }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
