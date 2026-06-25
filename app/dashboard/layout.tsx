"use client";

import { useState } from "react";
import DashboardSidebar from "../Components/dashboard/DashboardSidebar";
import DashboardTopbar from "../Components/dashboard/DashboardTopbar";
import ProtectedRoute from "../Components/ProtectedRoute";

export default function DashboardLayout({
children,
}: {
children: React.ReactNode;
}) {
const [sidebarOpen, setSidebarOpen] = useState(false);

return ( <ProtectedRoute> <div className="flex min-h-screen">

    <DashboardSidebar
      sidebarOpen={sidebarOpen}
      setSidebarOpen={setSidebarOpen}
    />

    <div className="flex-1 flex flex-col">

      <DashboardTopbar
        setSidebarOpen={setSidebarOpen}
      />

      <main className="flex-1 p-6 bg-gray-50">
        {children}
      </main>

    </div>

  </div>
</ProtectedRoute>

);
}
