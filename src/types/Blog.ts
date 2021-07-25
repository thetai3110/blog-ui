export interface Blog {
   elements: Array<Element>
   totalElements: number,
}

interface Element {
    author: string,
    title: string,
    summary: string
    content: string,
    image: string,
    lastModify: string,
    published: number,
    tags: Array<string>
}