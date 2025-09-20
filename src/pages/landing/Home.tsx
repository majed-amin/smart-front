import RotatingText from "@/components/RotatingText";
import {Button} from "primereact/button";
import React from "react";
import ProductShowcase from "@/assets/images/product-showcase.png";
import CfoIcon from "@/assets/images/dummy/partners/cfo.png";
import ForbesIcon from "@/assets/images/dummy/partners/forbes.png";
import FintechNexusIcon from "@/assets/images/dummy/partners/fintech-nexus.png";
import FinExtraIcon from "@/assets/images/dummy/partners/fixextra.png";
import PaymentsDiveIcon from "@/assets/images/dummy/partners/payments-dive.png";
import TcIcon from "@/assets/images/dummy/partners/tc.png";
import FeaturesAccordion from "@/components/FeaturesAccordion";
import TutorialCardBg from "@/assets/images/tutorial-card-bg.png";
import MetricsSection from "@/components/MetricsSection";
import TutorialCard from "@/components/TutorialCard";
import {Icon} from "@iconify/react";
import FAQSection from "@/components/FAQSection";
import TestimonialCard from "@/components/TestimonialCard";
import TestimonialSection from "@/components/TestimonialSection";
import NewsletterSubscription from "@/components/NewsletterSubscription";
import Footer from "@/components/Footer";
import {useNavigate} from "@tanstack/react-router";
import {motion} from "framer-motion";

const words = ["تكاملية", "سهولة", "كفاءة", "كفاءة", "كفاءة"];
const partners = [
    CfoIcon,
    ForbesIcon,
    FintechNexusIcon,
    CfoIcon,
    FinExtraIcon,
    PaymentsDiveIcon,
    TcIcon,
    FinExtraIcon,
    PaymentsDiveIcon,
    TcIcon,
];

const features = [
    {
        title: "متكامل",
        content: "يجمع سمارت جميع أدوات المحاسبة في مكان واحد: فواتير، مصروفات، رواتب، تقارير، وأرشفة—all سهل، سريع، وآمن",
        image: TutorialCardBg,
    },
    {
        title: "سهل",
        content: "يجمع سمارت جميع أدوات المحاسبة في مكان واحد: فواتير، مصروفات، رواتب، تقارير، وأرشفة—all سهل، سريع، وآمن",
        image: TutorialCardBg,
    },
    {
        title: "تقارير",
        content: "يمنحك سمارت تقارير مالية جاهزة بشكل يومي، أسبوعي، أو شهري.\n" +
            " تعرف على إيراداتك، مصروفاتك، وأداءك المالي لحظة بلحظة. \n" +
            "كل تقرير قابل للتصدير بصيغة PDF أو Excel لمشاركتها مع فريقك أو محاسبك.",
        image: TutorialCardBg,
    }
];

const tutorials = [
    {
        image: TutorialCardBg,
        title: "إضافة فاتورة",
        description: "في هذا الدرس تتعلم خطوة بخطوة كيف تنشئ فاتورة جديدة داخل نظام سمارت"
    },
    {
        image: TutorialCardBg,
        title: "إضافة فاتورة",
        description: "في هذا الدرس تتعلم خطوة بخطوة كيف تنشئ فاتورة جديدة داخل نظام سمارت"
    },
    {
        image: TutorialCardBg,
        title: "إضافة فاتورة",
        description: "في هذا الدرس تتعلم خطوة بخطوة كيف تنشئ فاتورة جديدة داخل نظام سمارت"
    },
    {
        image: TutorialCardBg,
        title: "إضافة فاتورة",
        description: "في هذا الدرس تتعلم خطوة بخطوة كيف تنشئ فاتورة جديدة داخل نظام سمارت"
    },
    {
        image: TutorialCardBg,
        title: "إضافة فاتورة",
        description: "في هذا الدرس تتعلم خطوة بخطوة كيف تنشئ فاتورة جديدة داخل نظام سمارت"
    },
    {
        image: TutorialCardBg,
        title: "إضافة فاتورة",
        description: "في هذا الدرس تتعلم خطوة بخطوة كيف تنشئ فاتورة جديدة داخل نظام سمارت"
    },
    {
        image: TutorialCardBg,
        title: "إضافة فاتورة",
        description: "في هذا الدرس تتعلم خطوة بخطوة كيف تنشئ فاتورة جديدة داخل نظام سمارت"
    },
];

const testimonials = [
    {
        id: 1,
        name:"أحمد القحطاني",
        role: "مدير مالي في شركة الإبداع للتجارة",
        message: "نظام سمارت غيّر طريقة إدارتنا للمحاسبة بشكل كامل. سهولة الاستخدام ودقة التقارير جعلت عملنا أكثر كفاءة وأقل تعقيدًا. لم نعد نواجه مشاكل في تتبع الفواتير والمصروفات، وكل شيء أصبح أكثر تنظيمًا."
    },
    {
        id: 1,
        name:"أحمد القحطاني",
        role: "مدير مالي في شركة الإبداع للتجارة",
        message: "نظام سمارت غيّر طريقة إدارتنا للمحاسبة بشكل كامل. سهولة الاستخدام ودقة التقارير جعلت عملنا أكثر كفاءة وأقل تعقيدًا. لم نعد نواجه مشاكل في تتبع الفواتير والمصروفات، وكل شيء أصبح أكثر تنظيمًا."
    },
    {
        id: 2,
        name:"أحمد القحطاني",
        role: "مدير مالي في شركة الإبداع للتجارة",
        message: "نظام سمارت غيّر طريقة إدارتنا للمحاسبة بشكل كامل. سهولة الاستخدام ودقة التقارير جعلت عملنا أكثر كفاءة وأقل تعقيدًا. لم نعد نواجه مشاكل في تتبع الفواتير والمصروفات، وكل شيء أصبح أكثر تنظيمًا."
    },
    {
        id: 3,
        name:"أحمد القحطاني",
        role: "مدير مالي في شركة الإبداع للتجارة",
        message: "نظام سمارت غيّر طريقة إدارتنا للمحاسبة بشكل كامل. سهولة الاستخدام ودقة التقارير جعلت عملنا أكثر كفاءة وأقل تعقيدًا. لم نعد نواجه مشاكل في تتبع الفواتير والمصروفات، وكل شيء أصبح أكثر تنظيمًا."
    },
    {
        id: 4,
        name:"أحمد القحطاني",
        role: "مدير مالي في شركة الإبداع للتجارة",
        message: "نظام سمارت غيّر طريقة إدارتنا للمحاسبة بشكل كامل. سهولة الاستخدام ودقة التقارير جعلت عملنا أكثر كفاءة وأقل تعقيدًا. لم نعد نواجه مشاكل في تتبع الفواتير والمصروفات، وكل شيء أصبح أكثر تنظيمًا."
    },
    {
        id: 5,
        name:"أحمد القحطاني",
        role: "مدير مالي في شركة الإبداع للتجارة",
        message: "نظام سمارت غيّر طريقة إدارتنا للمحاسبة بشكل كامل. سهولة الاستخدام ودقة التقارير جعلت عملنا أكثر كفاءة وأقل تعقيدًا. لم نعد نواجه مشاكل في تتبع الفواتير والمصروفات، وكل شيء أصبح أكثر تنظيمًا."
    },
];

export default function Home() {
    const navigate = useNavigate({ from: "/" });
    function handleGoToLogin() {
        navigate({ to: "/auth/login" })
    }

    function handleGoToRegister() {
        navigate({ to: "/auth/register" })
    }
    return (
        <>
            <div className="py-20 bg-[#00264E] rounded-3xl">
                <motion.div initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true, amount: 0.3 }} // once = true => one time only
                            transition={{ duration: 0.6, ease: "easeOut" }} className="container mx-auto px-10 mt-20">
                    <div className="text-white font-bold flex flex-col justify-center items-center">
                        <h1 className="text-transparent text-[26px] md:text-5xl leading-[160%] bg-clip-text bg-[linear-gradient(176deg,#ECECEC_20.35%,rgba(236,236,236,0)_128.73%)]">سمارت
                            | نظام محاسبي ذكي</h1>
                        <h1 className="flex mt-3 text-xl md:text-5xl leading-[160%] text-transparent bg-clip-text bg-[linear-gradient(176deg,#ECECEC_20.35%,rgba(236,236,236,0)_128.73%)]">لإدارة
                            أعمالك بثقة وبطريقة أكثر {" "} <RotatingText
                                texts={words}
                                mainClassName="px-2 sm:px-2 md:px-3 text-[#E79C1C] overflow-hidden justify-center rounded-lg"
                                staggerFrom={"last"}
                                initial={{y: "100%"}}
                                animate={{y: 0}}
                                exit={{y: "-120%"}}
                                staggerDuration={0.025}
                                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                                transition={{type: "spring", damping: 30, stiffness: 400}}
                                rotationInterval={3000}
                            /></h1>

                        <p className="text-[#ECECEC]/65 text-[20px] font-normal max-w-[826px] leading-[160%] text-center mt-10">سواء
                            كنت صاحب شركة صغيرة أو مشروع تجاري ناشئ، سمارت يجمع لك كل أدوات المحاسبة في مكان واحد: فواتير،
                            مصروفات، رواتب، تقارير، وأرشفة—all سهل، سريع، وآمن</p>

                        <div className="flex gap-5 mt-10">
                            <Button
                                onClick={handleGoToLogin}
                                label="اشترك الآن"
                                className="!bg-[#125298] text-white !border-1 !border-[#5F92DC] !py-3 !px-6"
                            />
                            <Button
                                onClick={handleGoToRegister}
                                label="ابدأ مجانا الآن"
                                className="!bg-white !py-3 !px-6 !text-[#125298] shadow-[0px_2px_21px_0px_#A7C8FF3D]"
                            />
                        </div>
                    </div>
                </motion.div>

                <motion.div initial={{ scale: 0.8, opacity: 0 }}
                     whileInView={{ scale: 1, opacity: 1 }}
                     viewport={{ once: true, amount: 0.3 }} // once = true => one time only
                     transition={{ duration: 0.6, ease: "easeOut" }} className="relative flex flex-col items-center justify-center mx-auto max-w-[1476px] text-center mt-10 pb-10">
                    {/* Original Image */}
                    <img src={ProductShowcase} alt="Original" className="z-2 block"/>

                    {/* Reflected Image */}
                    <div className="absolute top-90 z-1 mask-b-from-90% px-5 mask-l-from-95% mask-r-from-95%">
                        <img
                            src={ProductShowcase}
                            alt="Reflection"
                            className="transform  filter blur-[30px] scale-y-[-1] opacity-30 mt-[-1px] "
                            style={{
                                WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.5), transparent)",
                                maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.5), transparent)"
                            }}
                        />
                    </div>

                    <motion.div initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true, amount: 0.3 }} // once = true => one time only
                                transition={{ duration: 0.6, ease: "easeOut" }} className="flex flex-col gap-8 z-3 items-center justify-center mt-10">
                        <h1 className="text-[2rem] text-white font-semibold">أكثر من  <span className="text-[#E79C1C]">1000</span>  عميل يثقون في سمارت يوميًا</h1>
                        <div className="flex flex-row items-center justify-center gap-10 max-w-[1308px] flex-wrap">
                            <div className="w-24 flex items-center justify-center">
                                {/*<Icon className="w-full h-full object-contain" />*/}
                                <img src={FinExtraIcon} className="w-full h-full object-contain" />
                            </div>
                            <div className="w-24 flex items-center justify-center">
                                {/*<Icon className="w-full h-full object-contain" />*/}
                                <img src={CfoIcon} className="w-full h-full object-contain" />
                            </div>
                            <div className="w-24 flex items-center justify-center">
                                {/*<Icon className="w-full h-full object-contain" />*/}
                                <img src={FintechNexusIcon} className="w-full h-full object-contain" />
                            </div>
                            <div className="w-24 flex items-center justify-center">
                                {/*<Icon className="w-full h-full object-contain" />*/}
                                <img src={FinExtraIcon} className="w-full h-full object-contain" />
                            </div>
                            <div className="w-24 flex items-center justify-center">
                                {/*<Icon className="w-full h-full object-contain" />*/}
                                <img src={ForbesIcon} className="w-full h-full object-contain" />
                            </div>
                            <div className="w-24 flex items-center justify-center">
                                {/*<Icon className="w-full h-full object-contain" />*/}
                                <img src={PaymentsDiveIcon} className="w-full h-full object-contain" />
                            </div>
                            <div className="w-24 flex items-center justify-center">
                                {/*<Icon className="w-full h-full object-contain" />*/}
                                <img src={TcIcon} className="w-full h-full object-contain" />
                            </div>
                            <div className="w-24 flex items-center justify-center">
                                {/*<Icon className="w-full h-full object-contain" />*/}
                                <img src={PaymentsDiveIcon} className="w-full h-full object-contain" />
                            </div>
                            <div className="w-24 flex items-center justify-center">
                                {/*<Icon className="w-full h-full object-contain" />*/}
                                <img src={FinExtraIcon} className="w-full h-full object-contain" />
                            </div>
                            <div className="w-24 flex items-center justify-center">
                                {/*<Icon className="w-full h-full object-contain" />*/}
                                <img src={PaymentsDiveIcon} className="w-full h-full object-contain" />
                            </div>
                            {/*{partners.map((icon, index) => {
                                return (
                                    <div key={index} className="w-24 flex items-center justify-center">
                                        <Icon className="w-full h-full object-contain" />
                                        <img src={icon} className="w-full h-full object-contain" />
                                    </div>
                                );
                            })}*/}
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }} // once = true => one time only
                        transition={{ duration: 0.6, ease: "easeOut" }} className="flex flex-col items-center justify-center mt-20">
                <div className="text-[2rem] font-semibold text-black text-center">
                    <h1 className="leading-[150%]">المميزات الأساسية لنظام <span className="text-[#E79C1C]">سمارت</span></h1>
                    <p className="text-[#1F1F1F]/65 text-lg font-light leading-[160%]">كل أداة تحتاجها لإدارة محاسبة مشروعك بشكل أوضح، أسرع، وأدق</p>
                </div>

                <FeaturesAccordion items={features} />
            </motion.div>

            <div className="container mx-auto my-30">
                <MetricsSection />
            </div>

            {/* Tutorials section */}
            <motion.div
                className="flex flex-col gap-5 items-center"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }} // once = true => one time only
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <h2 className="text-[32px] font-semibold leading-[150%]">
                    ابدأ وتعلم في دقائق، بدون تعقيد
                </h2>
                <p className="max-w-[794px] text-[18px] text-[#1F1F1F]/65 leading-[180%] text-center">
                    تم تطوير سمارت ليكون واضحًا وسريع التعلّم واجهة مرتبة، خطوات مباشرة،
                    وتجربة استخدام مريحة تقدر تبدأ بدون تعقيد، وتنجز مهامك اليومية بثقة
                </p>

                <div className="w-full flex justify-center mt-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                        {tutorials.map((tutorial, index) => (
                            <TutorialCard tutorial={tutorial} key={`tut-${index}`} />
                        ))}

                        <div className="max-w-[344px] flex flex-col justify-between bg-[#F8F9FB] p-2 md:p-12 rounded-2xl overflow-hidden relative">
                            <div>
                                <h3 className="text-sm md:text-xl leading-[160%] mb-3">
                                    شاهد جميع الدروس وتعلّم كل شيء بسهولة
                                </h3>
                                <p className="text-[#1F1F1F]/65 text-xs md:text-base leading-[160%]">
                                    مجموعة دروس مسجلة تشرح كل جزء في نظام سمارت <br /> ابدأ من
                                    الأساسيات وتدرّج حتى تتقن كل الوظائف
                                </p>
                            </div>

                            <button className="w-full flex justify-center md:justify-between bg-[#125298] px-[20px] cursor-pointer py-[15px] text-white rounded-xl">
                                <span className="text-base leading-[160%] ">عرض جميع الدروس</span>

                                <Icon
                                    icon="solar:arrow-left-linear"
                                    width="24"
                                    height="24"
                                    className="hidden md:inline"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* FAQ section */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }} // once = true => one time only
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="container mx-auto my-40">
                <FAQSection />
            </motion.div>

            {/* Testimonials section */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }} // once = true => one time only
                transition={{ duration: 0.6, ease: "easeOut" }} >
                <TestimonialSection testimonials={testimonials} />
            </motion.div>
        </>
    );
}
