import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers';
import 'materialize-css/dist/css/materialize.min.css';
import reduxThunk from 'redux-thunk';
//import axios from 'axios'; 
//window.axios = axios; // USED FOR TESTING ENDPOINTS FROM BROWSER

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.querySelector('#root')
);