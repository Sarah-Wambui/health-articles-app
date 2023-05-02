import React from 'react'
import {Link} from 'react-router-dom'

function ArticleItem({articles}) {

const arts = Object.keys(articles).map((articleID) => (
    <div key={articleID} className="article" >
        <h2>
        <Link to={`/articles/${articleID}`}>{articles[articleID].name}</Link>
        </h2>
        <img src={articles[articleID].image} alt="" />
        
    </div>
    
))
  return (
    <div>
        {arts}
    </div>
  )
}
export default ArticleItem