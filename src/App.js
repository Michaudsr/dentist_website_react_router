import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './Home';
import Procedures from './Procedures';
import Contact from './Contact';
import WidgetShow from './WidgetShow';
import MouthGuard from './MouthGuard';
import Golds from './Golds'
import CancerScreening from './CancerScreening';

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
          <Link to="/contact">Contact Us!</Link>{' '}
          <Link to="/MouthGuard">Custom Mouth Guards</Link>{' '}
          <Link to="/Golds">Custom Gold Teeth</Link>{' '}
          <Link to="/CancerScreening">Oral Cancer Screening</Link>{' '}
        </nav>
        <Route exact path="/" component={Home} />
        <Route path="/procedures" render={() => <Procedures procedures={procedures} />} />
        <Route path="/contact" component={Contact} />
        <Route path="/widgets/:id" render={(props) => <WidgetShow procedures={procedures} {...props} />} />
        <Route path="/MouthGuard" component={MouthGuard} />
        <Route path="/Golds" component={Golds} />
        <Route path="/CancerScreening" component={CancerScreening} />
      </div>
    </Router>
    
  );
}

export default App;
