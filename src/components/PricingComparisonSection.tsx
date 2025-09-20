import React from "react";

interface ComparisonSectionProps {
    aspects: string[]; // List of aspects to compare
    plans: {
        key: string;
        name: string;
        monthlyPrice: number;
        yearlyPrice: number;
        features: string[];
    }[];
    billing: "monthly" | "yearly";
}

const PricingComparisonSection: React.FC<ComparisonSectionProps> = ({
                                                                        aspects,
                                                                        plans,
                                                                        billing,
                                                                    }) => {
    return (
        <section className="py-16 px-4 md:px-8">
            <h2 className="text-3xl font-bold text-center mb-8">
                مقارنة بين الباقات
            </h2>

            <div className="w-full overflow-x-auto">
                <div className="min-w-[600px] md:min-w-full flex border rounded-xl shadow-sm">
                    {/* First column: aspects */}
                    {/* First column: aspects */}
                    <div className="w-48 border-r">
                        {/* Header spacer to align with plan name + price */}
                        <div className="h-[7.2rem] p-4"></div>

                        {/* Aspects list */}
                        {aspects.map((aspect, idx) => (
                            <div
                                key={idx}
                                className="py-4 border-b last:border-b-0 text-white font-medium"
                            >
                                {aspect}
                            </div>
                        ))}
                    </div>


                    {/* Pricing cards */}
                    <div className="flex">
                        {plans.map((plan) => (
                            <div
                                key={plan.key}
                                className="flex-shrink-0 w-64 md:w-60 border-r last:border-r-0"
                            >
                                {/* Header */}
                                <div className="bg-[#00264E] text-white p-4 font-bold text-center">
                                    {plan.name}
                                </div>

                                {/* Prices */}
                                <div className="p-4 text-center text-lg font-semibold">
                                    {billing === "monthly"
                                        ? `${plan.monthlyPrice} ر.س`
                                        : `${plan.yearlyPrice} ر.س`}
                                </div>

                                {/* Features per aspect */}
                                <div>
                                    {aspects.map((aspect, idx) => (
                                        <div
                                            key={idx}
                                            className={`py-4 border-b last:border-b-0 text-center`}
                                        >
                                            {plan.features.includes(aspect) ? "✔️" : "-"}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingComparisonSection;
