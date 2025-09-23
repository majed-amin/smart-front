import BigBackgroundGradient from "@/assets/images/big-background-gradient.png";
import React from "react";

export default function AboutUs() {
    return (
        <>
            <div className="relative py-20 bg-[#00264E] rounded-3xl overflow-hidden">
                <img src={BigBackgroundGradient} alt="" className="hidden md:absolute top-6/7 inset-0 m-auto w-[1396px] h-[1131px] z-0 pointer-events-none"/>
                <div className="container mx-auto px-10 mt-20">
                    <div className="flex flex-col items-center justify-center mt-12 mb-12 md:mb-20">
                        <h1 className={"mb-5 md:mb-10 max-w-[878px] text-center leading-[143%] font-bold text-[24px] md:text-5xl text-transparent bg-clip-text bg-[linear-gradient(176deg,#ECECEC_20.35%,rgba(236,236,236,0)_128.73%)]"}>
                            عن شركة سمارت
                        </h1>
                    </div>
                </div>
            </div>

            <div className={`-mt-28 mx-3 md:mx-0 relative z-10`}>
                <div className={`max-w-[1242px] mx-auto rounded-3xl p-[8px] md:p-[48px] bg-white flex-col`}>
                    <section className="about-smart p-6 max-w-4xl text-gray-800 space-y-6">
                        <h1 className="text-2xl font-bold mb-4">شركة سمارت</h1>
                        <p>
                            شركة سمارت هي شركة تقنية متخصصة في تطوير أنظمة المحاسبة. بدأت العمل منذ أكثر من 10 سنوات.
                            ركزت منذ تأسيسها على بناء أنظمة تساعد أصحاب المشاريع الصغيرة والمتوسطة على إدارة المحاسبة
                            والمخزون والمبيعات من مكان واحد.
                        </p>

                        <h2 className="text-xl font-semibold mt-4">نظام سمارت المحاسبي</h2>
                        <p>
                            نظام شامل لإدارة الحسابات، المبيعات، المخزون، والمشتريات
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>يعمل على الأجهزة المكتبية والهواتف</li>
                            <li>يدعم تعدد المستخدمين والصلاحيات</li>
                            <li>يسمح بتوليد تقارير تفصيلية لحظة بلحظة</li>
                            <li>يوفر نسخ احتياطي تلقائي</li>
                        </ul>

                        <h2 className="text-xl font-semibold mt-4">مميزات النظام</h2>
                        <ul className="list-disc list-inside space-y-1">
                            <li>واجهة بسيطة وسهلة</li>
                            <li>سرعة في الأداء</li>
                            <li>تحديثات منتظمة</li>
                            <li>دعم فني مباشر</li>
                            <li>إمكانية الربط مع نقاط البيع والمتاجر الإلكترونية</li>
                        </ul>

                        <h2 className="text-xl font-semibold mt-4">من يستخدم النظام</h2>
                        <ul className="list-disc list-inside space-y-1">
                            <li>المحلات التجارية</li>
                            <li>الشركات الخدمية</li>
                            <li>الورش والمصانع</li>
                            <li>المكاتب الصغيرة</li>
                        </ul>

                        <h2 className="text-xl font-semibold mt-4">أسئلة تساعدك</h2>
                        <ul className="list-disc list-inside space-y-1">
                            <li>هل تحتاج نظاماً محاسبياً بواجهة بسيطة وسريعة؟</li>
                            <li>هل تبحث عن نظام يتوسع مع نمو مشروعك؟</li>
                            <li>هل تفضل نظاماً محلياً أو عبر الإنترنت؟</li>
                        </ul>
                    </section>


                </div>
            </div>
        </>
    );
}