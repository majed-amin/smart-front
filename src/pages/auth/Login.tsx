import { Button } from "primereact/button"
import React, { useState } from "react";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import {Icon} from "@iconify/react";
import {IconField} from "primereact/iconfield";
import {InputIcon} from "primereact/inputicon";
import {Checkbox} from "primereact/checkbox";
import {Link} from "@tanstack/react-router";

export default function Login() {
    const countryCodes = [
        { name: "+966", value: "+966" },
        { name: "+20", value: "+20" },
        { name: "+971", value: "+971" },
        { name: "+974", value: "+974" },
        { name: "+965", value: "+965" },
    ];

    const [countryCode, setCountryCode] = useState(countryCodes[0]);
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [rememberMe, setRememberMe] = useState<boolean>(false);

    const handleLogin = () => {
        console.log("تسجيل الدخول بـ:", { countryCode, phone, password, rememberMe });
    };

    return (
        <div className="space-y-6">
            <h1 className="mb-[6px] text-[24px] leading-[143%] font-bold">تسجيل الدخول</h1>
            <span className="text-[16px] font-medium leading-[143%]">سجّل دخولك وواصل إنجازاتك بدون توقف</span>

            {/* رقم الجوال */}
            <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    رقم الجوال
                </label>
                <div className="flex gap-2">
                    <InputText
                        id="phone"
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
                        className="w-28 !border-0 !outline-0 !ring-0 !bg-[#F7F6FA]"
                    />
                </div>
            </div>

            {/* كلمة المرور */}
            <div className="flex flex-col gap-2">
                <label htmlFor="password" className="text-sm font-medium text-gray-700">
                    كلمة المرور
                </label>
                <IconField iconPosition="left">
                    <InputIcon
                        className="cursor-pointer flex items-center"
                        onClick={() => setShowPassword((prev) => !prev)}
                        style={{ color: "#6b7280" }}
                    >
                        {showPassword ? <Icon icon="solar:eye-closed-linear" width="20" height="20" /> : <Icon icon="solar:eye-linear" width="20" height="20"/>}
                    </InputIcon>
                    <InputText
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="أدخل كلمة المرور"
                        className="w-full !border-0 !outline-0 !ring-0 !bg-[#F7F6FA]"
                    />
                </IconField>
            </div>

            {/* تذكرني */}
            <div className="flex items-center gap-2 border-1 border-[#E8E8E8] px-3 py-2 rounded-[8px] mb-10">
                <Checkbox
                    inputId="rememberMe"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.checked ?? false)}
                    className="!rounded-[12px]"
                />
                <label htmlFor="rememberMe" className="bg-[#F7F6FA] text-black text-sm font-light">
                    تذكرني في المرة القادمة
                </label>
            </div>

            {/* زر الدخول */}
            <div className="w-full flex flex-col justify-center items-center">
                <Button
                    label="تسجيل الدخول"
                    onClick={handleLogin}
                    className="w-full text-base !bg-[#125298] !border-none text-white !font-light py-3 rounded-lg transition"
                />

                <span className={`text-base font-medium leading-[100%] mt-[24px]`}>
                لا يوجد لديك حساب؟ <Link to="/auth/register" className="text-[#4478C0]">اشترك الان</Link>
            </span>
            </div>
        </div>
    )
}
