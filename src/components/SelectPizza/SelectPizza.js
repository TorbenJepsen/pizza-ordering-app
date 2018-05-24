import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PizzaItems from '../SelectPizza/PizzaItems/PizzaItems';
import './SelectPizza.css';


const mapReduxStateToProps = (reduxState) => (
  { reduxState }
);



class SelectPizza extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizzaItems: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios.get('/api/pizza').then((response) => {
      console.log('GET response.data:', response.data);
      this.setState({
        pizzaItems: response.data
      });
    })
      .catch((error) => {
        alert('error with GET request', error);
      })
  }

  render() {
    return (
      <div className="SelectPizza">
          {this.state.pizzaItems.map((pizzas) => (<PizzaItems key={pizzas._id} pizzas={pizzas} />))}
        {/* <p>SelectPizza</p>
        {JSON.stringify(this.state.pizzaItems)} */}
      </div>

        );
      }
    }
    
    export default connect(mapReduxStateToProps)(SelectPizza);
