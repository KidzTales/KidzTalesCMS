'use client';
import React, { createContext, useContext, useRef, useState } from 'react';

const TopBarContext = createContext({
  refs: { current: [] as any[] },
  userMenuOpen: false,
  workSpaceMenuOpen: false,
  handleUserMenuOpenChange: () => {},
  handleWorkSpaceMenuOpenChange: () => {},
  popoverTrigger: 'hover' as 'hover' | 'click',
  handleTourOpenChange: () => {},
  tourOpen: false,
});

export const useTopBarStatus = () => {
  return useContext(TopBarContext);
};

const TopBarContextProvider = ({ children }: { children: React.ReactNode }) => {
  const elementRefs = useRef<never[] | HTMLElement[]>([]);
  const [userMenuOpen, setUserMenuOpen] = useState<boolean>(false);
  const [workSpaceMenuOpen, setWorkSpaceMenuOpen] = useState<boolean>(false);
  const [tourOpen, setTourOpen] = useState<boolean>(false);

  const handleUserMenuOpenChange = () => setUserMenuOpen(!userMenuOpen);
  const handleWorkSpaceMenuOpenChange = () => setWorkSpaceMenuOpen(!workSpaceMenuOpen);
  const handleTourOpenChange = () => setTourOpen(!tourOpen);

  return (
    <TopBarContext.Provider
      value={{
        refs: elementRefs,
        userMenuOpen,
        workSpaceMenuOpen,
        handleUserMenuOpenChange,
        handleWorkSpaceMenuOpenChange,
        handleTourOpenChange,
        popoverTrigger: tourOpen ? 'click' : 'hover',
        tourOpen,
      }}
    >
      {children}
    </TopBarContext.Provider>
  );
};

export default TopBarContextProvider;
