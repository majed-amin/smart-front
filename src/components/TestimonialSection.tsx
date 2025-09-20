import React from "react";
import TestimonialCard from "./TestimonialCard";
import Marquee from "react-fast-marquee";

interface Testimonial {
    id: number | string;
    name: string;
    role?: string;
    message: string;
    avatar?: string;
}

interface TestimonialSectionProps {
    testimonials: Testimonial[];
    title?: string;
    subtitle?: string;
}



const TestimonialSection: React.FC<TestimonialSectionProps> = ({
                                                                   testimonials,
                                                               }) => {
    return (
        <section className="py-12 ">
            <div className="px-4">
                <div className="flex flex-col items-center justify-center w-full">
                    <h2 className="text-3xl font-semibold mb-2 text-center">آراء عملائنا وتجاربهم مع نظام <span className="text-[#E79C1C]">سمارت</span></h2>
                    <p className="text-[#1F1F1F]/65 text-lg leading-[180%] mb-8 text-center max-w-[836px]">اكتشف كيف ساعد نظام سمارت الشركات في تحسين عملياتهم المحاسبية وتوفير الوقت, تعرف على تجارب العملاء في استخدام النظام لتحقيق نتائج مالية دقيقة وسريعة</p>
                </div>
                <div dir="ltr">
                    <Marquee direction="left" gradientWidth={50} gradient={true} loop={0}>
                        {testimonials.map((testimonial) => (
                            <TestimonialCard testimonial={testimonial} />
                        ))}
                    </Marquee>
                </div>
                {/*<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">*/}
                {/*    {testimonials.map((testimonial) => (*/}
                {/*        <TestimonialCard key={testimonial.id} testimonial={testimonial}/>*/}
                {/*    ))}*/}
                {/*</div>*/}
            </div>
        </section>
    );
};

export default TestimonialSection;
