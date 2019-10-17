import React, {Component} from "react"
import CommentAdd from "../comment-add/comment-add";
import CommentList from "../comment-list/comment-list";

export default class App02 extends Component {
    constructor (props) {
        super(props)
    }
    render() {
        return (
            <div>
                <header className={"site-header jumbotron"}>
                    <div className={"container"}>
                        <h1>Comments on ReactJS</h1>
                    </div>
                </header>
                <div className={"container"}>
                    <CommentAdd/>
                    <br/>
                    <CommentList/>
                </div>
            </div>
        )
    }
}