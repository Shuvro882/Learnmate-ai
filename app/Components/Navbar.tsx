"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Explore", href: "/explore" },
    { name: "About", href: "/about" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  return (
    <nav className="w-full border-b bg-white sticky top-0 z-50">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">

        {/* LOGO */}
        <div className="text-xl font-bold text-indigo-600">
          LearnMate AI
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.name}
            </Link>
          ))}
        </div>

        {/* AUTH BUTTONS (DESKTOP) */}
        <div className="hidden md:flex items-center gap-3">

          <Link
            href="/login"
            className="px-3 py-1 border rounded hover:bg-gray-100 transition"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          >
            Register
          </Link>

        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 text-sm">

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <div className="flex flex-col gap-2 mt-3">

            <Link
              href="/login"
              className="px-3 py-1 border rounded text-center"
              onClick={() => setOpen(false)}
            >
              Login
            </Link>

            <Link
              href="/register"
              className="px-3 py-1 bg-indigo-600 text-white rounded text-center"
              onClick={() => setOpen(false)}
            >
              Register
            </Link>

          </div>

        </div>
      )}

    </nav>
  );
}