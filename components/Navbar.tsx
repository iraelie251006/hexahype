"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { navItems } from "@/lib/NavItems";

export function Navbar() {
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
