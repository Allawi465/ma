'use client';
import React, { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useTheme } from 'next-themes';

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const light = theme === 'light';
  return (
    <button className=" dark:bg-gray-900 dark:text-yellow-400 bg-gray-100 text-gray-900 w-10 h-10 rounded-full flex justify-center items-center">
      {light ? (
        <MoonIcon onClick={() => setTheme('dark')} />
      ) : (
        <SunIcon onClick={() => setTheme('light')} />
      )}
    </button>
  );
};

export default ThemeChanger;
