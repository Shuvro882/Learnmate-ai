"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const { user, logOut } = useAuth();

  const dropdownRef = useRef<HTMLDivElement>(null);

  // ---------------------------
  // ROLE (from MongoDB or fallback)
  // ---------------------------
  const role = user?.role || "student";

  const displayName = user?.displayName || user?.email || "User";

  const avatarUrl =
    user?.photoURL ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}`;

  // ---------------------------
  // ROLE BASED NAVIGATION
  // ---------------------------
  const baseLinks = [
    { name: "Home", href: "/" },
    { name: "Explore", href: "/explore" },
    { name: "About", href: "/about" },
  ];


  const roleLinks: Record<string, { name: string; href: string }[]> = {
    student: [
      { name: "Dashboard", href: "/dashboard" },
    ],
    tutor: [
      { name: "Dashboard", href: "/dashboard" },
      { name: "Create Content", href: "/create" },
    ],
    admin: [
      { name: "Dashboard", href: "/dashboard" },
      { name: "Users", href: "/admin/users" },
      { name: "Analytics", href: "/admin/analytics" },
    ],
  };

  const navLinks = [
    ...baseLinks,
    ...(roleLinks[role] || []),
  ];

  // ---------------------------
  // Close dropdown on outside click
  // ---------------------------
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ---------------------------
  // Logout
  // ---------------------------
  const handleLogout = async () => {
    await logOut();
    setDropdown(false);
    setOpen(false);
  };

  return (
    <nav className="w-full border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">

        {/* LOGO */}
        <Link
          href="/"
          className="text-xl font-bold text-indigo-600"
        >
          LearnMate AI
        </Link>



        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.name}
            </Link>
          ))}
        </div>

        {/* AUTH */}
        <div className="hidden md:flex items-center gap-3">

          {user ? (
            <div ref={dropdownRef} className="relative">

              <button
                onClick={() => setDropdown(!dropdown)}
                className="flex items-center gap-2"
              >
                <img
                  src={avatarUrl}
                  className="w-9 h-9 rounded-full border"
                />
                <span className="text-sm">▼</span>
              </button>

              {dropdown && (
                <div className="absolute right-0 mt-2 w-44 bg-white border rounded-lg shadow-lg">

                  <div className="px-3 py-2 text-sm border-b">
                    {displayName}
                  </div>

                  <Link
                    href="/profile"
                    onClick={() => setDropdown(false)}
                    className="block px-3 py-2 hover:bg-gray-100 text-sm"
                  >
                    Profile
                  </Link>
                  <Link
                    href="/dashboard"
                    onClick={() => setDropdown(false)}
                    className="block px-3 py-2 hover:bg-gray-100 text-sm"
                  >
                    Dashboard
                  </Link>


                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-gray-100"
                  >
                    Logout
                  </button>

                </div>
              )}
            </div>
          ) : (
            <>
              <Link href="/login" className="px-3 py-1 border rounded">
                Login
              </Link>
              <Link href="/register" className="px-3 py-1 bg-indigo-600 text-white rounded">
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

          ```
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
            <div className="flex flex-col gap-2 mt-3 border-t pt-3">

              <Link
                href="/profile"
                onClick={() => setOpen(false)}
                className="px-3 py-2 border rounded text-center"
              >
                Profile
              </Link>

              <Link
                href="/dashboard"
                onClick={() => setOpen(false)}
                className="px-3 py-2 border rounded text-center"
              >
                Dashboard
              </Link>

              <button
                onClick={handleLogout}
                className="px-3 py-2 border rounded text-red-500"
              >
                Logout
              </button>

            </div>
          ) : (
            <div className="flex flex-col gap-2 mt-3 border-t pt-3">

              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="px-3 py-2 border rounded text-center"
              >
                Login
              </Link>

              <Link
                href="/register"
                onClick={() => setOpen(false)}
                className="px-3 py-2 bg-indigo-600 text-white rounded text-center"
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