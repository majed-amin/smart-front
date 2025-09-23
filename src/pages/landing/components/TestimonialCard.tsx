import React from "react";
import { Image } from "primereact/image"
import DefaultImage from "@/assets/images/testimonial-person.jpg"
import {Icon} from "@iconify/react";
import QuotationMark from "@/assets/images/QuotationMark";

type Testimonial = {
    name: string;       // Name of the person
    role?: string;      // Optional role or position
    avatar?: string;    // Optional avatar image URL
    message: string;    // Testimonial text
};

type TestimonialCardProps = {
    testimonial: Testimonial;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
    const avatar = testimonial.avatar ? testimonial.avatar : DefaultImage;
    return (
        <div dir="rtl" className="flex flex-col md:flex-row gap-5 bg-[#F8F9FB] mx-4 px-[25px] py-[20px] md:min-w-[726px] max-w-[311px] rounded-3xl">
            {/* Avatar */}
            <div className="w-[287px] md:w-[254px] h-[287px] md:h-[253px]">
                <Image
                    src={avatar}
                    alt={testimonial.name}
                    imageClassName="rounded-2xl !w-full md:w-[254px] h-full md:h-[253px] object-cover"
                />
            </div>

            <div className="relative flex flex-col justify-between mt-5 max-w-[391px]">
                {/* Message */}
                <p className="text-sm md:text-base leading-[26px]">{testimonial.message}</p>

                {/* Name and role */}
                <div className="testimonial-header mt-7 md:mt-0">
                    <h3 className="text-sm md:text-base leading-[100%]">{testimonial.name}</h3>
                    {testimonial.role && <p className="mt-3 text-xs md:text-sm text-[#808080] leading-[100%]">{testimonial.role}</p>}
                </div>

                <QuotationMark className="absolute -top-5 -left-2" />
            </div>
        </div>
    );
};

export default TestimonialCard;
