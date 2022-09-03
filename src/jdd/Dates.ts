import { Post } from "./types/Post";

export const current_year: number = new Date().getFullYear();

export function getDateFromPost(post: Post): string {
    return new Date(post.frontmatter.date).toLocaleDateString("fr-fr", {
        year:
            current_year == new Date(post.frontmatter.date).getFullYear()
                ? undefined
                : "numeric",
        month: "long",
        day: "numeric",
    });
}

export function addHours(numOfHours: number, date: Date = new Date()) {
    date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);

    return date;
}