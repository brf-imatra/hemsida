import React, { PropsWithChildren } from 'react';
import { MenuItemIcon } from '..';

interface ButtonWithIconProps {
  primary?: boolean;
  icon: MenuItemIcon;
}

export function ButtonWithIcon({
  primary = true,
  icon,
  children,
}: PropsWithChildren<ButtonWithIconProps>) {
  const primaryButton =
    'inline-flex items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150';
  const whiteButton =
    'inline-flex items-center px-6 py-3 border border-gray-300 text-base leading-6 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150';

  return (
    <span className="inline-flex rounded-md shadow-sm">
      <button type="button" className={primary ? primaryButton : whiteButton}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="-ml-1 mr-3 h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={icon}
          />
        </svg>
        {children}
      </button>
    </span>
  );
}
