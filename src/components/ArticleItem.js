import React from 'react'

function ArticleItem({name, title, description , content, image, author}) {
 
  
  return (
   <div>
    <div className="article" >
      <h2>{name}</h2>
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{content}</p>
      <h2>{author}</h2>
    </div>
   </div>
  )
}
export default ArticleItem