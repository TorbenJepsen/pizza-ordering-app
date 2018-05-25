import React, { Component } from 'react';
import axios from 'axios';



class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orders: [],
    };
  }

  componentDidMount() {
    this.fetchAllOrderData();

  }

  fetchAllOrderData() {
    axios.get('/api/order').then((response) => {
      this.setState({
        orders: response.data
      });
      console.log('GET Admin', this.state.orders);

    }).catch((error) => {
      console.log('Get Admin error', error);
    });
  }


  render() {

    return (

      <div className="App">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Time Order Placed</th>
              <th>Type</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {this.state.orders.map((order) => <tr key={order._id}>
              <td>{order.customer.name}</td>
              <td>{order.time}</td>
              <td>{order.type}</td>
              <td>{order.order_total}</td>
            </tr>)}
          </tbody>
        </table>
      </div>

    );
  }
}

export default Admin;
