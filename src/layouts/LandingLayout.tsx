// layouts/LandingLayout.tsx
import { Outlet, Link } from "@tanstack/react-router"
import AppNavbar from "@/components/AppNavbar";
import Footer from "@/components/Footer";

export default function LandingLayout() {
    return (
        <div className="relative min-h-screen bg-white flex flex-col">
            <AppNavbar />

            <main className="p-3.5 flex-1">
                <Outlet /> {/* ✅ children (Home, About) */}
            </main>

            <Footer />
        </div>
    )
}
