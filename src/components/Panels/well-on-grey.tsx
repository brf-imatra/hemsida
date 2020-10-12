import React from 'react';

interface WellOnGreyProps {}

export function WellOnGrey({
  className,
  children,
}: React.PropsWithChildren<React.HTMLAttributes<WellOnGreyProps>>) {
  return (
    <div className={'bg-gray-200 overflow-hidden rounded-lg ' + className}>
      <div className="px-4 py-5 sm:p-6">{children}</div>
    </div>
  );
}
