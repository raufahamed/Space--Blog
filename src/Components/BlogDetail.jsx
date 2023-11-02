import React from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import Usefetch from './Usefetch'
const BlogDetail = () => {
   
const {id} = useParams()
const{data:blog,error,isloading} = Usefetch('http://localhost:3000/blogs/' + id)
const navigate = useNavigate('')
const handleClick = ()=>{

    fetch('http://localhost:3000/blogs/' + blog.id,{
        method:'DELETE'
    }).then(()=>{
       navigate('/blog')
    console.log('h');
    })
   }
  return (
    <div>

 {isloading && <h1>Loading...</h1>}
    {error && <h1>{error}</h1>}
    {blog && (
        <article>
            <h2>{blog.title}</h2>
            <p style={{color:"black"}}>written by{blog.author}</p>
            <p style={{color:"black"}}>{blog.body}</p>
            <button onClick={handleClick}>delete</button>
        </article>
    )}        
    </div>
  )
}

export default BlogDetail