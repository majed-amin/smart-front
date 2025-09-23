import {Button} from "primereact/button";
import React from "react";
import BigBackgroundGradient from "@/assets/images/big-background-gradient.png";
import {Icon} from "@iconify/react";
import FeatureItem from "./components/FeatureItem";

const features = [
    {
        feature: {
            icon: <Icon icon="solar:chat-square-2-line-duotone" className={`!w-[100px] !h-[100px]`} />,
            title: "مراكز التكلفة",
            description: "قارن بين ربحية المشاريع أو المبيعات وحدد عمولات مندوبي المبيعات. مركز التكلفة يساعدك في تحليل الإيرادات والتكاليف وبإمكانك تحليل المبيعات والمقارنة بينها ومعرفة مبيعات مندوبي المبيعات باستفادتك من خاصية مراكز التكلفة والتي يمكن تخصيصها من خلال الحقول الإضافية أو المواقع أو المشاريع",
            color: "#125298"
        },
        type: "large" as const
    },
    {
        feature: {
            title: "الرسائل البريدية",
            description: "يمكنك إرسال فاتورة البيع أو عرض السعر للعميل مباشرة عند الإنشاء وستصل للعميل على شكل ملف PDF مصمم بشكل احترافي يظهر شعار المنشأة وبيانات الاتصال والشروط والأحكام، بالإمكان أيضًا إرسال رسائل تذكيرية وجدولتها للعملاء قبل حلول موعد الدفع. وأخيرًا يمكنك إرسال أوامر الشراء للموردين لتسهيل عملية الشراء",
            color: "#E79C1C"
        },
        type: "large" as const
    },

    {
        feature: {
            icon: <Icon icon="solar:chat-square-2-line-duotone" className={`!w-[100px] !h-[100px]`} />,
            title: "المرفقات",
            description: "تسهل هذه الخاصية عملية إرفاق المستندات والاحتفاظ بها إلكترونيًا دون الحاجة إلى طباعتها، يمكنك إرسالها عن طريق البريد الإلكتروني، وإرفاق صور من السندات أو الحوالات البنكية أو مستندات العملاء مثل صورة من السجل التجاري والمعلومات البنكية والمتاحة في جميع مزايا قيود مثل فواتير المبيعات، العملاء، الموردين، عروض الأسعار، أوامر الشراء، القيود اليدوية وغيرها من المرفقات",
            color: "#125298"
        },
        type: "large" as const
    },

    {
        feature: {
            icon: <Icon icon="solar:chat-square-2-line-duotone" className={`!w-[100px] !h-[100px]`} />,
            title: "صلاحيات المستخدمين",
            description: "في صلاحيات المستخدمين يمكنك إضافة منصب لكل موظف في المنشأة بصلاحيات معينة مثل: القراءة، الإنشاء، الحذف، الموافقة لكي لا تظهر جميع الصفحات لباقي المستخدمين",
            color: "#E79C1C"
        },
        type: "large" as const
    },

    {
        feature: {
            icon: <Icon icon="solar:chat-square-2-line-duotone" className={`!w-[100px] !h-[100px]`} />,
            title: "إدارة الدفعات",
            description: "قارن بين ربحية المشاريع أو المبيعات وحدد عمولات مندوبي المبيعات. مركز التكلفة يساعدك في تحليل الإيرادات والتكاليف وبإمكانك تحليل المبيعات والمقارنة بينها ومعرفة مبيعات مندوبي المبيعات باستفادتك من خاصية مراكز التكلفة والتي يمكن تخصيصها من خلال الحقول الإضافية أو المواقع أو المشاريع",
            color: "#125298",
        },
        type: "small" as const
    },

    {
        feature: {
            icon: <Icon icon="solar:chat-square-2-line-duotone" className={`!w-[100px] !h-[100px]`} />,
            title: "سجل النشاطات",
            description: "يعرض سجل النشاطات آخِر خمس عمليات قام بها مستخدمو المنشأة. ويوضح أي نشاط تم القيام به على القيود أو الفواتير كإضافتها، تعديلها، الموافقة عليها أو استلام دفعة الفاتورة مع تحديد اسم المستخدم وتاريخ العملية",
            color: "#125298"
        },
        type: "small" as const
    },
    {
        feature: {
            icon: <Icon icon="solar:chat-square-2-line-duotone" className={`!w-[100px] !h-[100px]`} />,
            title: "الربط الإلكتروني API",
            description: "قيود يزامن متجرك الإلكتروني مع بيانات منشأتك في النظام",
            color: "#E79C1C"
        },
        type: "small" as const
    },
    {
        feature: {
            icon: <Icon icon="solar:chat-square-2-line-duotone" className={`!w-[100px] !h-[100px]`} />,
            title: "توظيف المحاسب",
            description: "أطلقت مشروعك وتحتاج إلى محاسب؟ قيود تربطك بمكاتب الخدمات المالية والمحاسبية ومن خلالها يمكنك الاستفادة من خدمات المحاسب التي تحتاجها",
            color: "#E79C1C"
        },
        type: "small" as const
    },
    {
        feature: {
            icon: <Icon icon="solar:chat-square-2-line-duotone" className={`!w-[100px] !h-[100px]`} />,
            title: "نقاط البيع",
            description: "نقطة البيع في نظام سمارت مصممة لتمنحك تجربة بيع متكاملة وسهلة، تعمل بسلاسة في المعارض أو الطلبات الخارجية تنفذ العمليات بسرعة عبر شاشة لمس، مع ربط مباشر بالمخزون، دعم كامل للفواتير الضريبية، وخيارات دفع متعددة تطبع أو ترسل الفواتير إلكترونياً، وتدير الخصومات تلقائياً، مع تكامل كامل مع أجهزة الكاشير والباركود توفر تقارير لحظية، وتدعم الإرجاع والاستبدال، لتبقى كل عملية بيع تحت سيطرتك",
            color: "#E79C1C"
        },
        type: "large" as const
    },
]

export default function Features() {
    const layout = [
        { items: 2, spans: [2, 1] },   // Row 1: first 1/3, second 2/3
        { items: 2, spans: [1, 1] },   // Row 2: 1/2 + 1/2
        { items: 4, spans: [1, 1, 1, 1] }, // Row 3: four equal columns
        { items: 1, spans: [1] },      // Row 4: full width
    ];

    let featureIndex = 0;
    return (
        <>
            <div className="relative py-20 bg-[#00264E] rounded-3xl overflow-hidden">
                <img src={BigBackgroundGradient} alt="" className="absolute top-6/7 inset-0 m-auto w-[1396px] h-[1131px] z-0 pointer-events-none"/>
                <div className="container mx-auto px-10 mt-20">
                    <div className="flex flex-col text-center md:text-start items-center justify-center mt-12">
                        <h1 className={"leading-[143%] font-bold text-[24px] md:text-5xl text-transparent bg-clip-text bg-[linear-gradient(176deg,#ECECEC_20.35%,rgba(236,236,236,0)_128.73%)]"}>
                            المزايا فى برنامج <span className={"text-[#E79C1C]"}>سمارت</span>
                        </h1>

                        <p className={"leading-[160%] text-[16px] md:text-[20px] text-center text-[#ECECEC]/65 font-medium max-w-[826px] mt-[24px]"}>
                            سواء كنت صاحب شركة صغيرة أو مشروع تجاري ناشئ، سمارت يجمع لك كل أدوات المحاسبة في مكان واحد: فواتير، مصروفات، رواتب، تقارير، وأرشفة—all سهل، سريع، وآمن
                        </p>

                        <div className="flex gap-5 mt-10">
                            <Button
                                label="اشترك الآن"
                                className="!bg-[#125298] text-white !border-1 !border-[#5F92DC] !py-3 !px-6"
                            />
                            <Button
                                label="ابدأ مجانا الآن"
                                className="!bg-white !py-3 !px-6 !text-[#125298] shadow-[0px_2px_21px_0px_#A7C8FF3D]"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto p-4 space-y-6">
                {layout.map((row, rowIdx) => {
                    const rowItems = features.slice(featureIndex, featureIndex + row.items);
                    featureIndex += row.items;

                    const totalCols = row.spans.reduce((a, b) => a + b, 0); // total columns for this row

                    return (
                        <div
                            key={rowIdx}
                            className={`grid grid-cols-1 md:grid-cols-${totalCols} gap-4 items-stretch`}
                        >
                            {rowItems.map((feature, idx) => (
                                <div key={idx} className={`md:col-span-${row.spans[idx]}`}>
                                    <FeatureItem feature={feature.feature} type={feature.type} />
                                </div>
                            ))}
                        </div>
                    );
                })}
            </div>

        </>
    )
}