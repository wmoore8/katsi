import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import reduxStore from "./redux/redux-store";

ReactDOM.render(
    <Provider store={reduxStore}>
        <App />
    </Provider>,
  document.getElementById('root')
);
