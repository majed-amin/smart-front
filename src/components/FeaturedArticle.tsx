import React from "react";
import {formatBlogDate} from "@/utils/date";

type FeaturedArticleProps = {
    article: Article
}

type Article = {
    title: string;
    excerpt?: string;
    date: Date;
    image: string;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({ article }) => {
    return (
        <>
            <div className={`snap-start scroll-me-6 max-w-[261px] md:max-w-[540px] min-w-[261px] md:min-w-[540px] bg-[#2C91FF]/10 border-1 border-[#9AA6FF]/30 rounded-2xl p-5 flex flex-col md:flex-row gap-5 items-center shadow-[0px_2px_12px_0px_#14142B14] backdrop-blur-[19px]`}>
                <div className={`w-full md:w-[168px] md:h-[126px]`}>
                    <img src={article.image} alt="DEMO" className={`rounded-xl w-full h-full object-cover`}/>
                </div>

                <div className={`flex flex-col h-full justify-between py-[11px]`}>
                    <h2 className={`text-white text-base font-medium leading-[160%]`}>{article.title}</h2>

                    <span className={`font-normal text-[13px] text-white/80`}>{formatBlogDate(article.date)}</span>
                </div>
            </div>
        </>

    );
}

export default FeaturedArticle;