import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import * as serviceWorker from './serviceWorker';
import App03 from './app03_redux/app';
import store from "./app03_redux/store";


function render() {
    ReactDOM.render(<App03  store={store}/>, document.getElementById('root'));

}

// init render
render()

// subscribe listener to update render
store.subscribe(render)






// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
