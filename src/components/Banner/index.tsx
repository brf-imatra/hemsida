/* This example requires Tailwind CSS v2.0+ */
import { MegaphoneIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface BannerProps {
  title: string;
  message: string;
}

export function Banner({ title, message }: BannerProps) {
  return (
    <div className="bg-yellow-400">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className="flex p-2 rounded-lg bg-yellow-600">
              <MegaphoneIcon
                className="h-6 w-6 text-black"
                aria-hidden="true"
              />
            </span>
            <p className="ml-3 font-medium text-black truncate">
              <span className="md:hidden">{title}</span>
              <span className="hidden md:inline">{message}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
