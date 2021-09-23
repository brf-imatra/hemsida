import React, {PropsWithChildren} from 'react';
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
    <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
      {introducing}
    </span>
  ) : null;

  const leadingElement = summary ? (
    <p className="mt-8 text-xl text-gray-500 leading-8">{summary}</p>
  ) : null;

  return (
    <div className="relative py-16 bg-white overflow-hidden">
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            {introducingElement}
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {title}
            </span>
          </h1>
          {leadingElement}
        </div>
        <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
          <ReactMarkdown source={content} />
        </div>
      </div>
    </div>
  );
}



export function Centered2({
  introducing,
  title,
  summary,
    children
}: PropsWithChildren<CenteredProps>) {
  const introducingElement = introducing ? (
    <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
      {introducing}
    </span>
  ) : null;

  const leadingElement = summary ? (
    <p className="mt-8 text-xl text-gray-500 leading-8">{summary}</p>
  ) : null;

  return (
    <div className="relative py-16 bg-white overflow-hidden">
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            {introducingElement}
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {title}
            </span>
          </h1>
          {leadingElement}
        </div>
        <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
