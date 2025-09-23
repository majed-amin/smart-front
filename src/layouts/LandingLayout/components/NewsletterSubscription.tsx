import React, { useState } from "react";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import { motion } from "framer-motion";

const NewsletterSubscription: React.FC = () => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Example: validate email
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            setStatus("error");
            return;
        }

        // Replace with your API call
        console.log("Subscribed:", email);
        setStatus("success");
        setEmail("");
    };

    return (
        <motion.section initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }} // once = true => one time only
                        transition={{ duration: 0.6, ease: "easeOut" }} className="container mx-auto mt-10 my-5 p-4 md:p-8 bg-white shadow-[0_3px_16px_-3px_rgba(0,0,0,0.24)] rounded-3xl">
            <div className="">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    {/* Left Column: Title & Subtitle */}
                    <div className="">
                        <h2 className="text-lg leading-[24px] text-[#125298] font-semibold mb-2">
                            اشترك في نشرتنا البريدية
                        </h2>
                        <p className="text-sm text-[#555555]">
                            كن أول من يصلك كل جديد من قيود نرسل لك أحدث العروض، الأخبار، والتحديثات المهمة في عالم الأعمال
                        </p>
                    </div>

                    {/* Right Column: Input & Button */}
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col sm:flex-row gap-4 sm:gap-2  lg:justify-end"
                    >
                        <InputText
                            variant="filled"
                            type="email"
                            placeholder="أدخل بريدك الإلكتروني"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="md:w-[431px] !bg-[#F7F6FA] !border-0 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#E79C1C] focus:border-transparent"
                            required
                        />
                        <Button
                            label="اشترك الان"
                            type="submit"
                            className="!bg-[#125298] !text-white !px-6 !py-3 text-base !hover:bg-[#d88b00] !transition-colors"
                        />
                    </form>
                </div>

                {/* Status Message */}
                {status === "success" && (
                    <p className="mt-4 text-green-600">تم الاشتراك بنجاح!</p>
                )}
                {status === "error" && (
                    <p className="mt-4 text-red-600">يرجى إدخال بريد إلكتروني صالح.</p>
                )}
            </div>
        </motion.section>
    );
};

export default NewsletterSubscription;
