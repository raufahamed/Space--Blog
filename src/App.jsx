import './App.css'
import Blog from './Components/Blog';
import BlogDetail from './Components/BlogDetail';
import CreateBlog from './Components/CreateBlog';
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import {  Route,Routes} from 'react-router-dom'
function App() {

  return (
  
<div>
  <Navbar/>
  <Routes>
    <Route  path= '/' element={<Home/>} />
    <Route  path= '/blog' element={<Blog/>} />
    <Route path="/blog/:id" element={<BlogDetail />} />
    <Route  path= '/createBlog' element={<CreateBlog/>} />
</Routes>
  

</div>
 
  )
}

export default App
