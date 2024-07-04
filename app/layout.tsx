"use client";

import React, { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";

import "@/css/globals.css"
import "@/css/satoshi.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [loading, setLoading] = useState<boolean>(true);

  // const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => setLoading(false), 10);
  }, []);


  return (
  <html lang="en">
  <body suppressHydrationWarning={true}>
    <div className="dark:bg-boxdark-2 dark:text-bodydark h-full">
      {loading ? <Loader /> : children}
    </div>
  </body>
</html>

  )
}
