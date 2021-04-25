import React, { Component } from 'react'
import "../css/competition.css"
export default class competiton extends Component {
    render() {
        return (
            <div className="competition-outcontainer">
                <div className="comp-card">
                    <img id="comp-img"src={this.props.bg} alt=''/>
                    <div className="comp-text">
                        <h1 className="comp-name">{this.props.name}</h1>
                        <p className="comp-about">{this.props.about}</p>
                        <a id="comp-link" href={this.props.link} >participate</a>
                    </div>
                </div>
            </div>
        )
    }
}
