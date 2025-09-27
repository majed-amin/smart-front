import React from "react";

interface UserTileProps {
    name: string;
    avatarUrl?: string | null;
    sessionTime: Date;
}

export default function NameTile({ name, avatarUrl, sessionTime }: UserTileProps) {
    const firstLetter = name?.charAt(0).toUpperCase();

    // Format: "H:MM YYYY-MM-DD"
    const formattedTime = new Intl.DateTimeFormat("en-YE", {
        hour: "numeric",
        minute: "numeric",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }).format(sessionTime);

    return (
        <div className="flex items-center gap-2">
            <div className="relative">
                {avatarUrl ? (
                    <img
                        src={avatarUrl}
                        alt={name}
                        className="h-[36px] w-[36px] rounded-[8px] object-cover"
                    />
                ) : (
                    <div className="h-[36px] w-[36px] rounded-[8px] bg-[#ECF1FF] flex items-center justify-center text-sm font-semibold text-gray-700">
                        {firstLetter}
                    </div>
                )}
                {/* Online Dot */}
                <span className="absolute top-0 -right-0.5 h-[10px] w-[10px] rounded-full bg-green-500 border-2 border-white" />
            </div>
            <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-700">{name}</span>
                <span className="text-sm text-[#A6A6A6]">{formattedTime}</span>
            </div>
        </div>
    );
}
