import React, {Component} from "react"
import logo from './logo/logo.svg'

export default class App02 extends Component {
    constructor (props) {
        super(props)
    }
    render() {
        return (
            <div>
                <img className={"logo"} src={logo} alt={"logo"}/>
                <p className={"title"}>React is running</p>
            </div>
        )
    }
}