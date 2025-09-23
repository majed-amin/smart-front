// layouts/DashboardLayout.tsx
import { Outlet } from "@tanstack/react-router"

export default function DashboardLayout() {
    return (
        <div className="flex min-h-screen">
            <aside className="w-64 bg-gray-800 text-white">Sidebar</aside>
            <main className="flex-1 p-6">
                <Outlet /> {/* ✅ children (e.g. DashboardHome) */}
            </main>
        </div>
    )
}
