import React from 'react';

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
    <div className="relative bg-white">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover lg:absolute lg:h-full"
            src={imageSrc}
            loading="lazy"
            alt=""
          />
        </div>
      </div>
      <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
        <div className="lg:col-start-2 lg:pl-8">
          <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
            <p className="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
              {introducing}
            </p>
            <h2 className="mt-2 mb-8 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              {title}
            </h2>
            <p className="text-lg leading-7 text-gray-500 mb-5">{summary}</p>
            <div className="prose prose-lg text-gray-500"
                 dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
