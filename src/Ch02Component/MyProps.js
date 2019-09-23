import React from 'react';
import PropTypes from 'prop-types';

export const PersonExample = (props) => {
    return <div>
        <p>I am {props.name} and I am {props.age} years old</p>
        <p>{props.children}</p>
        </div>
}



function Person(props) {
    return (
        <ul>
            <li>Name: {props.name}</li>
            <li>Gender: {props.gender}</li>
            <li>Age: {props.age}</li>
        </ul>
    )
}
Person.defaultProps = {
    age:18,
    gender: "male"
}

Person.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    gender: PropTypes.string

}
export default Person;