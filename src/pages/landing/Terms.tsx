import BigBackgroundGradient from "@/assets/images/big-background-gradient.png";
import React from "react";

export default function Terms() {
    return (
        <>
            <div className="relative py-20 bg-[#00264E] rounded-3xl overflow-hidden">
                <img src={BigBackgroundGradient} alt="" className="hidden md:absolute top-6/7 inset-0 m-auto w-[1396px] h-[1131px] z-0 pointer-events-none"/>
                <div className="container mx-auto px-10 mt-20">
                    <div className="flex flex-col items-center justify-center mt-12 mb-12 md:mb-20">
                        <h1 className={"mb-5 md:mb-10 max-w-[878px] text-center leading-[143%] font-bold text-[24px] md:text-5xl text-transparent bg-clip-text bg-[linear-gradient(176deg,#ECECEC_20.35%,rgba(236,236,236,0)_128.73%)]"}>
                            الشروط والاحكام
                        </h1>
                    </div>
                </div>
            </div>

            <div className={`-mt-28 mx-3 md:mx-0 relative z-10`}>
                <div className={`max-w-[1242px] mx-auto rounded-3xl p-[8px] md:p-[48px] bg-white flex-col`}>
                    <section className="terms-conditions p-6 max-w-4xl mx-auto text-gray-800">
                        <h1 className="text-2xl font-bold mb-6">الشروط والأحكام</h1>

                        <ol className="list-decimal list-inside space-y-4">
                            <li>
                                <h2 className="font-semibold">تعريف النظام</h2>
                                <p>"سمارت" هو نظام إلكتروني لإدارة المحاسبة والعمليات المالية، مخصص للاستخدام من قبل
                                    الأفراد والشركات.</p>
                            </li>

                            <li>
                                <h2 className="font-semibold">التسجيل والاستخدام</h2>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>يجب إدخال بيانات صحيحة عند التسجيل</li>
                                    <li>لا يُسمح بمشاركة الحساب مع أي طرف آخر</li>
                                    <li>الرسوم المدفوعة غير قابلة للاسترجاع بعد إتمام الدفع</li>
                                    <li>تحتفظ الإدارة بحق تعليق أو إيقاف أي حساب يخالف الشروط</li>
                                </ul>
                            </li>

                            <li>
                                <h2 className="font-semibold">الخصوصية والبيانات</h2>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>يحترم "سمارت" خصوصية بيانات المستخدم</li>
                                    <li>لا تتم مشاركة البيانات مع أي جهة خارجية دون موافقة</li>
                                    <li>يمكن للمستخدم طلب نسخة من بياناته</li>
                                    <li>لا يتحمل "سمارت" مسؤولية فقدان البيانات الناتج عن خطأ أو إهمال المستخدم</li>
                                </ul>
                            </li>

                            <li>
                                <h2 className="font-semibold">التحديثات والصيانة</h2>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>يتم تنفيذ تحديثات دورية لتحسين الأداء وتعزيز الأمان</li>
                                    <li>قد تتطلب بعض التحديثات إيقافًا مؤقتًا للنظام</li>
                                    <li>يتم إخطار المستخدمين بالتحديثات المهمة مسبقًا</li>
                                </ul>
                            </li>

                            <li>
                                <h2 className="font-semibold">الدعم الفني</h2>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>الدعم متاح خلال أيام العمل الرسمية</li>
                                    <li>يتم الرد على الطلبات خلال 24 ساعة</li>
                                    <li>الدعم مخصص للمساعدة التقنية، ولا يشمل التدريب أو الإعداد إلا باتفاق مسبق</li>
                                </ul>
                            </li>

                            <li>
                                <h2 className="font-semibold">الملكية الفكرية</h2>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>جميع الحقوق محفوظة لنظام "سمارت"</li>
                                    <li>لا يحق نسخ أو إعادة توزيع أو بيع أي جزء من النظام</li>
                                    <li>اسم "سمارت" وشعاره محميان، ولا يجوز استخدامهما دون إذن مسبق</li>
                                </ul>
                            </li>

                            <li>
                                <h2 className="font-semibold">حدود المسؤولية</h2>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>لا يتحمل "سمارت" أي مسؤولية عن نتائج ناتجة عن سوء الاستخدام</li>
                                    <li>لا يتحمل مسؤولية الأعطال الناتجة عن الإنترنت أو الأجهزة الخاصة بالمستخدم</li>
                                    <li>في حالة حدوث خلل في النظام، يتم العمل على إصلاحه في أقرب وقت ممكن</li>
                                </ul>
                            </li>

                            <li>
                                <h2 className="font-semibold">التعديلات</h2>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>يحق لـ "سمارت" تعديل الشروط في أي وقت</li>
                                    <li>يتم إشعار المستخدم بالتعديلات</li>
                                    <li>استمرار استخدام النظام يعني الموافقة على الشروط المعدلة</li>
                                </ul>
                            </li>

                            <li>
                                <h2 className="font-semibold">حل النزاعات</h2>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>يتم السعي لحل أي نزاع وديًا</li>
                                    <li>إذا تعذر ذلك، يُحال النزاع للجهة المختصة حسب الإجراءات القانونية المعتمدة</li>
                                </ul>
                            </li>
                        </ol>
                    </section>

                </div>
            </div>
        </>
    );
}