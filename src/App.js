import React from 'react';
import './App.css';
import Nav from './Nav'
import About from './About'
import Shop from './Shop'
import itemDetails from './itemDetails'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
       <Nav />
       <Switch>
       <Route path="/" exact component={Home}/>
       <Route path="/about" exact component={About}/>
       <Route path="/shop" exact component={Shop}/>
       <Route path="/shop/:id" component={itemDetails}/>
       </Switch>
    </div>
    </Router>
  );
}

const Home = () => {
  return (<div>
    <h1>Home Page</h1>
  </div>)
}
export default App;
