/* This example requires Tailwind CSS v2.0+ */
import { MegaphoneIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface BannerProps {
  title: string;
  message: string;
}

export function Banner({ title, message }: BannerProps) {
  return (
    <div className='rounded-md bg-yellow-50 p-4'>
      <div className='flex'>
        <div className='flex-shrink-0'>
          <MegaphoneIcon className='h-6 w-6 text-black' aria-hidden='true' />
        </div>
        <div className='ml-3'>
          <h3 className='text-sm font-medium text-yellow-800'>{title}</h3>
          <div className='mt-2 text-sm text-yellow-700'>
            <p>{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
