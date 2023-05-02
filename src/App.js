import React, {useState, useEffect} from 'react';
import {Route, Switch} from "react-router-dom"
import Home from "./components/Home"
import ArticleList from "./components/ArticleList"
import NavBar from "./components/NavBar"
import Comments from "./components/Comments"
import './App.css';


function App() {
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

  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path="/">
        <Home/>
        </Route>
        <Route path="/articlelist">
        <ArticleList articles={articles} />
        </Route>
        <Route  path ="/comments">
        <Comments/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
