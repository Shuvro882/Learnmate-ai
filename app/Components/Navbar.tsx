"use client";

import { useState } from "react";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const { user, logOut } = useAuth();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Explore", href: "/explore" },
    { name: "About", href: "/about" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  const handleLogout = async () => {
    try {
      await logOut();
      setDropdown(false);
    } catch (err) {
      console.log(err);
    }
  };

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

        {/* AUTH SECTION */}
        <div className="hidden md:flex items-center gap-3 relative">

          {/* IF USER LOGGED IN */}
          {user ? (
            <div className="relative">

              {/* AVATAR BUTTON */}
              <button
                onClick={() => setDropdown(!dropdown)}
                className="flex items-center gap-2"
              >
                <img
                  src={
                    user.photoURL ||
                    "https://ui-avatars.com/api/?name=" +
                      (user.displayName || user.email)
                  }
                  alt="user"
                  className="w-9 h-9 rounded-full border"
                />

                {/* dropdown arrow */}
                <span className="text-sm">▼</span>
              </button>

              {/* DROPDOWN */}
              {dropdown && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-50">

                  <div className="px-3 py-2 text-sm border-b">
                    {user.displayName || user.email}
                  </div>

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 text-red-500"
                  >
                    Logout
                  </button>

                </div>
              )}

            </div>
          ) : (
            <>
              {/* LOGIN / REGISTER */}
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
            </>
          )}

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

          {user ? (
            <div className="mt-3 border-t pt-3">

              <div className="flex items-center gap-2 mb-2">
                <img
                  src={
                    user.photoURL ||
                    "https://ui-avatars.com/api/?name=" +
                      (user.displayName || user.email)
                  }
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-sm">
                  {user.displayName || user.email}
                </span>
              </div>

              <button
                onClick={handleLogout}
                className="w-full px-3 py-1 border rounded text-red-500"
              >
                Logout
              </button>

            </div>
          ) : (
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
          )}

        </div>
      )}
    </nav>
  );
}