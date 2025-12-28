import Nav from "./Comp/Nav/Nav";
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./Comp/Home/Home";
import Contact from "./Comp/Contact/Contact";
import About from "./Comp/About/About";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />

      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App;
