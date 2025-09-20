import React from "react";
import cn from "classnames";

type FeatureType = 'small' | 'large';

type FeatureItemProps = {
    feature: {
        icon?: React.ReactNode;
        title: string;
        description: string;
        color: string;
    }
    className?: string;
    type?: FeatureType
}

const FeatureItem: React.FC<FeatureItemProps> = ({ feature, className, type = 'large' }) => {
    return (
        <>
            <div className={
                cn(
                    `gap-5 rounded-3xl p-6 h-full`,
                    className,
                    type === "large" ? "flex flex-col md:flex-row md:items-center md:justify-center" : "flex flex-col"
                )} style={{ backgroundColor: `${feature.color}14` }}>
                {feature.icon ?
                    <div
                        className={cn(
                            "flex flex-col w-fit md:items-center md:justify-center bg-white rounded-3xl p-6",
                            type === "large" ? "md:!w-[212px] !w-fit md:!h-[212px]" : "md:!w-[136px] !w-fit md:!h-[136px]"
                        )}
                        style={{ color: feature.color }}
                    >
                        {feature.icon}
                    </div>
                    : ''
                }

                <div className={`flex flex-col justify-center gap-2.5`}>
                    <h2 className={`text-[20px] leading-[160%] font-medium text-[${feature.color}]`}>{feature.title}</h2>

                    <p className="text-base leading-[160%] font-medium text-[#5E5E5E]/65">{feature.description}</p>
                </div>
            </div>
        </>
    )
}

export default FeatureItem;
