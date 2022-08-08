import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Contact from'./Contact.js';


const App = () => { 
  return (
    <div>
     
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/About">About</Link></li>
      <li><Link to="/Contact">Contact Us</Link></li>
    </ul>

    <Routes>
      <Route path='/' element= {<Home />} />
      <Route path='/About' element= {<About />} />
      <Route path='/Contact' element= {<Contact />} />
    </Routes>

    </div>

  )
  }

export default App;
