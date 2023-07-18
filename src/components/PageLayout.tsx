import { SidebarProvider } from "@/hooks/useSidebarContext";
import React from "react";

import Header from "./Header";
import Sidebar from "./Sidebar";

const PageLayout = () => {
  return (
    <SidebarProvider>
      <Header />
      <Sidebar />
    </SidebarProvider>
  );
};

export default PageLayout;
