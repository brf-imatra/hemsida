import React, { PropsWithChildren } from 'react';
import { Transition } from '@headlessui/react';
import { MenuItem, MenuItemIcon } from '..';

interface MenuShellProps {
  isShowing: boolean;
  setIsShowing: (showing: boolean) => void;
}

export function MenuShell(props: PropsWithChildren<MenuShellProps>) {
  const { isShowing, setIsShowing, children } = props;

  const profileElement = false ? (
    <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
      <a href="#" className="flex-shrink-0 w-full group block">
        <div className="flex items-center">
          <div>
            <img
              className="inline-block h-9 w-9 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div className="ml-3">
            <p className="text-sm leading-5 font-medium text-gray-700 group-hover:text-gray-900">
              Tom Cook 1
            </p>
            <p className="text-xs leading-4 font-medium text-gray-500 group-hover:text-gray-700 transition ease-in-out duration-150">
              View profile
            </p>
          </div>
        </div>
      </a>
    </div>
  ) : null;

  const mobileProfileElement = false ? (
    <div className="flex-shrink-0 flex border-t border-grey-200 p-4 bg-red-600">
      <a href="#" className="flex-shrink-0 group block focus:outline-none">
        <div className="flex items-center">
          <div>
            <img
              className="inline-block h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div className="ml-3">
            <p className="text-base leading-6 font-medium text-gray-700 group-hover:text-gray-900">
              Tom Cook
            </p>
            <p className="text-sm leading-5 font-medium text-gray-500 group-hover:text-gray-700 group-focus:underline transition ease-in-out duration-150">
              View profile
            </p>
          </div>
        </div>
      </a>
    </div>
  ) : null;

  return (
    <>
      <div className="h-screen flex overflow-hidden bg-white">
        <Transition show={isShowing}>
          <div className="md:hidden">
            <div className="fixed inset-0 flex z-40">
              <Transition.Child
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                {(ref) => (
                  <div ref={ref} className="fixed inset-0">
                    <div
                      onClick={() => setIsShowing(false)}
                      className="absolute inset-0 opacity-75 bg-cool-gray-600"
                    />
                  </div>
                )}
              </Transition.Child>

              <Transition.Child
                appear={true}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                {(ref) => (
                  <div ref={ref}>
                    <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
                      <div className="absolute top-0 right-0 -mr-1 p-1">
                        {/* start */}
                        <div
                          className="absolute top-0 right-0 -mr-1 p-1"
                          onClick={() => setIsShowing(false)}
                        >
                          <Transition.Child
                            className="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600"
                            aria-label="Close sidebar"
                            as="button"
                            onClick={() => setIsShowing(false)}
                          >
                            <svg
                              className="h-6 w-6 text-gray-600 active:text-white"
                              stroke="currentColor"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </Transition.Child>
                        </div>
                        {/* end */}
                      </div>
                      <div className="flex-1 h-auto pt-0 pb-2 overflow-y-auto">
                        <div className="flex-shrink-0 flex items-center px-4">
                          <img
                            className="h-12 md:h-16 w-auto"
                            src="/brf_imatra_logo_359x322.jpg"
                            alt="Brf Imatra logo"
                          />
                        </div>
                        <nav className="mt-2 px-2 space-y-1">
                          <MenuItem
                            text="Hem"
                            href="/"
                            mobile={true}
                            icon={MenuItemIcon.home}
                            setIsShowing={setIsShowing}
                          />
                          <MenuItem
                            text="Medlemsinformation"
                            href="/medlemsinformation"
                            mobile={true}
                            icon={MenuItemIcon.users}
                            setIsShowing={setIsShowing}
                          />
                          <MenuItem
                            text="Kontakta oss"
                            href="/kontakt"
                            mobile={true}
                            icon={MenuItemIcon.folder}
                            setIsShowing={setIsShowing}
                          />
                          {/* <MenuItem
                            text="Föreningsstämma"
                            mobile={true}
                            icon={MenuItemIcon.calendar}
                            setIsShowing={setIsShowing}
                          /> */}
                          <MenuItem
                            text="Dokument"
                            href="/dokuments"
                            mobile={true}
                            icon={MenuItemIcon.document}
                            setIsShowing={setIsShowing}
                          />
                          {/* <MenuItem
                            text="Nyhetsarkiv"
                            mobile={true}
                            icon={MenuItemIcon.barchart}
                            setIsShowing={setIsShowing}
                          />
                          <MenuItem
                            text="Hjälp"
                            mobile={true}
                            icon={MenuItemIcon.support}
                            setIsShowing={setIsShowing}
                          /> */}
                        </nav>
                      </div>
                      {mobileProfileElement}
                    </div>

                    <div className="flex-shrink-0 w-14"/>
                  </div>
                )}
              </Transition.Child>
            </div>
          </div>
        </Transition>

        {/* Static sidebar for desktop */}
        <div className="hidden md:flex md:flex-shrink-0">
          <div className="flex flex-col w-64">
            <div className="flex flex-col h-0 flex-1 border-r border-gray-200 bg-white">
              <div className="flex-1 flex flex-col pt-0 pb-1 overflow-y-auto">
                <div className="flex items-center flex-shrink-0 px-4">
                  <img
                    className="h-24 w-auto"
                    src="/brf_imatra_logo_359x322.jpg"
                    alt="Brf Imatra logo"
                  />
                </div>
                <nav className="mt-1 flex-1 px-2 bg-white space-y-1">
                  <MenuItem
                    text="Hem"
                    href="/"
                    icon={MenuItemIcon.home}
                    setIsShowing={setIsShowing}
                  />
                  <MenuItem
                    text="Medlemsinformation"
                    href="/medlemsinformation"
                    icon={MenuItemIcon.users}
                    setIsShowing={setIsShowing}
                  />
                  <MenuItem
                    text="Kontakta oss"
                    href="/kontakt"
                    icon={MenuItemIcon.folder}
                    setIsShowing={setIsShowing}
                  />
                  {/* <MenuItem
                    text="Föreningsstämma"
                    icon={MenuItemIcon.calendar}
                    setIsShowing={setIsShowing}
                  /> */}
                  <MenuItem
                    text="Dokument"
                    href="/dokuments"
                    icon={MenuItemIcon.document}
                    setIsShowing={setIsShowing}
                  />
                  {/* <MenuItem
                    text="Nyhetsarkiv"
                    icon={MenuItemIcon.barchart}
                    setIsShowing={setIsShowing}
                  />
                  <MenuItem
                    text="Hjälp"
                    icon={MenuItemIcon.support}
                    setIsShowing={setIsShowing}
                  /> */}
                </nav>
              </div>
              {profileElement}
            </div>
          </div>
        </div>
        <div className="flex flex-col w-0 flex-1 overflow-hidden" tabIndex={0}>
          <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
            <button
              className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150"
              aria-label="Open sidebar"
              onClick={() => setIsShowing(true)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <main
            className="flex-1 relative z-0 overflow-y-auto focus:outline-none"
            tabIndex={0}
          >
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
