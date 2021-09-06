import React from 'react';
import ReactMarkdown from 'react-markdown';

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
    <div className="py-16 xl:py-36 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-max-content lg:max-w-7xl mx-auto">
        <div className="relative z-10 mb-8 md:mb-2 md:px-6">
          <div className="text-base max-w-prose lg:max-w-none">
            <p className="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
              {introducing}
            </p>
            <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              {title}
            </h2>
          </div>
        </div>
        <div className="relative">
          <div className="relative md:bg-white md:p-6">
            <div className="lg:grid lg:grid-cols-2 lg:gap-6 mb-8">
              <div className="prose prose-lg text-gray-500 mb-6 lg:max-w-none lg:mb-0">
                <ReactMarkdown source={leftContent} />
              </div>
              <div className="prose prose-lg text-gray-500">
                <ReactMarkdown source={rightContent} />
              </div>
            </div>
            {/* <div className="inline-flex rounded-md shadow">
          <a href="#" className="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:ring-indigo transition duration-150 ease-in-out">
            Contact sales
          </a>
        </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
