import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
//import { render } from 'react-dom';
//import { Provider } from 'react-redux';
//import { combineReducers, createStore } from 'redux';
//import cartReducer from './ducks/cart';
//import productsReducer from './ducks/products';
//import productsData from './data/products';
import 'bootstrap/dist/css/bootstrap.css';

 
const app = (<BrowserRouter>
    <App></App>
</BrowserRouter>)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


