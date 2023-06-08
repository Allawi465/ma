'use client';
import React, { createContext, useState, ReactNode } from 'react';

type SliderContextType = {
  showSlider: boolean;
  setShowSlider: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SliderContext = createContext<SliderContextType>({
  showSlider: false,
  setShowSlider: () => {},
});

type SliderProviderProps = {
  children: ReactNode;
};

export function SliderProvider({ children }: SliderProviderProps) {
  const [showSlider, setShowSlider] = useState(true);

  return (
    <SliderContext.Provider value={{ showSlider, setShowSlider }}>
      {children}
    </SliderContext.Provider>
  );
}
