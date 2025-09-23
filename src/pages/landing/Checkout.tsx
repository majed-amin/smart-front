import React, { useState } from "react";
import BigBackgroundGradient from "@/assets/images/big-background-gradient.png";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import FinancialValue from "@/components/common/FinancialValue";
import {Checkbox} from "primereact/checkbox";
import {Link} from "@tanstack/react-router";
import PaymentTypeCard from "./components/PaymentTypeCard";
import MadaIcon from "@/assets/images/payment/mada-payment.png";

const paymentMethods = [
    {
        id: "mada",
        name: "مدى",
        icon: <img src={MadaIcon} alt="" />
    },
    {
        id: "mada1",
        name: "مدى",
        icon: <img src={MadaIcon} alt="" />
    },
]

export default function Checkout() {
    const [step, setStep] = useState(1);
    const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        countryCode: null,
        phone: "",
        email: "",
        companyName: "",
        companySector: null,
        userRole: null,
        companySize: null,
    });
    const [agree, setAgree] = useState<boolean>(false);

    return (
        <>
            <div className="relative py-20 bg-[#00264E] rounded-3xl overflow-hidden">
                <img
                    src={BigBackgroundGradient}
                    alt=""
                    className="hidden md:absolute top-6/7 inset-0 m-auto w-[1396px] h-[1131px] z-0 pointer-events-none"
                />
                <div className="container mx-auto px-10 mt-20">
                    <div className="flex flex-col items-center justify-center mt-12 mb-12 md:mb-20">
                        <h1 className="mb-5 md:mb-10 max-w-[878px] text-center leading-[143%] font-bold text-[24px] md:text-5xl text-transparent bg-clip-text bg-[linear-gradient(176deg,#ECECEC_20.35%,rgba(236,236,236,0)_128.73%)]">
                            عملية الدفع
                        </h1>
                    </div>
                </div>
            </div>

            <div className="-mt-28 relative mx-3 md:mx-0 z-10">
                <div className="max-w-[1472px] mx-auto rounded-3xl p-[8px] md:p-[32px] bg-white flex flex-col gap-8">
                    {step === 1 && (
                        <div className="flex flex-col md:flex-row gap-8">
                            {/* Form */}
                            <div className="flex-1 flex flex-col gap-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <InputText
                                        placeholder="الاسم الأول"
                                        className="w-full !border-0 !outline-0 !ring-0 !bg-[#F7F6FA]"
                                        value={form.firstName}
                                        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                                    />
                                    <InputText
                                        placeholder="اسم العائلة"
                                        className="w-full !border-0 !outline-0 !ring-0 !bg-[#F7F6FA]"
                                        value={form.lastName}
                                        onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Dropdown
                                        options={['السعودية +966', 'اليمن +967']}
                                        placeholder="اختر الدولة"
                                        className="w-full !border-0 !outline-0 !ring-0 !bg-[#F7F6FA]"
                                        value={form.countryCode}
                                        onChange={(e) => setForm({ ...form, countryCode: e.value })}
                                    />
                                    <InputText
                                        placeholder="رقم الهاتف"
                                        className="w-full !border-0 !outline-0 !ring-0 !bg-[#F7F6FA]"
                                        value={form.phone}
                                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                    />
                                </div>

                                <InputText
                                    placeholder="البريد الإلكتروني"
                                    className="w-full !border-0 !outline-0 !ring-0 !bg-[#F7F6FA]"
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                />

                                <InputText
                                    placeholder="اسم الشركة"
                                    className="w-full !border-0 !outline-0 !ring-0 !bg-[#F7F6FA]"
                                    value={form.companyName}
                                    onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                                />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Dropdown
                                        options={['تكنولوجيا', 'خدمات', 'تجارة']}
                                        placeholder="قطاع الشركة"
                                        className="w-full !border-0 !outline-0 !ring-0 !bg-[#F7F6FA]"
                                        value={form.companySector}
                                        onChange={(e) => setForm({ ...form, companySector: e.value })}
                                    />
                                    <Dropdown
                                        options={['مالك', 'موظف', 'مدير']}
                                        placeholder="دورك في الشركة"
                                        className="w-full !border-0 !outline-0 !ring-0 !bg-[#F7F6FA]"
                                        value={form.userRole}
                                        onChange={(e) => setForm({ ...form, userRole: e.value })}
                                    />
                                </div>

                                <Dropdown
                                    options={['1-10', '11-50', '51-200', '200+']}
                                    placeholder="حجم الشركة"
                                    className="w-full md:w-1/2 !border-0 !outline-0 !ring-0 !bg-[#F7F6FA]"
                                    value={form.companySize}
                                    onChange={(e) => setForm({ ...form, companySize: e.value })}
                                />
                            </div>

                            {/* Receipt */}
                            <div className="mx-auto md:mx-0 max-w-[393px] md:min-w-[393px] bg-gray-50 rounded-xl p-[16px] flex flex-col gap-2 shadow-[0px_2px_24px_-7px_#00000029]">
                                <h2 className="text-[18px] font-bold leading-[24px] mb-[12px]">ملخص عملية الدفع</h2>
                                <div className="flex flex-col gap-3">
                                    <div className={`flex flex-col border-1 border-[#E8E8E8] p-[10px] rounded-[12px]`}>
                                        <span className={`text-base font-medium leading-[32px]`}>اسم الباقة</span>
                                        <span className={`text-[24px] font-bold leading-[24px]`}><FinancialValue value={500} /></span>
                                        <span className={`text-sm font-light leading-[20px]`}>شهري / لكل محرر، يتم الفوترة سنويًا</span>
                                    </div>
                                    <div className={`flex flex-col gap-2 border-1 border-[#E8E8E8] p-[10px] rounded-[12px]`}>
                                        <div className="flex justify-between">
                                            <span className={`text-sm text-[#797878] font-light leading-[20px]`}>الاجمالي قبل الضريبة</span>
                                            <span><FinancialValue value={4544} className={`text-[15px]`}/> </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className={`text-sm text-[#797878] font-light leading-[20px]`}>الخصم</span>
                                            <span><FinancialValue value={4544} className={`text-[15px]`}/> </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className={`text-sm text-[#797878] font-light leading-[20px]`}>الضريبة</span>
                                            <span><FinancialValue value={4544} className={`text-[15px]`}/> </span>
                                        </div>
                                        <hr className={`text-[#E8E8E8]/50 my-2`}/>
                                        <div className="flex justify-between">
                                            <span className={`text-base font-medium leading-[20px]`}>الضريبة</span>
                                            <span><FinancialValue value={4544} className={`text-base font-medium`}/> </span>
                                        </div>

                                        <div className={`flex flex-col gap-2 border-1 border-[#E8E8E8] px-[5px] py-[11px] rounded-[12px]`}>
                                            <div className="flex items-center gap-2">
                                                <Checkbox
                                                    className="!rounded-[12px]"
                                                    inputId="agree"
                                                    checked={agree}
                                                    onChange={({ checked }) => setAgree(checked ?? false)}
                                                />
                                                <label htmlFor="agree" className="text-black text-xs font-light">
                                                    لقد قرأت ووافقت على <Link to="/terms" className="text-[#5F92DC] underline underline-offset-3">الاحكام والشروط</Link> <Link to="/terms" className="text-[#5F92DC] underline underline-offset-3">سياسة الخصوصية</Link>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Button
                                    disabled={!agree}
                                    label="استكمال عملية الدفع"
                                    className="mt-6 w-full p-3 !bg-[#125298] !border-1 !border-[#5F92DC] hover:bg-[#d68f17] text-white font-normal shadow-[0px_2px_21px_0px_#A7C8FF3D]"
                                    onClick={() => setStep(2)}
                                />
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="order-1 md:order-2 mx-auto md:mx-0 max-w-[393px] !h-fit md:min-w-[393px] bg-gray-50 rounded-xl p-[16px] flex flex-col gap-2 shadow-[0px_2px_24px_-7px_#00000029]">
                                <h2 className="text-[18px] font-bold leading-[24px] mb-[12px]">ملخص عملية الدفع</h2>
                                <div className="flex flex-col gap-3">
                                    <div className={`flex flex-col border-1 border-[#E8E8E8] p-[10px] rounded-[12px]`}>
                                        <span className={`text-base font-medium leading-[32px]`}>اسم الباقة</span>
                                        <span className={`text-[24px] font-bold leading-[24px]`}><FinancialValue value={500} /></span>
                                        <span className={`text-sm font-light leading-[20px]`}>شهري / لكل محرر، يتم الفوترة سنويًا</span>
                                    </div>
                                    <div className={`flex flex-col gap-2 border-1 border-[#E8E8E8] p-[10px] rounded-[12px]`}>
                                        <div className="flex justify-between">
                                            <span className={`text-sm text-[#797878] font-light leading-[20px]`}>الاجمالي قبل الضريبة</span>
                                            <span><FinancialValue value={4544} className={`text-[15px]`}/> </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className={`text-sm text-[#797878] font-light leading-[20px]`}>الخصم</span>
                                            <span><FinancialValue value={4544} className={`text-[15px]`}/> </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className={`text-sm text-[#797878] font-light leading-[20px]`}>الضريبة</span>
                                            <span><FinancialValue value={4544} className={`text-[15px]`}/> </span>
                                        </div>
                                        <hr className={`text-[#E8E8E8]/50 my-2`}/>
                                        <div className="flex justify-between">
                                            <span className={`text-base font-medium leading-[20px]`}>الضريبة</span>
                                            <span><FinancialValue value={4544} className={`text-base font-medium`}/> </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="order-2 md:order-1 flex-1 flex flex-col gap-4">
                                <h2 className="text-base md:text-[18px] font-bold">اختر احد طرق الدفع</h2>
                                <div className="flex flex-col gap-5 w-full">
                                    {paymentMethods.map((payment) => (
                                        <PaymentTypeCard key={payment.id} selected={selectedPayment === payment.id}
                                                         payment={payment} onSelect={(id) => setSelectedPayment(payment.id)} />
                                    ))}
                                </div>
                            </div>

                            {/*<Button*/}
                            {/*    label="تأكيد الدفع"*/}
                            {/*    className="w-full p-3 bg-[#E79C1C] hover:bg-[#d68f17] text-white font-semibold"*/}
                            {/*    onClick={() => alert("تم الدفع!")}*/}
                            {/*/>*/}
                            {/*<Button*/}
                            {/*    label="العودة للخطوة السابقة"*/}
                            {/*    className="w-full p-3 border border-gray-300 text-gray-700"*/}
                            {/*    onClick={() => setStep(1)}*/}
                            {/*/>*/}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
