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