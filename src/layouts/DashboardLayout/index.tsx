// layouts/DashboardLayout.tsx
import { Outlet } from "@tanstack/react-router"
import AppSidebar from "@/layouts/DashboardLayout/components/Sidebar";
import Header from "@/layouts/DashboardLayout/components/Header";

export default function DashboardLayout() {
    return (
        <>
            <Header user={{ name: "ماجد أمين", sessionTime: new Date() }} />
            <div className="flex min-h-screen">
                {/*<aside className="w-64 bg-gray-800 text-white">Sidebar</aside>*/}
                <AppSidebar userPermissions={['admin', 'user', 'editor']} />
                <main className="flex-1 p-6 bg-[#F7F6FA] rounded-[24px] m-3">
                    <Outlet /> {/* ✅ children (e.g. DashboardHome) */}
                </main>
            </div>
        </>

    )
}
