import React, { PropsWithChildren } from 'react';

interface BodyProps {
  title?: string;
}

export function Body({
  title,
  className,
  children,
}: PropsWithChildren<React.HTMLAttributes<BodyProps>>) {
  const titleElement = title ? (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
    </div>
  ) : null;

  return (
    <div className={'pt-2 pb-6 md:py-6 ' + className}>
      {titleElement}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">{children}</div>
    </div>
  );
}
