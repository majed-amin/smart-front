import React, { useState } from "react";
import { Sidebar as PSidebar } from "primereact/sidebar";
import { MenuRenderer } from "./MenuRenderer";
import { appRoutes } from "@/routes/routes";
import {Icon} from "@iconify/react";

export default function AppSidebar({ userPermissions }: { userPermissions: string[] }) {
    const [collapsed, setCollapsed] = useState(false);
    const [hoverExpand, setHoverExpand] = useState(false);
    const [mobileVisible, setMobileVisible] = useState(false);

    // ✅ grab the titles from routes
    const collapsedLabels = appRoutes
        .filter((r) => r.meta?.permissions?.some((p) => userPermissions.includes(p)))
        .map((r) => r.label);

    return (
        <>
            {/* Desktop Sidebar */}
            <div
                className={`hidden relative lg:flex flex-col h-screen transition-all duration-200 px-3 ${
                    collapsed && !hoverExpand ? "w-23" : "w-64"
                }`}
                onMouseEnter={() => collapsed && setHoverExpand(true)}
                onMouseLeave={() => collapsed && setHoverExpand(false)}
            >
                <div className="absolute -left-4 flex items-center justify-center p-2 bg-white w-[26px] h-[26px] rounded-full shadow-[0_0_10px_-2px_rgba(0,0,0,0.25)]">
                    <button
                        onClick={() => setCollapsed((p) => !p)}
                        className="p-1 hover:bg-[#ECF1FF] rounded-full"
                    >
                        {collapsed
                            ? <Icon icon="solar:alt-arrow-left-linear" color={'#125298'} width="16" height="16" />
                            : <Icon icon="solar:alt-arrow-right-linear" color={'#125298'} width="16" height="16" />
                        }
                    </button>
                </div>

                {/* Menu Items */}
                <div className="flex-1 overflow-y-auto">
                    <MenuRenderer
                        routes={appRoutes}
                        userPermissions={userPermissions}
                        collapsed={collapsed && !hoverExpand}
                    />
                </div>

                {/* ✅ Bottom section with labels when collapsed */}
                {/*{collapsed && !hoverExpand && (
                    <div className="border-t p-2 text-xs text-gray-500 space-y-1">
                        {collapsedLabels.map((label) => (
                            <div key={label} className="truncate">
                                {label}
                            </div>
                        ))}
                    </div>
                )}*/}
            </div>

            {/* Mobile Sidebar (PrimeReact) */}
            <PSidebar
                visible={mobileVisible}
                onHide={() => setMobileVisible(false)}
                className="lg:hidden w-64"
            >
                <MenuRenderer
                    routes={appRoutes}
                    userPermissions={userPermissions}
                    onNavigate={() => setMobileVisible(false)}
                />
            </PSidebar>

            {/* Mobile Toggle Button */}
            <button
                className="lg:hidden fixed top-2 left-2 z-50 p-2 bg-gray-200 rounded"
                onClick={() => setMobileVisible(true)}
            >
                ☰
            </button>
        </>
    );
}
