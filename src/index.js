import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const orderCart = (state = [], action) => {
  if(action.type === 'ADD_PIZZA') {
    return [...state, action.payload];
  } else if(action.type === 'REMOVE_PIZZA') {
    const matchPizza = pizza => pizza._id !== action.payload._id;
    return state.filter(matchPizza);
  } else if(action.type === 'RESET') {
    return [];
  }
  return state;
};

const customerInfo = (state = {}, action) => {
  if(action.type === 'ADD_CUSTOMER') {
    return action.payload;
  } else if(action.type === 'RESET') {
    return {};
  }
  return state;
};

const orderTotal = (state = 0, action) => {
  if(action.type === 'ADD_PIZZA') {
    let pizzaCost = Math.round(state * 100 + action.payload.cost * 100) / 100;
    return pizzaCost;
  } else if(action.type === 'REMOVE_PIZZA') {
    let pizzaCost = Math.round(state * 100 - action.payload.cost * 100) / 100;
    return pizzaCost;
  } else if(action.type === 'RESET') {
    return 0;
  }
  return state;
};

const storeInstance = createStore(
  combineReducers({
    orderCart,
    customerInfo,
    orderTotal,
  }),
  applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));