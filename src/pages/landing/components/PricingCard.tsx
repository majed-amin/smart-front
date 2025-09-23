import FinancialValue from "@/components/common/FinancialValue";
import HorizontalLine from "@/components/common/HorizontalLine";
import cn from "classnames";

interface PricingCardProps {
    plan: {
        key: string;
        name: string;
        popular?: boolean;
        monthlyPrice: number;
        yearlyPrice: number;
        features: string[];
        inheritsFrom?: string,
    };
    inheritedName?: string,
    onSubscribe: () => void;
    billing: "monthly" | "yearly";
}

export default function PricingCard({ plan, billing, inheritedName, onSubscribe }: PricingCardProps) {
    const price = billing === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;


    return (
        <div className={`bg-[#2C91FF]/20 border-1 border-[#9AA6FF]/30 w-[354px] md:w-[379px] rounded-2xl ${plan.popular ? "p-2" : "p-8"}`}>
            {plan.popular && (
                <span
                    className="inline-block w-full text-white text-base text-center px-3 py-1 rounded-full mb-4">
                    موصى بها “وفر حتى 20%”
                </span>
            )}
            <div className={cn({
                    "border-1 border-[#EFF0F6]/30 bg-[#2C91FF]/14 p-8 rounded-2xl": plan.popular,
                    "flex flex-col": true,
                })
            }>
                <h3 className="text-[24.2px] font-medium leading-[32px]">{plan.name}</h3>
                <div className="text-[44.2px] leading-[48px] font-bold my-4 text-white">
                    <FinancialValue value={price} />
                </div>

                <span className="text-[16px] font-normal leading-[24px] mb-4">شهري / لكل محرر، يتم الفوترة سنويًا</span>
                <button className="bg-white text-[#00264E] py-2 rounded-xl transition cursor-pointer" onClick={onSubscribe}>
                    اشترك
                </button>
                <HorizontalLine className="my-5 w-full" />
                <ul className="text-gray-600 flex-1 space-y-2 mb-6">
                    <ul className="flex flex-col gap-5">
                        {inheritedName && (
                            <li className="font-medium text-sm md:text-base text-[#7BADF9]">
                                جميع مميزات الباقة {inheritedName} بالإضافة إلى:
                            </li>
                        )}
                        {plan.features.map((f, i) => (
                            <li className={"relative ps-8 before:content-['✓'] before:absolute before:start-0 before:top-0 before:ms-2 text-white"} key={i}>{f}</li>
                        ))}
                    </ul>
                </ul>
            </div>
        </div>
    );
}
