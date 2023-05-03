import React,{useState} from 'react'

 function NewArtcleForm({}) {
    const [formData, setFormData] = useState({
        name: "",
        author: "",
        title: "",
        description: "",
        image: "",
        content: "",
    })

function handleOnChange(e){

    setFormData({...formData, 
        [e.target.name] : e.target.value
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
<<<<<<< HEAD
    <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Author" />
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Description" />
        <input type="text" placeholder="image url"/>
        <input type="text" placeholder="Content"/>
        <button type="button">Add Article</button>
=======
<form onSubmit={handleSubmit} >
        <input onChange={handleOnChange} type= "text" name = "name" value ={formData.name} placeholder = "name"/>
        <input onChange={handleOnChange} type = "text" name = "author" value = {formData.author} placeholder = "author"/>
        <input onChange={handleOnChange} type = "text" name = "title"value = {formData.title} placeholder = "title"/>
<input onChange={handleOnChange} type = "text" name = "description" value = {formData.description} placeholder = "description"/>
        <input onChange={handleOnChange} type = "text" alt="img"  value = {formData.image} placeholder = "image"/>
        <input onChange={handleOnChange} type = "text" name = "content"value = {formData.content} placeholder = "content"/>
        
>>>>>>> 89018fc50e27c699b7909ef1fa3d7889dacb733b
    </form>
  )
}
export default NewArtcleForm