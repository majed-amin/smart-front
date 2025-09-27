import React, { useState } from "react";
import { Link } from "@tanstack/react-router";
import { AppRoute } from "@/routes/routes";
import { motion, AnimatePresence } from "framer-motion";

interface MenuRendererProps {
    routes: AppRoute[];
    userPermissions: string[];
    collapsed?: boolean;
    onNavigate?: () => void;
    level?: number;
}

export const MenuRenderer: React.FC<MenuRendererProps> = ({
                                                              routes,
                                                              userPermissions,
                                                              collapsed,
                                                              onNavigate,
                                                              level = 0,
                                                          }) => {
    const [openMenu, setOpenMenu] = useState<string | null>(null);

    const toggleMenu = (label: string) => {
        setOpenMenu((prev) => (prev === label ? null : label));
    };

    const hasAccess = (permissions?: string[]) =>
        !permissions || permissions.some((p) => userPermissions.includes(p));

    const indent = 16;

    return (
        <div className="relative space-y-1">
            {routes.map((item) => {
                if (!hasAccess(item.meta?.permissions)) return null;

                const isOpen = openMenu === item.label;

                return (
                    <div key={item.label} className="relative">
                        {/* Dot for nested levels only */}
                        {level >= 1 && (
                            <div
                                className={`absolute w-2 h-2 rounded-full border-2 border-white ${
                                    isOpen ? "bg-blue-500" : "bg-gray-400"
                                }`}
                                style={{
                                    right: (level - 1) * indent + 4,
                                    top: "0.75rem",
                                }}
                            />
                        )}

                        {/* Button or Link */}
                        <div
                            className="relative flex items-center"
                            style={{ paddingRight: `${level * indent}px` }}
                        >
                            {item.children ? (
                                <button
                                    onClick={() => toggleMenu(item.label)}
                                    className="flex justify-between items-center w-full px-3 py-2 rounded-xl hover:bg-[#ECF1FF] hover:text-[#125298]"
                                >
                  <span
                      className={`flex ${
                          collapsed
                              ? "flex-col items-center gap-1 text-center"
                              : "flex-row items-center gap-2 text-left"
                      }`}
                  >
                    {item.icon}
                      <span className="text-xs">{item.label}</span>
                  </span>

                                    {/* Animated plus → minus */}
                                    {!collapsed && (
                                        <motion.span
                                            className="relative flex items-center justify-center w-4 h-4"
                                            initial={false}
                                        >
                                            {/* Horizontal line */}
                                            <motion.span
                                                className="absolute w-3 h-0.5 bg-current"
                                                layout
                                            />
                                            {/* Vertical line */}
                                            <motion.span
                                                className="absolute w-0.5 h-3 bg-current"
                                                animate={{
                                                    rotate: isOpen ? 90 : 0,
                                                    opacity: isOpen ? 0 : 1,
                                                }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        </motion.span>
                                    )}
                                </button>
                            ) : (
                                <Link
                                    to={item.path || "/"}
                                    onClick={onNavigate}
                                    className={`flex px-3 py-2 rounded-xl hover:bg-[#ECF1FF] hover:text-[#125298] ${
                                        collapsed
                                            ? "flex-col gap-1 text-center"
                                            : "flex-row items-center gap-2 text-left"
                                    }`}
                                    activeProps={{
                                        className: "text-[#125298] font-semibold bg-[#ECF1FF]",
                                    }}
                                >
                                    {item.icon}
                                    <span className="text-xs">{item.label}</span>
                                </Link>
                            )}
                        </div>

                        {/* Animated Children */}
                        <AnimatePresence initial={false}>
                            {item.children && isOpen && !collapsed && (
                                <motion.div
                                    key="children"
                                    initial="collapsed"
                                    animate="open"
                                    exit="collapsed"
                                    variants={{
                                        open: { opacity: 1, height: "auto" },
                                        collapsed: { opacity: 0, height: 0 },
                                    }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="relative me-4 space-y-1 overflow-hidden"
                                >
                                    {/* Vertical line */}
                                    <div
                                        className="absolute w-px bg-gray-300 top-0 bottom-0"
                                        style={{ right: level * indent + 8 }}
                                    />

                                    {item.children.map((child) => {
                                        if (!hasAccess(child.meta?.permissions)) return null;

                                        return (
                                            <MenuRenderer
                                                key={child.label}
                                                routes={[child]}
                                                userPermissions={userPermissions}
                                                collapsed={collapsed}
                                                onNavigate={onNavigate}
                                                level={level + 1}
                                            />
                                        );
                                    })}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
};
