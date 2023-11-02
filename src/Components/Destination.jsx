import React, { useState } from 'react'
import './Destination.css'
import data from './data.json'
import { Link } from 'react-router-dom'

const Destination = () => {
 
const [datas,sedatas] = useState(data.destinations.find((d) => d.name === 'Moon'))

const handle = (name)=>{
 
    const destinations = data.destinations.find((d) => d.name === name)
    sedatas(destinations)
 }  
return (
    <div className='bg2' id={'destination'}>
       {datas &&(
          <div className='datasdestination'>

          <img src={`src/Components/${datas.images.png}`} alt="images" className='desimg' />
            <div>
            <h1 className='Picker'>Pick your destination</h1>

            <ul className='destination'>
          <li className='desname' onClick={()=> handle('Moon')}>Moon</li>
          <li className='desname' onClick={()=> handle('Mars')}>Mars</li>
          <li className='desname' onClick={()=> handle('Europa')}>Europa</li>
          <li  onClick={()=> handle('Titan')}>Titan</li>
        </ul>
            <h1 className='Headdes'>{datas.name}</h1>
              <p className='despara'>{datas.description}</p>
              <div className='time'>
                 <div>
                 <h1 className='dessmall'>avg.distance</h1>
                <p className='desmallp'>{datas.distance}</p>
                 </div>
                 <div>
                 <h1 className='dessmall'>est.travel time</h1>
                <p className='desmallp'>{datas.travel}</p>
                 </div>
              </div>
              <span>             <Link to='./blog'>See the Blogs</Link>
</span>
             </div>
            </div>
         
    )}
    </div>
  )
}

export default Destination