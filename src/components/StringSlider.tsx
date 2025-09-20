import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
    {
        title: "مرحباً بك في نظام سمارت",
        description:
            "سواء كنت صاحب شركة صغيرة أو مشروع تجاري ناشئ، سمارت يجمع لك كل أدوات المحاسبة في مكان واحد: فواتير، مصروفات، رواتب، تقارير، وأرشفة—all سهل، سريع، وآمن",
    },
    {
        title: "مرحباً بك في نظام سمارت",
        description:
            "سواء كنت صاحب شركة صغيرة أو مشروع تجاري ناشئ، سمارت يجمع لك كل أدوات المحاسبة في مكان واحد: فواتير، مصروفات، رواتب، تقارير، وأرشفة—all سهل، سريع، وآمن",
    },
    {
        title: "مرحباً بك في نظام سمارت",
        description:
            "سواء كنت صاحب شركة صغيرة أو مشروع تجاري ناشئ، سمارت يجمع لك كل أدوات المحاسبة في مكان واحد: فواتير، مصروفات، رواتب، تقارير، وأرشفة—all سهل، سريع، وآمن",
    },
];

export default function StringSlider() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setIndex((prev) => (prev + newDirection + slides.length) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            paginate(1);
        }, 4000); // auto slide every 4s
        return () => clearInterval(interval); // cleanup
    }, []);

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5 },
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 100 : -100,
            opacity: 0,
            transition: { duration: 0.5 },
        }),
    };

    return (
        <div className="w-full md:max-w-[739px] p-[16px] flex flex-col relative overflow-hidden">
            {/* Slide Content */}
            <div className="h-50 flex items-center justify-center overflow-hidden relative w-full">
                <AnimatePresence custom={direction} mode="wait">
                    <motion.div
                        key={index}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="absolute w-full"
                    >
                        <h2 className="text-[20px] md:text-[32px] leading-[143%] mb-[30px] text-center md:text-start font-bold text-transparent bg-clip-text bg-[linear-gradient(176deg,#ECECEC_20.35%,rgba(236,236,236,0)_128.73%)]">
                            {slides[index].title}
                        </h2>
                        <p className="text-sm md:text-[20px] font-medium leading-[160%] text-[#ECECEC]/65 text-center md:text-start">
                            {slides[index].description}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Indicators */}
            <div className="flex justify-center md:justify-start gap-3">
                {slides.map((_, i) => (
                    <motion.div
                        key={i}
                        onClick={() => {
                            setDirection(i > index ? 1 : -1);
                            setIndex(i);
                        }}
                        className="cursor-pointer rounded-full"
                        initial={false}
                        animate={{
                            width: i === index ? 64 : 10,
                            height: 10,
                            opacity: i === index ? 1 : 0.6,
                            boxShadow:
                                i === index
                                    ? "0px 0px 12px rgba(255,255,255,0.8)"
                                    : "none",
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                            duration: 0.4,
                        }}
                        style={{ backgroundColor: "white" }}
                    />
                ))}
            </div>
        </div>
    );
}
