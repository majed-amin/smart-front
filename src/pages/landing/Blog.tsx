import React, {useEffect, useState} from "react";
import BigBackgroundGradient from "@/assets/images/big-background-gradient.png";
import DemoArticleImage from "@/assets/images/dummy/article-image.png";
import FeaturedArticle from "./components/FeaturedArticle";
import BlogFilter from "./components/BlogFilter";
import ArticleCard from "./components/ArticleCard";

const featuredArticles = [
    {
        id: 1,
        title: "الفرق بين الكفاءة والفاعلية في بيئات العمل من النظرية إلى التطبيق العملي",
        date: new Date(),
        image: DemoArticleImage
    },
    {
        id: 1,
        title: "الفرق بين الكفاءة والفاعلية في بيئات العمل من النظرية إلى التطبيق العملي",
        date: new Date(),
        image: DemoArticleImage
    },
    {
        id: 1,
        title: "الفرق بين الكفاءة والفاعلية في بيئات العمل من النظرية إلى التطبيق العملي",
        date: new Date(),
        image: DemoArticleImage
    }
]

export default function Blog() {


    const tarticles = [
        {
            id: 1,
            title: "الفرق بين الكفاءة والفاعلية في بيئات العمل من النظرية إلى التطبيق العملي",
            date: new Date(),
            image: DemoArticleImage
        },
        {
            id: 1,
            title: "الفرق بين الكفاءة والفاعلية في بيئات العمل من النظرية إلى التطبيق العملي",
            date: new Date(),
            image: DemoArticleImage
        },
        {
            id: 1,
            title: "الفرق بين الكفاءة والفاعلية في بيئات العمل من النظرية إلى التطبيق العملي",
            date: new Date(),
            image: DemoArticleImage
        },
        {
            id: 1,
            title: "الفرق بين الكفاءة والفاعلية في بيئات العمل من النظرية إلى التطبيق العملي",
            date: new Date(),
            image: DemoArticleImage
        },
        {
            id: 1,
            title: "الفرق بين الكفاءة والفاعلية في بيئات العمل من النظرية إلى التطبيق العملي",
            date: new Date(),
            image: DemoArticleImage
        },
        {
            id: 1,
            title: "الفرق بين الكفاءة والفاعلية في بيئات العمل من النظرية إلى التطبيق العملي",
            date: new Date(),
            image: DemoArticleImage
        },
        {
            id: 1,
            title: "الفرق بين الكفاءة والفاعلية في بيئات العمل من النظرية إلى التطبيق العملي",
            date: new Date(),
            image: DemoArticleImage
        },
        {
            id: 1,
            title: "الفرق بين الكفاءة والفاعلية في بيئات العمل من النظرية إلى التطبيق العملي",
            date: new Date(),
            image: DemoArticleImage
        },
    ]
    const [filters, setFilters] = useState<{ search: string; category: string | null }>({ search: "", category: null });
    const [articles, setArticles] = useState<any[]>(tarticles);
    const [loading, setLoading] = useState(false);

    const fetchArticles = async () => {
        setLoading(true);
        try {
            const params = new URLSearchParams(
                filters.category
                    ? { search: filters.search, category: filters.category }
                    : { search: filters.search }
            ).toString();

            // const res = await fetch(`/api/articles?${params}`);
            // if (!res.ok) throw new Error("Failed to fetch articles");
            // const data = await res.json();

            // setArticles(data);
        } catch (err) {
            console.error(err);
            setArticles([]);
        } finally {
            setLoading(false);
        }
    };

    // Fetch when filters change
    useEffect(() => {
        fetchArticles();
    }, [filters]);
    return (
        <>
            <div className="relative py-20 bg-[#00264E] rounded-3xl overflow-hidden">
                <img src={BigBackgroundGradient} alt="" className="absolute top-6/7 inset-0 m-auto w-[1396px] h-[1131px] z-0 pointer-events-none"/>
                <div className="container mx-auto px-10 mt-20">
                    <div className="flex flex-col text-center md:text-start items-center justify-center mt-12">
                        <h1 className={"leading-[143%] font-bold text-[24px] md:text-5xl text-transparent bg-clip-text bg-[linear-gradient(176deg,#ECECEC_20.35%,rgba(236,236,236,0)_128.73%)]"}>
                            موارد <span className={"text-[#E79C1C]"}>سمارت</span> لتطوير أعمالك وتحسين إدارتها
                        </h1>

                        <p className={"leading-[160%] text-base md:text-[20px] text-center text-[#ECECEC]/65 font-medium max-w-[826px] mt-[24px]"}>
                            تابع أهم المستجدات التي تساعدك في إدارة منشأتك بكفاءة. نوفر لك محتوى متخصص في الفوترة الإلكترونية، أنظمة نقاط البيع، المحاسبة، وتقنيات إدارة الأعمال. اقرأ نصائح عملية، شروحات مبسطة، ومقارنات تساعدك على اختيار الأنظمة والبرامج المحاسبية الأنسب لتوسيع نشاطك وتطوير أدائك كصاحب عمل
                        </p>
                    </div>
                </div>

                <div
                    className="overflow-x-auto snap-x scroll-ms-6 scrollbar-hidden flex md:justify-center justify-start flex-nowrap gap-5 mt-14"
                >
                    {featuredArticles.map((article, idx) => (
                        <div key={`art-${idx}`} className="flex-shrink-0">
                            <FeaturedArticle article={article} />
                        </div>
                    ))}
                </div>
            </div>

            <div className={`flex flex-col container mx-auto items-center gap-5`}>
                <BlogFilter onChange={(newFilters) => setFilters(newFilters)} />

                <div className="grid gap-6
                      grid-cols-1
                      sm:grid-cols-2
                      md:grid-cols-2
                      lg:grid-cols-4">
                    {articles.map((article, idx) => (
                        <ArticleCard article={article} key={`nart-${idx}`} />
                    ))}
                </div>
            </div>

        </>
    )
}