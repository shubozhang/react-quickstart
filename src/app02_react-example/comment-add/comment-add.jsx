import React, {Component} from "react"

export default class CommentAdd extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <form className={"form-horizontal"}>
                    <div className={"form-group"}>
                        <label>Username</label>
                        <br/>
                        <input type={"text"} className={"form-control"}
                               placeholder={"Username"}/>
                               <br/>
                    </div>
                    <div className={"form-group"}>
                        <label>Comments</label>
                        <br/>
                        <textarea className={"from-control"} rows={"6"}
                                  placeholder={"Comments"}/>
                    </div>
                    <div className={"form-group"}>
                        <br/>
                        <button type={"button"} value={"submit"} name={"submit"}
                                className={"btn btn-default pull-right"}/>
                    </div>
                </form>
            </div>
        )
    }
}

