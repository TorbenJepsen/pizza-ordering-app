import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PizzaItem.css';

const mapReduxStateToProps = (reduxState) => (
  { reduxState }
);

class PizzaItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showRemove: false,
    }
  }

  addPizzaButton = () => {
    const action = {
      type: 'ADD_PIZZA',
      payload: this.props.pizza,
    };
    this.props.dispatch(action);
    this.setState({
      showRemove: !this.state.showRemove
    });
  }

  removePizzaButton = () => {
    const action = {
      type: 'REMOVE_PIZZA',
      payload: this.props.pizza,
    }
    this.props.dispatch(action);
    this.setState({
      showRemove: !this.state.showRemove
    });
  }

  render() {
    return (
      <div>
        <div className="card">
          <img src={this.props.pizza.image_path} alt="Avatar" />
          <div className="container">
            <h4><b>{this.props.pizza.name}</b></h4>
            <p>{this.props.pizza.description}</p>
            <h5>Price: ${this.props.pizza.cost}</h5>
            {this.state.showRemove ? <button onClick={this.removePizzaButton}>Remove Pizza</button> : <button onClick={this.addPizzaButton}>Add Pizza</button>}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(PizzaItem);