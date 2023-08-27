import React from 'react';

interface BasicCardProps {}

export function BasicCard({
  id,
  className,
  children,
}: React.PropsWithChildren<React.HTMLAttributes<BasicCardProps>>) {
  return (
    <div
      id={id}
      className={'overflow-hidden rounded-lg bg-white shadow ' + className}
    >
      <div className='px-4 py-5 sm:p-6'>{children}</div>
    </div>
  );
}
