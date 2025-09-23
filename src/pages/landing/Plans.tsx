import ComplianceLogo from "@/assets/images/compliance-logo.png";
import BigBackgroundGradient from "@/assets/images/big-background-gradient.png";
import PricingTable from "./components/PricingTable";
import FAQSection from "./components/FAQSection";

const plans = [
    { key: "basic", name: "أساسية", monthlyPrice: 29, yearlyPrice: 290, features: ["ميزة 1", "ميزة 2", "ميزة 3"] },
    { key: "advanced", inheritsFrom: "basic", name: "متقدمة", monthlyPrice: 59, yearlyPrice: 590, features: ["ميزة 1", "ميزة 2", "ميزة 3", "ميزة 4"], popular: true },
    { key: "pro", inheritsFrom: "pro", name: "احترافية", monthlyPrice: 99, yearlyPrice: 990, features: ["ميزة 1", "ميزة 2", "ميزة 3", "ميزة 4", "ميزة 5"] },
];

export default function Plans() {
    return (
        <>
            <div className="relative py-20 bg-[#00264E] rounded-3xl">
                <img src={BigBackgroundGradient} alt="" className="absolute top-4/12 inset-0 m-auto w-[1396px] h-[1131px] z-0 pointer-events-none"/>
                <div className={"flex flex-col items-center z-10 justify-center mt-30"}>
                    <div className="flex flex-row items-center bg-[#A2CEFF]/20 max-w-[752px] px-[32px] mx-2 py-[15px] rounded-2xl">
                        <img src={ComplianceLogo} alt="FATOORA" className="me-[24px] md:me-13 w-[87px]"/>

                        <p className="text-sm md:text-base font-medium text-white">جميع الباقات تدعم الفاتورة الإلكترونية ومتوافقة مع هيئة الزكاة والضريبة والجمارك</p>
                    </div>

                    <div className="flex flex-col items-center justify-center mt-12 mx-2">
                        <h1 className={"leading-[143%] font-bold text-[24px] md:text-5xl text-transparent bg-clip-text bg-[linear-gradient(176deg,#ECECEC_20.35%,rgba(236,236,236,0)_128.73%)]"}>
                            خطط بسيطة تناسبك... اشترك الان
                        </h1>

                        <p className={"leading-[160%] text-[16px] md:text-[20px] text-center text-[#ECECEC]/65 font-medium max-w-[826px] mt-[24px]"}>
                            ابدأ بالخطة اللي تناسب شغلك بدون التزامات... تقدر تغيّر أو توقف بأي وقت كل الباقات فيها اللي تحتاجه عشان تشتغل براحة
                        </p>
                    </div>

                    <div>
                        <PricingTable plans={plans} />
                    </div>
                </div>
            </div>

            <div>
                <FAQSection />
            </div>
        </>
    );
}