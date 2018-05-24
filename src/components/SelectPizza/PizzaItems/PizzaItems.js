import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './PizzaItems.css';


const mapReduxStateToProps = (reduxState) => (
  { reduxState }
);



class PizzaItems extends Component {
constructor(props) {
    super(props);

    this.state = {
        showRemove: false,
    }
}

addPizzaButton = () => {
    this.setState({
        showRemove: !this.state.showRemove
    });
}

removePizzaButton = () => {
    this.setState({
        showRemove: !this.state.showRemove
    });
}


  render() {
    return (
      <div>
        <div className="card">
          <img src={this.props.pizzas.image_path} alt="Avatar"/>
            <div className="container">
              <h4><b>{this.props.pizzas.name}</b></h4>
              <p>{this.props.pizzas.description}</p>
              <h5>Price: ${this.props.pizzas.cost}</h5>
              {this.state.showRemove ? <button onClick={this.addPizzaButton}>Add Pizza</button>: <button onClick={this.removePizzaButton}>Remove Pizza</button>}
            </div>
        </div>
      </div>

        );
      }
    }
    
    export default connect(mapReduxStateToProps)(PizzaItems);