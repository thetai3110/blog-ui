export interface Blog {
    author: string,
    title: string,
    summary: string
    content: string,
    image: string,
    lastModify: string,
    published: number,
    tags: Array<string>
}