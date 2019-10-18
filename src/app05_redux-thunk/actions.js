// all action creators
import {INCREMENT, DECREMENT, INCREMENTASYNC} from './action-types'


// sync action return object
export const decrement = (number) => {
    return { type: DECREMENT, data: number}
}
export const increment = (number) => {
    return { type: INCREMENT, data: number}
}


// async action return function
export const incrementAsync = (number) => {
    return dispatch => {
        // async code
        setTimeout(() => {
            dispatch(increment(number))
        }, 1000)
    }
}




/*
*  1. Parenthesis can be used in an arrow function to replace return. So blow expresses are the same as above ones.
*  2. Parenthesis are used to group multiline of codes on JavaScript return statement
*     so to prevent semicolon inserted automatically in the wrong place.
* */
export const incrementAsync2 = (number) => (
    dispatch => {
        // async code
        setTimeout(() => {
            dispatch(increment(number))
        }, 1000)
    }
)
export const increment2 = (number) => ({ type: INCREMENT, data: number})
export const decrement2 = (number) => ({ type: DECREMENT, data: number})
