import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface CardProps {
  imageUrl: string;
  imageAlt: string;
  published?: string;
  title: string;
  summary: string;
  hrefLink: string;
}

export function Card(props: CardProps) {
  return (
    <div className='border-lg overflow-hidden rounded-lg border bg-white'>
      <Link href={props.hrefLink}>
        <Image
          src={props.imageUrl}
          alt={props.imageAlt}
          className='h-40 max-w-md'
          loading='lazy'
          height={160}
          width={320}
        />
        <div className='p-6'>
          <h4 className='truncate text-lg font-semibold leading-tight'>
            {props.title}
          </h4>
          <div className='mt-2 text-xs font-medium uppercase tracking-wide text-gray-600'>
            {props.published}
          </div>
          <div className='mt-6'>
            <span className='text-sm text-gray-600'>{props.summary}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
