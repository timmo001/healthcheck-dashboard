"use client";

import { ThemePicker } from "~/components/theme-picker";

export function Header() {
  return (
    <header className="flex flex-row justify-between gap-2 p-2">
      <div className="flex items-center gap-2"></div>
      <div className="flex flex-row items-center gap-2">
        <ThemePicker />
      </div>
    </header>
  );
}
