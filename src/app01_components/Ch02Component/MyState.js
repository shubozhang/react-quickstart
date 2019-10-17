//2) ES6 class component ( complicated component)
import React from "react";

class Like extends React.Component {
    // 1. constructor
    constructor(props) {
        super(props)
        this.state = {
            isLikeMe: false
        }

        // 4. Bind class object to new function. This can be done in render function, but it is not efficiency.
        // since constructor just binds once, render function will do the binding in every refreshing
        this.handleClick = this.handleClick.bind(this)
    }

    // In new function, this is undefined, not point to class object
    handleClick() {
        console.log("handleClick()", this)
        // 3. update state
        const isLikeMe = !this.state.isLikeMe
        this.setState({isLikeMe})
    }

    // render is an extended function so this points to class object
    render() {
        //2. read state
        const {isLikeMe} = this.state
        return <h2
            onClick={this.handleClick}>{isLikeMe ? "you like me" : "you do not like me"}</h2>
    }
}

export default Like;