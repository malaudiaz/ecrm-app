"use client";
import React, { useState, ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "../Header";
import { IMenu } from "@/lib/definitions";

export default function DefaultLayout({
  children,
  menu
}: {
  children: React.ReactNode;
  menu: IMenu[];
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <html lang="es">
      <body>
        <div className="flex h-screen overflow-hidden bg-white dark:bg-neutral-700">
          <Sidebar menu={menu} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <main>
              <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                {children}
              </div>
            </main>

          </div>
        </div>
      </body>
    </html>
  );
}
