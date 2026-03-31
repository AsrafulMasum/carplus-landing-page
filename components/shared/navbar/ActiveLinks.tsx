"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function ActiveLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`pb-0 px-1 ${
        isActive
          ? "border-b-2 border-[#f55118]"
          : "border-b-2 border-transparent"
      } transition-all duration-300`}
    >
      {children}
    </Link>
  );
}