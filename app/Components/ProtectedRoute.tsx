"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import Loading from "../loading";

export default function ProtectedRoute({
children,
}: {
children: React.ReactNode;
}) {
const { user, loading } = useAuth();
const router = useRouter();
const pathname = usePathname();

useEffect(() => {
if (!loading && !user) {
router.replace(`/login?redirect=${pathname}`);
}
}, [user, loading, router, pathname]);

if (loading) {
return <Loading />;
}

if (!user) {
return null;
}

return <>{children}</>;
}
