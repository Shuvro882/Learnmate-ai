"use client";

import Link from "next/link";
import useAuth from "@/hooks/useAuth";
type DashboardSidebarProps = {
sidebarOpen: boolean;
setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};


export default function DashboardSidebar({
sidebarOpen,
setSidebarOpen,
}: DashboardSidebarProps) {
const { user } = useAuth();

const role = user?.role || "student";

return ( 
<>
{/* Mobile Overlay */}
{sidebarOpen && (
<div
className="fixed inset-0 bg-black/40 z-40 md"
onClick={() => setSidebarOpen(false)}
/>
)}

  <aside
    className={`
      fixed md:static
      top-0 left-0
      z-50
      h-screen
      w-64
      bg-white
      border-r
      p-4
      transform
      transition-transform
      duration-300

      ${
        sidebarOpen
          ? "translate-x-0"
          : "-translate-x-full md:translate-x-0"
      }
    `}
  >
    {/* Mobile Close Button */}
    <div className="flex justify-end md:hidden mb-4">
      <button
        onClick={() => setSidebarOpen(false)}
        className="text-xl"
      >
        ✕
      </button>
    </div>

    {/* Logo */}
    <Link
      href="/"
      className="flex items-center gap-3 mb-6 border-b pb-4"
      onClick={() => setSidebarOpen(false)}
    >
      <div className="w-10 h-10 bg-indigo-600 text-white rounded-lg flex items-center justify-center font-bold">
        L
      </div>

      <div>
        <h2 className="font-bold text-lg">
          LearnMate AI
        </h2>
      </div>
    </Link>

    {/* Menu */}
    <div className="flex flex-col gap-2">

      <Link
        href="/dashboard"
        onClick={() => setSidebarOpen(false)}
        className="block px-3 py-2 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition"
      >
        Overview
      </Link>

      {role === "student" && (
        <>
          <Link
            href="/dashboard/my-learning"
            onClick={() => setSidebarOpen(false)}
            className="block px-3 py-2 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition"
          >
            My Learning
          </Link>

          <Link
            href="/dashboard/profile"
            onClick={() => setSidebarOpen(false)}
            className="block px-3 py-2 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition"
          >
            Profile
          </Link>
        </>
      )}

      {role === "tutor" && (
        <>
          <Link
            href="/dashboard/create-course"
            onClick={() => setSidebarOpen(false)}
            className="block px-3 py-2 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition"
          >
            Create Course
          </Link>

          <Link
            href="/dashboard/profile"
            onClick={() => setSidebarOpen(false)}
            className="block px-3 py-2 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition"
          >
            Profile
          </Link>
        </>
      )}

      {role === "admin" && (
        <>
          <Link
            href="/dashboard/users"
            onClick={() => setSidebarOpen(false)}
            className="block px-3 py-2 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition"
          >
            Manage Users
          </Link>

          <Link
            href="/dashboard/analytics"
            onClick={() => setSidebarOpen(false)}
            className="block px-3 py-2 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition"
          >
            Analytics
          </Link>

          <Link
            href="/dashboard/profile"
            onClick={() => setSidebarOpen(false)}
            className="block px-3 py-2 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition"
          >
            Profile
          </Link>
        </>
      )}
    </div>
  </aside>
</>


);
}
