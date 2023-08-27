import React from 'react';
import Image from 'next/image';

interface SplitWithImageProps {
  introducing?: string;
  title: string;
  content: any;
  summary?: string;
  imageSrc: string;
}

export function SplitWithImage({
  introducing,
  title,
  content,
  summary,
  imageSrc,
}: SplitWithImageProps) {
  return (
    <div className='relative bg-white'>
      <div className='lg:absolute lg:inset-0'>
        <div className='lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2'>
          <Image
            className='h-56 w-full object-cover lg:absolute lg:h-full'
            src={imageSrc}
            loading='lazy'
            alt=''
            height={720}
            width={1280}
          />
        </div>
      </div>
      <div className='relative px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8'>
        <div className='lg:col-start-2 lg:pl-8'>
          <div className='mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg'>
            <p className='font-semibold uppercase leading-6 tracking-wide text-indigo-600'>
              {introducing}
            </p>
            <h2 className='mb-8 mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:leading-10'>
              {title}
            </h2>
            <p className='mb-5 text-lg leading-7 text-gray-500'>{summary}</p>
            <div
              className='prose prose-lg text-gray-500'
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
