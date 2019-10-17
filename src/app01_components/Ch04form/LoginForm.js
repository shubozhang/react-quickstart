import React from "react";
import PropTypes from 'prop-types';

export class LoginForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            pwd: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(event){
        const name = this.nameInput.value
        const {pwd} = this.state
        alert(`submitting username ${name}, password is ${pwd}`)

        event.preventDefault()
    }

    handleChange(event) {
        // read input
        const pwd = event.target.value

        // update state pwd status
        this.setState({pwd})
    }
    render() {
        return (
          <form action={"/test"} onSubmit={this.handleSubmit}>
              username: <input type={"text"} ref={input => this.nameInput = input}/>
              password: <input type={"password"} value={this.state.pwd} onChange={this.handleChange}/>
              <input type={"submit"} value={"login"}/>
          </form>
        );
    }
}