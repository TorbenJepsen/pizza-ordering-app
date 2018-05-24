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
  } else if(action.type === 'RESET_CART') {
    return [];
  }
  return state;
};

const customerInfo = (state = {}, action) => {
  if(action.type === 'ADD_CUSTOMER') {
    return action.payload;
  } else if(action.type === 'RESET_CUSTOMER') {
    return {};
  }
  return state;
};

const storeInstance = createStore(
  combineReducers({
    orderCart,
    customerInfo,
  }),
  applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));