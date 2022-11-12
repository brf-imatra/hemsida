import React from 'react';
import Link from 'next/link';

interface CardProps {
  imageUrl: string;
  imageAlt: string;
  published: string;
  title: string;
  summary: string;
  hrefLink: string;
}

export function Card(props: CardProps) {
  return (
    <div className="bg-white border border-lg rounded-lg overflow-hidden">
      <Link href={props.hrefLink}>
        <img
          src={props.imageUrl}
          alt={props.imageAlt}
          className="max-w-md h-40"
          loading="lazy"
        />
        <div className="p-6">
          <h4 className="font-semibold text-lg leading-tight truncate">
            {props.title}
          </h4>
          <div className="text-gray-600 text-xs uppercase font-medium tracking-wide mt-2">
            {props.published}
          </div>
          <div className="mt-6">
            <span className="text-gray-600 text-sm">{props.summary}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
