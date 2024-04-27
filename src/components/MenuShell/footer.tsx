import * as React from 'react';
import { BuildingOfficeIcon } from '@heroicons/react/24/outline';

const navigation = [
  {
    name: 'HSB Login',
    href: 'https://mitthsb.hsb.se/?',
    icon: (props: any) => <BuildingOfficeIcon {...props} />,
  },
];

export default function SocialLinksFooter() {
  return (
    <footer className='bg-white'>
      <div className='mx-auto max-w-7xl px-4 py-12 sm:px-6 md:flex md:items-center md:justify-between lg:px-8'>
        <div className='flex justify-center space-x-6 md:order-2'>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className='text-gray-400 hover:text-gray-500'
            >
              <span className='sr-only'>{item.name}</span>
              <item.icon className='h-6 w-6' aria-hidden='true' />
            </a>
          ))}
          <ShareButton />
        </div>
        <div className='mt-8 md:order-1 md:mt-0'>
          <p className='text-center text-base text-gray-400'>
            &copy; 2024 Brf Imatra.
          </p>
        </div>
      </div>
    </footer>
  );
}

function ShareButton() {
  const share = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Brf Imatra',
          text: 'HSB Brf Imatra i Stockholm',
          url: 'https://brfimatra.se',
        });
        console.log('Data was shared successfully');
      } catch (err: any) {
        console.error('Share failed:', err.message);
      }
    } else {
      console.log('navigator.share() not supported.');
    }
  };

  return (
    <button className='text-gray-400 hover:text-gray-500' onClick={share}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='h-6 w-6'
      >
        <title>Dela brf Imatra hemsida</title>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z'
        />
      </svg>
    </button>
  );
}
