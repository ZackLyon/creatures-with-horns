import React, { Component } from 'react'

export default class ImageItem extends Component {
    render() {
        return (
            <div className="flex-center">
                <div className="item-container">
                    <div className="item-content">
                        <div className="item-title">{this.props.title}</div>
                        <img className="item-image" src={this.props.url} alt={this.props.description}></img>
                        <div className="item-facts">A {this.props.keyword} has {this.props.horns}  
                        {(this.props.horns === 1) ? <span> horn</span> : <span> horns</span>}</div>
                    </div>
                </div>
            </div>
        )
    }
}
