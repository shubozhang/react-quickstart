import {createStore, applyMiddleware} from 'redux';
import {counter} from './reducers'
import thunk from "redux-thunk";

// apply middleware to support async, so the action can return both object and function
const store = createStore(
    counter,
    applyMiddleware(thunk)
)
console.log(store.getState())

export default store