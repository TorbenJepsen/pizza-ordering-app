import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PizzaItem from '../SelectPizza/PizzaItem/PizzaItem';
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
    axios.get('/api/pizza')
      .then((response) => {
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
        {this.state.pizzaItems.map(pizza => (<PizzaItem key={pizza._id} pizza={pizza} />))}
        <Link to="/customer">Next</Link>
      </div>

    );
  }
}

export default connect(mapReduxStateToProps)(SelectPizza);
