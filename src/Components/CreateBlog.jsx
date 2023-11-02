import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const CreateBlog = () => {
 
const[form,setform] = useState({title:"",body:"",author:""})    
const[ispending,setispending] = useState(false);
const[error,seterror] = useState('')

const navigate = useNavigate()

const handlechange = (e) => {

    const { name, value } = e.target
    console.log(name,value);
    setform({ ...form, [name]: value })
}
const handlesubmit = (e)=>{
   e.preventDefault()
  
   if (!form.title && !form.body && !form.author) {
    seterror('Please fill in all fields');
    return;
  }
const blog = {
    title:form.title,
    body:form.body,
    author:form.author
}  
   setispending(true)
  
   fetch('http://localhost:3000/blogs',{
    method :'POST',
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(blog)
   }).then(()=>{
    setispending(false)
    console.log('new blog added');
  navigate('/blog')
})

}
 
return (
    <div style={{color:"black"}}>
        <h2>Create your Own Blog</h2>
        <form onSubmit={handlesubmit}>
             <p style={{color:"red"}}>{error}</p>
            <label>Blog title</label>
            <input type="text"
            required
            value={form.title}
            name='title'
            onChange={handlechange}
            />
            <label>Blog Body</label>
            <textarea 
             required 
             value={form.body}
             name='body'
             onChange={handlechange}
             ></textarea>
            <label>Your Name</label>
            <input type="text"
            required
            value={form.author}
            name='author'
            onChange={handlechange}
            />
          {!ispending &&<button>add blog</button>}
          {ispending &&<button disabled>adding blog...</button>}
          
         </form>
    </div>
  )
}

export default CreateBlog