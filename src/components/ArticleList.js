import React , {useState, useEffect}from 'react';
import ArticleItem from './ArticleItem';
import NewArticleForm from './NewArticleForm';

<<<<<<< HEAD



=======
>>>>>>> 89018fc50e27c699b7909ef1fa3d7889dacb733b
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

 function addArticles (newArticles) {
   setArticles ([...articles, newArticles]) 
 }
  const arts= articles.map((article) =>
<ArticleItem key={article.id} name={article.name} title={article.title} image={article.image} description={article.description} content={article.content} author={article.author} />
  )

  return (
    <div>
<<<<<<< HEAD
      <NewArticleForm />
=======
      <NewArticleForm  addArticles= {addArticles}/>
>>>>>>> 89018fc50e27c699b7909ef1fa3d7889dacb733b
      <div>
        <div className="arts" >
        {arts}
        </div>
      </div>
         
    </div>
  )
}
export default ArticleList