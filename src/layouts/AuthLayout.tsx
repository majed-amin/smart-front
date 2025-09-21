import {Outlet, useLocation, useMatch, useNavigate} from "@tanstack/react-router";
import AuthCover from "@/assets/images/desktop-mockup.png";
import AuthCoverRegister from "@/assets/images/desktop-mockup-2.png";
import xlBackgroundGradient from "@/assets/images/2xl-background-gradient.png";
import SmartLogo from "@/assets/images/app-logo-dark.png";
import StringSlider from "@/components/StringSlider";
import { motion } from "framer-motion";

export default function AuthLayout() {

    const location = useLocation();
    const isRegisterRoute = location.pathname === "/smart-front/auth/register";
    const navigation = useNavigate({ from: isRegisterRoute ? "/auth/register" : "/auth/login" });

    function handleGoToHome() {
        navigation({ to: "/" });
    }

    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* Cover Section */}
            <div
                className={`overflow-hidden relative flex-shrink-0 bg-[#00264E]
                    h-[252px] max-w-[378px] md:max-w-full ${isRegisterRoute ? 'md:w-1/2' : 'md:w-2/3'} md:h-auto
                    flex justify-center items-center
                    !m-[12px] md:m-[12px] p-[12px] md:p-0 rounded-[16px]`}
            >
                {/* Mockup image: hidden on small screens */}
                {
                    isRegisterRoute ?
                        <motion.img
                            initial={{ left: "-200px", opacity: 0 }}
                            whileInView={{ left: "-100px", opacity: 1 }}
                            viewport={{ once: true, amount: 0.3 }} // once = true => one time only
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            src={AuthCoverRegister}
                            alt="Cover"
                            className="hidden md:block absolute z-0 -bottom-30 -left-[100px] h-[664px] object-right object-cover"/>
                        :
                        <motion.img
                            initial={{ left: "-200px", opacity: 0 }}
                            whileInView={{ left: "-177px", opacity: 1 }}
                            viewport={{ once: true, amount: 0.3 }} // once = true => one time only
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            src={AuthCover}
                            alt="Cover"
                            className="hidden md:block absolute z-0 -bottom-[150px] -left-[177px] w-[1374px] object-cover"/>
                }

                {/* Background gradient: only md+ */}
                <img
                    src={xlBackgroundGradient}
                    alt="Background Gradient"
                    className="hidden md:block absolute inset-0 z-10 w-full h-full object-cover"
                />

                {/* Slider */}
                {isRegisterRoute ?
                    <div className="absolute inset-0 z-20 flex flex-col md:text-start text-center justify-center items-center
                         md:justify-start md:items-start md:top-30 md:right-[100px]">
                        <h1 className={`max-w-[441px] text-white text-[20px] md:text-[32px] font-bold leading-[160%]`}>
                            ابدأ تجربتك المجانية لمدة 14 يوم مع  <span className={`text-[#E79C1C]`}>نظام سمارت</span>
                        </h1>

                        <span className={`max-w-[560px] text-white/65 text-sm md:text-[18px] font-medium leading-[180%] mt-[10px] mb-[32px]`}>اكتشف إمكانيات نظام "سمارت" بدون التزام. سجّل الآن وجرّب جميع الميزات الأساسية لمدة 14 يوم مجانًا. لا حاجة لبطاقة دفع</span>

                        <ul className={`flex flex-row gap-5`}>
                            <li className={"relative ps-8 before:content-['✓'] before:absolute before:start-0 before:top-0 before:ms-2 text-white"}>المميزات</li>
                            <li className={"relative ps-8 before:content-['✓'] before:absolute before:start-0 before:top-0 before:ms-2 text-white"}>المميزات</li>
                            <li className={"relative ps-8 before:content-['✓'] before:absolute before:start-0 before:top-0 before:ms-2 text-white"}>المميزات</li>
                        </ul>
                    </div>
                    :
                    <div
                        className="absolute inset-0 z-20 flex justify-center items-center
                    md:justify-start md:items-start md:top-30 md:right-[177px]"
                    >
                        <StringSlider />
                    </div>
                }

                {/* Shadow overlay */}
                <div className="absolute inset-0 rounded-[16px] shadow-[inset_43px_0px_85px_-12px_#00000040] z-30 pointer-events-none"></div>
            </div>

            {/* Form Section */}
            <div className={`relative flex-1 ${isRegisterRoute ? 'md:w-1/2' : 'md:w-1/3'} flex justify-center items-center bg-white p-6 md:p-12`}>
                <img onClick={handleGoToHome} src={SmartLogo} alt="Smart POS" className="hidden md:block absolute top-20 left-20 md:w-[118.46154022216797px]"/>
                <motion.div initial={{ translateY: "100px", opacity: 0 }}
                            whileInView={{ translateY: "0", opacity: 1 }}
                            viewport={{ once: true, amount: 0.3 }} // once = true => one time only
                            transition={{ duration: 0.6, ease: "easeOut" }} className={`w-full ${isRegisterRoute ? '' : 'max-w-md'}`}>
                    <Outlet /> {/* children (e.g., Login/Register) */}
                </motion.div>
            </div>
        </div>
    );
}
