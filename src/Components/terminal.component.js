import { Component } from "react";

export default class Terminal extends Component{
    render(){
        return(
            <>
            <div className="card terminal align-middle shadow-lg p-3 mb-5 bg-body rounded">
                <div className="card-header ">
                <i className="fa fa-circle red" aria-hidden="true"></i>
                <i className="fa fa-circle yellow" aria-hidden="true"></i>
                <i className="fa fa-circle green" aria-hidden="true"></i>
                </div>
                <div className="card-body terminal-body">
                    <p>GHRIET@DC :</p>
                </div>
            </div>
            </>
        )
    }
}