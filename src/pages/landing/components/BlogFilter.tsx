import React, { useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";

type BlogFilterProps = {
    onChange: (filters: { search: string; category: string | null }) => void;
};

export default function BlogFilter({ onChange }: BlogFilterProps) {
    const categories = [
        "استراتيجيات مالية",
        "أدوات عمل",
        "مجتمع محاسبين",
        "موارد مفيدة",
        "ورش تدريبية",
        "تحديثات جديدة",
        "دعم فني",
        "تحليل بيانات",
        "تحليل بيانات",
        "تحليل بيانات",
        "تحليل بيانات",
        "تحليل بيانات",
        "تحليل بيانات",
        "تحليل بيانات",
        "تحليل بيانات",
    ];

    const [filters, setFilters] = React.useState<{ search: string; category: string | null }>({
        search: "",
        category: null,
    });

    useEffect(() => {
        const timeout = setTimeout(() => {
            onChange(filters);
        }, 500); // debounce 500ms

        return () => clearTimeout(timeout);
    }, [filters]);

    return (
        <div className="container mx-auto flex md:flex-row flex-col items-center my-4 gap-4">
            {/* Search Input */}
            <div className="w-full max-w-md">
                <IconField iconPosition="right">
                    <InputIcon className="pi pi-search" />
                    <InputText
                        placeholder="بحث"
                        className="w-full !border-0 !outline-none !ring-0 !bg-[#F7F6FA]"
                        value={filters.search}
                        onChange={(e) =>
                            setFilters({ ...filters, search: e.target.value })
                        }
                    />
                </IconField>
            </div>

            {/* Categories List */}
            <div className="flex gap-3 overflow-x-auto scrollbar-hidden py-2 max-w-[370px] md:max-w-full">
                {categories.map((cat, idx) => (
                    <button
                        key={idx}
                        className={`px-4 py-2 rounded-xl whitespace-nowrap text-base leading-[18px] ${
                            filters.category === cat
                                ? "bg-[#E79C1C] text-white"
                                : "bg-[#F8F9FB] text-[#46474A] hover:bg-gray-200"
                        }`}
                        onClick={() =>
                            setFilters({
                                ...filters,
                                category: filters.category === cat ? null : cat,
                            })
                        }
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>
    );
}
