type ArticleDescriptionProps = {
  description: string
}
const ArticleDescription = ({ description }: ArticleDescriptionProps) => {
  return (
    <p className='text-gray-500 text-sm'>{description}</p>
  )
};

export default ArticleDescription;
