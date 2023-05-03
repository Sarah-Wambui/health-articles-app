import React , {useState, useEffect}from 'react';
import ArticleItem from './ArticleItem';
import NewArticleForm from './NewArticleForm';




function ArticleList() {
  const [articles, setArticles] =useState([])
  console.log(articles)

  const fetchedArticles = ()=>{
  fetch("http://localhost:3000/articles")
  .then(r => r.json())
  .then(articles => setArticles(articles))
  }

 useEffect(()=>{
  fetchedArticles()
 },[])

  const arts= articles.map((article) =>
<ArticleItem key={article.id} name={article.name} title={article.title} image={article.image} description={article.description} content={article.content} author={article.author} />

  )

  return (
    <div>
      <NewArticleForm />
      <div>
        <div className="arts" >
        {arts}
        </div>
      </div>
         
    </div>
  )
}
export default ArticleList