import { PropsWithChildren } from 'react';

export function CardEdgeToEdge(props: PropsWithChildren<{}>) {
  return (
    <>
      {/* Be sure to use this with a layout container that is full-width on mobile */}
      <div className='overflow-hidden bg-white shadow sm:rounded-lg'>
        <div className='px-4 py-5 sm:p-6'>{props.children}</div>
      </div>
    </>
  );
}
