type ArticleTitleProps = {
  title: string
}
const ArticleTitle = ({ title }: ArticleTitleProps) => {
  return (
    <h1 className='font-bold'>{title}</h1>
  )
}
export default ArticleTitle;
