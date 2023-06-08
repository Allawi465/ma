'use client';
import Link from 'next/link';
import { useContext } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import ThemeChanger from '../../themeDark';
import { useRouter } from 'next/router';
import { SliderContext } from '../../../provider';

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: 'Home', href: '/', current: false },
  { name: 'About me', href: '/about', current: false },
  { name: 'My work', href: '/projects', current: false },
];

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const router = useRouter();

  const { setShowSlider } = useContext(SliderContext);

  const handleShowSlider = () => {
    setShowSlider((prevShowSlider: boolean) => !prevShowSlider);
  };

  const updatedNavigation = navigation.map((item) => {
    return {
      ...item,
      current: item.href === router.pathname,
    };
  });

  return (
    <header>
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                  <div className="flex items-center justify-center">
                    <div className="rounded-full bg-dark text-white border-2 border-solid border-white dark:border-white ">
                      <Link
                        href={'/'}
                        className="w-14 h-14 flex items-center justify-center"
                      >
                        <span className="text-2xl font-bold">MA</span>
                      </Link>
                    </div>
                  </div>

                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-2">
                      {updatedNavigation.map((item) => (
                        <div key={item.name}>
                          {item.href === '/projects' ? (
                            <div
                              className={classNames(
                                item.current
                                  ? 'text-black font-semibold dark:text-gray-100'
                                  : 'text-lightGray dark:text-darkGrey',
                                'rounded-md mx-4 pt-2 text-sm font-medium mt-2.5 relative group cursor-pointer'
                              )}
                              onClick={handleShowSlider} // Handle click event for "My work" link
                            >
                              {item.name}
                              <span
                                className={`h-[1px] inline-block bg-black dark:bg-white absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
                                  router.asPath === item.href ? 'w-full' : 'w-0'
                                }`}
                              >
                                &nbsp;
                              </span>
                            </div>
                          ) : (
                            <Link href={item.href}>
                              <div
                                className={classNames(
                                  item.current
                                    ? 'text-black font-semibold dark:text-gray-100'
                                    : 'text-lightGray dark:text-darkGrey',
                                  'rounded-md mx-4 pt-2 text-sm font-medium mt-2.5 relative group'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                              >
                                {item.name}
                                <span
                                  className={`h-[1px] inline-block bg-black dark:bg-white absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
                                    router.asPath === item.href
                                      ? 'w-full'
                                      : 'w-0'
                                  }`}
                                >
                                  &nbsp;
                                </span>
                              </div>
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <ThemeChanger />
                </div>
              </div>
            </div>
            <Disclosure.Panel className="sm:hidden">
              {({ close }) => (
                <div className="space-y-1 px-2 pb-3 pt-2 text-center">
                  {updatedNavigation.map((item) => (
                    <div key={item.name}>
                      <Link href={item.href}>
                        <div
                          className={classNames(
                            item.current
                              ? 'text-black font-semibold dark:text-gray-100'
                              : 'text-lightGray dark:text-darkGrey',
                            'rounded-md mx-4 pt-2 text-sm font-medium mt-2.5 relative group'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                          onClick={() => {
                            if (item.href !== router.pathname) {
                              close();
                            }
                          }}
                        >
                          {item.name}
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  );
}
