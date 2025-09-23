import React, {useEffect, useRef, useState} from "react";
import {motion} from "framer-motion";
import PricingCard from "./PricingCard";
import FinancialValue from "@/components/common/FinancialValue";
import {Dialog} from "primereact/dialog";
import {Icon} from "@iconify/react";
import {Button} from "primereact/button";
import HorizontalLine from "@/components/common/HorizontalLine";
import {useNavigate} from "@tanstack/react-router";

interface Plan {
    key: string;
    name: string;
    monthlyPrice: number;
    yearlyPrice: number;
    features: string[];
    popular?: boolean;
    inheritsFrom?: string;
}

interface PricingSectionProps {
    plans: Plan[];
}

const aspects = ["ميزة 1", "ميزة 2", "ميزة 3", "ميزة 4", "ميزة 5"];

const PricingSection: React.FC<PricingSectionProps> = ({plans}) => {
    const navigate = useNavigate({ from: "/plans" });
    const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
    const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

    const [bgStyle, setBgStyle] = useState({width: 0, left: 0});

    const monthlyRef = useRef<HTMLButtonElement>(null);
    const yearlyRef = useRef<HTMLButtonElement>(null);

    const updateBg = () => {
        const ref = billing === "monthly" ? monthlyRef.current : yearlyRef.current;
        if (ref) {
            setBgStyle({width: ref.offsetWidth, left: ref.offsetLeft});
        }
    };

    const openModal = (plan: any) => {
        setSelectedPlan(plan);
    };

    const [modalVisible, setModalVisible] = useState(false);

    const [extras, setExtras] = useState({
        users: 0,
        salaries: 0,
        pos: 0,
        branches: 0,
    });

    const prices = {
        users: 20,
        salaries: 20,
        pos: 20,
        branches: 20,
    };

    const descriptions = {
        users: "أضف المزيد من المستخدمين لفريقك.",
        salaries: "إدارة قوائم رواتب إضافية بسهولة.",
        pos: "إضافة نقاط بيع جديدة لتوسيع عملياتك.",
        branches: "إضافة فروع جديدة لعملك.",
    };

    const extraTotal =
        extras.users * prices.users +
        extras.salaries * prices.salaries +
        extras.pos * prices.pos +
        extras.branches * prices.branches;

    const total = (billing === 'monthly' ? selectedPlan?.monthlyPrice ?? 0 : selectedPlan?.yearlyPrice ?? 0) + extraTotal;

    const updateExtra = (key: keyof typeof extras, delta: number) => {
        setExtras((prev) => ({
            ...prev,
            [key]: Math.max(0, prev[key] + delta),
        }));
    };

    const handleProceed = (skipExtras = false) => {
        const finalTotal = skipExtras ? (billing === 'monthly' ? selectedPlan?.monthlyPrice : selectedPlan?.yearlyPrice) : total;
        console.log("Proceeding with total:", finalTotal);
        setModalVisible(false);
        // TODO: integrate payment step navigation here
        navigate({ to: "/checkout" });
    };

    useEffect(() => {
        updateBg();
        window.addEventListener("resize", updateBg);
        return () => window.removeEventListener("resize", updateBg);
    }, [billing]);


    return (
        <section className="py-16 z-10">
            <div className="text-white mx-auto px-4 flex flex-col items-center ">
                {/* Animated Switcher */}
                <div className="relative inline-flex bg-transparent border border-white rounded-2xl p-[10px] mb-12">
                    {/* Animated background */}
                    <motion.div
                        layout
                        transition={{type: "spring", stiffness: 500, damping: 30}}
                        className="absolute top-1 bottom-1 bg-white rounded-[10px]"
                        style={{
                            width: bgStyle.width + 7,
                            left: bgStyle.left + 6,
                            height: "calc(100% - 9.8px)",
                        }}
                    />

                    {/* Buttons */}
                    <div className="flex gap-4 relative z-10 text-sm font-semibold">
                        <button
                            ref={monthlyRef}
                            className="px-4 py-2 text-center transition-colors whitespace-nowrap"
                            onClick={() => setBilling("monthly")}
                        >
                          <span className={billing === "monthly" ? "text-[#00264E]" : "text-white"}>
                            شهري
                          </span>
                        </button>
                        <button
                            ref={yearlyRef}
                            className="px-4 py-2 text-center transition-colors whitespace-nowrap"
                            onClick={() => setBilling("yearly")}
                        >
                          <span className={billing === "yearly" ? "text-[#00264E]" : "text-white"}>
                            سنوي “وفر حتى 20%”
                          </span>
                        </button>
                    </div>
                </div>


                {/* Pricing Cards */}
                <div className="flex md:flex-row flex-col items-center justify-center gap-5 w-full">
                    {plans.map(plan => {
                        const parentPlan = plan.inheritsFrom
                            ? plans.find(p => p.key === plan.inheritsFrom)
                            : null;

                        return (
                            <PricingCard
                                billing={billing}
                                key={plan.key}
                                plan={plan}
                                inheritedName={parentPlan?.name}
                                onSubscribe={() => openModal(plan)}
                            />
                        );
                    })}
                </div>

                {/*<PricingComparisonSection aspects={aspects} plans={plans} billing={billing} />*/}
            </div>

            {/* Subscription Modal */}
            <Dialog
                header={
                    <div className="flex justify-center items-center w-full relative">
                        <div className="flex flex-col text-center">
                            <h2 className="text-lg md:text-[32px] leading-[150%] text-black font-bold text-center">إعداد القيود (اختياري)</h2>
                            <span className="text-sm md:text-lg font-medium leading-[180%] text-[#1F1F1F]/65">يمكنك الآن تخصيص القيود على  الباقة التي اخترتها حسب الحاجة</span>
                        </div>
                        <button
                            className="absolute right-2 top-0 text-gray-400 hover:text-gray-600"
                            onClick={() => setSelectedPlan(null)}
                        >
                            <Icon icon="solar:alt-arrow-right-linear" width="24" height="24" color="black" />
                        </button>
                    </div>
                }
                visible={!!selectedPlan}
                style={{ width: "100%", margin: "10px" }}
                modal
                closable={false}
                onHide={() => setModalVisible(false)}
                className="custom-subscription-modal !px-[2px]"
            >
                <div className="">
                    {/* Options as Cards */}
                    <div className="flex flex-col md:flex-row flex-wrap gap-4">
                        {(
                            [
                                { key: "users", label: "مستخدمين إضافيين" },
                                {
                                    key: "salaries",
                                    label: "قوائم الرواتب الإضافية",
                                },
                                { key: "pos", label: "نقاط بيع إضافية" },
                                { key: "branches", label: "فروع إضافية" },
                            ] as const
                        ).map((item) => (
                            <div
                                key={item.key}
                                className="bg-[#F8F9FB] rounded-xl p-2 flex flex-col w-[370px] md:w-[415px] justify-between"
                            >
                                <div className={"mb-3"}>
                                    <div className={"w-fit mb-3 flex items-center justify-center bg-[#125298] rounded-xl p-3.5"}>
                                        <Icon icon="solar:user-bold-duotone" color={"white"} width="24" height="24" />
                                    </div>
                                    <div>
                                        <h4 className="text-base md:text-[20px] font-medium mb-1">
                                            {item.label}
                                        </h4>
                                        <p className="text-sm text-[#76777A] mb-4">
                                            {descriptions[item.key]}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between pt-3">
                                    <span className="text-[20px] text-black leading-[24px]">
                                        + <FinancialValue value={prices[item.key]} /> <br /> <span className={"text-[#76777A] text-[15px]"}>لكل وحدة</span>
                                    </span>
                                    <div className="flex items-center gap-3">
                                        <Button
                                            icon="pi pi-plus"
                                            className="!bg-[#125298]"
                                            onClick={() =>
                                                updateExtra(item.key, 1)
                                            }
                                        />
                                        <span className="text-xl px-4.5">
                                            {extras[item.key]}
                                        </span>
                                        <Button
                                            icon="pi pi-minus"
                                            className="!bg-[#5D95FF]/10 !border-0 !text-[#125298]"
                                            onClick={() =>
                                                updateExtra(item.key, -1)
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Total Card */}
                    {/*<div className="bg-[#2C91FF]/20 border border-[#9AA6FF]/30 p-6 rounded-xl text-center">*/}
                    {/*    <h4 className="text-lg font-semibold mb-2">الإجمالي</h4>*/}
                    {/*    <div className="text-3xl font-bold text-white">*/}
                    {/*        <FinancialValue value={total} />*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/* Actions as cards */}
                    <div className="flex flex-col md:flex-row gap-4 mt-6">
                        <div
                            onClick={() => handleProceed(true)}
                            className="cursor-pointer flex flex-col items-center bg-[#125298] text-white md:px-6 py-10 rounded-2xl text-center transition"
                        >
                            <h5 className="text-base md:text-lg font-medium leading-[32px] mb-[52px] max-w-[322px] md:max-w-[367px]">يمكنك تخطي هذه الخطوة اذا كانت لا تحتاج الى اين من هذه القيود</h5>
                            <Button label={"تخطي"} className="text-sm !px-[50px] !border-0 !py-[15px] !bg-white !text-[#125298] rounded-xl" />
                        </div>

                        <div
                            className="md:w-[415px] bg-[#125298] p-6 rounded-2xl text-center transition"
                        >
                            <div className={"flex flex-col items-center gap-3 mb-4"}>
                                <div className={"flex flex-row justify-between w-full"}>
                                    <span className="text-white text-[15px]">سعر الباقة التي اخترتها</span>
                                    <span className="text-white text-[15px]"><FinancialValue value={billing === "monthly" ? selectedPlan?.monthlyPrice : selectedPlan?.yearlyPrice} /></span>
                                </div>
                                <div className={"flex flex-row justify-between w-full"}>
                                    <span className="text-white text-[15px]">اجمالي سعر القيود</span>
                                    <span className="text-white text-[15px]"><FinancialValue value={extraTotal} /></span>
                                </div>

                                <HorizontalLine className="my-5 w-full" />
                                <div className={"flex flex-row justify-between w-full"}>
                                    <span className="text-white text-[15px]">اجمالي</span>
                                    <span className="text-white text-[15px]"><FinancialValue value={((billing === "monthly" ? selectedPlan?.monthlyPrice : selectedPlan?.yearlyPrice) ?? 0) + extraTotal} /></span>
                                </div>
                            </div>

                            {/*<h5 className="text-lg font-semibold mb-2">الانتقال إلى الدفع</h5>*/}
                            <div className={"flex flex-row gap-2 items-center justify-center"}>
                                <Button label={"الانتقال الى الدفع"} onClick={() => handleProceed(false)} className="text-xs md:text-sm flex-1 !border-0 !py-[15px] !bg-white !text-[#125298] rounded-xl" />
                                <Button label={"تخطي"} onClick={() => handleProceed(true)} className="text-sm flex-1 !border-0 !py-[15px] !bg-transparent !text-white rounded-xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        </section>
    );
};

export default PricingSection;
