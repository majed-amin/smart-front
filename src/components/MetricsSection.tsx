import React from "react";

type StatItem = {
    value: string;
    title: string;
};

const stats: StatItem[] = [
    { value: "4k+", title: "مستخدم" },
    { value: "99%", title: "ينجزون مهامهم أسرع" },
    { value: "22", title: "بلد متواجدين فيها" },
    { value: "7 من 10", title: "بدأوا خلال 15 دقيقة" },
];

const MetricsSection: React.FC = () => {
    return (
        <section className="service-summary-stats py-16 px-6 md:px-[110px] bg-[#F8F9FB] rounded-[16px] md:rounded-3xl">
            {/* Large screens */}
            <div className="hidden md:flex md:flex-row items-center justify-between gap-8">
                {/* Title on the right */}
                <div className="max-w-md text-right">
                    <h2 className="text-3xl font-semibold">
                        نظام <span className="text-[#E79C1C]">سمارت</span> في أرقام
                    </h2>
                    <p className="text-lg text-gray-700 mt-2">
                        إليك بعض الأرقام التي تبرز فعاليته
                    </p>
                </div>

                {/* Stats on the left */}
                <div className="flex justify-center items-center gap-6 py-8">
                    {stats.map((stat, index) => (
                        <React.Fragment key={index}>
                            <div className="flex flex-col items-center px-4">
                                <span className="text-[#125298] font-semibold text-[48px]">{stat.value}</span>
                                <span className="text-black text-[18px] mt-2">{stat.title}</span>
                            </div>
                            {index !== stats.length - 1 && (
                                <div className="w-px h-16 bg-[#E9EAEB]" />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* Small screens */}
            <div className="md:hidden">
                {/* Title row */}
                <div className="text-center mb-8">
                    <h2 className="text-[16px] font-semibold">
                        نظام <span className="text-[#E79C1C]">سمارت</span> في أرقام
                    </h2>
                    <p className="text-[14px] text-gray-700 mt-2">
                        إليك بعض الأرقام التي تبرز فعاليته
                    </p>
                </div>

                {/* Stats 2x2 grid */}
                <div className="grid grid-cols-2 gap-0 border-t border-b border-[#E9EAEB] rounded-[16px] overflow-hidden">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`flex flex-col items-center justify-center py-6 ${
                                index < 2 ? "border-b border-[#E9EAEB]" : ""
                            } ${index % 2 === 0 && index < 2 ? "border-r border-[#E9EAEB]" : ""} ${
                                index === 0 ? "rounded-tl-[16px]" : ""
                            } ${index === 1 ? "rounded-tr-[16px]" : ""} ${index === 2 ? "rounded-bl-[16px]" : ""} ${
                                index === 3 ? "rounded-br-[16px]" : ""
                            }`}
                        >
                            <span className="text-[#125298] font-semibold text-[24px]">{stat.value}</span>
                            <span className="text-black text-[14px] mt-2">{stat.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MetricsSection;
