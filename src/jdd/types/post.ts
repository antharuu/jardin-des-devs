export type Post = {
    layout: string,
    frontmatter: {
        title: string,
        description: string,
        date: string,
        image: string,
        category: string,
        tags: string[],
        author: string,
        draft?: boolean
    }
    url: string
}