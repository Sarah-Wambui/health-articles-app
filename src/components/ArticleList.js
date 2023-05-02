import ArticleItem from './ArticleItem';
import { Route, useRouteMatch} from 'react-router-dom';
import ArticleShow from './ArticleShow'

function ArticleList({articles}) {
 
  const match = useRouteMatch()
  console.log(match)
  return (

    <div>
         <Route path={`${match.url}/:movieId`}>
          <ArticleShow articles={articles}/> 
        </Route>
        <ArticleItem articles={articles}/>   
    </div>
  )
}
export default ArticleList