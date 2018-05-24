import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Admin from '../Admin/Admin';
import SelectPizza from '../SelectPizza/SelectPizza';
import CustomerInfo from '../CustomerInfo/CustomerInfo';
import Checkout from '../Checkout/Checkout';

const mapReduxStateToProps = (reduxState) => (
  { reduxState }
);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Prime Pizza</h1>
            <h4>Total: ${this.props.reduxState.orderTotal}</h4>
          </header>
          <Route exact path='/' component={SelectPizza} />
          <Route exact path='/customer' component={CustomerInfo} />
          <Route exact path='/checkout' component={Checkout} />
          <Route exact path='/admin' component={Admin} />
        </div>
      </Router>
    );
  }
}

export default connect(mapReduxStateToProps)(App);
