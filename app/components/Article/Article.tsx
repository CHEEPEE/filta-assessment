import { FC } from "react"
import { ArticleProps } from "./Article.types"
import ArticleDialog from "./ArticleDialog"
import ArticleReadMoreButton from "./ArticleReadMoreButton"

const Article: FC<{ data: ArticleProps }> = ({ data }) => {
    return (<div className="flex duration-75 hover:top-[-30px] transition-all hover:scale-[1.01] group gap-3 flex-col">
        <ArticleDialog dialogImage={data.dialogImage} src={data.image} />
        <h2 className="font-bold">
            {data.title}
        </h2>
        <p className="text-gray-500 duration-200 transition-all  group-hover:text-indigo-300">{data.description}</p>
        <ArticleReadMoreButton data={data} />
    </div>)
}


export default Article