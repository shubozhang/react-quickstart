import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App01 from './app01.jsx';
import App02 from './components02/app/app02.jsx';
import * as serviceWorker from './serviceWorker';

import App03 from './redux/app';
import {createStore} from 'redux';
import {counter} from './redux/reducers'

const store = createStore(counter)
console.log(store)


// Examples from components01
//ReactDOM.render(<App01 />, document.getElementById('root'));

// Examples from components02

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
