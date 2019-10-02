//2) ES6 class component ( complicated component)
import React from "react";

class MyComponent2 extends React.Component{
    render() {
        console.log(this)
        return <h2>My Component2</h2>
    }
}

export default MyComponent2;