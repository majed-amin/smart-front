import React, { useRef, useEffect, useState } from "react";
import NewsletterSubscription from "./NewsletterSubscription";
import DownloadAppSection from "./DownloadAppSection";
import {Link, useLocation} from "@tanstack/react-router";

interface FooterProps {
    className?: string;
    children?: React.ReactNode;
}

const links = [
    { label: "الرئيسية", href: "/" },
    { label: "من نحن", href: "/about-us" },
    { label: "اتصل بنا", href: "#" },
];

const Footer: React.FC<FooterProps> = ({ className }) => {
    const location = useLocation();
    const hiddenRoutes = ["/auth/login", "/auth/register", "/checkout", "/terms", "/terms-of-use", "/about-us", "/article-details", "plans"];
    const shouldShowDownloadBlock = !hiddenRoutes.includes(location.pathname);

    const newsletterRef = useRef<HTMLDivElement>(null);
    const footerContentRef = useRef<HTMLDivElement>(null);
    const [bgHeight, setBgHeight] = useState<number>(0);

    useEffect(() => {
        const newsletterHeight = newsletterRef.current?.offsetHeight ?? 0;
        const footerContentHeight = footerContentRef.current?.offsetHeight ?? 0;

        if (shouldShowDownloadBlock) {
            // Cover only newsletter + half of footer content
            setBgHeight(newsletterHeight + footerContentHeight / 0.27);
        } else {
            // Cover all content
            setBgHeight((newsletterHeight + footerContentHeight) + 50);
        }
    }, [shouldShowDownloadBlock]);

    return (
        <footer className={`relative w-full ${className ?? ""}`}>
            {/* Dynamic background */}
            <div
                className="absolute bottom-0 left-0 w-full bg-[#EEF3FB] z-0 rounded-t-3xl"
                style={{ height: bgHeight }}
            />

            {/* Newsletter */}
            <div ref={newsletterRef} className="relative z-10">
                <NewsletterSubscription />
            </div>

            {/* Download block */}
            {shouldShowDownloadBlock && <DownloadAppSection />}

            {/* Footer links + copyright */}
            <div
                ref={footerContentRef}
                className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 py-4"
            >
                <div className="flex flex-wrap items-center gap-2 text-[#4478C0] text-base md:text-base">
                    {links.map((link, index) => (
                        <React.Fragment key={link.label}>
                            <Link
                                to={link.href}
                                className="underline underline-offset-4 border-transparent hover:border-[#4478C0] transition-colors"
                            >
                                {link.label}
                            </Link>
                            {index < links.length - 1 && (
                                <span className="text-[#CFCFCF]">|</span>
                            )}
                        </React.Fragment>
                    ))}
                </div>
                <div className="p-4 text-[#6F6C90] text-[16px]">
                    حقوق النشر © 2025 سمارت
                </div>
            </div>
        </footer>
    );
};

export default Footer;
