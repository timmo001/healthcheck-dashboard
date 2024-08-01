"use client";
import { useMemo } from "react";
import { usePathname } from "next/navigation";

import { ThemePicker } from "~/components/theme-picker";
import { Button } from "~/components/ui/button";
import Link from "next/link";

export function Header() {
  const pathname = usePathname();

  const isOnMainLayout = useMemo<boolean>(
    () => (pathname === "/" || pathname === "/dashboard" ? true : false),
    [pathname],
  );

  const isOnDashboard = useMemo<boolean>(
    () => (pathname.startsWith("/dashboard/") ? true : false),
    [pathname],
  );

  return (
    <header
      className={`flex flex-row justify-between gap-2 p-2 ${isOnMainLayout ? "bg-slate-800 dark:bg-slate-900" : "bg-slate-800 dark:bg-transparent"}`}
    >
      <div className="flex items-center gap-2"></div>
      <div className="flex flex-row items-center gap-2">
        {isOnDashboard && (
          <Link href={`${pathname}/edit`}>
            <Button variant="secondary" size="sm">
              Edit
            </Button>
          </Link>
        )}
        <ThemePicker />
      </div>
    </header>
  );
}
