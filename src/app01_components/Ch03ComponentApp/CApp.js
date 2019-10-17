import React from "react";
import PropTypes from 'prop-types';


// 1. which component should store data
// 1) Defined shared data in father
// 2) Defined non-shared data in itself

// 2. child component needs to update state in father component
// 1) state should be defined within the component that will be updated
// 2) define update func in father, and then pass it to child to invoke

export class CApp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: ["eating", "sleeping", "coding"]
        }

        this.addTodo = this.addTodo.bind(this)
    }

    addTodo(todo) {
        // read state
        const {todos} = this.state
        todos.unshift(todo)

        // update state
        this.setState({todos})
    }
    render() {
        const {todos} = this.state
        return (
            <div>
                <h1>Simple TODO list</h1>
                <Add count={todos.length} addTodo={this.addTodo}/>
                <List todos={todos}/>
            </div>
        )
    }
}


class Add extends React.Component {
    constructor(props) {
        super(props)
        this.addElement = this.addElement.bind(this)
    }
    render() {
        return (
            <div>
                <input type={"text"} ref={input => this.todoInput = input}/>
                <button onClick={this.addElement}>add #{this.props.count + 1}</button>
            </div>
        )
    }

    addElement() {
        // 1. read input data (verify check)
        const todo = this.todoInput.value.trim()
        if (!todo) {
            return
        }
        // 2. add
        this.props.addTodo(todo)

        // 3. clean input
        this.todoInput.value = ''
    }
}

Add.propTypes = {
    count: PropTypes.number.isRequired,
    addTodo: PropTypes.func.isRequired
}

class List extends React.Component {

    render() {
        const {todos} = this.props
        return (
            <div>
                <ul>
                    {
                    todos.map((todo, index) => <li key={index}>{todo}</li>)
                    }
                </ul>
            </div>
        )
    }
}

List.propTypes = {
    todos: PropTypes.array.isRequired
}