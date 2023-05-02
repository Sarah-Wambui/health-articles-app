import React from 'react'
import {useParams} from 'react-router-dom'

function ArticleShow({articles}) {

const {params} = useParams()
console.log(params)

  return (
    <div className="show">
      <p>where is the div</p>
      <h2>{articles[params.articleId].title}</h2>
      
    </div>
  )
}
export default ArticleShow