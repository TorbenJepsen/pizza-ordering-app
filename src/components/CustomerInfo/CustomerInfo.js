import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const emptyCustomer = {
  name: '',
  street_address: '',
  city: '',
  zip: '',
};

class CustomerInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customer: emptyCustomer,
      type: '',
    };
  }

  handleCustomerChange = event => {
    this.setState({
      customer: {
        ...this.state.customer,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleTypeChange = event => {
    this.setState({
      type: event.target.value,
    });
  };

  sendCustomerInfo = () => {
    const action = {
      type: 'ADD_CUSTOMER',
      payload: this.state,
    };
    this.props.dispatch(action);
  };

  render() {
    return (

      <div>
        <form>
          <input onChange={this.handleCustomerChange} value={this.state.customer.name} name="name" placeholder="Name"/>
          <input onChange={this.handleCustomerChange} value={this.state.customer.street_address} name="street_address"  placeholder="Street Address"/>
          <input onChange={this.handleCustomerChange} value={this.state.customer.city} name="city" placeholder="City"/>
          <input onChange={this.handleCustomerChange} value={this.state.customer.zip} name="zip" placeholder="Zip"/>
        </form>
        <div>
          <label>
            <input type="radio" value="pickup" checked={this.state.type === 'pickup'} onChange={this.handleTypeChange} />
            Pickup
          </label>
          <label>
            <input type="radio" value="delivery" checked={this.state.type === 'delivery'} onChange={this.handleTypeChange} />
            Delivery
          </label>
        </div>

      <Link to="/checkout" onClick={this.sendCustomerInfo}>Next</Link>
      </div>

    );
  }
}

export default connect()(CustomerInfo);