import React,{useState} from 'react'

 function NewArtcleForm() {
    const [formData, setFormData] = useState({
        name: "",
        author: "",
        title: "",
        description: "",
        image: "",
        content: "",
    })

function handleChange(e){
    setFormData({...formData, 
        [e.target.name] : e.target.value
})
}

  return (
    <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Author" />
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Description" />
        <input type="text" placeholder="image url"/>
        <input type="text" placeholder="Content"/>
        <button type="button">Add Article</button>
    </form>
  )
}
export default NewArtcleForm