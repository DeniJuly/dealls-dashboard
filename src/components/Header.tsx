"use client";
import { SidebarContext } from "@/hooks/useSidebarContext";
import Image from "next/image";
import React, { useContext, useState } from "react";

const Header = () => {
  const { toogleSidebar } = useContext(SidebarContext);
  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-white border-grey-70">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              onClick={toogleSidebar}
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
            <a href="https://dealls.com" className="flex ml-2 md:mr-24">
              <Image
                src="/logo.svg"
                className="object-contain"
                alt="Dealls Logo"
                width={98}
                height={46}
              />
            </a>
          </div>
          <div className="flex items-center">
            <Image
              className="object-contain rounded-full"
              src="/foto.jpg"
              alt="Deni Juli Setiawan"
              width={32}
              height={32}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
