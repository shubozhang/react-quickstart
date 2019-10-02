import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App01 from './app01.jsx';
import App02 from './app02.jsx';
import * as serviceWorker from './serviceWorker';

// Examples from components01
//ReactDOM.render(<App01 />, document.getElementById('root'));

// Examples from components02
ReactDOM.render(<App02 />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
