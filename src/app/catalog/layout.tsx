"use client";

import CatalogSidebar from "@/components/pages/catalog/CatalogSidebar";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

export default function CatalogLayout({ children }: PropsWithChildren) {
  const path = usePathname();
  const isMobile = useMediaQuery(1000);

  const isProductDetails = /^\/catalog\/\d+$/.test(path);
  return (
    <>
      {isMobile || isProductDetails ? (
        <div>{children}</div>
      ) : (
        <div className=" flex px-4 h-full">
          <aside className="border-r border-neutral-200 p-4 flex-[0_0_250px]">
            <CatalogSidebar />
          </aside>
          <main className="flex-1 min-w-0">{children}</main>
        </div>
      )}
    </>
  );
}
