import React, {useState} from 'react';


function NewArticleForm() {
    const [formData, setFormData] =  useState({
        name: "", 
        author: "",
        title: "",
        description: "",
        image: "",
        content: "",
        
    })
    function handleOnChange(event) {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      })
    }

    function handleSubmit (event) {
      event.preventDefault ()
      fetch("http://localhost:3000/articles",{
        method: "POST",
        headers: {
          "Content-Type ": "application/json"
        },

      body : JSON.stringify(formData), 
      })
      .then(response => response.json())
      .then(data => console.log(data))
    }

  return (

    <form onSubmit={handleSubmit} >
        <input onChange={handleOnChange} type= "text" name = "name" value ={formData.name} placeholder = "name"/>
        <input onChange={handleOnChange} type = "text" name = "author" value = {formData.author} placeholder = "author"/>
        <input onChange={handleOnChange} type = "text" name = "title"value = {formData.title} placeholder = "title"/>
        <input onChange={handleOnChange} type = "text" name = "description" value = {formData.description} placeholder = "description"/>
        <input onChange={handleOnChange} type = "text" alt="img"  value = {formData.image} placeholder = "image"/>
        <input onChange={handleOnChange} type = "text" name = "content"value = {formData.content} placeholder = "content"/>
        
    </form>


  )
}

export default NewArticleForm;