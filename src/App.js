import React from 'react';
import About from './About';
import Nav from './Nav';
import Shop from './Shop';
import Home from './Home';
import {BrowserRouter , Route, Routes} from "react-router-dom";


function App() {
  return (

    <BrowserRouter>
    <div className='App'>
      <Nav />
      <Routes>
      <Route path='/' exact element={ <Home/> } />
      <Route path='/About' element={ <About/> } />
      <Route path='/Shop' element={ <Shop/> } />
     

      
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App