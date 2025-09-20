import React, { useRef, useEffect, useState } from "react";

type Category = {
    id: number;
    name: string;
    slug: string;
};

type Props = {
    categories: Category[];
    selected: string;
    onSelect: (slug: string) => void;
};

const CategoryScroller: React.FC<Props> = ({ categories, selected, onSelect }) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const checkScroll = () => {
        if (!scrollRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    };

    useEffect(() => {
        checkScroll();
        const scroller = scrollRef.current;
        if (scroller) scroller.addEventListener("scroll", checkScroll);
        return () => scroller?.removeEventListener("scroll", checkScroll);
    }, []);

    return (
        <div className="relative mt-4">
            {canScrollLeft && (
                <button
                    onClick={() =>
                        scrollRef.current?.scrollBy({ left: -200, behavior: "smooth" })
                    }
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 shadow rounded-full p-2 z-10"
                >
                    ◀
                </button>
            )}

            <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto scrollbar-hide px-8"
            >
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => onSelect(cat.slug)}
                        className={`px-4 py-2 rounded-full whitespace-nowrap ${
                            selected === cat.slug
                                ? "bg-blue-600 text-white"
                                : "bg-gray-200 text-gray-700"
                        }`}
                    >
                        {cat.name}
                    </button>
                ))}
            </div>

            {canScrollRight && (
                <button
                    onClick={() =>
                        scrollRef.current?.scrollBy({ left: 200, behavior: "smooth" })
                    }
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 shadow rounded-full p-2 z-10"
                >
                    ▶
                </button>
            )}
        </div>
    );
};

export default CategoryScroller;
