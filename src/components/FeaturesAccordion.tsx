import React, { useState } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import "@/assets/styles/FeaturesAccordion.css";

type AccordionItem = {
    title: string;
    content: string;
    image: string;
};

type FeaturesAccordionProps = {
    items: AccordionItem[];
};

const FeaturesAccordion: React.FC<FeaturesAccordionProps> = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const handleTabChange = (e: { index: number | null }) => {
        if (e.index === null) return;
        setActiveIndex(e.index);
    };

    const activeItem = items[activeIndex];

    return (
        <div className="accordion-with-images mt-10 flex flex-col md:flex-row gap-6 md:h-[592px] md:w-[1472px] items-center">
            {/* Left column: active image with fade-up animation */}
            <div
                key={activeIndex} // triggers re-render for animation
                className="!bg-[#F8F9FB] flex justify-center items-center max-w-[881px] w-full h-full rounded-xl p-12"
            >
                <img
                    src={activeItem.image}
                    alt={activeItem.title}
                    className="max-w-[881px] w-full max-h-[496px] object-contain transform transition-all duration-500 opacity-0 animate-fadeUp"
                />
            </div>

            {/* Right column: accordion */}
            <div className="flex flex-col justify-center w-full md:w-[543px] h-full overflow-y-auto">
                <Accordion
                    activeIndex={activeIndex}
                    onTabOpen={handleTabChange}
                    dir="ltr"
                    multiple={false}
                    className="w-full"
                    expandIcon={<i className="pi pi-plus"></i>}
                    collapseIcon={<i className="pi pi-minus"></i>}
                >
                    {items.map((item, index) => (
                        <AccordionTab
                            key={index}
                            header={item.title}
                            pt={{
                                root: {
                                    className: `${
                                        activeIndex === index
                                            ? "shadow-[0px_9px_45.2px_-2px_#0000001F] bg-white rounded-2xl mb-4"
                                            : "bg-white rounded-2xl mb-4"
                                    }`,
                                },
                                header: { className: `${
                                    activeIndex === index
                                        ? "flex justify-between items-center px-4 py-3 cursor-pointer rounded-t-2xl"
                                        : "flex justify-between items-center px-4 py-3 cursor-pointer rounded-t-2xl text-[#5F92DC]"
                                    }` },
                                content: { className: "px-4 pb-4 pt-2 text-right rounded-b-2xl" },
                            }}
                            headerTemplate={(options) => (

                                <div className="flex justify-between items-center w-full">
                                    <span
                                        className={`ml-auto font-medium ${index === activeIndex ? "text-[#5F92DC]" : "text-black"}`}
                                    >
                                        {item.title}
                                    </span>
                                </div>
                            )}
                        >
                            {item.content}
                        </AccordionTab>
                    ))}
                </Accordion>
            </div>
        </div>
    );
};

export default FeaturesAccordion;
