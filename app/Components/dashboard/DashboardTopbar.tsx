"use client";

import useAuth from "@/hooks/useAuth";

type DashboardTopbarProps = {
setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function DashboardTopbar({
setSidebarOpen,
}: DashboardTopbarProps) {
const { user } = useAuth();

return ( <div className="bg-white border-b px-4 md:px-6 py-4 flex items-center justify-between">
  {/* LEFT */}
  <div className="flex items-center gap-3">

    {/* Mobile Menu Button */}
    <button
      onClick={() => setSidebarOpen(true)}
      className="md:hidden text-2xl"
    >
      ☰
    </button>

    <div className="flex flex-col">
  <h1 className="text-xl md:text-2xl font-bold">
    Dashboard
  </h1>

  <span className="mt-1 inline-block text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 w-fit">
    {user?.role || "User"}
  </span>
</div>

  </div>

  {/* RIGHT */}
  <div className="flex items-center gap-2 md:gap-4">

    {/* Search */}
    <input
      type="text"
      placeholder="Search..."
      className="
        hidden
        sm:block
        border
        rounded-lg
        px-3
        py-2
        text-sm
        w-40
        md:w-60
      "
    />

    {/* Notification */}
    <button className="text-xl hover:scale-110 transition">
      🔔
    </button>

    {/* Avatar */}
    <img
      src={
        user?.photoURL ||
        `https://ui-avatars.com/api/?name=${
          user?.displayName || "User"
        }`
      }
      alt="avatar"
      className="
        w-9
        h-9
        md:w-10
        md:h-10
        rounded-full
        border
      "
    />

  </div>

</div>


);
}
