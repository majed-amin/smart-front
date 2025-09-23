import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import { Calendar } from "primereact/calendar";
import { motion, AnimatePresence } from "framer-motion";
import {Button} from "primereact/button";
import FinancialValue from "@/components/common/FinancialValue";

type PaymentType = {
    id: string;
    name: string;
    icon: React.ReactNode;
};

type PaymentTypeCardProps = {
    payment: PaymentType;
    selected: boolean;
    onSelect: (id: string) => void;
};

export default function PaymentTypeCard({ payment, selected, onSelect }: PaymentTypeCardProps) {
    const [cardDetails, setCardDetails] = useState({
        number: "",
        expiration: "",
        holder: "",
        cvv: "",
    });

    const handleExpirationChange = (e: any) => {
        const month = e.value.getMonth() + 1; // months are 0-indexed
        const year = e.value.getFullYear().toString().slice(-2); // get last 2 digits
        const formatted = `${month.toString().padStart(2, "0")}/${year}`;
        setCardDetails({ ...cardDetails, expiration: formatted });
    };

    return (
        <motion.div
            layout
            onClick={() => onSelect(payment.id)}
            className={`cursor-pointer border rounded-xl p-4 md:p-6 flex flex-col gap-3 ${
                selected ? "border-[#125298] shadow-md" : "border-gray-300"
            }`}
        >
            {/* Header with RadioButton, Icon and Name */}
            <div className="flex justify-between items-center gap-4 bg-white p-2 rounded-md">
                <div className="flex items-center gap-2">
                    <RadioButton
                        value={payment.id}
                        checked={selected}
                        onChange={() => onSelect(payment.id)}
                        className="accent-[#E79C1C]"
                    />
                    <span className="text-base font-medium">{payment.name}</span>
                </div>
                <div className="w-[90px] flex items-center justify-center">{payment.icon}</div>
            </div>

            {/* Expandable Card Form */}
            <AnimatePresence>
                {selected && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex flex-col gap-3 mt-3 overflow-hidden"
                    >
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-gray-700">رقم البطاقة</label>
                            <InputText
                                placeholder="xxxx xxxx xxxx xxxx"
                                className="w-full !border-0 !ring-0 !outline-0 !bg-[#F7F6FA] p-2 rounded-md"
                                value={cardDetails.number}
                                onChange={(e) =>
                                    setCardDetails({ ...cardDetails, number: e.target.value })
                                }
                            />
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-medium text-gray-700">
                                    تاريخ الانتهاء (شهر/سنة)
                                </label>
                                <Calendar
                                    style={{ direction: "ltr" }}
                                    placeholder="MM/YY"
                                    inputClassName="w-full !border-0 !ring-0 !outline-0 !bg-[#F7F6FA] p-2 rounded-md"
                                    view="month"
                                    dateFormat="mm/yy"
                                    value={cardDetails.expiration ? new Date(cardDetails.expiration) : null}
                                    onChange={handleExpirationChange}
                                />
                            </div>
                            <div className="flex flex-col gap-1 col-span-2 md:col-span-2">
                                <label className="text-sm font-medium text-gray-700">
                                    اسم صاحب البطاقة
                                </label>
                                <InputText
                                    placeholder="الاسم كما في البطاقة"
                                    className="w-full !border-0 !ring-0 !outline-0 !bg-[#F7F6FA] p-2 rounded-md"
                                    value={cardDetails.holder}
                                    onChange={(e) =>
                                        setCardDetails({ ...cardDetails, holder: e.target.value })
                                    }
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-medium text-gray-700">CVV</label>
                                <InputText
                                    placeholder="123"
                                    className="w-full !border-0 !ring-0 !outline-0 !bg-[#F7F6FA] p-2 rounded-md"
                                    value={cardDetails.cvv}
                                    onChange={(e) =>
                                        setCardDetails({ ...cardDetails, cvv: e.target.value })
                                    }
                                />
                            </div>
                        </div>

                        {/* Left-aligned Button */}
                        <div className="mt-2 flex justify-end">
                            <Button className="!p-[9px] !bg-[#125298] !text-white !rounded-[12px] !border-1 !border-[#5F92DC] !hover:bg-[#d48b17]">
                                دفع {" "} <FinancialValue value={4544} />
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
