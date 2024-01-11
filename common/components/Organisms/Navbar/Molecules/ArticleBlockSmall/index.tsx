import ArticleDescription from "@/common/components/Atoms/ArticleDescription";
import ArticleTitle from "@/common/components/Atoms/ArticleTitle";

type Props = {
  article: {
    title: string;
    url: string;
    image: string;
    date: string;
    description: string;
    tags?: {value: string, id: string}[];
  };
};
const ArticleBlockSmall = ({ article }: Props) => {
  const { title, url, image, date, description } = article;
  return (
    <div className="article-block-small bg-white p-4 border-2 mb-4">
      <div className="article-block-small__content">
        <div className="article-block-small__title">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <ArticleTitle title={title} />
          </a>
        </div>
        <ArticleDescription description={description} />
        {/* <div className="article-block-small__date">{date}</div> */}
        <div className="tags flex">
          {article?.tags && article?.tags?.map((tag) => <div className="mt-4 bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300" key={tag.id}>{tag.value}</div>)}
        </div>
      </div>
    </div>
  );
};

export default ArticleBlockSmall;
