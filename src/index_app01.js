import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App01 from './app01_components/app01.jsx';
import * as serviceWorker from './serviceWorker';


// Examples from components01
ReactDOM.render(
    (
        <div>
            <p>App01 Example</p>
            <App01/>
        </div>
    )
    , document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
