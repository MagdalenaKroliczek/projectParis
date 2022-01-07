import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Places from './components/pages/Places';
import Aboutme from './components/pages/Aboutme';
import Contact from './components/pages/Contact';
import Abraxas from './components/pages/Abraxas';
import Carousel from './components/Carousel';
import Hopital from './components/pages/Hopital';
import Domaine from './components/pages/Domaine';
import Cemetery from './components/pages/Cemetery';
import Senchal from './components/pages/Senchal';
import Epernon from './components/pages/Epernon';




function App() {
  return (
    <>
    {/* <div className="App">
      <Carousel />
    </div> */}
    <Router> 
     <Navbar />
     <Routes>
       <Route path='/' exact element={<Home/>} />
       <Route path='/home' exact element={<Home/>} />
       <Route path='/places' element={<Places/>} />
       <Route path='/abraxas' element={<Abraxas/>} />
       <Route path='/hopital' element={<Hopital/>} />
       <Route path='/domaine' element={<Domaine/>} />
       <Route path='/cemetery' element={<Cemetery/>} />
       <Route path='/senchal' element={<Senchal/>} />
       <Route path='/epernon' element={<Epernon/>} />
       <Route path='/carousel' element={<Carousel/>} />
       <Route path='/aboutme'  element={<Aboutme/>} />
       <Route path='/contact'  element={<Contact/>} />
     </Routes>
     </Router>
    </>
  );
}

export default App;
