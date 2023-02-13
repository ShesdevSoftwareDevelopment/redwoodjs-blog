import ArticleCell from 'src/components/ArticleCell'
import { MetaTags } from '@redwoodjs/web'

const ArticlePage = ({ id,c}) => {
  return (
    <>
      <MetaTags title="Article" description="Article page" />

      <ArticleCell id={ id} />
    </>
  )
}

export default ArticlePage
