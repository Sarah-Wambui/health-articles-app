import React , {useState, useEffect}from 'react';
import ArticleItem from './ArticleItem';
<<<<<<< HEAD
import NewArtcleForm from './NewArtcleForm';
=======
import NewArticleForm from './NewArticleForm';



>>>>>>> cb6f7a99c5823ae19aef9787085cd583c30cfb97

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
<<<<<<< HEAD
      <NewArtcleForm/>
      <div className="arts" >
          <div className="art" >
            {arts}
          </div>
=======
      <NewArticleForm />
      <div>
        <div className="arts" >
        {arts}
        </div>
>>>>>>> cb6f7a99c5823ae19aef9787085cd583c30cfb97
      </div>
         
    </div>
  )
}
export default ArticleList