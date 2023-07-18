"use client";
import { SidebarContext } from "@/hooks/useSidebarContext";
import Link from "next/link";
import React, { useContext } from "react";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const { openSidebar } = useContext(SidebarContext);
  const pathname = usePathname();
  const menu = pathname.split("/")[1];
  return (
    <aside
      id="logo-sidebar"
      className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
        openSidebar ? "" : "-translate-x-full"
      } bg-white border-r border-gray-200 sm:translate-x-0`}
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
        <ul className="space-y-2 font-medium">
          <li>
            <Link
              href="/"
              className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-purple-10 group ${
                menu === "" && "menu-active"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-database"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0"></path>
                <path d="M4 6v6a8 3 0 0 0 16 0v-6"></path>
                <path d="M4 12v6a8 3 0 0 0 16 0v-6"></path>
              </svg>
              <span className="ml-3">Products</span>
            </Link>
          </li>
          <li>
            <Link
              href="/carts"
              className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-purple-10 hover:text-purple group ${
                menu === "carts" && "menu-active"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-shopping-cart"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M17 17h-11v-14h-2"></path>
                <path d="M6 5l14 1l-1 7h-13"></path>
              </svg>
              <span className="ml-3">Carts</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
