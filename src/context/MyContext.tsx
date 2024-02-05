// src/context/MyContext.tsx

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ContextType {
  value: any;
  setValue: React.Dispatch<React.SetStateAction<any>>;
}

const MyContext = createContext<ContextType | undefined>(undefined);

interface MyContextProviderProps {
  children: ReactNode;
}

export const MyContextProvider: React.FC<MyContextProviderProps> = ({ children }) => {
  const [value, setValue] = useState(null);

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (context === undefined) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
};
