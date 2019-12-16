import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import { reducer } from "./reducers/reducer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(reducer);

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, rootElement);
