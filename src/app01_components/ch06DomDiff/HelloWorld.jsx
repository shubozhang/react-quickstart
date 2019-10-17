import React from "react";
import ReactDOM from "react-dom"


export class HelloWorld extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 1000)
    }

    render() {
        console.log("render()")
        return (
            <p>
                Hello, <input type={"text"} placeholder={"your name here"}/>!&nbsp;
                <span>It is {this.state.date.getTime()}</span>
            </p>
        )
    }
}