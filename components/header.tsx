"use client";
import Image from "next/image";
import Link from "next/link";
import { File, UsersRound } from "lucide-react";

import { useTheme } from "next-themes";
import { NavButton } from "@/components/NavButton";
import { ModeToggle } from "@/components/theme/toggle";

export function Header() {
  const { theme } = useTheme();
  return (
    <header className="animate-slide sticky top-0 z-20 mx-auto h-16 w-full max-w-7xl border-b px-2 py-4">
      <div className="flex h-8 w-full items-center justify-between">
        <Link href="/">
          <Image
            src={
              theme === "light"
                ? "/images/logo-light.png"
                : "/images/logo-dark.png"
            }
            alt="Boxi Sleep Logo"
            width={100}
            height={70}
          />
        </Link>
        <div className="flex items-center">
          <NavButton href="/tickets" label="Tickets" icon={File} />

          <NavButton href="/customers" label="Customers" icon={UsersRound} />

          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
