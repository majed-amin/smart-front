import React from "react";
import {Icon} from "@iconify/react";
import NameTile from "@/layouts/DashboardLayout/components/NameTile";
import HomeIcon from "@/layouts/DashboardLayout/components/HomeIcon";
import ReceiptIcon from "@/layouts/DashboardLayout/components/ReceiptIcon";

interface HeaderProps {
    user: {
        name: string;
        avatarUrl?: string | null;
        sessionTime: Date
    };
}

export default function Header({ user }: HeaderProps) {
    const firstLetter = user.name?.charAt(0).toUpperCase();

    return (
        <header className="flex items-center justify-between h-14 bg-white px-[16px] py-[12px]">
            {/* Left side: Navigation items */}
            <div className="flex items-center space-x-4">
                {/* Home */}
                <button className="p-[8px] bg-[#ECF1FF] rounded-[8px] flex items-center gap-2 text-gray-700 hover:text-gray-900">
                    <HomeIcon />
                    {/*<Icon icon="solar:home-2-line-duotone" width="24" height="24" color={'#18579A'} floodColor={'#F6A82A'} />*/}
                </button>

                <div className="h-6 w-px bg-gray-300" />

                {/* Tab items */}
                <button className="cursor-pointer flex gap-2 bg-[#F1F0F4] p-[8px] rounded-[8px] text-sm text-[#5E5E62] hover:text-gray-900">
                    <ReceiptIcon /> فاتورة المبيعات
                </button>
                <div className="h-6 w-px bg-gray-300" />
                <button className="cursor-pointer flex gap-2 bg-[#F1F0F4] p-[8px] rounded-[8px] text-sm text-[#5E5E62] hover:text-gray-900">
                    <ReceiptIcon /> فاتورة المبيعات
                </button>
            </div>

            {/* Right side: User + Controls */}
            <div className="flex items-center space-x-4">
                <NameTile name={user.name} sessionTime={user.sessionTime} />

                {/* Settings */}
                <button className="hover:text-gray-900">
                    <Icon icon="solar:settings-linear" width="24" height="24" />
                </button>

                {/* Maximize */}
                <button className="hover:text-gray-900">
                    <Icon icon="solar:maximize-square-linear" width="24" height="24" />
                </button>
            </div>
        </header>
    );
}
