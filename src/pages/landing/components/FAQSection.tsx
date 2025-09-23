import React, { useState } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import {Icon} from "@iconify/react";

type FAQItem = {
    question: string;
    answer: string;
};

const faqItems: FAQItem[] = [
    {
        question: "ما هو نظام سمارت؟",
        answer: "نظام سمارت هو حل محاسبي مبتكر وسهل الاستخدام، يهدف إلى تسهيل إدارة حساباتك اليومية بكفاءة. يمكنك من خلاله إضافة الفواتير، تتبع الإيرادات والمصروفات، وإدارة التقارير المالية بشكل فعال. بفضل واجهته البسيطة والتكنولوجيا المتطورة، يساعدك سمارت على توفير الوقت والجهد، مما يتيح لك التركيز على تطوير أعمالك. سواء كنت تدير متجرًا صغيرًا أو شركة كبيرة، يوفر لك سمارت الأدوات اللازمة لتحقيق النجاح المالي بسهولة."
    },
    {
        question: "ما هي مميزات نظام سمارت؟",
        answer: "نظام سمارت هو حل محاسبي مبتكر وسهل الاستخدام، يهدف إلى تسهيل إدارة حساباتك اليومية بكفاءة. يمكنك من خلاله إضافة الفواتير، تتبع الإيرادات والمصروفات، وإدارة التقارير المالية بشكل فعال. بفضل واجهته البسيطة والتكنولوجيا المتطورة، يساعدك سمارت على توفير الوقت والجهد، مما يتيح لك التركيز على تطوير أعمالك. سواء كنت تدير متجرًا صغيرًا أو شركة كبيرة، يوفر لك سمارت الأدوات اللازمة لتحقيق النجاح المالي بسهولة."
    },
    {
        question: "كيف يمكنني استخدام نظام سمارت؟",
        answer: "نظام سمارت هو حل محاسبي مبتكر وسهل الاستخدام، يهدف إلى تسهيل إدارة حساباتك اليومية بكفاءة. يمكنك من خلاله إضافة الفواتير، تتبع الإيرادات والمصروفات، وإدارة التقارير المالية بشكل فعال. بفضل واجهته البسيطة والتكنولوجيا المتطورة، يساعدك سمارت على توفير الوقت والجهد، مما يتيح لك التركيز على تطوير أعمالك. سواء كنت تدير متجرًا صغيرًا أو شركة كبيرة، يوفر لك سمارت الأدوات اللازمة لتحقيق النجاح المالي بسهولة."
    },
    {
        question: "ما هي فوائد استخدام نظام سمارت؟",
        answer: "نظام سمارت هو حل محاسبي مبتكر وسهل الاستخدام، يهدف إلى تسهيل إدارة حساباتك اليومية بكفاءة. يمكنك من خلاله إضافة الفواتير، تتبع الإيرادات والمصروفات، وإدارة التقارير المالية بشكل فعال. بفضل واجهته البسيطة والتكنولوجيا المتطورة، يساعدك سمارت على توفير الوقت والجهد، مما يتيح لك التركيز على تطوير أعمالك. سواء كنت تدير متجرًا صغيرًا أو شركة كبيرة، يوفر لك سمارت الأدوات اللازمة لتحقيق النجاح المالي بسهولة."
    },
    {
        question: "ما هي خصائص نظام سمارت؟",
        answer: "نظام سمارت هو حل محاسبي مبتكر وسهل الاستخدام، يهدف إلى تسهيل إدارة حساباتك اليومية بكفاءة. يمكنك من خلاله إضافة الفواتير، تتبع الإيرادات والمصروفات، وإدارة التقارير المالية بشكل فعال. بفضل واجهته البسيطة والتكنولوجيا المتطورة، يساعدك سمارت على توفير الوقت والجهد، مما يتيح لك التركيز على تطوير أعمالك. سواء كنت تدير متجرًا صغيرًا أو شركة كبيرة، يوفر لك سمارت الأدوات اللازمة لتحقيق النجاح المالي بسهولة."
    },
    {
        question: "كيف يمكنني استخدام نظام سمارت؟",
        answer: "نظام سمارت هو حل محاسبي مبتكر وسهل الاستخدام، يهدف إلى تسهيل إدارة حساباتك اليومية بكفاءة. يمكنك من خلاله إضافة الفواتير، تتبع الإيرادات والمصروفات، وإدارة التقارير المالية بشكل فعال. بفضل واجهته البسيطة والتكنولوجيا المتطورة، يساعدك سمارت على توفير الوقت والجهد، مما يتيح لك التركيز على تطوير أعمالك. سواء كنت تدير متجرًا صغيرًا أو شركة كبيرة، يوفر لك سمارت الأدوات اللازمة لتحقيق النجاح المالي بسهولة."
    }
];

const FAQSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0); // keep first open

    return (
        <section className="faq-section py-16 px-6 md:px-24 bg-[#F8F9FB] rounded-3xl">
            <div className="text-center mb-10">
                <span className="text-[13px] md:text-lg leading-[140%] text-black">أسئلة شائعة</span>
                <h2 className="text-base md:text-[32px] font-bold mb-2">
                    تعرف على المزيد حول <span className="text-[#E79C1C]">سمارت</span>
                </h2>
                <p className="text-sm md:text-lg text-[#1F1F1F]/65 leading-[180%]">
                    هنا تجد الإجابات لأكثر الأسئلة تكرارًا حول نظام سمارت.
                </p>
            </div>

            <div className="max-w-[1202px] mx-auto">
                <Accordion
                    activeIndex={activeIndex}
                    onTabOpen={(e) => {
                        if (e.index !== null) setActiveIndex(e.index);
                    }}
                    multiple={false}
                    dir="ltr"
                    className="w-full"
                    expandIcon={<i className="pi pi-plus"></i>}
                    collapseIcon={<i className="pi pi-minus"></i>}
                >
                    {faqItems.map((faq, index) => (
                        <AccordionTab
                            key={index}
                            header={faq.question}
                            pt={{
                                root: {
                                    className: `${
                                        activeIndex === index
                                            ? "shadow-[0px_9px_45.2px_-2px_#0000001F] bg-white rounded-2xl mb-4"
                                            : "bg-white rounded-2xl mb-4"
                                    }`,
                                },
                                header: { className: "flex justify-between items-center px-4 py-3 cursor-pointer rounded-t-2xl" },
                                content: { className: "px-4 pb-4 pt-2 text-right rounded-b-2xl" },

                            }}
                            headerTemplate={(options) => (
                                <div className="flex justify-between items-center w-full">
                                    {/*<Icon*/}
                                    {/*    icon={index === activeIndex ? "solar:minus-circle-linear" : "solar:add-circle-linear"}*/}
                                    {/*    width={24}*/}
                                    {/*    height={24}*/}
                                    {/*/>*/}
                                    <span
                                        className={`ml-auto font-medium text-base md:text-[20px] ${index === activeIndex ? "text-[#5F92DC]" : "text-black"}`}
                                    >
                                        {faq.question}
                                    </span>
                                </div>
                            )}
                        >
                            <span className={`text-sm md:text-base`}>{faq.answer}</span>
                        </AccordionTab>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};

export default FAQSection;
