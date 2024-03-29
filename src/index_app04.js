import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import App from "./app04_react-redux/containers/app";
import store from "./app04_react-redux/store";
import * as serviceWorker from "./serviceWorker";


ReactDOM.render(
    (<div>
            <p>React-Redux example</p>
            <Provider store={store}>
                <App/>
            </Provider>
        </div>

    ),
    document.getElementById('root')
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
