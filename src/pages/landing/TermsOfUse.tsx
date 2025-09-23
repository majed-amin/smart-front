import BigBackgroundGradient from "@/assets/images/big-background-gradient.png";
import React from "react";

export default function TermsOfUse() {
    return (
        <>
            <div className="relative py-20 bg-[#00264E] rounded-3xl overflow-hidden">
                <img src={BigBackgroundGradient} alt="" className="hidden md:absolute top-6/7 inset-0 m-auto w-[1396px] h-[1131px] z-0 pointer-events-none"/>
                <div className="container mx-auto px-10 mt-20">
                    <div className="flex flex-col items-center justify-center mt-12 mb-12 md:mb-20">
                        <h1 className={"mb-5 md:mb-10 max-w-[878px] text-center leading-[143%] font-bold text-[24px] md:text-5xl text-transparent bg-clip-text bg-[linear-gradient(176deg,#ECECEC_20.35%,rgba(236,236,236,0)_128.73%)]"}>
                            اتفاقية الإستخدام
                        </h1>
                    </div>
                </div>
            </div>

            <div className={`-mt-28 mx-3 md:mx-0 relative z-10`}>
                <div className={`max-w-[1242px] mx-auto rounded-3xl p-[8px] md:p-[48px] bg-white flex-col`}>
                    <section className="terms-conditions p-6 max-w-4xl text-gray-800">
                        <h1 className="text-2xl font-bold mb-6">اتفاقية استخدام نظام سمارت</h1>

                        <p className="mb-4">
                            يُرجى قراءة هذه الاتفاقية بعناية قبل استخدام نظام "سمارت". باستخدامك للنظام، فإنك تقر
                            بموافقتك على جميع الشروط التالية.
                        </p>

                        <ol className="list-decimal list-inside space-y-4">
                            <li>
                                <h2 className="font-semibold">الغرض من النظام</h2>
                                <p>
                                    يوفر "سمارت" خدمات محاسبية وإدارية رقمية، موجهة للأفراد، الشركات، والمنشآت التجارية.
                                    الاستخدام يقتصر على الأغراض القانونية والمرخصة فقط.
                                </p>
                            </li>

                            <li>
                                <h2 className="font-semibold">إنشاء الحساب</h2>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>يجب تقديم معلومات دقيقة وكاملة عند التسجيل</li>
                                    <li>المستخدم مسؤول عن حماية بيانات الدخول</li>
                                    <li>لا يجوز فتح أكثر من حساب لنفس الجهة دون موافقة مكتوبة</li>
                                    <li>يحق لـ "سمارت" إلغاء الحسابات المخالفة دون إشعار مسبق</li>
                                </ul>
                            </li>

                            <li>
                                <h2 className="font-semibold">استخدام النظام</h2>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>يُمنع استخدام النظام لأي نشاط غير مشروع</li>
                                    <li>يُمنع التدخل في وظائف النظام أو محاولة اختراقه</li>
                                    <li>يتحمل المستخدم كامل المسؤولية عن أي محتوى يُدخل إلى النظام</li>
                                    <li>أي عملية تُنفذ عبر الحساب تُعتبر صادرة من المستخدم نفسه</li>
                                </ul>
                            </li>

                            <li>
                                <h2 className="font-semibold">الاشتراك والدفع</h2>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>يتطلب استخدام النظام اشتراكًا مدفوعًا حسب الباقة المختارة</li>
                                    <li>تبدأ صلاحية الاشتراك من تاريخ الدفع</li>
                                    <li>الرسوم غير قابلة للاسترجاع</li>
                                    <li>في حال تأخر الدفع، يحق لـ "سمارت" إيقاف الحساب مؤقتًا أو نهائيًا</li>
                                </ul>
                            </li>

                            <li>
                                <h2 className="font-semibold">التحديثات والتعديلات</h2>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>يحتفظ "سمارت" بالحق في تحديث النظام وتحسينه بشكل مستمر</li>
                                    <li>يمكن تعديل الوظائف أو المزايا أو الرسوم دون إشعار مسبق</li>
                                    <li>استمرار استخدام النظام بعد أي تعديل يُعد موافقة تلقائية عليه</li>
                                </ul>
                            </li>

                            <li>
                                <h2 className="font-semibold">الحقوق والملكية</h2>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>جميع مكونات النظام ملك لـ "سمارت"</li>
                                    <li>لا يجوز نسخ، تعديل، إعادة توزيع أو بيع أي جزء من النظام</li>
                                    <li>العلامة التجارية "سمارت" وجميع التصاميم والبيانات محمية بموجب حقوق الملكية
                                        الفكرية
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <h2 className="font-semibold">إخلاء المسؤولية</h2>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>"سمارت" غير مسؤول عن أي أضرار مباشرة أو غير مباشرة تنتج عن استخدام النظام</li>
                                    <li>لا يتحمل المسؤولية عن فقدان بيانات أو خسائر مالية ناتجة عن أخطاء المستخدم</li>
                                    <li>لا يضمن توفر النظام في جميع الأوقات أو خلوه من المشاكل التقنية</li>
                                </ul>
                            </li>

                            <li>
                                <h2 className="font-semibold">إيقاف الخدمة</h2>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>يحق لـ "سمارت" إيقاف الخدمة بشكل مؤقت أو دائم لأي حساب يخالف الشروط</li>
                                    <li>يمكن إيقاف الخدمة للصيانة أو التحديث دون إشعار مسبق</li>
                                    <li>في حالة الإلغاء، تبقى البيانات محفوظة لمدة محددة ويمكن للمستخدم طلب نسخة منها
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <h2 className="font-semibold">إنهاء الاتفاقية</h2>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>يمكن للمستخدم إنهاء الاتفاقية في أي وقت بعد إيقاف استخدام النظام</li>
                                    <li>"سمارت" يحق له إنهاء الاتفاقية في حال خرق المستخدم لأي بند</li>
                                    <li>عند الإنهاء، يتم حذف أو تعطيل الحساب وفقًا لسياسة البيانات</li>
                                </ul>
                            </li>
                        </ol>
                    </section>
                </div>
            </div>
        </>
    );
}