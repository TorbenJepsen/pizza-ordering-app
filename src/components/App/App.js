import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import Admin from '../Admin/Admin';
import SelectPizza from '../SelectPizza/SelectPizza';
import CustomerInfo from '../CustomerInfo/CustomerInfo';
import Checkout from '../Checkout/Checkout';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Route exact path='/' component={SelectPizza} />
      <Route exact path='/customer' component={CustomerInfo} />
      <Route exact path='/checkout' component={Checkout} />
      <Route exact path='/admin' component={Admin} />
    
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>
        <br/>
        <img src="images/pizza_photo.png"/>
        <p>Pizza is great.</p>
      </div>
      </Router>
    );
  }
}

export default App;
