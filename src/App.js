import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom"
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Project from './Pages/Project';
import Service from './Pages/Service';

export default function App(){
  return(
    <div>
       <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Service" element={<Service/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Project" element={<Project/>}/>
       </Routes>
    </div>
  )
}
