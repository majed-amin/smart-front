import React, { useState } from "react";
import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar"; // Drawer component
import AppLogo from "../assets/images/app-logo.png";
import {Icon} from "@iconify/react";
import {Link, useNavigate} from "@tanstack/react-router";

// Define menu items in an array
const menuItems = [
    { label: "الرئيسية", href: "/" },
    { label: "الباقات", href: "/plans" },
    { label: "المزايا", href: "/features" },
    { label: "المدونة", href: "/blog" },
    { label: "عن شركة سمارت", href: "/about-us" },
];

const AppNavbar: React.FC = () => {
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate({ from: "/" });
    function handleGoToLogin() {
        navigate({ to: "/auth/login" })
    }

    function handleGoToRegister() {
        navigate({ to: "/auth/register" })
    }

    return (
        <div className="relative flex flex-col items-center">
            <header className="container md:mx-auto md:max-w-[1607px] bg-[#00264E]/60 fixed top-3.5 py-8 backdrop-blur-lg z-50 rounded-3xl">
                <div className="px-6 py-3 flex items-center justify-between">
                    {/* Mobile Hamburger */}
                    <div className="md:hidden order-1 md:order-2">
                        <Button
                            text
                            className="!bg-[#ECF1FF]/10 rounded-[8px] !p-[8px]"
                            onClick={() => setVisible(true)}
                        >
                            <Icon icon="solar:hamburger-menu-line-duotone" color={`#FFFFFF`} width="40" height="40" />
                        </Button>
                    </div>

                    {/* Logo + Navigation */}
                    <div className="order-2 md:order-0 flex items-center gap-6">
                        {/* App Icon */}
                        <div className="flex items-center me-8">
                            <img
                                src={AppLogo}
                                alt="App Logo"
                                className="w-[90px] md:w-[142px] object-contain"
                            />
                        </div>

                        {/* Navigation menu for md+ */}
                        <nav aria-label="Main navigation">
                            <ul className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            to={item.href}
                                            className="hover:text-primary-600 text-white transition-colors"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* Desktop Auth Buttons */}
                    <div className="hidden md:flex items-center gap-3">
                        <Button
                            onClick={handleGoToLogin}
                            label="تسجيل الدخول"
                            className="!bg-[#125298] text-white !border-1 !border-[#5F92DC]"
                        />
                        <Button
                            onClick={handleGoToRegister}
                            label="ابدأ مجانا الآن"
                            className="!bg-white !text-[#125298] shadow-[0px_2px_21px_0px_#A7C8FF3D]"
                        />
                    </div>


                </div>

                {/* Sidebar Drawer for mobile menu */}
                <Sidebar
                    visible={visible}
                    position="left"
                    onHide={() => setVisible(false)}
                    className="w-64"
                    pt={{
                        mask: { className: '!justify-end' }, // forces the sidebar to appear on the right in RTL
                    }}
                >
                    <div className="flex flex-col h-full">
                        {/* Logo */}
                        <div className="flex items-center mb-6">
                            <img
                                src={AppLogo}
                                alt="App Logo"
                                className="h-10 w-10 object-contain ml-3"
                            />
                            <span className="font-bold text-lg">سمارت</span>
                        </div>

                        {/* Menu items */}
                        <nav>
                            <ul className="flex flex-col gap-4 text-gray-700 font-medium">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            to={item.href}
                                            className="block hover:text-primary-600 transition-colors"
                                            onClick={() => setVisible(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* Auth buttons */}
                        <div className="mt-auto pt-6 flex flex-col gap-3">
                            <Button
                                onClick={handleGoToLogin}
                                label="تسجيل الدخول"
                                text
                                className="!text-gray-700 hover:!text-primary-600 w-full"
                            />
                            <Button
                                onClick={handleGoToRegister}
                                label="ابدأ مجانا الآن"
                                className="!bg-primary-600 !text-white hover:!bg-primary-700 rounded-full w-full"
                            />
                        </div>
                    </div>
                </Sidebar>
            </header>
        </div>
    );
};

export default AppNavbar;
