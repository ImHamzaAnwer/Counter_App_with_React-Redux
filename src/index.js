import React from 'react';
import ReactDOM from 'react-dom';
import Main from "./Containers/Main.js";
import {Provider} from 'react-redux';
import App from './App';
import './index.css';
// var store = require("./Store/store.js").storeConfig();
import store from "./Store/store.js";

ReactDOM.render(
  <Provider store={store}>
    <Main/>
  </Provider>,
  document.getElementById('root')
);
