import React from 'react';

export class MyRefEvent1 extends React.Component {
    constructor(props){
        super(props)
        this.showInput = this.showInput.bind(this)
    }
    showInput() {
        const input = this.refs.content
        alert(input.value)
    }
    render() {
        return (
            <div>
                <input type={"text"} ref={"content"}/>
                <button onClick={this.showInput}>input hint</button>
                <input type={"text"} placeholder={"lost focus on input hint"} />
            </div>
        )
    }
}

// new way in reactjs
export class MyRefEvent2 extends React.Component {
    constructor(props){
        super(props)
        this.showInput = this.showInput.bind(this)
        this.handleBlue = this.handleBlue.bind(this)
    }
    showInput() {
        alert(this.inputValue.value)
    }
    render() {
        return (
            <div>
                <input type={"text"} ref={inputValue => this.inputValue = inputValue}/>
                <button onClick={this.showInput}>input hint</button>
                <input type={"text"} placeholder={"lost focus on input hint"} onBlur={this.handleBlue}/>
            </div>
        )
    }

    // event callback
    handleBlue(event) {
        alert(event.target.value)
    }
}