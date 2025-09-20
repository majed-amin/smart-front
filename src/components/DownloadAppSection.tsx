import React from "react";
import BackgroundGradient from "@/assets/images/background-gradient.png";
import AppImage from "@/assets/images/mobile-app.png";
import AppleStore from "@/assets/images/apple-store.png";
import GoogleStore from "@/assets/images/google-store.png";
import HuaweiAppGallery from "@/assets/images/huawei-store.png";
import { motion } from "framer-motion";

const DownloadAppSection: React.FC = () => {
    return (
        <motion.section initial={{ scale: 0.8, opacity: 0 }}
                 whileInView={{ scale: 1, opacity: 1 }}
                 viewport={{ once: true, amount: 0.3 }} // once = true => one time only
                 transition={{ duration: 0.6, ease: "easeOut" }} className="md:container mx-2 md:mx-auto relative bg-[#00264E] text-white h-auto lg:h-[593px] overflow-hidden rounded-3xl mb-5">
            <img src={BackgroundGradient} className="absolute top-0 inset-0 m-auto w-[1395.9999828545524px] object-contain pointer-events-none z-1" alt="Background Gradient" />
            <div className="flex flex-col lg:flex-row h-full items-center px-6 lg:px-12 py-10 lg:py-0">
                {/* Mobile image (on top in mobile, floating in large screens) */}
                <div className=" lg:absolute lg:-bottom-50 lg:left-20 w-full lg:w-1/2 flex justify-center lg:justify-end relative order-1 lg:order-2">
                    <img
                        src={AppImage}
                        alt="Mobile App"
                        className="w-[250px] sm:w-[300px] lg:w-[723px]"
                    />
                </div>

                {/* Content side */}
                <div className="w-full lg:w-1/2 flex max-w-[685px] lg:ms-16 flex-col justify-center gap-6 order-2 lg:order-1 text-center lg:text-start mt-6 lg:mt-0">
                    <div>
                        <h2 className="text-base lg:text-[32px] font-semibold  leading-[160%]">
                            تطبيق <span className="text-[#E79C1C]">سمارت المحاسبي</span>
                        </h2>
                        <p className="text-base lg:text-[32px] mt-2 font-semibold leading-[160%]">
                            إدارتك المالية في متناول يدك
                        </p>
                    </div>

                    <p className="text-sm md:text-lg font-light leading-relaxed text-gray-200">
                        تابع حساباتك، تقاريرك، ومبيعاتك من أي مكان<br />
                        تطبيق سمارت صمم ليسهّل عليك كل ما يتعلق بالإدارة المحاسبية، بخطوات
                        بسيطة وواجهة واضحة
                    </p>

                    {/* List */}
                    <ul className="space-y-2 text-sm md:text-lg text-white">
                        <li className="relative ps-8 before:content-['✓'] before:absolute before:start-0 before:top-0 before:ms-2">تكامل مباشر مع منصة سمارت</li>
                        <li className="relative ps-8 before:content-['✓'] before:absolute before:start-0 before:top-0 before:ms-2">تقارير مالية فورية</li>
                        <li className="relative ps-8 before:content-['✓'] before:absolute before:start-0 before:top-0 before:ms-2">إنشاء وتتبع الفواتير</li>
                    </ul>

                    {/* App stores row */}
                    <div className="flex flex-col md:flex-row justify-center items-center lg:justify-start gap-4 mt-4">
                        <img src={AppleStore} alt="Apple Store" className="h-[63.908653259277344px] md:h-[53.54999923706055px] w-[211px] md:w-[176.8000030517578px]" />
                        <img src={GoogleStore} alt="Google Play" className="h-[63.908653259277344px] md:h-[53.54999923706055px] w-[211px] md:w-[176.8000030517578px]" />
                        <img src={HuaweiAppGallery} alt="Huawei AppGallery" className="h-[63.908653259277344px] md:h-[53.54999923706055px] w-[211px] md:w-[176.8000030517578px]" />
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default DownloadAppSection;
