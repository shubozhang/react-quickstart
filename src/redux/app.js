import React, {Component} from 'react';
import * as actions from './actions'



export default class App03 extends Component {
    state = {
        count: 0
    }

    increment = () => {
        // 1. get selected value
        const number = this.select.value * 1

        //debugger

        // 2. use store to update state
        this.props.store.dispatch(actions.increment(number))
    }

    decrement = () => {
        // 1. get selected value
        const number = this.select.value * 1

         // 2. use store to update state
        this.props.store.dispatch(actions.decrement(number))
    }

    incrementIfOdd = () => {
        // 1. get selected value
        const number = this.select.value * 1

        // 2. use store to update state
        const count = this.props.store.getState()

        if (count % 2 == 1) {
            this.props.store.dispatch(actions.increment(number))
        }
    }

    incrementAsync = () => {
        const  number = this.select.value * 1

        setTimeout(() => {
            this.props.store.dispatch(actions.increment(number))
        }, 1000)
    }


    render() {
        const count = this.props.store.getState()

        return (
            <div>
                <p>click {count} times</p>
                <div>
                    <select ref={select => this.select = select}>
                        <option value={"1"}>1</option>
                        <option value={"2"}>2</option>
                        <option value={"3"}>3</option>
                        <option value={"4"}>4</option>
                    </select>
                    &nbsp;
                    <button onClick={this.increment}>+</button>
                    &nbsp;
                    <button onClick={this.decrement}>-</button>
                    &nbsp;
                    <button onClick={this.incrementIfOdd}>IncrementIfOdd</button>
                    &nbsp;
                    <button onClick={this.incrementAsync}>IncrementAsync</button>
                </div>
            </div>
        )
    }
}