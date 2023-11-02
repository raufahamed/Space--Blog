import React, { useEffect, useState } from 'react'

const Usefetch = (url) => {
  
const [data,setdata] = useState(null)
const[isloading,setisloading] = useState(true);
const [error,setError] = useState(null)
   
  
  useEffect(()=>{
        fetch(url)
        .then(res =>{
    
          if(!res.ok){
             throw Error('could not fetch the data fro that resource');
          }
         return res.json();
        })
        .then((data)=>{
           setdata(data)
           setisloading(false)
           setError(null)
        })
        .catch((err)=>{
           setisloading(false)
            setError(err.message);
        })

        return ()=> console.log('cleanup');
      },[url]);
    
      return { data ,isloading,error}
}

export default Usefetch