"use client"
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavItems = () => {
const pathname = usePathname();

  return (
    <nav className="flex mt-4 text-md  justify-between items-center gap-5">
      {[
        { name: "Home", url: "/" },
        { name: "Pay", url: "/subscription" },
        { name: "Try", url: "/companions" },
        { name: "Profile", url: "/profile" },
      ].map((item) => (
        <Link
          key={item.name}
          href={item.url}
          className={cn(pathname === item.url && "text-[var(--background)] bg-[var(--foreground)] py-1 px-4 rounded-3xl transition-all duration-200 ease-in-out")}
        >
          {item.name}

          
        </Link>
      ))}
    </nav>
  );
};

export default NavItems;
