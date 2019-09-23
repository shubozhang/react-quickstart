import React from 'react';

class PersonObj extends React.Component {


    render() {
        console.log(this)
        return (
        <ul>
            <li>Name: {this.props.name}</li>
            <li>Gender: {this.props.gender}</li>
            <li>Age: {this.props.age}</li>
        </ul>
        )
    }
}

export default PersonObj;