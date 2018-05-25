import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapReduxStateToProps = (reduxState) => (
  { reduxState }
);


class Checkout extends Component {

  placeOrder = () => {
    const order = {
      customer: this.props.reduxState.customerInfo.customer,
      pizzas: this.props.reduxState.orderCart,
      order_total: this.props.reduxState.orderTotal,
      type: this.props.reduxState.customerInfo.type,
    };
    axios.post('/api/order', order)
      .then(response => {
        alert('ORDER PLACED!');
        this.props.dispatch({ type: 'RESET' });
      })
      .catch(error => {
        alert('ORDER FAILED: ', error)
      })

  }

  render() {
    return (

      <div className="App">
        <div>
          <h4>{this.props.reduxState.customerInfo.customer.name}</h4>
          <h4>{this.props.reduxState.customerInfo.customer.street_address}</h4>
          <h4>{this.props.reduxState.customerInfo.customer.city}, MN {this.props.reduxState.customerInfo.customer.zip}</h4>
          <h4>This order is for:  {this.props.reduxState.customerInfo.type}</h4>
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {this.props.reduxState.orderCart.map((pizza) => <tr key={pizza._id}><td>{pizza.name}</td><td>$ {pizza.cost}</td></tr>)}
          </tbody>
        </table>
        <h3>Total: ${this.props.reduxState.orderTotal}</h3>
        <Link to='/' onClick={this.placeOrder}>Place Order!</Link>
      </div>

    );
  }
}

export default connect(mapReduxStateToProps)(Checkout);
