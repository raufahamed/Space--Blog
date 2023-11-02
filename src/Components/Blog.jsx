import React, { useEffect, useState } from 'react'
import Bloglist from './Bloglist'
import './Blog.css'
import Usefetch from './Usefetch'
const Blog = () => {
  const {data:blogs,isloading,error} = Usefetch('http://localhost:3000/blogs')

 
    return (
    <div className='homeblog' >
      {error && <h1 style={{color:"black"}}>{error}</h1>}
     {isloading && <h1 style={{color:"black"}}>Loading...</h1>}
  { blogs && <Bloglist blogs={blogs} />}
    </div>
  )
}

export default Blog