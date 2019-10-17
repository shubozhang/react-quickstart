import React, {Component} from 'react';


export default class App03 extends Component {
    state = {
        count: 0
    }

    increment = () => {
        // 1. get selected value
        const number = this.select.value * 1

        // 2. get preState
        const count = this.state.count

        // 3. update state
        this.setState({count: count + number})
    }

    decrement = () => {
        // 1. get selected value
        const number = this.select.value * 1

        // 2. get preState
        const count = this.state.countå

        // 3. update state
        this.setState({count: count - number})
    }

    incrementIfOdd = () => {
        // 1. get selected value
        const number = this.select.value * 1

        // 2. get preState
        const count = this.state.count

        // 3. update state
        this.setState({count: count - number})
    }

    render() {
        const {count} = this.props.store.getState()

        return (
            <div>

            </div>
        )
    }
}