import React from 'react';

interface WellOnGreyProps {}

export function WellOnGrey({
  className,
  children,
}: React.PropsWithChildren<React.HTMLAttributes<WellOnGreyProps>>) {
  return (
    <div className={'overflow-hidden rounded-lg bg-gray-200 ' + className}>
      <div className='px-4 py-5 sm:p-6'>{children}</div>
    </div>
  );
}
