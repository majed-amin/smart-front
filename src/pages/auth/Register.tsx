import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import {Button} from "primereact/button";

export default function Register() {
    const countryCodes = [
        { name: "+966", value: "+966" },
        { name: "+20", value: "+20" },
        { name: "+971", value: "+971" },
        { name: "+974", value: "+974" },
        { name: "+965", value: "+965" },
    ];

    const [firstName, setFirstName] = useState("");
    const [familyName, setFamilyName] = useState("");
    const [countryCode, setCountryCode] = useState(countryCodes[0]);
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [companySection, setCompanySection] = useState("");
    const [role, setRole] = useState(null);
    const [companySize, setCompanySize] = useState(null);

    const companySections = [
        { label: "تكنولوجيا", value: "تكنولوجيا" },
        { label: "خدمات", value: "خدمات" },
        { label: "تجارة", value: "تجارة" },
    ];

    const roles = [
        { label: "مالك", value: "مالك" },
        { label: "موظف", value: "موظف" },
        { label: "مدير", value: "مدير" },
    ];

    const companySizes = [
        { label: "1-10", value: "1-10" },
        { label: "11-50", value: "11-50" },
        { label: "51-200", value: "51-200" },
        { label: "200+", value: "200+" },
    ];

    const handleRegister = () => {
        console.log({
            firstName,
            familyName,
            countryCode,
            phone,
            email,
            companyName,
            companySection,
            role,
            companySize
        });
    };

    const isFormValid =
        firstName &&
        familyName &&
        phone &&
        email &&
        companyName &&
        companySection &&
        role &&
        companySize;

    return (
        <div className="space-y-6">
            <h1 className="mb-[6px] text-[24px] leading-[143%] font-bold">إنشاء حساب</h1>
            <span className="text-[16px] font-medium leading-[143%]">انشاء حسابك الان</span>

            {/* معلومات الحساب */}
            <div className="space-y-4 mt-[28px]">
                <h2 className="text-[18px] font-medium mb-2">معلومات الحساب</h2>

                {/* First Row: First Name & Family Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-gray-700">الاسم الأول</label>
                        <InputText
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="الاسم الأول"
                            className="w-full !border-0 !outline-0 !ring-0 !bg-[#F7F6FA]"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-gray-700">اسم العائلة</label>
                        <InputText
                            value={familyName}
                            onChange={(e) => setFamilyName(e.target.value)}
                            placeholder="اسم العائلة"
                            className="w-full !border-0 !outline-0 !ring-0 !bg-[#F7F6FA]"
                        />
                    </div>
                </div>

                {/* Second Row: Phone & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-gray-700">رقم الجوال</label>
                        <div className="flex gap-2">
                            <InputText
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="أدخل رقم الجوال"
                                className="flex-1 !border-0 !outline-0 !ring-0 !bg-[#F7F6FA]"
                            />
                            <Dropdown
                                value={countryCode}
                                onChange={(e) => setCountryCode(e.value)}
                                options={countryCodes}
                                optionLabel="name"
                                className="w-26 !border-0 !outline-0 !ring-0 !bg-[#F7F6FA]"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-gray-700">البريد الإلكتروني</label>
                        <InputText
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="البريد الإلكتروني"
                            className="w-full !border-0 !outline-0 !ring-0 !bg-[#F7F6FA]"
                        />
                    </div>
                </div>
            </div>

            {/* معلومات المنشأة */}
            <div className="space-y-4 mt-[28px]">
                <h2 className="text-[18px] font-medium mb-2">معلومات المنشأة</h2>

                {/* First Row: Company Name & Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-gray-700">اسم المنشأة</label>
                        <InputText
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            placeholder="اسم المنشأة"
                            className="w-full !border-0 !outline-0 !ring-0 !bg-[#F7F6FA]"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-gray-700">قطاع المنشأة</label>
                        <Dropdown
                            value={companySection}
                            onChange={(e) => setCompanySection(e.value)}
                            options={companySections}
                            placeholder="اختر القطاع"
                            className="w-full !border-0 !outline-0 !ring-0 !bg-[#F7F6FA]"
                        />
                    </div>
                </div>

                {/* Second Row: Role & Company Size */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-gray-700">دورك في المنشأة</label>
                        <Dropdown
                            value={role}
                            onChange={(e) => setRole(e.value)}
                            options={roles}
                            placeholder="اختر الدور"
                            className="w-full !border-0 !outline-0 !ring-0 !bg-[#F7F6FA]"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-gray-700">حجم المنشأة</label>
                        <Dropdown
                            value={companySize}
                            onChange={(e) => setCompanySize(e.value)}
                            options={companySizes}
                            placeholder="اختر الحجم"
                            className="w-full !border-0 !outline-0 !ring-0 !bg-[#F7F6FA]"
                        />
                    </div>
                </div>
            </div>

            {/* زر التسجيل */}
            <div className={`w-full flex items-center justify-end`}>
                <Button
                    disabled={!isFormValid}
                    onClick={handleRegister}
                    className="w-fit !bg-[#125298] hover:bg-[#d68f17] text-white !text-[16px] font-semibold !mt-10 !px-[24px] !py-[12px] rounded-lg transition"
                >
                    ابداء الان
                </Button>
            </div>
        </div>
    );
}
