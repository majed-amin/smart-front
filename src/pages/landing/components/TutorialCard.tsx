import React from "react";
import {Icon} from "@iconify/react";

type Tutorial = {
    image: string;
    title: string;
    description: string;
};

type TutorialCardProps = {
    tutorial: Tutorial;
};

const TutorialCard: React.FC<TutorialCardProps> = ({ tutorial }) => {
    return (
        <div className="max-w-[344px] bg-[#F8F9FB] p-2 md:p-12 rounded-2xl group cursor-pointer overflow-hidden relative">
            {/* Image container */}
            <div className="relative group-hover:scale-[115%] w-full h-[153.6147918701172px] mb-6 rounded-[16px] border-[8px] border-[#007CFF]/20 overflow-hidden transition-transform duration-500">
                <img
                    src={tutorial.image}
                    alt={tutorial.title}
                    className="w-full h-full object-cover rounded-[16px]"
                />
                {/* Play icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 scale-0 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100">
                    <Icon icon="solar:play-circle-bold-duotone" width="50" height="50" />
                </div>
            </div>

            {/* Title & Description */}
            <div className="transition-transform duration-500 group-hover:translate-y-1">
                <h3 className="text-base md:text-xl font-semibold mb-2">{tutorial.title}</h3>
                <p className="text-xs md:text-base text-gray-700">{tutorial.description}</p>
            </div>
        </div>
    );
};

export default TutorialCard;
