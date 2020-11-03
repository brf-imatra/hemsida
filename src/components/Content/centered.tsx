import React from 'react';
import ReactMarkdown from 'react-markdown';

interface CenteredProps {
  introducing?: string;
  title: string;
  content: any;
  summary?: string;
}

export function Centered({
  introducing,
  title,
  content,
  summary,
}: CenteredProps) {
  const introducingElement = introducing ? (
    <p className="text-base text-center leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
      {introducing}
    </p>
  ) : null;

  const leadingElement = summary ? (
    <p className="text-xl text-gray-500 leading-8">{summary}</p>
  ) : null;

  return (
    <div className="relative py-16 bg-white overflow-hidden">
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto mb-6">
          {introducingElement}
          <h2 className="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            {title}
          </h2>
          {leadingElement}
        </div>
        <div className="prose prose-lg text-gray-500 mx-auto">
          <ReactMarkdown source={content} />
        </div>
      </div>
    </div>
  );
}
