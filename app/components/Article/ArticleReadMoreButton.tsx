'use client'
import { ArticleProps } from "./Article.types"

const ArticleReadMoreButton = ({ data }: { data: ArticleProps }) => {
    return (<a onClick={() => { console.log({ title: data.title, description: data.description }) }} href={data.link ?? '#'}
        className="w-fit border-b-4 duration-200 transition-all group-hover:text-red-400 border-b-red-400 hover:border-b-red-600">
        READ MORE
    </a>)
}

export default ArticleReadMoreButton