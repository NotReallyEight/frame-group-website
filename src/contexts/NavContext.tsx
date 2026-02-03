"use client";

import {
  createContext,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
  useState,
  useContext,
} from "react";

type NavContextType = {
  isNavOpen: boolean;
  setIsNavOpen: Dispatch<SetStateAction<boolean>>;
};

const NavContext = createContext<NavContextType | undefined>(undefined);

export function NavProvider({ children }: { children: ReactNode }) {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  return (
    <NavContext.Provider value={{ isNavOpen, setIsNavOpen }}>
      {children}
    </NavContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useNav() {
  const ctx = useContext(NavContext);

  if (!ctx) throw new Error("useNav must be used within a NavProvider");

  return ctx;
}
