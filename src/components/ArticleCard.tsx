import React from "react";
import {formatBlogDate} from "@/utils/date";

type ArticleProps = {
    article: ArticleCard
};

type ArticleCard = {
    image: string;
    title: string;
    date: Date; // formatted as string, e.g., "أبريل 9, 2025"
}

const ArticleCard: React.FC<ArticleProps> = ({ article }) => {
    return (
        <a
            href="/blog/details"
            className="block bg-[#F8F9FB] p-6 rounded-[24px] flex flex-col gap-4 hover:shadow-lg transition-shadow max-w-[344px]"
        >
            {/* Image */}
            <div className="w-[296px] h-[222px] flex-shrink-0">
                <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover rounded-xl"
                />
            </div>

            {/* Title */}
            <h2 className="font-medium text-[16px] leading-[160%] text-[#000]">
                {article.title}
            </h2>

            {/* Date */}
            <span className="text-[#000000]/60 font-normal text-[13px] leading-[160%] px-2 py-1 rounded">
                {formatBlogDate(article.date)}
            </span>
        </a>
    );
};

export default ArticleCard;
