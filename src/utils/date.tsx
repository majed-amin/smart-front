export function formatBlogDate(date: Date): string {
    const month = date.toLocaleDateString("ar-EG", { month: "long" });
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month} ${day}, ${year}`;
}
