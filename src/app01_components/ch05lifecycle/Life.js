import React from "react";
import ReactDOM from "react-dom"


export class Life extends React.Component {

    constructor(props) {
        console.log("constructor")
        super(props)

        this.state = {
            opacity: 1
        }

        this.destroyComponent = this.destroyComponent.bind(this)
    }

    destroyComponent() {
        ReactDOM.unmountComponentAtNode(document.getElementById("example"))
    }

    componentDidMount() {
        console.log("componentDidMount")
        // setup timer
        this.intervalId = setInterval(function () {
            let {opacity} = this.state
            opacity -= 0.1
            if(opacity <= 0){
                opacity = 1
            }
            this.setState({opacity})
        }.bind(this), 200)
    }

    componentWillUnmount() {
        console.log("compoenetWillMount")
        // clean timer
        clearInterval(this.intervalId)
    }

    render() {
        console.log("render")
        const {opacity} = this.state

        return (
            <div>
                <h2 style={{opacity: opacity}}>{this.props.msg}</h2>
                <button onClick={this.destroyComponent}>go to die</button>
            </div>
        )
    }
}


 // {{opacity: opacity}}: the first { means JS is inside. The second { means it is an object.

// Two types of timer: loop timer and delay timer