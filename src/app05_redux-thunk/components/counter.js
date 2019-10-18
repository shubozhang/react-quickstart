import React, {Component} from "react"
import PropTypes from 'prop-types'



export default class Counter extends Component {
    static propTypes = {
        count: PropTypes.number.isRequired,
        increment: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired,
        incrementAsync: PropTypes.func.isRequired,
    }


   increment = () => {
        // 1. get selected value
        const number = this.select.value * 1

        //debugger

        // 2. use store to update state
        this.props.increment(number)
    }

    decrement = () => {
        // 1. get selected value
        const number = this.select.value * 1

         // 2. use store to update state
        this.props.decrement(number)
    }

    incrementIfOdd = () => {
        // 1. get selected value
        const number = this.select.value * 1

        // 2. use store to update state
        const count = this.props.count

        if (count % 2 === 1) {
            this.props.increment(number)
        }
    }

    incrementAsync = () => {
        const  number = this.select.value * 1

        this.props.incrementAsync(number)
    }


    render() {
        const {count} = this.props

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


