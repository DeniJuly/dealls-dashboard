"use client";
import { SettingContext, Theme } from "@/types";
import React, { createContext, ReactNode, useState } from "react";

export const SidebarContext = createContext<SettingContext>({
  openSidebar: false,
  toogleSidebar: () => {},
});

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  const toogleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <SidebarContext.Provider value={{ openSidebar, toogleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};
