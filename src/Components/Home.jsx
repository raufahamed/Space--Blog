import Destination from './Destination'
import './Page.css'

const Home = () => {
  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (

   <div className='bg'>
    <div className='content'>
      <div className='contentparagh'>
      <p className='headpara'>So, you want to travel to</p>
       <h2>space</h2>
       <p className='para'> Let’s face it; if you want to go to space, you might as well genuinely go to 
       outer space and not hover kind of on the edge of it. Well sit back, and relax 
      because we’ll give you a truly out of this world experience!
   </p>
      <button className='btn' onClick={()=>scrollToElement('destination')} >Explore</button>
      </div>
      <img src="src\Components\astronaut.png" alt="astronaut img"  className='astronaut' />
     </div>
     <Destination/>
     </div>
 
  )
}

export default Home