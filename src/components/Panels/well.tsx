import React from 'react';

interface WellProps {}

export function Well({
  className,
  children,
}: React.PropsWithChildren<React.HTMLAttributes<WellProps>>) {
  return (
    <div className={'bg-gray-50 overflow-hidden rounded-lg ' + className}>
      <div className="px-4 py-5 sm:p-6">{children}</div>
    </div>
  );
}
