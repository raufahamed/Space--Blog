import React from 'react'
import { Link } from 'react-router-dom'
const Bloglist = ({ blogs }) => {
  return (
    <div>

      {blogs.map(details => (

        <div key={details.id}>
          <Link to={`/blog/${details.id}`}>
            <h2>{details.title}</h2>
            <p style={{ color: "black" }}> written by {details.author}</p>
          </Link>

        </div>
      ))}

    </div>
  )
}

export default Bloglist