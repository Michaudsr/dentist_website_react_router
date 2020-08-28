import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './Home';
import Procedures from './Procedures'
import Contact from './Contact';

function App() {
  const procedures = [
    "Deep Cleaning",
    "Oral Surgery",
    "Root Canal",
    "Crown",
    "Implants",
    "Fillings"
  ];
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>{' '}
          <Link to="/procedures">See our Procedures</Link>{' '}
          <Link to="/contact">Contact Us</Link>{' '}
        </nav>
     <Route exact path="/" component={Home} />
  <Route path="/procedures" render={() => <Procedures procedures={procedures}/>} />
     <Route path="/contact" component={Contact} />
      </div>
    </Router>
    
  );
}

export default App;
