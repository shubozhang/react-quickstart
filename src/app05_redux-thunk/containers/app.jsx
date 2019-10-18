import React, {Component} from "react"
import {connect} from "react-redux";
import {decrement, increment, incrementAsync} from "../actions";
import Counter from '../components/counter'

// connect redux and react that passing three props to react
/*  Example:
    connect (
        mapStateToProps, // fun
        mapDispatchToProps // object
    )(UI component)
*/


export default connect(
    state => ({count: state}),
    {increment, decrement, incrementAsync}
)(Counter)